"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4529],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),d=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),l=d(r),m=a,y=l["".concat(p,".").concat(m)]||l[m]||u[m]||o;return r?n.createElement(y,i(i({ref:t},s),{},{components:r})):n.createElement(y,i({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=l;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var d=2;d<o;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},70814:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var n=r(87462),a=(r(67294),r(3905));const o={},i=void 0,c={unversionedId:"coding/JS/redux",id:"version-0.16.0/coding/JS/redux",title:"redux",description:"react-redux typescript best practice",source:"@site/versioned_docs/version-0.16.0/coding/JS/redux.md",sourceDirName:"coding/JS",slug:"/coding/JS/redux",permalink:"/docusaurus/docs/0.16.0/coding/JS/redux",draft:!1,editUrl:"https://github.com/markshawn2020/docusaurus/edit/master/docs/coding/JS/redux.md",tags:[],version:"0.16.0",lastUpdatedAt:1658816369,formattedLastUpdatedAt:"2022\u5e747\u670826\u65e5",frontMatter:{},sidebar:"docs",previous:{title:"npm/yarn howto",permalink:"/docusaurus/docs/0.16.0/coding/JS/npm_yarn-howto"},next:{title:"java howto",permalink:"/docusaurus/docs/0.16.0/coding/Java/java-howto"}},p={},d=[{value:"react-redux typescript best practice",id:"react-redux-typescript-best-practice",level:2},{value:"react-redux ts doc",id:"react-redux-ts-doc",level:3},{value:"redux toolkit doc",id:"redux-toolkit-doc",level:3},{value:"examples of typing actions and reducers in ts",id:"examples-of-typing-actions-and-reducers-in-ts",level:3},{value:"based on <code>PayloadAction</code>",id:"based-on-payloadaction",level:4}],s={toc:d};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"react-redux-typescript-best-practice"},"react-redux typescript best practice"),(0,a.kt)("h3",{id:"react-redux-ts-doc"},"react-redux ts doc"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://react-redux.js.org/tutorials/typescript-quick-start"},"TypeScript Quick Start | React Redux"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://react-redux.js.org/using-react-redux/usage-with-typescript"},"Usage with TypeScript | React Redux")))),(0,a.kt)("h3",{id:"redux-toolkit-doc"},"redux toolkit doc"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://redux-toolkit.js.org/introduction/getting-started"},"Getting Started | Redux Toolkit"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://redux.js.org/tutorials/typescript-quick-start#define-slice-state-and-action-types"},"TypeScript Quick Start | Redux")))),(0,a.kt)("h3",{id:"examples-of-typing-actions-and-reducers-in-ts"},"examples of typing actions and reducers in ts"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/35482241/how-to-type-redux-actions-and-redux-reducers-in-typescript"},"How to type Redux actions and Redux reducers in TypeScript? - Stack Overflow"))),(0,a.kt)("h4",{id:"based-on-payloadaction"},"based on ",(0,a.kt)("inlineCode",{parentName:"h4"},"PayloadAction")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://pretagteam.com/question/property-payload-is-missing-in-type-action-but-required-in-type-additemaction"},"Property 'payload' is missing in type 'Action' but required in type 'AddItemAction' - Pretag"))))}u.isMDXComponent=!0}}]);