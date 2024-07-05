"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[77735],{24754:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>g,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var n=i(74848),s=i(28453),c=i(58362);const r={},a="Adding entities",o={id:"docs/creating-stories/cinematics/entities",title:"Adding entities",description:"It's best to first read Cinematic before starting this tutorial.",source:"@site/docs/docs/03-creating-stories/02-cinematics/03-entities.mdx",sourceDirName:"docs/03-creating-stories/02-cinematics",slug:"/docs/creating-stories/cinematics/entities",permalink:"/TypeWriter/beta/docs/creating-stories/cinematics/entities",draft:!1,unlisted:!1,editUrl:"https://github.com/gabber235/TypeWriter/tree/develop/documentation/docs/docs/03-creating-stories/02-cinematics/03-entities.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Adding dialogues",permalink:"/TypeWriter/beta/docs/creating-stories/cinematics/dialogue"},next:{title:"Facts",permalink:"/TypeWriter/beta/docs/creating-stories/facts/"}},d={},l=[{value:"Adding an entity",id:"adding-an-entity",level:2},{value:"Selecting the definition",id:"selecting-the-definition",level:3},{value:"Adding segments",id:"adding-segments",level:3},{value:"Configuring the segment",id:"configuring-the-segment",level:3},{value:"Requesting the content mode.",id:"requesting-the-content-mode",level:3},{value:"Recording the NPC",id:"recording-the-npc",level:4},{value:"Using the playback items",id:"using-the-playback-items",level:4},{value:"result",id:"result",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",p:"p",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"adding-entities",children:"Adding entities"}),"\n",(0,n.jsx)(t.admonition,{title:"Before starting",type:"info",children:(0,n.jsxs)(t.p,{children:["It's best to first read ",(0,n.jsx)(t.a,{href:"/TypeWriter/beta/docs/creating-stories/cinematics/",children:"Cinematic"})," before starting this tutorial."]})}),"\n",(0,n.jsx)(t.p,{children:"In this tutorial, you will learn how to add entities to your interactions."}),"\n",(0,n.jsx)(t.h2,{id:"adding-an-entity",children:"Adding an entity"}),"\n",(0,n.jsxs)(t.p,{children:["Firstly click on the + icon in the top right corner of the panel and search for ",(0,n.jsx)(t.code,{children:"Add Entity Cinematic"}),". Add it to your page by clicking on the + icon."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Add-Entity-Cinematic",src:i(61657).A+"",width:"496",height:"208"})}),"\n",(0,n.jsx)(t.h3,{id:"selecting-the-definition",children:"Selecting the definition"}),"\n",(0,n.jsxs)(t.p,{children:["Now in the inspector, click on ",(0,n.jsx)(t.code,{children:"Select a entity_definition"})," and select the type of entity you want to have as an NPC, but for this tutorial, we will use the ",(0,n.jsx)(t.code,{children:"Add Npc Definition"}),". Now you will need to select a manifest page or create one by clicking on ",(0,n.jsx)(t.code,{children:"Add manifest"}),"."]}),"\n",(0,n.jsx)(c.A,{url:i(48306).A}),"\n",(0,n.jsx)(t.p,{children:"Then inside that NPC Definition you can follow the !!PAGES NEED TO BE ADDED!! Tutorial to create a Beautiful NPC."}),"\n",(0,n.jsx)(t.h3,{id:"adding-segments",children:"Adding segments"}),"\n",(0,n.jsxs)(t.p,{children:["Now we need to add a segment to our track. You can do this by clicking in the inspector at Operations on ",(0,n.jsx)(t.code,{children:"Add Segment"}),". This will add a segment to your track."]}),"\n",(0,n.jsx)(t.h3,{id:"configuring-the-segment",children:"Configuring the segment"}),"\n",(0,n.jsxs)(t.p,{children:["In the segment, we now need to add an artifact. You can do this by clicking on ",(0,n.jsx)(t.code,{children:"Select a entity_cinematic_artifact"})," and selecting your artifact, or create one by clicking on ",(0,n.jsx)(t.code,{children:"Add Entity Cinematic Artifact"}),". Then select or create your static page."]}),"\n",(0,n.jsx)(t.h3,{id:"requesting-the-content-mode",children:"Requesting the content mode."}),"\n",(0,n.jsx)(t.p,{children:"Now, back on the cinematic page, click on the camera icon in the inspector just above the artifact. This will open the content mode in Minecraft. If you like, you can read what the items do in your inventory just by hovering over them with your mouse, but we will just use the book for now.\nBy clicking on the book, TypeWriter will start recording your movements and items that you were holding before you requested the content mode."}),"\n",(0,n.jsx)(t.h4,{id:"recording-the-npc",children:"Recording the NPC"}),"\n",(0,n.jsx)(c.A,{url:i(3437).A}),"\n",(0,n.jsx)(t.h4,{id:"using-the-playback-items",children:"Using the playback items"}),"\n",(0,n.jsx)(c.A,{url:i(86205).A}),"\n",(0,n.jsx)(t.h2,{id:"result",children:"result"}),"\n",(0,n.jsx)(t.p,{children:"Now that you have successfully added the entity, you can view it in your cinematic."}),"\n",(0,n.jsx)(c.A,{url:i(83311).A})]})}function g(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},58362:(e,t,i)=>{i.d(t,{A:()=>o});var n=i(96540),s=i(13554),c=i.n(s);const r={player:"player_DXFF",bar:"bar_YnB5",progress:"progress_ekEV"};var a=i(74848);function o(e){let{url:t}=e,[i,s]=(0,n.useState)(0);return(0,a.jsxs)("div",{className:r.player,children:[(0,a.jsx)(d,{progress:i}),(0,a.jsx)(c(),{url:t,playing:!0,loop:!0,muted:!0,width:"100%",height:"100%",progressInterval:100,onProgress:e=>s(100*e.played),className:r.player})]})}function d(e){let{progress:t}=e;return(0,a.jsx)("div",{className:r.bar,children:(0,a.jsx)("div",{className:r.progress,style:{width:`${t}%`}})})}},83311:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/medias/cinematic-npc-result-38cae2ff3438c6225edae5929b952a0e.webm"},86205:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/medias/playback-85fc93884e2b5e1075b6e187276cd42e.webm"},3437:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/medias/recording-267daf8c656bd719cd9567f771af6ca2.webm"},48306:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/medias/select-entity-definition-20910557030e07fab0abcf16555f8199.webm"},61657:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/add-entity-cinematic-43e84b2d1aa2d3841e6621543dc011ab.png"}}]);