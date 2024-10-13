import { blueprints, CustomField, Entry, FieldInfo, findEntry, getModifier, ListField, MapField, ObjectField, Page, PrimitiveField, } from "@site/src/libs/data";
import { format } from "@site/src/components/EntryDisplay";
import { Icon } from "@iconify/react/dist/iconify.js";
import { createContext, useContext, useState } from "react";

export const InspectorContext = createContext({ defaultExpanded: true });

export default function EntryNodeInspector({
    entryId,
    pages,
}: {
    entryId: string;
    pages: Page[];
}) {
    const entry = findEntry(pages, entryId);
    if (entry == null) return null;
    return (
        <div className="w-full flex flex-col items-center">
            <div className="p-4 border-2 rounded-md border-solid border-gray-300 dark:border-white dark:border-opacity-15 shadow-sm">
                <InspectorContext.Provider value={{ defaultExpanded: false }}>
                    <EntryInspector entry={entry} pages={pages} />
                </InspectorContext.Provider>
            </div>
        </div>
    );
}

export function EntryInspector({
    entry,
    pages,
}: {
    entry: Entry;
    pages: Page[];
}) {
    const blueprint = blueprints.get(entry.type);
    if (blueprint == null) return null;

    return (
        <div className="overflow-x-hidden">
            <div
                className="text-xl font-bold mb-2"
                style={{ color: blueprint.color }}
            >
                {format(entry.name)}
            </div>
            <div
                className="text-sm hover:underline"
                style={{ color: blueprint.color }}
            >
                {format(blueprint.name)}
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-xs">
                {blueprint.description}
            </p>

            <ObjectFieldInspector
                fieldInfo={blueprint.fields}
                path=""
                value={entry}
                pages={pages}
                ignoreFields={["id", "name"]}
            />
        </div>
    );
}

function FieldHeader({ name }: { name: string }) {
    const nameParts = name.split(".");
    const lastNamePart = nameParts[nameParts.length - 1];
    let display = lastNamePart;

    // If the last part is a number, we want to display it as an index
    if (lastNamePart.match(/^\d+$/) && nameParts.length > 1) {
        display = `${nameParts[nameParts.length - 2]} (${lastNamePart})`;
    }

    return (
        <div className="text-gray-700 dark:text-gray-300 text-sm">
            {format(display)}
        </div>
    );
}

function SimpleValueField({
    name,
    value,
    icon,
}: {
    name?: string;
    value: any;
    icon: string;
}) {
    return (
        <div className="flex flex-col space-y-1 w-full">
            {name && <FieldHeader name={name} />}
            <div className="rounded-md bg-[#0000000d] dark:bg-[#00000033] p-2 text-gray-700 dark:text-white text-xs w-full flex items-center">
                <Icon icon={icon} className="w-5 h-5 mr-2" />
                {value}
                {!value && value !== 0 && <span className="text-gray-500 dark:text-gray-400 text-xs">(empty)</span>}
            </div>
        </div>
    );
}

function FieldInspector({
    fieldInfo,
    path,
    value,
    pages,
}: {
    fieldInfo: FieldInfo;
    path: string;
    value: any;
    pages: Page[];
}) {
    const type = fieldInfo.kind;
    if (type === "primitive") {
        return (
            <PrimitiveFieldInspector
                fieldInfo={fieldInfo as PrimitiveField}
                path={path}
                value={value}
            />
        );
    }
    if (type === "enum") {
        return <EnumFieldInspector value={value} path={path} />;
    }
    if (type === "list") {
        return (
            <ListFieldInspector
                fieldInfo={fieldInfo as ListField}
                path={path}
                value={value}
                pages={pages}
            />
        );
    }
    if (type === "map") {
        return (
            <MapFieldInspector
                fieldInfo={fieldInfo as MapField}
                path={path}
                value={value}
                pages={pages}
            />
        );
    }
    if (type === "object") {
        return (
            <div className="flex flex-col space-y-1 w-full">
                <FieldHeader name={path} />
                <ObjectFieldInspector
                    fieldInfo={fieldInfo as ObjectField}
                    path={path}
                    value={value}
                    pages={pages}
                />
            </div>
        );
    }
    if (type === "custom") {
        return (
            <CustomFieldInspector
                fieldInfo={fieldInfo as CustomField}
                path={path}
                value={value}
                pages={pages}
            />
        );
    }
    return (
        <div className="text-red-500 dark:text-red-400 text-xs">
            Unknown field type: {type}
        </div>
    );
}

