"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7124],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=d(n),p=l,f=m["".concat(c,".").concat(p)]||m[p]||u[p]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[m]="string"==typeof e?e:l,i[1]=o;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2463:(e,t,n)=>{n.d(t,{Ps:()=>O,nU:()=>b,aD:()=>T,W5:()=>S,p4:()=>j,ej:()=>x});var r=n(7294);const l="entryField_LQuR",a="name_R6gP",i="header_odoB";var o=n(2949);const c={badge:"badge_JMXK"};function d(e){let{name:t,color:n}=e;const l="dark"===(0,o.I)().colorMode,a=l?`${n}CC`:`${n}44`,i=l?"white":n;return r.createElement("span",{style:{backgroundColor:a,color:i},className:c.badge},t)}var s=n(9960);const m=()=>r.createElement(d,{name:"Required",color:"#ff3838"}),u=()=>r.createElement(d,{name:"Inherited",color:"#a83dff"}),p=()=>r.createElement(d,{name:"Optional",color:"#3191f7"}),f=()=>r.createElement(d,{name:"List",color:"#20bf7c"}),v=()=>r.createElement(d,{name:"Deprecated",color:"#fa9d2a"}),h=()=>r.createElement(d,{name:"Colored",color:"#ff8e42"}),E=()=>r.createElement(d,{name:"Regex",color:"#f731d6"}),y=()=>r.createElement(d,{name:"Placeholders",color:"#00b300"}),b=e=>r.createElement("div",{className:l},r.createElement("div",{className:i},r.createElement("h2",{className:a},e.name),e.required&&r.createElement(m,null),e.inherited&&r.createElement(u,null),e.optional&&r.createElement(p,null),e.multiple&&r.createElement(f,null),e.deprecated&&r.createElement(v,null),e.colored&&r.createElement(h,null),e.regex&&r.createElement(E,null),e.placeholders&&r.createElement(y,null)),r.createElement("div",{className:""},e.children,e.colored&&r.createElement(P,null),e.regex&&r.createElement(I,null),e.placeholders&&r.createElement(_,null),e.duration&&r.createElement(A,null))),g=()=>r.createElement(b,{name:"Criteria",inherited:!0,multiple:!0},"A list of facts that must be met by the player before this entry can be triggered."),k=()=>r.createElement(b,{name:"Modifiers",inherited:!0,multiple:!0},"A list of facts that will be modified for the player when this entry is triggered."),w=()=>r.createElement(b,{name:"Triggers",inherited:!0,multiple:!0},"A list of entries that will be triggered after this entry is triggered."),O=()=>r.createElement("div",null,r.createElement(g,null),r.createElement(k,null),r.createElement(w,null)),S=()=>r.createElement("div",null,r.createElement(b,{name:"Comment",optional:!0,inherited:!0},"A comment to keep track of what this fact is used for.")),T=()=>r.createElement("div",null,r.createElement(w,null)),x=()=>r.createElement("div",null,r.createElement(b,{name:"Display Name",required:!0,inherited:!0},"The display name of the speaker."),r.createElement(b,{name:"Sound",required:!0,inherited:!0},"The sound that will be played when the speaker speaks.")),P=()=>r.createElement("div",null,r.createElement("br",null),"Colors and formatting from the"," ",r.createElement(s.Z,{to:"https://docs.advntr.dev/minimessage/format.html"},r.createElement("code",null,"MiniMessage Adventure Api"))," ","can be used. So for example, you can use ",r.createElement("code",null,"<red>Some Text</red>")," for red text."),_=()=>r.createElement("div",null,r.createElement("br",null),"Placeholders from the"," ",r.createElement(s.Z,{to:"https://github.com/PlaceholderAPI/PlaceholderAPI/wiki"},r.createElement("code",null,"PlaceholderApi"))," ","can be used. So for example, you can use ",r.createElement("code",null,"%player_name%")," for the player name."),A=()=>r.createElement("div",null,r.createElement("br",null),"Durations can be specified in the following format: ",r.createElement("code",null,"1d 2h 3m 4s"),". The following units are supported: ",r.createElement("code",null,"d")," for days, ",r.createElement("code",null,"h")," for hours,",r.createElement("code",null,"m")," for minutes and ",r.createElement("code",null,"s")," for seconds."),I=()=>r.createElement("div",null,r.createElement("br",null),r.createElement(s.Z,{to:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions"},r.createElement("code",null,"Regular expressions"))," ","can be used to match a pattern. For example, ",r.createElement("code",null,"^.*$")," will match any string."),j=()=>r.createElement("div",null,r.createElement("br",null),"This fact can only be ",r.createElement("b",null,"read"),", not written to. Hence, it is only suitable for criteria.")},9579:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=n(7462),l=(n(7294),n(3905)),a=n(2463);const i={},o="Island Invite Event",c={unversionedId:"adapters/SuperiorSkyblockAdapter/entries/event/on_island_invite",id:"adapters/SuperiorSkyblockAdapter/entries/event/on_island_invite",title:"Island Invite Event",description:"The Island Invite Event is an event that is triggered when a player is invited to an island.",source:"@site/docs/adapters/SuperiorSkyblockAdapter/entries/event/on_island_invite.mdx",sourceDirName:"adapters/SuperiorSkyblockAdapter/entries/event",slug:"/adapters/SuperiorSkyblockAdapter/entries/event/on_island_invite",permalink:"/TypeWriter/adapters/SuperiorSkyblockAdapter/entries/event/on_island_invite",draft:!1,editUrl:"https://github.com/gabber235/TypeWriter/tree/main/documentation/docs/adapters/SuperiorSkyblockAdapter/entries/event/on_island_invite.mdx",tags:[],version:"current",frontMatter:{},sidebar:"adapters",previous:{title:"Island Disband Event",permalink:"/TypeWriter/adapters/SuperiorSkyblockAdapter/entries/event/on_island_disband"},next:{title:"Island Join Event",permalink:"/TypeWriter/adapters/SuperiorSkyblockAdapter/entries/event/on_island_join"}},d={},s=[{value:"How could this be used?",id:"how-could-this-be-used",level:2},{value:"Fields",id:"fields",level:2}],m={toc:s},u="wrapper";function p(e){let{components:t,...n}=e;return(0,l.kt)(u,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"island-invite-event"},"Island Invite Event"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"Island Invite Event")," is an event that is triggered when a player is invited to an island."),(0,l.kt)("h2",{id:"how-could-this-be-used"},"How could this be used?"),(0,l.kt)("p",null,"This event could be used to give the player who got invited a reward."),(0,l.kt)("h2",{id:"fields"},"Fields"),(0,l.kt)(a.aD,{mdxType:"EventsField"}),(0,l.kt)(a.nU,{name:"Invitee Triggers",required:!0,mdxType:"EntryField"},"Triggers to fire for the player who got invited."))}p.isMDXComponent=!0}}]);