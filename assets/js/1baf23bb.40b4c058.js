"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2298],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=s(r),p=a,f=m["".concat(i,".").concat(p)]||m[p]||u[p]||l;return r?n.createElement(f,c(c({ref:t},d),{},{components:r})):n.createElement(f,c({ref:t},d))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,c=new Array(l);c[0]=p;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[m]="string"==typeof e?e:a,c[1]=o;for(var s=2;s<l;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},2463:(e,t,r)=>{r.d(t,{Ps:()=>O,nU:()=>g,aD:()=>P,W5:()=>x,p4:()=>_,ej:()=>T});var n=r(7294);const a="entryField_LQuR",l="name_R6gP",c="header_odoB";var o=r(2949);const i={badge:"badge_JMXK"};function s(e){let{name:t,color:r}=e;const a="dark"===(0,o.I)().colorMode,l=a?`${r}CC`:`${r}44`,c=a?"white":r;return n.createElement("span",{style:{backgroundColor:l,color:c},className:i.badge},t)}var d=r(9960);const m=()=>n.createElement(s,{name:"Required",color:"#ff3838"}),u=()=>n.createElement(s,{name:"Inherited",color:"#a83dff"}),p=()=>n.createElement(s,{name:"Optional",color:"#3191f7"}),f=()=>n.createElement(s,{name:"List",color:"#20bf7c"}),h=()=>n.createElement(s,{name:"Deprecated",color:"#fa9d2a"}),E=()=>n.createElement(s,{name:"Colored",color:"#ff8e42"}),y=()=>n.createElement(s,{name:"Regex",color:"#f731d6"}),b=()=>n.createElement(s,{name:"Placeholders",color:"#00b300"}),g=e=>n.createElement("div",{className:a},n.createElement("div",{className:c},n.createElement("h2",{className:l},e.name),e.required&&n.createElement(m,null),e.inherited&&n.createElement(u,null),e.optional&&n.createElement(p,null),e.multiple&&n.createElement(f,null),e.deprecated&&n.createElement(h,null),e.colored&&n.createElement(E,null),e.regex&&n.createElement(y,null),e.placeholders&&n.createElement(b,null)),n.createElement("div",{className:""},e.children,e.colored&&n.createElement(A,null),e.regex&&n.createElement(F,null),e.placeholders&&n.createElement(j,null),e.duration&&n.createElement(C,null))),v=()=>n.createElement(g,{name:"Criteria",inherited:!0,multiple:!0},"A list of facts that must be met by the player before this entry can be triggered."),k=()=>n.createElement(g,{name:"Modifiers",inherited:!0,multiple:!0},"A list of facts that will be modified for the player when this entry is triggered."),w=()=>n.createElement(g,{name:"Triggers",inherited:!0,multiple:!0},"A list of entries that will be triggered after this entry is triggered."),O=()=>n.createElement("div",null,n.createElement(v,null),n.createElement(k,null),n.createElement(w,null)),x=()=>n.createElement("div",null,n.createElement(g,{name:"Comment",optional:!0,inherited:!0},"A comment to keep track of what this fact is used for.")),P=()=>n.createElement("div",null,n.createElement(w,null)),T=()=>n.createElement("div",null,n.createElement(g,{name:"Display Name",required:!0,inherited:!0},"The display name of the speaker."),n.createElement(g,{name:"Sound",required:!0,inherited:!0},"The sound that will be played when the speaker speaks.")),A=()=>n.createElement("div",null,n.createElement("br",null),"Colors and formatting from the"," ",n.createElement(d.Z,{to:"https://docs.advntr.dev/minimessage/format.html"},n.createElement("code",null,"MiniMessage Adventure Api"))," ","can be used. So for example, you can use ",n.createElement("code",null,"<red>Some Text</red>")," for red text."),j=()=>n.createElement("div",null,n.createElement("br",null),"Placeholders from the"," ",n.createElement(d.Z,{to:"https://github.com/PlaceholderAPI/PlaceholderAPI/wiki"},n.createElement("code",null,"PlaceholderApi"))," ","can be used. So for example, you can use ",n.createElement("code",null,"%player_name%")," for the player name."),C=()=>n.createElement("div",null,n.createElement("br",null),"Durations can be specified in the following format: ",n.createElement("code",null,"1d 2h 3m 4s"),". The following units are supported: ",n.createElement("code",null,"d")," for days, ",n.createElement("code",null,"h")," for hours,",n.createElement("code",null,"m")," for minutes and ",n.createElement("code",null,"s")," for seconds."),F=()=>n.createElement("div",null,n.createElement("br",null),n.createElement(d.Z,{to:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions"},n.createElement("code",null,"Regular expressions"))," ","can be used to match a pattern. For example, ",n.createElement("code",null,"^.*$")," will match any string."),_=()=>n.createElement("div",null,n.createElement("br",null),"This fact can only be ",n.createElement("b",null,"read"),", not written to. Hence, it is only suitable for criteria.")},3127:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var n=r(7462),a=(r(7294),r(3905)),l=r(2463);const c={},o="Permission Fact",i={unversionedId:"adapters/VaultAdapter/entries/fact/permission_fact",id:"adapters/VaultAdapter/entries/fact/permission_fact",title:"Permission Fact",description:"A fact that checks if the player has a certain permission.",source:"@site/docs/adapters/VaultAdapter/entries/fact/permission_fact.mdx",sourceDirName:"adapters/VaultAdapter/entries/fact",slug:"/adapters/VaultAdapter/entries/fact/permission_fact",permalink:"/TypeWriter/adapters/VaultAdapter/entries/fact/permission_fact",draft:!1,editUrl:"https://github.com/gabber235/TypeWriter/tree/main/documentation/docs/adapters/VaultAdapter/entries/fact/permission_fact.mdx",tags:[],version:"current",frontMatter:{},sidebar:"adapters",previous:{title:"Balance Fact",permalink:"/TypeWriter/adapters/VaultAdapter/entries/fact/balance_fact"},next:{title:"WorldGuard Adapter",permalink:"/TypeWriter/adapters/WorldGuardAdapter/"}},s={},d=[{value:"How could this be used?",id:"how-could-this-be-used",level:2},{value:"Fields",id:"fields",level:2}],m={toc:d},u="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"permission-fact"},"Permission Fact"),(0,a.kt)("p",null,"A ",(0,a.kt)("a",{parentName:"p",href:"/docs/facts"},"fact")," that checks if the player has a certain permission."),(0,a.kt)(l.p4,{mdxType:"ReadonlyFactInfo"}),(0,a.kt)("h2",{id:"how-could-this-be-used"},"How could this be used?"),(0,a.kt)("p",null,"This fact could be used to check if the player has a certain permission, for example to check if the player is an admin."),(0,a.kt)("h2",{id:"fields"},"Fields"),(0,a.kt)(l.W5,{mdxType:"FactsField"}),(0,a.kt)(l.nU,{name:"Permission",required:!0,mdxType:"EntryField"},"The permission to check for."))}p.isMDXComponent=!0}}]);