function PrimitiveFieldInspector({
    fieldInfo,
    value,
    path,
}: {
    fieldInfo: PrimitiveField;
    value: any;
    path: string;
}) {
    if (fieldInfo.type === "boolean") {
        return (
            <div className="text-gray-500 dark:text-gray-400 text-xs w-full flex items-center">
                <FieldHeader name={path} />
                <input
                    type="checkbox"
                    checked={value ? true : false}
                    readOnly
                    className="mr-2 accent-green-500"
                    key={path}
                />
                {value ? (
                    <span className="text-green-500 dark:text-green-400">true</span>
                ) : (
                    <span className="text-red-500 dark:text-red-400">false</span>
                )}
            </div>
        );
    }

    let icon: string;
    if (fieldInfo.type === "string") {
        icon = "mdi:text-box-outline";
    } else if (fieldInfo.type === "integer" || fieldInfo.type === "double") {
        icon = "fa6-solid:hashtag";
    } else if (fieldInfo.type === "boolean") {
        icon = "mdi:checkbox-marked-circle-outline";
    }
    return <SimpleValueField value={value} icon={icon} name={path} />;
}

function EnumFieldInspector({ value, path }: { value: any; path: string }) {
    return <SimpleValueField value={value} icon="fa-solid:list" name={path} />;
}

