import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { ReactFlowProvider } from 'reactflow';
import { PageLayout } from './graph';
import { Page } from './data';
import EntryInspector from './inspector';

interface EntryDisplayProps {
    pages: Page[];
}

export function capitalize(value: string) {
    if (value.length === 0) return value;
    return value.charAt(0).toUpperCase() + value.slice(1);
}

export function format(value: string) {
    return value.split(".").map((e) => capitalize(e)).join(" | ")
        .split("_").map((e) => capitalize(e)).join(" ");
}

export default function EntryDisplay({ pages }: EntryDisplayProps) {
    return (
        <Tabs lazy>
            {pages.map((page) => (
                <TabItem key={page.name} value={page.name} label={format(page.name)}>
                    <ReactFlowProvider>
                        <div className="flex flex-col sm:flex-row">
                            <PageLayout page={page} />
                            <div className="w-full h-1 sm:h-[35em] sm:w-1 bg-[#0000001F] dark:bg-[#FFFFFF1F] rounded-sm" />
                            <EntryInspector pages={pages} />
                        </div>
                    </ReactFlowProvider>
                </TabItem>
            ))}
        </Tabs>
    );
}

