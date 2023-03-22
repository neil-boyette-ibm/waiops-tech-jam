"use strict";(self.webpackChunkswat_hub=self.webpackChunkswat_hub||[]).push([[625],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>d});var r=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var c=r.createContext({}),s=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=s(t.components);return r.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,c=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),m=s(n),d=o,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,i(i({ref:e},p),{},{components:n})):r.createElement(f,i({ref:e},p))}));function d(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},15782:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={title:"1. Introduction",description:"Introductory material that includes concepts, major features and an introduction to the lab environment and demo app.",sidebar_position:1},i=void 0,l={unversionedId:"watson-aiops/introduction/index",id:"watson-aiops/introduction/index",title:"1. Introduction",description:"Introductory material that includes concepts, major features and an introduction to the lab environment and demo app.",source:"@site/labs/watson-aiops/1-introduction/index.md",sourceDirName:"watson-aiops/1-introduction",slug:"/watson-aiops/introduction/",permalink:"/waiops-tech-jam/labs/watson-aiops/introduction/",draft:!1,editUrl:"https://github.com/IBM/waiops-tech-jam/tree/main/labs/watson-aiops/1-introduction/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"1. Introduction",description:"Introductory material that includes concepts, major features and an introduction to the lab environment and demo app.",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Architecture of the Environment",permalink:"/waiops-tech-jam/labs/general/"},next:{title:"2. Installation",permalink:"/waiops-tech-jam/labs/watson-aiops/installation/"}},c={},s=[],p={toc:s};function u(t){let{components:e,...a}=t;return(0,o.kt)("wrapper",(0,r.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Welcome to the Watson for AIOps Event Manager tutorial series."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(20445).Z,width:"1294",height:"693"})),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"For Watson for AIOps Event Manager modules :"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You can skip section 2.2 if your cluster already exists.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You will have an email with your dedicated cluster information, including your\ncontrol VM.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The AIops OpenShift cluster is the one you will be installing Event Manager\nonto.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'For any instructions that use the "oc" command (interacting with your\ncluster), use your "control" VM:'),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Download the rsa_id and rsa_id.pub files to your laptop"),(0,o.kt)("li",{parentName:"ol"},"chmod 600 rsa_id (otherwise the ssh will fail)"),(0,o.kt)("li",{parentName:"ol"},"Connect with: ssh -i rsa_id jammer@<control-vm-ip",">"),(0,o.kt)("li",{parentName:"ol"},"Log in to your cluster using the Login Command copied from the OpenShift\nUI"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You can obtain a trial license from:\n",(0,o.kt)("a",{parentName:"p",href:"https://www.ibm.com/account/reg/us-en/login?formid=urx-51074"},"https://www.ibm.com/account/reg/us-en/login?formid=urx-51074"))))))}u.isMDXComponent=!0},20445:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/Intro-517c9aacebfaf56d8b4115039a1c80cf.png"}}]);