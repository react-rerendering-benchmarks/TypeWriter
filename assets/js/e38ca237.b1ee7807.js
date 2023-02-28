"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6310],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var o=n.createContext({}),s=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,o=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),d=s(r),p=l,f=d["".concat(o,".").concat(p)]||d[p]||u[p]||a;return r?n.createElement(f,i(i({ref:t},m),{},{components:r})):n.createElement(f,i({ref:t},m))}));function f(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,i=new Array(a);i[0]=p;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[d]="string"==typeof e?e:l,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},2463:(e,t,r)=>{r.d(t,{Ps:()=>O,nU:()=>y,aD:()=>T,W5:()=>P,p4:()=>D,ej:()=>x});var n=r(7294);const l="entryField_LQuR",a="name_R6gP",i="header_odoB";var c=r(2949);const o={badge:"badge_JMXK"};function s(e){let{name:t,color:r}=e;const l="dark"===(0,c.I)().colorMode,a=l?`${r}CC`:`${r}44`,i=l?"white":r;return n.createElement("span",{style:{backgroundColor:a,color:i},className:o.badge},t)}var m=r(9960);const d=()=>n.createElement(s,{name:"Required",color:"#ff3838"}),u=()=>n.createElement(s,{name:"Inherited",color:"#a83dff"}),p=()=>n.createElement(s,{name:"Optional",color:"#3191f7"}),f=()=>n.createElement(s,{name:"List",color:"#20bf7c"}),h=()=>n.createElement(s,{name:"Deprecated",color:"#fa9d2a"}),E=()=>n.createElement(s,{name:"Colored",color:"#ff8e42"}),v=()=>n.createElement(s,{name:"Regex",color:"#f731d6"}),b=()=>n.createElement(s,{name:"Placeholders",color:"#00b300"}),y=e=>n.createElement("div",{className:l},n.createElement("div",{className:i},n.createElement("h2",{className:a},e.name),e.required&&n.createElement(d,null),e.inherited&&n.createElement(u,null),e.optional&&n.createElement(p,null),e.multiple&&n.createElement(f,null),e.deprecated&&n.createElement(h,null),e.colored&&n.createElement(E,null),e.regex&&n.createElement(v,null),e.placeholders&&n.createElement(b,null)),n.createElement("div",{className:""},e.children,e.colored&&n.createElement(_,null),e.regex&&n.createElement(C,null),e.placeholders&&n.createElement(A,null),e.duration&&n.createElement(j,null))),g=()=>n.createElement(y,{name:"Criteria",inherited:!0,multiple:!0},"A list of facts that must be met by the player before this entry can be triggered."),k=()=>n.createElement(y,{name:"Modifiers",inherited:!0,multiple:!0},"A list of facts that will be modified for the player when this entry is triggered."),w=()=>n.createElement(y,{name:"Triggers",inherited:!0,multiple:!0},"A list of entries that will be triggered after this entry is triggered."),O=()=>n.createElement("div",null,n.createElement(g,null),n.createElement(k,null),n.createElement(w,null)),P=()=>n.createElement("div",null,n.createElement(y,{name:"Comment",optional:!0,inherited:!0},"A comment to keep track of what this fact is used for.")),T=()=>n.createElement("div",null,n.createElement(w,null)),x=()=>n.createElement("div",null,n.createElement(y,{name:"Display Name",required:!0,inherited:!0},"The display name of the speaker."),n.createElement(y,{name:"Sound",required:!0,inherited:!0},"The sound that will be played when the speaker speaks.")),_=()=>n.createElement("div",null,n.createElement("br",null),"Colors and formatting from the"," ",n.createElement(m.Z,{to:"https://docs.advntr.dev/minimessage/format.html"},n.createElement("code",null,"MiniMessage Adventure Api"))," ","can be used. So for example, you can use ",n.createElement("code",null,"<red>Some Text</red>")," for red text."),A=()=>n.createElement("div",null,n.createElement("br",null),"Placeholders from the"," ",n.createElement(m.Z,{to:"https://github.com/PlaceholderAPI/PlaceholderAPI/wiki"},n.createElement("code",null,"PlaceholderApi"))," ","can be used. So for example, you can use ",n.createElement("code",null,"%player_name%")," for the player name."),j=()=>n.createElement("div",null,n.createElement("br",null),"Durations can be specified in the following format: ",n.createElement("code",null,"1d 2h 3m 4s"),". The following units are supported: ",n.createElement("code",null,"d")," for days, ",n.createElement("code",null,"h")," for hours,",n.createElement("code",null,"m")," for minutes and ",n.createElement("code",null,"s")," for seconds."),C=()=>n.createElement("div",null,n.createElement("br",null),n.createElement(m.Z,{to:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions"},n.createElement("code",null,"Regular expressions"))," ","can be used to match a pattern. For example, ",n.createElement("code",null,"^.*$")," will match any string."),D=()=>n.createElement("div",null,n.createElement("br",null),"This fact can only be ",n.createElement("b",null,"read"),", not written to. Hence, it is only suitable for criteria.")},8988:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var n=r(7462),l=(r(7294),r(3905)),a=r(2463);const i={},c="Pickup Item Event",o={unversionedId:"adapters/BasicAdapter/entries/event/on_item_pickup",id:"adapters/BasicAdapter/entries/event/on_item_pickup",title:"Pickup Item Event",description:"The Pickup Item Event is triggered when the player picks up an item.",source:"@site/docs/adapters/BasicAdapter/entries/event/on_item_pickup.mdx",sourceDirName:"adapters/BasicAdapter/entries/event",slug:"/adapters/BasicAdapter/entries/event/on_item_pickup",permalink:"/TypeWriter/adapters/BasicAdapter/entries/event/on_item_pickup",draft:!1,editUrl:"https://github.com/gabber235/TypeWriter/tree/main/documentation/docs/adapters/BasicAdapter/entries/event/on_item_pickup.mdx",tags:[],version:"current",frontMatter:{},sidebar:"adapters",previous:{title:"Interact Block Event",permalink:"/TypeWriter/adapters/BasicAdapter/entries/event/on_interact_with_block"},next:{title:"Block Place Event",permalink:"/TypeWriter/adapters/BasicAdapter/entries/event/on_place_block"}},s={},m=[{value:"How could this be used?",id:"how-could-this-be-used",level:2},{value:"Fields",id:"fields",level:2}],d={toc:m},u="wrapper";function p(e){let{components:t,...r}=e;return(0,l.kt)(u,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"pickup-item-event"},"Pickup Item Event"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"Pickup Item Event")," is triggered when the player picks up an item."),(0,l.kt)("h2",{id:"how-could-this-be-used"},"How could this be used?"),(0,l.kt)("p",null,"This event could be used to trigger a quest or to trigger a cutscene, when the player picks up a specific item."),(0,l.kt)("h2",{id:"fields"},"Fields"),(0,l.kt)(a.aD,{mdxType:"EventsField"}),(0,l.kt)(a.nU,{name:"Material",required:!0,mdxType:"EntryField"},"The item that was picked up."))}p.isMDXComponent=!0}}]);