function ListFieldInspector({
    fieldInfo,
    path,
    value,
    pages,
}: {
    fieldInfo: ListField;
    path: string;
    value: any[];
    pages: Page[];
}) {
    const { defaultExpanded } = useContext(InspectorContext);
    const [isOpen, setIsOpen] = useState(defaultExpanded);
    const pathParts = path.split(".");
    const lastPathPart = pathParts[pathParts.length - 1];
    return (
        <div className="transition-all duration-300 ease-in-out">
            <div
                className="flex space-x-1 items-center p-1 hover:bg-black hover:bg-opacity-10 dark:hover:bg-opacity-40 rounded-md cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <Icon
                    icon={"mdi:chevron-right"}
                    className="w-5 h-5 transition-transform duration-200 ease-in-out transform-gpu"
                    style={{ transform: `rotate(${isOpen ? 90 : 0}deg)` }}
                />
                <FieldHeader name={path} />
                {!isOpen && (
                    <div className="w-full text-gray-500 dark:text-gray-400 text-xs">
                        ({value.length} item{value.length != 1 ? "s" : ""})
                    </div>
                )}
            </div>
            {isOpen && (
                <div className={`overflow-hidden pl-3 space-y-3`}>
                    {value.length === 0 && (
                        <div className="text-gray-500 dark:text-gray-400 text-xs">
                            No {lastPathPart} found
                        </div>
                    )}
                    {value.map((item, index) => (
                        <div key={index} className="flex flex-col space-y-1">
                            <div className="w-full text-sm">
                                <FieldInspector
                                    fieldInfo={fieldInfo.type}
                                    path={`${path}.${index}`}
                                    value={item}
                                    pages={pages}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

function MapFieldInspector({
    fieldInfo,
    path,
    value,
    pages,
}: {
    fieldInfo: MapField;
    path: string;
    value: any;
    pages: Page[];
}) {
    return (
        <div className="flex flex-col space-y-1">
            <FieldHeader name={path} />
            <div className="flex flex-col space-y-1 w-full">
                {Object.entries(value).map(([key, value]) => (
                    <div key={key} className="flex flex-col space-y-1">
                        <div className="w-full text-sm">
                            <FieldInspector
                                fieldInfo={fieldInfo.value}
                                path={`${path}.${key}`}
                                value={value}
                                pages={pages}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function ObjectFieldInspector({
    fieldInfo,
    path,
    value,
    pages,
    ignoreFields = [],
}: {
    fieldInfo: ObjectField;
    path: string;
    value: any;
    pages: Page[];
    ignoreFields?: string[];
}) {
    const fields = Object.entries(fieldInfo.fields).filter(
        ([key]) => !ignoreFields?.includes(key)
    );
    const seperator = path.length > 0 ? `.` : "";
    return (
        <div className={`space-y-3 ${path.length > 0 ? "pl-2" : ""}`}>
            {fields.map(([key, field]) => (
                <div key={key} className="flex flex-col space-y-1">
                    <div className="w-full text-sm">
                        <FieldInspector
                            fieldInfo={field}
                            path={`${path}${seperator}${key}`}
                            value={value[key]}
                            pages={pages}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}

function CustomFieldInspector({
    fieldInfo,
    path,
    value,
    pages,
}: {
    fieldInfo: CustomField;
    path: string;
    value: any;
    pages: Page[];
}) {
    const editor = fieldInfo.editor;
    if (editor === "entryReference") {
        return <EntryReferenceField entryId={value} pages={pages} path={path} />;
    }
    if (editor === "item") {
        return <ItemField {...value} path={path} />;
    }
    if (editor === "location" || editor === "vector") {
        return <LocationField value={{ ...value }} field={fieldInfo} path={path} />;
    }
    if (editor === "duration") {
        return <DurationField duration={value} path={path} />;
    }
    if (editor === "soundId") {
        return <SoundIdField {...value} path={path} />;
    }
    if (editor === "soundSource") {
        return <SoundSourceField {...value} pages={pages} path={path} />;
    }
    if (editor === "optional") {
        return (
            <OptionalField
                value={value}
                field={fieldInfo}
                path={path}
                pages={pages}
            />
        );
    }
    if (editor === "floatRange") {
        return <FloatRangeField value={value} path={path} />;
    }
    if (editor === "skin") {
        return <SkinFieldEditor path={path} value={value} />;
    }
    return (
        <div className="text-red-500 dark:text-red-400 text-xs">
            Unknown custom editor: {editor}
        </div>
    );
}

function EntryReferenceField({
    entryId,
    pages,
    path,
}: {
    entryId: any;
    pages: Page[];
    path: string;
}) {
    if (!entryId) {
        return (
            <div className="flex flex-col space-y-1">
                <FieldHeader name={path} />
                <SimpleValueField
                    value="No Entry Referenced"
                    icon="material-symbols:link-off"
                />
            </div>
        );
    }
    const entry = findEntry(pages, entryId);
    if (entry == null)
        return (
            <div className="text-red-500 dark:text-red-400 text-xs">
                Could not find entry with id {entryId}
            </div>
        );
    const blueprint = blueprints.get(entry.type);
    if (blueprint == null)
        return (
            <div className="text-red-500 dark:text-red-400 text-xs">
                Could not find blueprint for entry with id {entryId}
            </div>
        );

    return (
        <div className="flex flex-col space-y-1">
            <FieldHeader name={path} />
            <div
                className="text-white text-xs rounded-md p-2"
                style={{ backgroundColor: blueprint.color }}
            >
                <div className="flex items-center">
                    <Icon icon={blueprint.icon} className="w-5 h-5 mr-2" />
                    <div className="flex flex-col items-start">
                        <span className="text-sm">{format(entry.name)}</span>
                        <span className="text-[10px] opacity-70 m-0">
                            {format(blueprint.name)}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

interface ItemFieldProps {
    material: ItemProperty<string>;
    amount: ItemProperty<number>;
    name: ItemProperty<string>;
    lore: ItemProperty<string>;
    flags: ItemProperty<string[]>;
    nbt: ItemProperty<string>;
    path: string;
}

interface ItemProperty<T> {
    enabled: boolean;
    value: T;
}

function ItemField(props: ItemFieldProps) {
    const anyEnabled = Object.values(props).some((prop) => prop.enabled);
    return (
        <div className="flex flex-col space-y-1">
            <FieldHeader name={props.path} />
            <div className="pl-2 text-xs">
                {!anyEnabled && (
                    <div className="text-gray-500 dark:text-gray-400 text-xs">
                        No item data found
                    </div>
                )}
                {props.material.enabled && (
                    <div>
                        Material
                        <SimpleValueField
                            value={props.material.value}
                            icon="mdi:cube-outline"
                        />
                    </div>
                )}
                {props.amount.enabled && (
                    <div>
                        Amount
                        <SimpleValueField
                            value={props.amount.value}
                            icon="fa6-solid:hashtag"
                        />
                    </div>
                )}
                {props.name.enabled && (
                    <div>
                        Name
                        <SimpleValueField
                            value={props.name.value}
                            icon="mdi:text-box-outline"
                        />
                    </div>
                )}
                {props.lore.enabled && (
                    <div>
                        Lore
                        <SimpleValueField
                            value={props.lore.value}
                            icon="mdi:text-box-outline"
                        />
                    </div>
                )}
                {props.flags.enabled && (
                    <div>
                        Flags
                        <SimpleValueField
                            value={props.flags.value}
                            icon="mdi:checkbox-marked-circle-outline"
                        />
                    </div>
                )}
                {props.nbt.enabled && (
                    <div>
                        NBT
                        <SimpleValueField
                            value={props.nbt.value}
                            icon="mdi:text-box-outline"
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

interface LocationFieldProps {
    value: LocationField;
    field: FieldInfo | null;
    path: string;
}
interface LocationField {
    x: number;
    y: number;
    z: number;
    yaw: number;
    pitch: number;
}
function LocationField({ value, field, path }: LocationFieldProps) {
    const { x, y, z, yaw, pitch } = value;
    if (isNaN(x) || isNaN(y) || isNaN(z)) return null;
    const hasRotation =
        field != null && getModifier(field, "with_rotation") != null;
    if (hasRotation && (isNaN(yaw) || isNaN(pitch))) return null;
    return (
        <div className="w-full flex flex-col space-y-2">
            <FieldHeader name={path} />
            <div className="flex items-start w-full space-x-2">
                <CordPropertyField value={x} display="X" color="text-red-500" />
                <CordPropertyField value={y} display="Y" color="text-green-500" />
                <CordPropertyField value={z} display="Z" color="text-blue-500" />
            </div>
            {hasRotation && (
                <div className="flex items-start w-full space-x-2">
                    <CordPropertyField
                        value={yaw}
                        display="Yaw"
                        color="text-purple-500"
                    />
                    <CordPropertyField
                        value={pitch}
                        display="Pitch"
                        color="text-yellow-500"
                    />
                </div>
            )}
        </div>
    );
}

interface CordPropertyFieldProps {
    value: number;
    display: string;
    color: string;
}
function CordPropertyField({ value, display, color }: CordPropertyFieldProps) {
    return (
        <div className="rounded-md bg-[#0000000d] dark:bg-[#00000033] p-2 text-gray-700 dark:text-white text-xs inline-flex w-full justify-center">
            <div className={`${color}`}>{display}:&nbsp;</div>
            {value}
        </div>
    );
}

// Converts a duration in milliseconds to a human readable format.
// Only shows the days, hours, minutes, and seconds and milliseconds if they are not 0.
// Example: 1d 2h 3m 4s 5ms
function formatDuration(duration: number): string {
    const days = Math.floor(duration / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((duration % (1000 * 60)) / 1000);
    const milliseconds = Math.floor(duration % 1000);

    let formatted = "";
    if (days > 0) {
        formatted += `${days}d `;
    }
    if (hours > 0) {
        formatted += `${hours}h `;
    }
    if (minutes > 0) {
        formatted += `${minutes}m `;
    }
    if (seconds > 0) {
        formatted += `${seconds}s `;
    }
    if (milliseconds > 0) {
        formatted += `${milliseconds}ms `;
    }

    return formatted.trim();
}

function DurationField({ duration, path }: { duration: number; path: string }) {
    const formatted = formatDuration(duration);
    return <SimpleValueField value={formatted} icon="mdi:clock" name={path} />;
}

function SoundIdField({ value, path }: { value: string; path: string }) {
    return <SimpleValueField value={value} icon="mdi:volume-high" name={path} />;
}

interface SoundSourceFieldProps {
    type: "self" | "emitter" | "location";
    entryId: string;
    location: LocationField;
    pages: Page[];
    path: string;
}

function SoundSourceField({
    type,
    entryId,
    location,
    pages,
    path,
}: SoundSourceFieldProps) {
    if (type === "self") {
        return <SimpleValueField value="Self" icon="mdi:volume-high" name={path} />;
    }
    if (type === "emitter") {
        return <EntryReferenceField entryId={entryId} pages={pages} path={path} />;
    }
    if (type === "location") {
        return <LocationField value={location} field={null} path={path} />;
    }
    return (
        <div className="text-red-500 dark:text-red-400 text-xs">
            Unknown sound source type: {type}
        </div>
    );
}

interface OptionalFieldProps {
    value: { enabled: boolean; value: any };
    field: CustomField;
    path: string;
    pages: Page[];
}

function OptionalField({ value, field, path, pages }: OptionalFieldProps) {
    if (value == null) return null;
    const fieldInfo = field.fieldInfo;
    if (fieldInfo == null) return null;
    const enabled = value.enabled;
    const seperator = path.length > 0 ? "." : "";
    return (
        <div
            className={
                "flex flex-row w-full" +
                (enabled ? "" : " opacity-50 cursor-not-allowed")
            }
        >
            <input
                type="checkbox"
                checked={enabled}
                readOnly
                className="mr-2 accent-green-500"
                key={path}
            />
            <FieldInspector
                fieldInfo={fieldInfo}
                path={`${path}${seperator}value`}
                value={value.value}
                pages={pages}
            />
        </div>
    );
}

type FloatRange = { start: number, end: number };

function FloatRangeField({ value, path }: { value: FloatRange, path: string }) {
    const { start, end } = value;
    return (
        <div className="flex flex-col space-y-1 w-full">
            <FieldHeader name={path} />
            <div className="flex space-x-1 w-full">
                <CordPropertyField
                    value={start}
                    display="Min"
                    color="text-red-500"
                />
                <CordPropertyField
                    value={end}
                    display="Max"
                    color="text-green-500"
                />
            </div>
        </div>
    );
}

function SkinFieldEditor({ path, value, }: { path: string, value: { texture: string, signature: string } }) {
    const getSkinUrl = (textureData: string) => {
        if (!textureData) return null;
        try {
            const bytes = atob(textureData);
            const json = JSON.parse(bytes);
            const url = json.textures.SKIN.url;
            if (typeof url !== 'string') return null;
            const id = url.replace('http://textures.minecraft.net/texture/', '');
            return `https://nmsr.nickac.dev/fullbody/${id}`;
        } catch (e) {
            console.error('Error parsing skin data:', e);
            return null;
        }
    };

    const skinUrl = getSkinUrl(value?.texture);

    return (
        <div className="flex flex-col space-y-1">
            <FieldHeader name={path} />
            <div className="flex space-x-4">
                {skinUrl && (
                    <img
                        src={skinUrl}
                        alt="Skin Preview"
                        className="w-24 h-auto"
                    />
                )}
                <div className="flex-grow space-y-2">
                    <SimpleValueField
                        name={`${path}.texture`}
                        value={value?.texture}
                        icon="icon-park-solid:texture-two"
                    />
                    <SimpleValueField
                        name={`${path}.signature`}
                        value={value?.signature}
                        icon="fa6-solid:signature"
                    />
                </div>
            </div>
        </div>
    );
}
