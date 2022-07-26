"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4270],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>s});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),k=c(n),s=r,u=k["".concat(p,".").concat(s)]||k[s]||m[s]||o;return n?a.createElement(u,i(i({ref:t},d),{},{components:n})):a.createElement(u,i({ref:t},d))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=k;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},64833:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={},i="Rockchip-4B Android \u5237\u673a\u5929\u5751\u6307\u5357",l={unversionedId:"AndroidFramework/TaskE1-rockchip4/rockchip4-flash-manual",id:"AndroidFramework/TaskE1-rockchip4/rockchip4-flash-manual",title:"Rockchip-4B Android \u5237\u673a\u5929\u5751\u6307\u5357",description:"1. documentation",source:"@site/docs/AndroidFramework/TaskE1-rockchip4/rockchip4-flash-manual.md",sourceDirName:"AndroidFramework/TaskE1-rockchip4",slug:"/AndroidFramework/TaskE1-rockchip4/rockchip4-flash-manual",permalink:"/docusaurus/docs/AndroidFramework/TaskE1-rockchip4/rockchip4-flash-manual",draft:!1,editUrl:"https://github.com/markshawn2020/docusaurus/edit/master/docs/AndroidFramework/TaskE1-rockchip4/rockchip4-flash-manual.md",tags:[],version:"current",lastUpdatedAt:1658770976,formattedLastUpdatedAt:"2022\u5e747\u670825\u65e5",frontMatter:{},sidebar:"docs",previous:{title:"depreciated rockchip4 howto",permalink:"/docusaurus/docs/AndroidFramework/TaskE1-rockchip4/depreciated/depreciated-rockchip4-howto"},next:{title:"rockchip howto",permalink:"/docusaurus/docs/AndroidFramework/TaskE1-rockchip4/rockchip4-howto"}},p={},c=[{value:"documentation",id:"documentation",level:2},{value:"\u8bb0\u4e00\u6b21\u7cdf\u7cd5\u7684\u5237\u673a\u7ecf\u5386",id:"\u8bb0\u4e00\u6b21\u7cdf\u7cd5\u7684\u5237\u673a\u7ecf\u5386",level:2},{value:"intro",id:"intro",level:3},{value:"step 1. \u751f\u6210 <code>gpt.img</code>",id:"step-1-\u751f\u6210-gptimg",level:3},{value:"step 2. install <code>rkdeveloptool</code>",id:"step-2-install-rkdeveloptool",level:3},{value:"step 3. \u57fa\u4e8e<code>rkdeveloptool</code>\u7684<code>emmc</code>\u5237\u673a\u8981\u70b9",id:"step-3-\u57fa\u4e8erkdeveloptool\u7684emmc\u5237\u673a\u8981\u70b9",level:3},{value:"\u57fa\u4e8e<code>adb</code>\u7684<code>scrcpy</code>\u6295\u5c4f",id:"\u57fa\u4e8eadb\u7684scrcpy\u6295\u5c4f",level:3},{value:"\u5173\u4e8esd\u5361\u5237",id:"\u5173\u4e8esd\u5361\u5237",level:3},{value:"\u5176\u4ed6\u5173\u4e8erc\u7684\u5410\u69fd",id:"\u5176\u4ed6\u5173\u4e8erc\u7684\u5410\u69fd",level:3},{value:"FIXED: <code>No configuration exists for this target on this architecture. Stop.</code>",id:"fixed-no-configuration-exists-for-this-target-on-this-architecture-stop",level:2},{value:"FIXED:  <code>error: &#39;commit_id.xml&#39;, needed by &#39;out/target/product/rk3399/vendor/commit_id.xml&#39;, missing and no known rule to make it</code>",id:"fixed--error-commit_idxml-needed-by-outtargetproductrk3399vendorcommit_idxml-missing-and-no-known-rule-to-make-it",level:2},{value:"FIXED: <code>error: prebuilts/clang/host/linux-x86/: platform/prebuilts/clang/host/linux-x86 checkout</code>",id:"fixed-error-prebuiltsclanghostlinux-x86-platformprebuiltsclanghostlinux-x86-checkout",level:2},{value:"FIXED: <code>awk: line 2: function strtonum never defined</code>",id:"fixed-awk-line-2-function-strtonum-never-defined",level:2},{value:"FIXED: <code>fatal error: openssl/bio.h: No such file or directory</code>",id:"fixed-fatal-error-opensslbioh-no-such-file-or-directory",level:2},{value:"FIXED: <code>&quot;Creating Comm Object failed!&quot;</code>",id:"fixed-creating-comm-object-failed",level:2}],d={toc:c};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"rockchip-4b-android-\u5237\u673a\u5929\u5751\u6307\u5357"},"Rockchip-4B Android \u5237\u673a\u5929\u5751\u6307\u5357"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#documentation"},"documentation")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#%E8%AE%B0%E4%B8%80%E6%AC%A1%E7%B3%9F%E7%B3%95%E7%9A%84%E5%88%B7%E6%9C%BA%E7%BB%8F%E5%8E%86"},"\u8bb0\u4e00\u6b21\u7cdf\u7cd5\u7684\u5237\u673a\u7ecf\u5386"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#intro"},"intro")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#step-1-%E7%94%9F%E6%88%90-gptimg"},"step 1. \u751f\u6210 ",(0,r.kt)("inlineCode",{parentName:"a"},"gpt.img"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#step-2-install-rkdeveloptool"},"step 2. install ",(0,r.kt)("inlineCode",{parentName:"a"},"rkdeveloptool"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#step-3-%E5%9F%BA%E4%BA%8Erkdeveloptool%E7%9A%84emmc%E5%88%B7%E6%9C%BA%E8%A6%81%E7%82%B9"},"step 3. \u57fa\u4e8e",(0,r.kt)("inlineCode",{parentName:"a"},"rkdeveloptool"),"\u7684",(0,r.kt)("inlineCode",{parentName:"a"},"emmc"),"\u5237\u673a\u8981\u70b9")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#%E5%9F%BA%E4%BA%8Eadb%E7%9A%84scrcpy%E6%8A%95%E5%B1%8F"},"\u57fa\u4e8e",(0,r.kt)("inlineCode",{parentName:"a"},"adb"),"\u7684",(0,r.kt)("inlineCode",{parentName:"a"},"scrcpy"),"\u6295\u5c4f")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#%E5%85%B3%E4%BA%8Esd%E5%8D%A1%E5%88%B7"},"\u5173\u4e8esd\u5361\u5237")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#%E5%85%B6%E4%BB%96%E5%85%B3%E4%BA%8Erc%E7%9A%84%E5%90%90%E6%A7%BD"},"\u5176\u4ed6\u5173\u4e8erc\u7684\u5410\u69fd")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#fixed-no-configuration-exists-for-this-target-on-this-architecture-stop"},"FIXED: ",(0,r.kt)("inlineCode",{parentName:"a"},"No configuration exists for this target on this architecture. Stop."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#fixed--error-commit_idxml-needed-by-outtargetproductrk3399vendorcommit_idxml-missing-and-no-known-rule-to-make-it"},"FIXED:  ",(0,r.kt)("inlineCode",{parentName:"a"},"error: 'commit_id.xml', needed by 'out/target/product/rk3399/vendor/commit_id.xml', missing and no known rule to make it"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#fixed-error-prebuiltsclanghostlinux-x86-platformprebuiltsclanghostlinux-x86-checkout"},"FIXED: ",(0,r.kt)("inlineCode",{parentName:"a"},"error: prebuilts/clang/host/linux-x86/: platform/prebuilts/clang/host/linux-x86 checkout"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#fixed-awk-line-2-function-strtonum-never-defined"},"FIXED: ",(0,r.kt)("inlineCode",{parentName:"a"},"awk: line 2: function strtonum never defined"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#fixed-fatal-error-opensslbioh-no-such-file-or-directory"},"FIXED: ",(0,r.kt)("inlineCode",{parentName:"a"},"fatal error: openssl/bio.h: No such file or directory"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#fixed-creating-comm-object-failed"},"FIXED: ",(0,r.kt)("inlineCode",{parentName:"a"},'"Creating Comm Object failed!"')))),(0,r.kt)("h2",{id:"documentation"},"documentation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u2728\u2728\u2728 \u6838\u5fc3\u5237\u673a\u8d44\u6599\uff0c\u5305\u542b\u5404\u79cd\u5de5\u5177 ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.radxa.com/Rock/flash_the_image#Upgrade_tool_from_Rockchip"},"Rock/flash the image - Radxa Wiki"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5347\u7ea7XX\uff1f\uff1a ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.t-firefly.com/en/Core-3308Y/burning_firmware.html"},"Burning Firmware \u2014 Firefly Wiki")))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://mega.nz/folder/gxVRiara#_ExDV9pfNpqabzDTtpN-UA"},"https://mega.nz/folder/gxVRiara#_ExDV9pfNpqabzDTtpN-UA")),(0,r.kt)("h2",{id:"\u8bb0\u4e00\u6b21\u7cdf\u7cd5\u7684\u5237\u673a\u7ecf\u5386"},"\u8bb0\u4e00\u6b21\u7cdf\u7cd5\u7684\u5237\u673a\u7ecf\u5386"),(0,r.kt)("h3",{id:"intro"},"intro"),(0,r.kt)("p",null,"\u9996\u5148\u5173\u4e8erc\u7684\u5237\u673a\u90e8\u5206\uff0c\u5b98\u65b9\u53c2\u8003\u6587\u7ae0\u4e3b\u8981\u6709\u4ee5\u4e0b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://wiki.radxa.com/Rockpi4/rockpi-android11"},"Rockpi4/rockpi-android11 - Radxa Wiki"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://wiki.radxa.com/Rockpi4/rockpi-android10"},"Rockpi4/rockpi-android10 - Radxa Wiki"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://wiki.radxa.com/Rockpi4/rockpi-android7"},"Rockpi4/rockpi-android7 - Radxa Wiki")))),(0,r.kt)("p",null,"\u7406\u8bba\u4e0a\uff0c\u5237\u5bf9\u5e94\u7248\u672c\u5c31\u53bb\u7ffb\u5bf9\u5e94\u7684\u7f51\u9875\uff0c\u4f46\u5728rc\u8fd9\u91cc\u4e0d\u662f\u8fd9\u6837\u7684\uff0crc\u7684\u6587\u6863\u5199\u7684\uff0c\u5e94\u8be5\u8bf4\u76f8\u5f53\u968f\u610f\uff0c\u7136\u540e\u5386\u53f2\u9057\u7559\u75d5\u8ff9\u592a\u5927\uff0c \u4e0d\u61c2\u5f97\u7ef4\u62a4\u3002"),(0,r.kt)("p",null,"\u4ece\u7ecf\u9a8c\u4e0a\u770b\uff0crc\u53ef\u80fd\u5728\u6301\u7eed\u66f4\u65b0\uff0c\u6bd4\u5982\u5728android 7\u7684\u65f6\u4ee3\u5199\u4e00\u7bc77\u7684\u5237\u673a\u6587\u6863\uff0c10\u7684\u65f6\u4ee3\u5199\u4e86\u4e00\u7bc710\u7684\u5237\u673a\u6587\u6863\uff0c\u91cc\u9762\u603b\u4f53\u6765\u8bf4\uff0c\u53ef\u80fd\u6ca1\u6709\u4ec0\u4e48\u5927\u9519\u8bef\uff0c\u4f46\u662f\u5751\u4e0d\u5c11\u3002"),(0,r.kt)("p",null,"\u6211\u6070\u5de7\u76ee\u6807\u5e73\u53f0\u662f10,10\u7684\u5237\u673a\u6587\u6863\u7adf\u7136\u51fa\u4e4e\u610f\u6599\u5730\u662f\u6700\u5751\u7684\u3002"),(0,r.kt)("p",null,"\u6bd4\u8d7711\u5b83\u6ca1\u6709\u7ed9\u51fa\u4e00\u952e\u5237\u673a\u7684\u6307\u4ee4\uff0c\u8fd9\u4e5f\u8bb8\u53ef\u4ee5\u63a5\u53d7\uff0c\uff08\u5176\u5b9e\u65e0\u975e\u5c31\u662f\u628a\u51e0\u4e2a\u811a\u672c\u5408\u8d77\u6765\u4e86\u800c\u5df2\uff09\uff1b\u4f46\u6bd4\u8d777\u5b83\u7adf\u7136\u5c11\u4e86\u6700\u540e\u4e00\u6b65\u751f\u6210",(0,r.kt)("inlineCode",{parentName:"p"},"gpt.img"),"\u7684\u6b65\u9aa4\uff0c\u800c\u57287\u300111\u91cc\u90fd\u662f\u6709\u7684\u2026\u2026\u6211\u8fd8\u662f\u5728\u82b1\u4e86\u5f88\u957f\u65f6\u95f4\u7684\u641c\u7d22\u540e\u624d\u57287\u7684\u6587\u6863\u91cc\u627e\u5230\u8fd9\u4e00\u6b65\u7684\u7b54\u6848\u3002"),(0,r.kt)("p",null,"\u548b\u8fd8\u80fd\u5347\u7ea7\u5347\u57ae\u4e86\u5462\uff1f\u8fd9\u662f\u8ba9\u6211\u89c9\u5f97rc\u6700\u4e0d\u4e13\u4e1a\u7684\u4e00\u70b9\u3002"),(0,r.kt)("p",null,"!!!warning\n\u5c3d\u7ba1rc\u6bcf\u4e2a\u7248\u672c\u90fd\u7ed9\u51fa\u4e86\u5206\u6b65\u7f16\u8bd1\u7684\u8bf4\u660e\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"u-boot -> kernel -> aosp -> img"),"\u7b49\uff0c\u4f46\u662f\u8003\u8651\u5230\u4e2d\u9014\u5b9e\u5728\u6709\u592a\u591a\u6b65\uff0c\u5e76\u4e14\u4ed6\u4eec\u57fa\u4e8e\uff08\u63d0\u524d\u4f7f\u7528\uff09\u8f6f\u94fe\u63a5\u7684\u4e00\u4e9b\u8bbe\u7f6e\u5f88\u5bb9\u6613\u9020\u6210\u9879\u76ee\u7d0a\u4e71\uff0c\u4e3a\u6b64\u6211\u53c8\u591a\u82b1\u4e86\u4e00\u5929\u65f6\u95f4\uff0c\u600e\u4e48\u5237\u673a\u90fd\u5237\u4e0d\u8fc7\u3002\u6700\u540e\u8fd8\u662f\u4f7f\u7528\u4e00\u952e\u811a\u672c\u7f16\u8bd1\uff0c\u7136\u540e\u5237\u673a\u4e00\u6b21\u6027\u901a\u8fc7\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u6240\u4ee5\u5c3d\u7ba110\u7684\u6587\u6863\u91cc\u6ca1\u6709\u7ed9\u51fa\u4e00\u952e\u5237\u673a\u7684\u8bf4\u660e\uff0c\u4f46\u662f\u4ed3\u5e93\u91cc\u5176\u5b9e\u6709\u7684\uff0c\u6ce8\u610f\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u7684`build-rockpi-4b.sh`\uff0c\u8fd0\u884c\u4eff\u902011\u7684\u547d\u4ee4\uff1a`./build-rockpi-4b.sh -UACKup` \u5373\u53ef\uff08\u4e0d\u7528\u7ba1\u610f\u601d\uff0c\u4e00\u628a\u68ad\u5c31\u53ef\u4ee5\uff09\u3002\n")),(0,r.kt)("h3",{id:"step-1-\u751f\u6210-gptimg"},"step 1. \u751f\u6210 ",(0,r.kt)("inlineCode",{parentName:"h3"},"gpt.img")),(0,r.kt)("p",null,"\u63a5\u4e0b\u6765\u662f\u5237\u673a\u7b2c\u4e00\u6b65\uff08\u62c9\u53d6\u4ee3\u7801\uff0c\u76f4\u5230\u751f\u6210",(0,r.kt)("inlineCode",{parentName:"p"},"gpt.img"),"\uff09"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"VERSION=10\nTAG=q           # 10 -> q, 11 -> r\n\nDIR=rockpi4-android-$VERSION\nBRANCH=rockchip-android-$VERSION                \n\nmkdir $DIR && cd $DIR\n\nrepo init -u https://github.com/radxa/manifests.git -b $BRANCH \\\n    -m rockchip-$TAG-release.xml \nrepo sync -d --no-tags -j4\n\n./build-rockpi-4b.sh -UACKup\n")),(0,r.kt)("p",null,"\u5982\u679c\u4e4b\u524d\u5df2\u7ecf\u6574\u7f16\u8fc7\uff0c\u90a3\u4e48\u8fd0\u884c",(0,r.kt)("inlineCode",{parentName:"p"},"./build-xx.sh")," \u4e00\u952e\u7f16\u8bd1\u5e94\u8be5\u53ea\u9700\u8981\u534a\u4e2a\u5c0f\u65f6\u5de6\u53f3\uff0c\u5426\u5219\u5c31\u662f\u6b63\u5e38\u5b89\u5353\u7f16\u8bd1+kernel\u7f16\u8bd1\u65f6\u95f4\uff0c\u9884\u7559\u56db\u5c0f\u65f6\u5427\u3002"),(0,r.kt)("p",null,"\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"./build-xx.sh"),"\u4e4b\u540e\uff0c\u671f\u95f4\u751f\u6210image\u7684\u8fc7\u7a0b\u91cc\u4f1a\u628a",(0,r.kt)("inlineCode",{parentName:"p"},"rockdev"),"\u6587\u4ef6\u5939\u94fe\u63a5\u5230\u6839\u76ee\u5f55\uff0c\u4e5f\u5c31\u662f\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"rockdev -> ./RKTools/linux/Linux_Pack_Firmware/rockdev/\n")),(0,r.kt)("p",null,"\u800c\u5728\u8fd9\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"rockdev"),"\u76ee\u5f55\u4e0b\uff0c\u53c8\u6709\u4e00\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"Image"),"\u6587\u4ef6\u5939\u8f6f\u94fe\u63a5\uff0c\u5b83\u6307\u5411\u5f53\u524d\u6587\u4ef6\u5939\u4e0b\u6b63\u5728\u7f16\u8bd1\u7684\u90a3\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"Image"),"\uff08\u9ed8\u8ba4\u6709\u591a\u4e2a\uff0c\u6bd4\u5982\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"Image-aosp_arm"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"Image-RockPi4B"),"\u7b49\uff09\uff0c\u6211\u4eec\u76ee\u524d\u7684\u4e00\u952e\u7f16\u8bd1\u4f1a\u5c06",(0,r.kt)("inlineCode",{parentName:"p"},"Image"),"\u6307\u5411",(0,r.kt)("inlineCode",{parentName:"p"},"Image-RockPi4B"),"\u3002"),(0,r.kt)("p",null,"\u800c\u5728\u8be5",(0,r.kt)("inlineCode",{parentName:"p"},"Image"),"\u76ee\u5f55\u4e0b\uff0c\u6709\u4e00\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"gpt.img"),"\u6587\u4ef6\uff0c\u8fd9\u4e2a\u5c31\u662f\u5b8c\u6574\u7684\u5237\u673a\u5305\u3002"),(0,r.kt)("h3",{id:"step-2-install-rkdeveloptool"},"step 2. install ",(0,r.kt)("inlineCode",{parentName:"h3"},"rkdeveloptool")),(0,r.kt)("p",null,"\u7531\u4e8e\u6211\u4eec\u8d2d\u4e70\u7684rc4b\u5df2\u7ecf\u710a\u6b7b\u4e86\u4e00\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"emmc"),"\uff0c\u6240\u4ee5\u6211\u4eec\u65e0\u9700\u989d\u5916\u7684sd\u5361\uff0c\u76f4\u63a5\u57fa\u4e8eemmc\u5c31\u53ef\u4ee5\uff08\u6839\u636e\u6d4b\u8bd5\uff0c\u5b98\u7f51\u4e2d\u8bf4\u7684\u77ed\u8def\u4e5f\u662f\u4e0d\u7528\u7684\uff09"),(0,r.kt)("p",null,"\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"emmc"),"\u9996\u5148\u9700\u8981\u4e0b\u8f7d",(0,r.kt)("inlineCode",{parentName:"p"},"rkdevleloptool"),"\uff08linux\u6216mac\uff1a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rockchip-linux/rkdeveloptool"},"rockchip-linux/rkdeveloptool"),"\uff09\u6216\u8005",(0,r.kt)("inlineCode",{parentName:"p"},"RkDevTool"),"\uff08windows\uff09\u3002"),(0,r.kt)("p",null,"\u5177\u4f53\u4e0b\u8f7d\u4e0e\u5b89\u88c5\u4e5f\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u4ee5\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"# mac\nbrew install automake autoconf libusb lsusb\n\n# linux\nsudo apt-get install -y libudev-dev libusb-1.0-0-dev dh-autoreconf\n\n# both\ngit clone https://github.com/rockchip-linux/rkdeve loptool\ncd rkdeveloptool\nautoreconf -i\n./configure\nmake\n\n# global\nsudo cp rkdeveloptool /usr/bin/\n")),(0,r.kt)("p",null,"\u53c2\u8003\uff1a- ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.radxa.com/Rockpi4/dev/usb-install/zh_cn"},"Rockpi4/dev/usb-install/zh cn - Radxa Wiki")),(0,r.kt)("h3",{id:"step-3-\u57fa\u4e8erkdeveloptool\u7684emmc\u5237\u673a\u8981\u70b9"},"step 3. \u57fa\u4e8e",(0,r.kt)("inlineCode",{parentName:"h3"},"rkdeveloptool"),"\u7684",(0,r.kt)("inlineCode",{parentName:"h3"},"emmc"),"\u5237\u673a\u8981\u70b9"),(0,r.kt)("p",null,"\u9996\u5148\u662f\u8ba4\u8bc6\u63a5\u53e3\u4e0e\u63a5\u7ebf\u987a\u5e8f\u3002"),(0,r.kt)("p",null,"rc4b\u53ea\u6709\u4e00\u4e2atypeC\u53e3\u662f\u7528\u4e8e\u4f9b\u7535\u7684\uff0c\u5176\u5b83\u56db\u4e2ausb\u53e3\u5176\u4e2d\u4e24\u4e2a\u662fusb2.0\uff0c\u4e24\u4e2a\u662fusb3.0\uff08\u84dd\u8272\uff09\u3002"),(0,r.kt)("p",null,"\u4e24\u4e2a\u84dd\u8272usb3.0\u4e2d\uff0c\u4e0a\u9762\uff08\u79bb\u4e3b\u677f\u8ddd\u79bb\u66f4\u9ad8\uff09\u90a3\u4e2a\u662fotg\u53e3\uff0c\u53e3\u540e\u9762\u6709\u4e2a\u5f00\u5173\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u5f80\u677f\u89d2\u65b9\u5411\u63b0\u662f",(0,r.kt)("inlineCode",{parentName:"strong"},"usb device"),"\u6a21\u5f0f"),"\uff0c\u8fd9\u6837\u8fde\u63a5\u7535\u8111\u540e\u7535\u8111\u53ef\u4ee5\u68c0\u6d4b\u5230rc4b\u91cc\u9762\u7684\u7cfb\u7edf\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"adb"),"\u624d\u6709\u7528\uff09\uff1b\u5426\u5219\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"udb host"),"\u6a21\u5f0f\uff0c\u7528\u4e8e\u5176\u4ed6\u7528\u9014\u3002"),(0,r.kt)("p",null,"rc4b\u8fd8\u6709\u4e09\u4e2a\u6309\u952e\uff0c\u6309\u5b98\u65b9\u6587\u6863\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://wiki.radxa.com/Rockpi4/dev/usb-install/zh_cn#.E5.BC.95.E5.AF.BCRock_PI_.E8.BF.9B.E5.85.A5Maskrom.E6.A8.A1.E5.BC.8F"},"\u5f15\u5bfcRock PI \u8fdb\u5165Maskrom\u6a21\u5f0f")," \u63cf\u8ff0",(0,r.kt)("strong",{parentName:"p"},"\u4ecetypeC\u53e3\u4e0a\u7684\u90a3\u4e2a\u6309\u952e\u5f80\u4e0b\u7684\u4e09\u4e2a\u952e"),"\u5206\u522b\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"maskrom | recovery | reset"),"\u952e\uff0c\u4f46\u6211\u76ee\u524d\u6d4b\u8bd5\u4e0b\u6765",(0,r.kt)("strong",{parentName:"p"},"\u7b2c\u4e8c\u4e2a\u952e\u624d\u662f",(0,r.kt)("inlineCode",{parentName:"strong"},"maskrom")),"\uff0c\u8fd9\u4e2a\u5177\u4f53\u54ea\u4e2a\u5bf9\u54ea\u4e2a\uff0c\u53ef\u80fd\u8fd8\u662f\u8981\u7ed3\u5408\u5b9e\u9645\u6d4b\u8bd5\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/rockchip4-flash-manual-1644255141135-1364f8369dd569aa2f158b065f7b136564f59a2862be1a7b718318828dd036a9.png",alt:"picture 3"}),"  "),(0,r.kt)("p",null,"\u800c\u57fa\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"rkdeveloptool")," \u662f\u57fa\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"maskrom"),"\u5de5\u4f5c\u7684\uff0c\u5982\u679c\u8bbe\u5907\u4e0d\u662f\u5904\u4e8e\u8be5\u6a21\u5f0f\uff0c\u5219\u65e0\u6cd5\u57fa\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"rkdeveloptool")," \u5bf9\u8bbe\u5907\u8fdb\u884c\u64cd\u4f5c\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5148\u5c06",(0,r.kt)("strong",{parentName:"li"},"\u516c\u5bf9\u516c\u7ebf"),"\u8fde\u4e0aotg\u5230\u7535\u8111\uff08\u7535\u8111\u5982\u679c\u662fc\u53e3\uff0c\u8981\u7528usb\u8f6cc\u8f6c\u63a5\u5668\uff0c\u76f4\u63a5\u7528\u516c\u63a5c\u7ebf\u5230\u6211\u7684mac\u6ca1\u53cd\u5e94\uff09"),(0,r.kt)("li",{parentName:"ol"},"\u6309\u4f4frc4b\u7684",(0,r.kt)("inlineCode",{parentName:"li"},"maskrom"),"\u952e"),(0,r.kt)("li",{parentName:"ol"},"\u5c06rc4b\u63a5\u7535\uff08\u8fd9\u4e2a\u7535\u53e3\u65e2\u53ef\u4ee5\u63d2\u63d2\u5ea7\uff0c\u4e5f\u53ef\u4ee5\u63a5\u7535\u8111\uff0c\u65e0\u6240\u8c13\uff0c\u7528\u4e8e\u4f9b\u7535\u7684\uff09"),(0,r.kt)("li",{parentName:"ol"},"\u677e\u5f00",(0,r.kt)("inlineCode",{parentName:"li"},"maskrom"),"\u952e")),(0,r.kt)("p",null,"\u53ea\u8981\u662f\u5148\u6309\u7740",(0,r.kt)("inlineCode",{parentName:"p"},"maskrom"),"\u952e\u7136\u540e\u63a5\u7535\u7684\uff0c\u5f00\u53d1\u677f\u5c31\u662f\u8fdb\u5165\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"maskrom"),"\u6a21\u5f0f\uff0c\u8fd9\u662f\u8981\u70b9\u4e00\uff1b"),(0,r.kt)("p",null,"\u53ea\u8981\u5148\u63a5\u4e0aotg\uff0c\u63a5\u7740\u5c31\u80fd\u68c0\u6d4b\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"maskrom"),"\uff0c\u8fd9\u662f\u8981\u70b9\u4e8c\u3002"),(0,r.kt)("p",null,"\u53ef\u4ee5\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"watch rkdeveloptool ld"),"\uff08\u9700\u8981",(0,r.kt)("inlineCode",{parentName:"p"},"brew install watch"),"\uff09\u76d1\u63a7",(0,r.kt)("inlineCode",{parentName:"p"},"maskrom"),"\u8fde\u63a5\u60c5\u51b5\uff08",(0,r.kt)("strong",{parentName:"p"},"\u63a5\u7535\u540e\u4e00\u79d2\u5c31\u6709\u53cd\u5e94\u4e86"),"\uff09"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/rockchip4-howto-1644249491217-d605ee29a08003b3b798e074df803f53b30f7eca194d6ab6019242930bb97d99.png",alt:"picture 8"}),"  "),(0,r.kt)("p",null,"\u4e5f\u53ef\u4ee5\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"lsusb"),"\uff08\u6216\u8005",(0,r.kt)("inlineCode",{parentName:"p"},"lsusb 2>/dev/null"),"\u6291\u5236\u5185\u90e8\u9519\u8bef\u4fe1\u606f\uff09\u67e5\u770b\u662f\u5426\u6709",(0,r.kt)("inlineCode",{parentName:"p"},"Fuzhou"),"\u7684usb\u884c\u4fe1\u606f\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/rockchip4-howto-1644249641183-07215c18cee315c5e1188645b6821447bf9a938dcda40a34ceb481513c9fd1a4.png",alt:"picture 9"}),"  "),(0,r.kt)("p",null,"\u8fd9\u6837\uff0c\u6211\u4eec\u786e\u8ba4\u4e86\u5df2\u7ecf\u8fde\u63a5\u4e0a\u3002"),(0,r.kt)("p",null,"\u63a5\u4e0b\u6765\u6211\u4eec\u8981\u4e0b\u8f7d\u5b98\u65b9\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"loader"),"\u7528\u4e8e\u521d\u59cb\u5316",(0,r.kt)("inlineCode",{parentName:"p"},"RAM"),"\u3002\u6211\u5176\u5b9e\u5728\u4ed3\u5e93\u6839\u76ee\u5f55\u4e5f\u770b\u5230\u4e86\u4e00\u4e2aloader\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/rockchip4-howto-1644249777798-6b964879549bb12c14a62f4a73dbdc818a1bfb9e5682c9866353c42ffe92259e.png",alt:"picture 10"}),"  "),(0,r.kt)("p",null,"\u7528\u6765\u8bd5\u4e86\u4e00\u4e0b\uff0c\u53d1\u73b0\u4e0d\u884c\uff0c\u6240\u4ee5\u7528\u5b98\u65b9\u7684\u5c31\u597d\uff1a ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.radxa.com/Rockpi4/dev/usb-install/zh_cn#.E9.80.9A.E8.BF.87USB.E7.83.A7.E5.86.99.E9.95.9C.E5.83.8F.E5.88.B0eMMC.E6.A8.A1.E5.9D.97"},"\u901a\u8fc7USB\u70e7\u5199\u955c\u50cf\u5230eMMC\u6a21\u5757"),"\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/rockchip4-howto-1644249820467-2e17ef75688e91833d86a228eb13d7d5c83c183c3c3be93d78807ba1b4138532.png",alt:"picture 11"}),"  "),(0,r.kt)("p",null,"!!!tip\n\u89e3\u538b\u90a3\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"zero.img.gz"),"\u53ef\u4ee5\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"gunzip zero.img.gz"),"\uff0c\u4ee5\u5f97\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"zero.img"),"\u3002"),(0,r.kt)("p",null,"\u5047\u8bbe\u5f53\u524d\u76ee\u5f55\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/rockchip4-howto-1644250544006-091a413a1c4c24a47b3645967fad81cc4647c21cf65e7cc59796dff9c54d5575.png",alt:"picture 12"}),"  "),(0,r.kt)("p",null,"\u5176\u4e2d ",(0,r.kt)("a",{parentName:"p",href:"https://dl.radxa.com/rockpi/images/loader/rk3399_loader_v1.20.119.bin"},(0,r.kt)("inlineCode",{parentName:"a"},"rk3399_loader_v1.20.119.bin"))," \u662f\u4e0b\u8f7d\u7684\u5b98\u65b9bin\u6587\u4ef6\uff0c",(0,r.kt)("a",{parentName:"p",href:"https://dl.radxa.com/rockpi4/images/others/zero.img.gz"},(0,r.kt)("inlineCode",{parentName:"a"},"zero.img")),"\u4e5f\u662f\u4e0b\u8f7d\u7684\u5b98\u65b9\u7a7a\u955c\u50cf\uff0c\u800c",(0,r.kt)("a",{parentName:"p",href:"https://pan.baidu.com/s/1pT2CEa12nAkjbI8xklQvAw#list/path=/public/dl.radxa.com/rockpi4/images/android/all"},(0,r.kt)("inlineCode",{parentName:"a"},"ROCKPI-4AB-2020-10-15-11-14-gpt.img")),"\u662f\u5b98\u65b9\u6253\u5305\u597d\u7684\u5b89\u535310\u955c\u50cf\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"gpt-4b.img"),"\u662f\u6211\u4eec\u81ea\u5df1\u7f16\u8bd1\u597d\u7684\u5b89\u5353\u955c\u50cf\u3002"),(0,r.kt)("p",null,"\u4e8e\u662f\u53ef\u4ee5\u7528\u4ee5\u4e0b\u811a\u672c\u65b9\u4fbf\u4e00\u952e\u5237\u673a/\u590d\u539f\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'# LOADER="rk3399_loader_v1.20.119.bin"\nLOADER="loader.bin"\n\n# function\nexport f() {\n    rkdeveloptool db $LOADER\n    rkdeveloptool wl 0 $1 \n    rkdeveloptool rd\n}\n\n# burn image of official packed android 10 for test\nf ROCKPI-4AB-2020-10-15-11-14-gpt.img\n\n# burn image of `gpt.img`\nf gpt-4b.img\n\n# clear image\nf zero.img\n')),(0,r.kt)("p",null,"\u53ef\u4ee5\u8fd9\u4e48\u505a\uff0c\u8fbe\u5230\u6e05\u7a7a\u955c\u50cf\u518d\u91cd\u65b0\u5b89\u88c5\u6211\u4eec\u76844b\u955c\u50cf\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"f zero.img\nf gpt-4b.img\n")),(0,r.kt)("p",null,"\u503c\u5f97\u6ce8\u610f\u7684\u662f\uff0c\u8fd9\u4e48\u505a\u4e4b\u540e\uff0c\u5982\u679c\u4f60\u5b9e\u65f6\u76d1\u63a7",(0,r.kt)("inlineCode",{parentName:"p"},"maskrom"),"\u72b6\u6001\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"watch rkdeveloptool ld"),"\uff09\u4f1a\u770b\u5230\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"f zero.img"),"\u4e4b\u540e\u7cfb\u7edf\u4f9d\u65e7\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"maskrom"),"\u72b6\u6001\uff0c\u800c\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"f gpt-4b.img"),"\u4e4b\u540e\u7cfb\u7edf\u5c06\u590d\u539f\uff08\u4e5f\u5c31\u662f\u8bf4\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"zero.img"),"\u4e0d\u4f1a\u4e2d\u65ad",(0,r.kt)("inlineCode",{parentName:"p"},"maskrom"),"\u72b6\u6001\u3002"),(0,r.kt)("p",null,"\u540c\u65f6\uff0c\u5982\u679c\u4f60\u4e5f\u5728\u76d1\u63a7",(0,r.kt)("inlineCode",{parentName:"p"},"adb"),"\u72b6\u6001\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"watch adb devices"),"\uff09\u4f1a\u770b\u5230\uff0c\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"f gpt-4b.img"),"\u540e\u51e0\u79d2\uff0c\u6709\u4e00\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"recovery"),"\u72b6\u6001\u7684\u8bbe\u5907\u53d1\u73b0\uff0c\u518d\u8fc7\u51e0\u79d2\u5c31\u6ca1\u4e86\uff1b\u7136\u540e\u5f00\u53d1\u677f\u91cd\u542f\uff0c\u518d\u8fc7\u51e0\u79d2\u540e\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u84dd\u706f\u95ea\u70c1"),"\u5c31\u4ee3\u8868\u5df2\u7ecf\u7cfb\u7edf\u5df2\u7ecf\u6210\u529f\u5728\u8fd0\u884c\uff0c\u6b64\u65f6",(0,r.kt)("inlineCode",{parentName:"p"},"adb"),"\u91cc\u4f1a\u6709\u4e00\u4e2a\u6b63\u5e38\u7684\u8bbe\u5907\u51fa\u73b0\u3002"),(0,r.kt)("p",null,"\u800c\u5f53",(0,r.kt)("inlineCode",{parentName:"p"},"adb"),"\u91cc\u6709\u8bbe\u5907\u65f6\u53ef\u4ee5\u4f7f\u7528\u6295\u5c4f\u529f\u80fd\u3002"),(0,r.kt)("h3",{id:"\u57fa\u4e8eadb\u7684scrcpy\u6295\u5c4f"},"\u57fa\u4e8e",(0,r.kt)("inlineCode",{parentName:"h3"},"adb"),"\u7684",(0,r.kt)("inlineCode",{parentName:"h3"},"scrcpy"),"\u6295\u5c4f"),(0,r.kt)("p",null,"\u8bbf\u95ee\uff1a- ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Genymobile/scrcpy"},"Genymobile/scrcpy: Display and control your Android device")," \u6216\u8005\u76f4\u63a5 ",(0,r.kt)("inlineCode",{parentName:"p"},"brew/apt install scrcpy"),"\u5373\u53ef\u5b89\u88c5",(0,r.kt)("inlineCode",{parentName:"p"},"scrcpy"),"\u3002"),(0,r.kt)("p",null,"\u65e0\u9700\u4efb\u4f55\u989d\u5916\u914d\u7f6e\uff0c\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"adb"),"\u6709\u6548\u540e\uff0c\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"scrcpy"),"\u5c31\u80fd\u770b\u5230\u7cfb\u7edf\u6548\u679c\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/rockchip4-howto-1644251361710-fc09612d5c43841750ad8021df3e54a536bbefd53b0212791e6e56e3294025bc.png",alt:"picture 14"}),"  "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/rockchip4-howto-1644251346572-13d0d1f1d9bac89c6ac9c89b434263ecdd74a8957a62b16ddf0d26adbf9b84de.png",alt:"picture 13"}),"  "),(0,r.kt)("p",null,"!!!tip\n\u76ee\u524d\u53d1\u73b0\uff0c\u81ea\u5df1\u7f16\u8bd1\u7684android\u7cfb\u7edf\u660e\u663e\u6bd4\u5b98\u65b9\u6253\u5305\u7684\u8981\u597d\uff0c\u6ca1\u6709\u6296\u52a8\u4e4b\u7c7b\u7684\u95ee\u9898\uff0c\u636e\u535a\u6587\u731c\u6d4b\u5e94\u8be5\u662f\u5b98\u65b9\u6253\u5305\u7684\u592a\u65e7\u4e86\u3002"),(0,r.kt)("h3",{id:"\u5173\u4e8esd\u5361\u5237"},"\u5173\u4e8esd\u5361\u5237"),(0,r.kt)("p",null,"\u5176\u5b9esd\u5361\u5237\u7406\u8bba\u4e0a\u6bd4",(0,r.kt)("inlineCode",{parentName:"p"},"emmc"),"\u8981\u66f4\u50bb\u74dc\u4e00\u4e9b\uff0c\u56e0\u4e3a\u6709\u73b0\u6210\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"Etcher"),"\u4e4b\u7c7b\u7684\u8f6f\u4ef6\u4e09\u6b65\u70e7\u5230\u5361\u91cc\uff0c\u7136\u540e\u63d2\u5230\u677f\u5b50\u4e0a\uff0c\u5c31\u53ef\u4ee5\u81ea\u52a8\u542f\u52a8\u4e86\u3002"),(0,r.kt)("p",null,"\u6211\u4e4b\u524d\u82b1\u4e86\u5f88\u957f\u65f6\u95f4\u7ea0\u7ed3\u65e0\u6cd5\u5f00\u673a\u7684\u95ee\u9898\uff0c\u4e3b\u8981\u662f\u56e0\u4e3a\u955c\u50cf\u4e0d\u5bf9\uff0c\u800c\u975e\u6309\u952e\u4e4b\u7c7b\u7684\u64cd\u4f5c\u6709\u8bef\u3002"),(0,r.kt)("p",null,"\u8fd9\u4e5f\u662f\u5361\u5237\u7684\u4e00\u4e2a\u7f3a\u70b9\uff0c\u51fa\u4e86\u95ee\u9898\u4e5f\u4e0d\u65b9\u4fbf\u8c03\u8bd5\u3002"),(0,r.kt)("p",null,"\u800c\u6211\u4eec\u7684rockchip-4b-plus\uff0c\u5df2\u7ecf\u6709\u4e86\u4e00\u5757\u5185\u7f6e\u710a\u6b7b\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"emmc"),"\uff0c\u6240\u4ee5\u4e5f\u786e\u5b9e\u6ca1\u5fc5\u8981\u7528sd\u5361\uff0c\u5c3d\u7ba1\u90fd\u53ef\u4ee5\u3002sd\u5361\u7684\u8bdd\u5c31\u4e0d\u7528\u53bb\u5b89\u88c5rockchip\u5b98\u65b9\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"rkdeveloptool")," \u5de5\u5177\u3002"),(0,r.kt)("p",null,"\u5177\u4f53\u53c2\u8003\u5b98\u65b9\u8bf4\u660e\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/rockchip4-howto-1644251579973-a838685f920678a8b08c949b7510555ba0e731a3810b0ebcdfba986df66841df.png",alt:"picture 15"}),"  "),(0,r.kt)("h3",{id:"\u5176\u4ed6\u5173\u4e8erc\u7684\u5410\u69fd"},"\u5176\u4ed6\u5173\u4e8erc\u7684\u5410\u69fd"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4ece\u4eca\u5929\u8d77\uff0c\u53ea\u8981\u4f60\u4e5f\u5410\u69fd rockchip \u7684\u4ea7\u54c1\u3001\u6587\u6863\uff0c\u90a3\u6211\u4eec\u5c31\u80fd\u6210\u4e3a\u670b\u53cb\uff01")),(0,r.kt)("p",null,"\u5728rc\u955c\u50cf\u751f\u6210\u90e8\u5206\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"rockdev"),"\u76ee\u5f55\u4e0b\u53ef\u4ee5\u770b\u5230readme\u662f\u8fd9\u4e48\u5199\u7684\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/rockchip4-howto-1644251772636-88df91526be1343f5acea923600510b931c71c87e19a463dec406d9f123a83a0.png",alt:"picture 16"}),"  "),(0,r.kt)("p",null,"\u4f46\u5b9e\u9645\u4e0a\uff0c\u6211\u4eec\u6839\u672c\u5c31\u6ca1\u6709\u5fc5\u8981\u628a",(0,r.kt)("inlineCode",{parentName:"p"},"loader")," copy \u5230\u4ec0\u4e48\u5730\u65b9\u53bb\uff0c\u53ef\u80fd\u662f\u4ed6\u4eec\u7684\u811a\u672c\u91cc\u81ea\u5e26\u4e86\uff0c\u4e5f\u6709\u53ef\u80fd\u662f\u4ed6\u4eec\u540e\u6765\u66f4\u65b0\u4e86\u3002"),(0,r.kt)("p",null,"\u518d\u8054\u7cfb\u4ed6\u4eec\u5404\u5927\u7248\u672c\u7684\u6587\u6863\u7684\u540c\u6b65\u3001\u51c6\u786e\u6027\u7b49\u95ee\u9898\u2026\u2026"),(0,r.kt)("p",null,"\u603b\u4e4b\uff0c\u6807\u51c6\u7684\u5929\u5751\u3002"),(0,r.kt)("h2",{id:"fixed-no-configuration-exists-for-this-target-on-this-architecture-stop"},"FIXED: ",(0,r.kt)("inlineCode",{parentName:"h2"},"No configuration exists for this target on this architecture. Stop.")),(0,r.kt)("p",null,"mark::update@2022-02-25:  \u5728\u7f16\u8bd1 kernel \u65f6\uff0c\u4eca\u5929\u4e00\u76f4\u78b0\u5230\u8fd9\u4e2a\u95ee\u9898\u3002"),(0,r.kt)("p",null,"\u4e00\u5f00\u59cb\u662f\u6211\u5728\u56de\u6eda\u4e86kernel\u4e4b\u540e\u51fa\u73b0\u7684\uff0c\u540e\u6765\u6211\u4ed4\u7ec6\u67e5\u770b\u4e86git log\uff0c\u53d1\u73b0\u6709\u4e00\u4e2acommit\u91cc\u5305\u542b\u5f88\u591a ",(0,r.kt)("inlineCode",{parentName:"p"},"config.go")," \u6587\u4ef6\uff0c\u6211\u731c\u60f3\u8fd9\u4e9b\u6587\u4ef6\u662f\u4e0d\u80fd\u4e22\u6389\u7684\u3002"),(0,r.kt)("p",null,"\u6211\u539f\u4ee5\u4e3a\uff0c\u662frk\u7684git\u64cd\u4f5c\u6ca1\u5230\u4f4d\uff0c\u4e00\u4e9b\u65b0\u7684\u6587\u4ef6\u6ca1\u5408\u5230git\u91cc\u3002"),(0,r.kt)("p",null,"\u76f4\u5230\u540e\u6765\u6211\u624d\u610f\u8bc6\u5230\uff0c",(0,r.kt)("del",{parentName:"p"},"\uff08\u4e0d\u786e\u5b9a\uff09\u662f\u5728repo sync\u7684\u65f6\u5019\uff0c\u81ea\u52a8\u751f\u6210\u7684\uff0c\u5f53\u7136\uff0c\u8fd9\u4e2a\u751f\u6210\u7684\u4e00\u90e8\u5206\u6587\u4ef6\uff0c\u4e5f\u5c31\u5c5e\u4e8e\u65b0\u589e\u6587\u4ef6\uff0c\u4e0d\u5728commit\u91cc\u4e86\u3002")),(0,r.kt)("p",null,"\u56e0\u6b64\uff0c\u5f53\u6211\u56de\u6eda\u4e86\u64cd\u4f5c\uff0c\u751a\u81f3\u76f4\u63a5\u5220\u5149 kernel \u6587\u4ef6\u5939\u518d ",(0,r.kt)("inlineCode",{parentName:"p"},"repo sync kernel"),"\uff0c\u4e5f\u4e0d\u80fd\u83b7\u5f97\u90a3\u4e9b config \u6587\u4ef6\u3002"),(0,r.kt)("p",null,"\u6700\u7ec8\u5bfc\u81f4kernel\u65e0\u6cd5\u7f16\u8bd1\u3002"),(0,r.kt)("p",null,"\u603b\u4e4b\uff0c\u8981\u4e48 ",(0,r.kt)("inlineCode",{parentName:"p"},"make clean"),"\uff0c\u8981\u4e48 \u6307\u5b9a",(0,r.kt)("inlineCode",{parentName:"p"},"lunch"),"\uff0c\u8981\u4e48\u5c31 ",(0,r.kt)("inlineCode",{parentName:"p"},"repo sync")," \u91cd\u65b0\u540c\u6b65\u4e00\u4e0b\uff0c\u4e5f\u6ca1\u6709\u5176\u4ed6\u529e\u6cd5\u4e86\u2026\u2026\u7ec8\u5f52\u6709\u4e2a\u529e\u6cd5\u53ef\u4ee5\u7528\u7684\u2026\u2026"),(0,r.kt)("h2",{id:"fixed--error-commit_idxml-needed-by-outtargetproductrk3399vendorcommit_idxml-missing-and-no-known-rule-to-make-it"},"FIXED:  ",(0,r.kt)("inlineCode",{parentName:"h2"},"error: 'commit_id.xml', needed by 'out/target/product/rk3399/vendor/commit_id.xml', missing and no known rule to make it")),(0,r.kt)("p",null,"It arises up when we build the AOSP, and the ",(0,r.kt)("inlineCode",{parentName:"p"},"python")," is disallowed without the ",(0,r.kt)("inlineCode",{parentName:"p"},"commit_id.xml"),", so just put it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"TEMPORARY_DISABLE_PATH_RESTRICTIONS=true\n")),(0,r.kt)("p",null,"see: - ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/radxa/manifests/issues/2"},"error: 'commit_id.xml', needed by 'out/target/product/rk3399/vendor/commit_id.xml', missing and no known rule to make it \xb7 Issue #2 \xb7 radxa/manifests")),(0,r.kt)("h2",{id:"fixed-error-prebuiltsclanghostlinux-x86-platformprebuiltsclanghostlinux-x86-checkout"},"FIXED: ",(0,r.kt)("inlineCode",{parentName:"h2"},"error: prebuilts/clang/host/linux-x86/: platform/prebuilts/clang/host/linux-x86 checkout")),(0,r.kt)("p",null,"ref:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://forum.xda-developers.com/t/repo-error.4092681/"},"repo error | XDA Forums"))),(0,r.kt)("h2",{id:"fixed-awk-line-2-function-strtonum-never-defined"},"FIXED: ",(0,r.kt)("inlineCode",{parentName:"h2"},"awk: line 2: function strtonum never defined")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt-get install gawk\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/rockchip4-flash-manual-1644846223441-63a3ec139b6d7ca29888de4d61509a71a7c3091a4789d2e8d380c1d274ba5662.png",alt:"picture 1"}),"  "),(0,r.kt)("p",null,"ref:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://blog.csdn.net/liangtianmeng/article/details/86020254"},"(1\u6761\u6d88\u606f) \u89e3\u51b3 awk: line 2: function strtonum never defined_liangtianmeng\u7684\u4e13\u680f-CSDN\u535a\u5ba2"))),(0,r.kt)("h2",{id:"fixed-fatal-error-opensslbioh-no-such-file-or-directory"},"FIXED: ",(0,r.kt)("inlineCode",{parentName:"h2"},"fatal error: openssl/bio.h: No such file or directory")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt-get install aptitude\nsudo aptitude install libssl-dev\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/rockchip4-flash-manual-1644846538496-8633106a098062b99f863824d72ffeebf4d3c082c09c67fff2e91bdda8e2f6dc.png",alt:"picture 2"}),"  "),(0,r.kt)("p",null,"ref:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/59016911/fatal-error-openssl-bio-h-no-such-file-or-directory"},"kernel - fatal error: openssl/bio.h: No such file or directory - Stack Overflow"))),(0,r.kt)("h2",{id:"fixed-creating-comm-object-failed"},"FIXED: ",(0,r.kt)("inlineCode",{parentName:"h2"},'"Creating Comm Object failed!"')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'echo \'SUBSYSTEM=="usb", ATTR{idVendor}=="2207", MODE="0666",GROUP="plugdev"\' | sudo tee /etc/udev/rules.d/51-android.rules\n')),(0,r.kt)("p",null,"ref:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://www.96boards.org/documentation/consumer/rock/installation/linux-mac-rkdeveloptool-android.md.html"},"Linux Host Installation for ROCK960 Android - 96Boards"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://forum.radxa.com/t/creating-comm-object-failed-error-when-use-rkdeveloptool/1092"},'"Creating Comm Object failed" error when use rkdeveloptool - Using ROCK Pi 4 - Radxa Forum')))))}m.isMDXComponent=!0}}]);