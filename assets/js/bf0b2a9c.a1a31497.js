"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8265],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(t),h=a,u=d["".concat(l,".").concat(h)]||d[h]||m[h]||o;return t?r.createElement(u,i(i({ref:n},c),{},{components:t})):r.createElement(u,i({ref:n},c))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},45528:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=t(87462),a=(t(67294),t(3905));const o={},i="npm/yarn howto",s={unversionedId:"coding/JS/npm_yarn-howto",id:"coding/JS/npm_yarn-howto",title:"npm/yarn howto",description:"1. BEST-PRACTICE: nvm",source:"@site/docs/coding/JS/npm_yarn-howto.md",sourceDirName:"coding/JS",slug:"/coding/JS/npm_yarn-howto",permalink:"/keeps-learning/docs/coding/JS/npm_yarn-howto",draft:!1,editUrl:"https://github.com/markshawn2020/keeps-learning/edit/master/docs/coding/JS/npm_yarn-howto.md",tags:[],version:"current",lastUpdatedAt:1658857065,formattedLastUpdatedAt:"2022\u5e747\u670826\u65e5",frontMatter:{},sidebar:"docs",previous:{title:"npm/yarn bugfix",permalink:"/keeps-learning/docs/coding/JS/npm_yarn-bugfix"},next:{title:"redux",permalink:"/keeps-learning/docs/coding/JS/redux"}},l={},p=[{value:"BEST-PRACTICE: nvm",id:"best-practice-nvm",level:2},{value:"install",id:"install",level:3},{value:"use",id:"use",level:3},{value:"BEST-PRACTICE: <code>mirror-config-china</code>",id:"best-practice-mirror-config-china",level:2},{value:"a chinese mirror practice: how does it save an electron project",id:"a-chinese-mirror-practice-how-does-it-save-an-electron-project",level:3},{value:"config npm mirrors",id:"config-npm-mirrors",level:3},{value:"approach 1 (recommend)",id:"approach-1-recommend",level:4},{value:"approach 2",id:"approach-2",level:4},{value:"config yarn mirrors",id:"config-yarn-mirrors",level:3},{value:"BEST-PRACTICE: how to install <code>node-sass</code>",id:"best-practice-how-to-install-node-sass",level:2},{value:"Step 1. ensure <code>sass-binary-site</code> enabled in <code>.npmrc</code>",id:"step-1-ensure-sass-binary-site-enabled-in-npmrc",level:3},{value:"Option 1: use <code>mirror-config-china</code>",id:"option-1-use-mirror-config-china",level:4},{value:"Option 2: set directly",id:"option-2-set-directly",level:4},{value:"Step 2. change node/npm version",id:"step-2-change-nodenpm-version",level:3},{value:"npm commands",id:"npm-commands",level:2},{value:"update package",id:"update-package",level:3},{value:"check exist, locally and globally, with and without dependencies",id:"check-exist-locally-and-globally-with-and-without-dependencies",level:3},{value:"TUTORIAL: modify <code>diff2html-cli</code> html logo",id:"tutorial-modify-diff2html-cli-html-logo",level:2},{value:"Step 1. locate the package position",id:"step-1-locate-the-package-position",level:3},{value:"Step 2. modify the template html file, since the inner code generates dependent on it",id:"step-2-modify-the-template-html-file-since-the-inner-code-generates-dependent-on-it",level:3},{value:"Ref 1. check tree structure",id:"ref-1-check-tree-structure",level:3}],c={toc:p};function m(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"npmyarn-howto"},"npm/yarn howto"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#best-practice-nvm"},"BEST-PRACTICE: nvm"),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#install"},"install")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#use"},"use")))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#best-practice-mirror-config-china"},"BEST-PRACTICE: ",(0,a.kt)("inlineCode",{parentName:"a"},"mirror-config-china")),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#a-chinese-mirror-practice-how-does-it-save-an-electron-project"},"a chinese mirror practice: how does it save an electron project")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#config-npm-mirrors"},"config npm mirrors")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#config-yarn-mirrors"},"config yarn mirrors")))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#best-practice-how-to-install-node-sass"},"BEST-PRACTICE: how to install ",(0,a.kt)("inlineCode",{parentName:"a"},"node-sass")),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#step-1-ensure-sass-binary-site-enabled-in-npmrc"},"Step 1. ensure ",(0,a.kt)("inlineCode",{parentName:"a"},"sass-binary-site")," enabled in ",(0,a.kt)("inlineCode",{parentName:"a"},".npmrc"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#step-2-change-nodenpm-version"},"Step 2. change node/npm version")))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#npm-commands"},"npm commands"),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#update-package"},"update package")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#check-exist-locally-and-globally-with-and-without-dependencies"},"check exist, locally and globally, with and without dependencies")))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#tutorial-modify-diff2html-cli-html-logo"},"TUTORIAL: modify ",(0,a.kt)("inlineCode",{parentName:"a"},"diff2html-cli")," html logo"),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#step-1-locate-the-package-position"},"Step 1. locate the package position")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#step-2-modify-the-template-html-file-since-the-inner-code-generates-dependent-on-it"},"Step 2. modify the template html file, since the inner code generates dependent on it")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#ref-1-check-tree-structure"},"Ref 1. check tree structure"))))),(0,a.kt)("h2",{id:"best-practice-nvm"},"BEST-PRACTICE: nvm"),(0,a.kt)("p",null,"ref:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/nvm-sh/nvm/blob/master/README.md"},"nvm/README.md at master \xb7 nvm-sh/nvm"))),(0,a.kt)("h3",{id:"install"},"install"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash\n\nexport NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"\n[ -s "$NVM_DIR/nvm.sh" ] && \\. "$NVM_DIR/nvm.sh" # This loads nvm\n')),(0,a.kt)("h3",{id:"use"},"use"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"nvm install 14\nnvm use 14\n")),(0,a.kt)("h2",{id:"best-practice-mirror-config-china"},"BEST-PRACTICE: ",(0,a.kt)("inlineCode",{parentName:"h2"},"mirror-config-china")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npm i -g mirror-config-china --registry=https://registry.npm.taobao.org\n# \u67e5\u770bnpm\u914d\u7f6e\nnpm config list\n# \u67e5\u770b\u73af\u5883\u53d8\u91cf\nsource ~/.bashrc && env\n# then enable local\n")),(0,a.kt)("h3",{id:"a-chinese-mirror-practice-how-does-it-save-an-electron-project"},"a chinese mirror practice: how does it save an electron project"),(0,a.kt)("p",null,"This is the problem which I met."),(0,a.kt)("img",{alt:"picture 3",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/1640779337829-npm_yarn-howto-83184c036aa89f0f72993d0be12f1a05fce1f12fbb6fa6cf29db901a23803851.png",width:"480"}),(0,a.kt)("p",null,"And in fact, there is one cn mirror set for electron, so I can't understand why."),(0,a.kt)("img",{alt:"picture 4",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/1640779402198-npm_yarn-howto-ba1bd753798fafa6b255373088034da1c14e786f216febaf6c23a80714af54d6.png",width:"480"}),(0,a.kt)("p",null,"Maybe the format is wrong, since a ",(0,a.kt)("inlineCode",{parentName:"p"},"xxx = true")," looks a bit wield. Or maybe the project resolves some packages ont only from 'electron_mirror', or specifically, to download ",(0,a.kt)("inlineCode",{parentName:"p"},"electron-v1.xxx.zip"),", it won't use ",(0,a.kt)("inlineCode",{parentName:"p"},"electron_mirror"),", etc."),(0,a.kt)("p",null,"Anyhow, I should give ",(0,a.kt)("inlineCode",{parentName:"p"},"mirror-config-china")," project a try."),(0,a.kt)("img",{alt:"picture 5",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/1640779604692-npm_yarn-howto-6448401a3dd430d9ea918072cc93bfaad3f67dc4048a92f719cbc96797ce6bc7.png",width:"480"}),(0,a.kt)("img",{alt:"picture 6",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/1640779616200-npm_yarn-howto-27f9747dbd4781f12d7efc9d74d7bf55c5c5987697da0f5f7eda014c2906cbd7.png",width:"480"}),(0,a.kt)("p",null,"I followed the above guidance, and then I should succeed!"),(0,a.kt)("img",{alt:"picture 7",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/1640779657719-npm_yarn-howto-5c446ef298d7eb27cde4613b90617e9491e400aa6291e7ebd3c3288ca2b1614e.png",width:"480"}),(0,a.kt)("p",null,"The current config info is as the following, in which the ",(0,a.kt)("inlineCode",{parentName:"p"},"electron-mirror")," value is in fact the same (except a ",(0,a.kt)("inlineCode",{parentName:"p"},"= true")," ending)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'(base) \u279c  electron-typescript-example git:(master) npm config list                                          \n; "builtin" config from /usr/local/lib/node_modules/npm/npmrc\n\nprefix = "/usr/local" \n\n; "user" config from /Users/mark/.npmrc\n\n; registry = "https://registry.npm.taobao.org/" ; overridden by project\n\n; "project" config from /Users/mark/Documents/mark_projects/\u7687\u5bb6\u5c0f\u864e/HJXH/hjxh_express_match/erb/electron-typescript-example/.npmrc\n\nchromedriver-cdnurl = "https://npm.taobao.org/mirrors/chromedriver" \ncouchbase-binary-host-mirror = "https://npm.taobao.org/mirrors/couchbase/v{version}" \ndebug-binary-host-mirror = "https://npm.taobao.org/mirrors/node-inspector" \ndisturl = "https://npm.taobao.org/dist" \nelectron-mirror = "https://npm.taobao.org/mirrors/electron/" \nflow-bin-binary-host-mirror = "https://npm.taobao.org/mirrors/flow/v" \nfse-binary-host-mirror = "https://npm.taobao.org/mirrors/fsevents" \nfuse-bindings-binary-host-mirror = "https://npm.taobao.org/mirrors/fuse-bindings/v{version}" \ngit4win-mirror = "https://npm.taobao.org/mirrors/git-for-windows" \ngl-binary-host-mirror = "https://npm.taobao.org/mirrors/gl/v{version}" \ngrpc-node-binary-host-mirror = "https://npm.taobao.org/mirrors" \nhackrf-binary-host-mirror = "https://npm.taobao.org/mirrors/hackrf/v{version}" \nleveldown-binary-host-mirror = "https://npm.taobao.org/mirrors/leveldown/v{version}" \nleveldown-hyper-binary-host-mirror = "https://npm.taobao.org/mirrors/leveldown-hyper/v{version}" \nmknod-binary-host-mirror = "https://npm.taobao.org/mirrors/mknod/v{version}" \nnode-sqlite3-binary-host-mirror = "https://npm.taobao.org/mirrors" \nnode-tk5-binary-host-mirror = "https://npm.taobao.org/mirrors/node-tk5/v{version}" \nnodegit-binary-host-mirror = "https://npm.taobao.org/mirrors/nodegit/v{version}/" \noperadriver-cdnurl = "https://npm.taobao.org/mirrors/operadriver" \nphantomjs-cdnurl = "https://npm.taobao.org/mirrors/phantomjs" \nprofiler-binary-host-mirror = "https://npm.taobao.org/mirrors/node-inspector/" \npuppeteer-download-host = "https://npm.taobao.org/mirrors" \npython-mirror = "https://npm.taobao.org/mirrors/python" \nrabin-binary-host-mirror = "https://npm.taobao.org/mirrors/rabin/v{version}" \nregistry = "https://registry.npm.taobao.org/" \nsass-binary-site = "https://npm.taobao.org/mirrors/node-sass" \nsodium-prebuilt-binary-host-mirror = "https://npm.taobao.org/mirrors/sodium-prebuilt/v{version}" \nsqlite3-binary-site = "https://npm.taobao.org/mirrors/sqlite3" \nutf-8-validate-binary-host-mirror = "https://npm.taobao.org/mirrors/utf-8-validate/v{version}" \nutp-native-binary-host-mirror = "https://npm.taobao.org/mirrors/utp-native/v{version}" \nzmq-prebuilt-binary-host-mirror = "https://npm.taobao.org/mirrors/zmq-prebuilt/v{version}" \n\n; node bin location = /usr/local/Cellar/node/17.2.0/bin/node\n; cwd = /Users/mark/Documents/mark_projects/\u7687\u5bb6\u5c0f\u864e/HJXH/hjxh_express_match/erb/electron-typescript-example\n; HOME = /Users/mark\n; Run `npm config ls -l` to show all defaults.\n')),(0,a.kt)("p",null,"Thanks ",(0,a.kt)("inlineCode",{parentName:"p"},"mirror-config-china"),"! It do save me a lot of time."),(0,a.kt)("h3",{id:"config-npm-mirrors"},"config npm mirrors"),(0,a.kt)("h4",{id:"approach-1-recommend"},"approach 1 (recommend)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/mirror-config-china"},"mirror-config-china - npm"))),(0,a.kt)("h4",{id:"approach-2"},"approach 2"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"### show registry\nnpm config get registry\n# https://registry.npmjs.org/\n\n### change to chinese registry\nnpm config set registry http://r.cnpmjs.org # It syncs with registry.npmjs.org.\nnpm install\n# reference: https://stackoverflow.com/a/27216097/9422455\n")),(0,a.kt)("h3",{id:"config-yarn-mirrors"},"config yarn mirrors"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'# ~/.yarnrc\nregistry "https://registry.npm.taobao.org"\nsass_binary_site "https://npm.taobao.org/mirrors/node-sass/"\nphantomjs_cdnurl "http://cnpmjs.org/downloads"\nelectron_mirror "https://npm.taobao.org/mirrors/electron/"\nsqlite3_binary_host_mirror "https://foxgis.oss-cn-shanghai.aliyuncs.com/"\nprofiler_binary_host_mirror "https://npm.taobao.org/mirrors/node-inspector/"\nchromedriver_cdnurl "https://cdn.npm.taobao.org/dist/chromedriver"\n')),(0,a.kt)("p",null,"ref:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.jibing57.com/2020/02/24/how-to-speed-yarn-install-interiorly/"},"\u5982\u4f55\u5728\u56fd\u5185\u52a0\u901fyarn install | Recording"))),(0,a.kt)("h2",{id:"best-practice-how-to-install-node-sass"},"BEST-PRACTICE: how to install ",(0,a.kt)("inlineCode",{parentName:"h2"},"node-sass")),(0,a.kt)("h3",{id:"step-1-ensure-sass-binary-site-enabled-in-npmrc"},"Step 1. ensure ",(0,a.kt)("inlineCode",{parentName:"h3"},"sass-binary-site")," enabled in ",(0,a.kt)("inlineCode",{parentName:"h3"},".npmrc")),(0,a.kt)("h4",{id:"option-1-use-mirror-config-china"},"Option 1: use ",(0,a.kt)("inlineCode",{parentName:"h4"},"mirror-config-china")),(0,a.kt)("p",null,"!!!warning\nthis would set into ",(0,a.kt)("inlineCode",{parentName:"p"},"project/.npmrc")),(0,a.kt)("p",null,"ref: ",(0,a.kt)("a",{parentName:"p",href:"#best-practice-mirror-config-china"},"BEST-PRACTICE: ",(0,a.kt)("inlineCode",{parentName:"a"},"mirror-config-china"))),(0,a.kt)("h4",{id:"option-2-set-directly"},"Option 2: set directly"),(0,a.kt)("p",null,"!!!warning\nthis would set into ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.npmrc")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"# this would set into `~/.npmrc`\nnpm config set sass-binary-site=https://npm.taobao.org/mirrors/node-sass\n")),(0,a.kt)("h3",{id:"step-2-change-nodenpm-version"},"Step 2. change node/npm version"),(0,a.kt)("p",null,"If the last step not works, then maybe you need to change the node version."),(0,a.kt)("p",null,"For example, one of my projects used ",(0,a.kt)("inlineCode",{parentName:"p"},"node-sass")," of version ",(0,a.kt)("inlineCode",{parentName:"p"},'"node-sass": "^4.14.1",'),", and according to the official ",(0,a.kt)("inlineCode",{parentName:"p"},"node-sass")," documentation, it lists:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/npm_yarn-howto-1642841662888-801b5f5f69831c1fc22b0430c10d9cea0079cc51c58815fd2260ba001e627bd5.png",alt:"picture 4"}),"  "),(0,a.kt)("p",null,"And at that time, my node version is ",(0,a.kt)("inlineCode",{parentName:"p"},"17+"),", so I use ",(0,a.kt)("inlineCode",{parentName:"p"},"nvm")," ",(0,a.kt)("a",{parentName:"p",href:"#best-practice-nvm"},"BEST-PRACTICE: nvm")," to change it down to ",(0,a.kt)("inlineCode",{parentName:"p"},"14")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"npm i -D node-sass")," and worked."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/npm_yarn-howto-1642841787353-3028ce9fdfa5b03b272ecb705ccafbaa3e5469d1e6d64fa36b268872ff29ca0d.png",alt:"picture 5"}),"  "),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/npm_yarn-howto-1642841802474-23d1f0911ea6d1c73f2c7bb5d6a58c3278862d58f77beb5d2fb95dc85f6379e1.png",alt:"picture 6"}),"  "),(0,a.kt)("h2",{id:"npm-commands"},"npm commands"),(0,a.kt)("h3",{id:"update-package"},"update package"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"# update all\nnpm update\n\n# update a specific one\nnpm update PACKAGE\n\n# filter out out-of-dated packages\nnpm outdated\n")),(0,a.kt)("p",null,"see: - ",(0,a.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/16525430/npm-check-and-update-package-if-needed"},"node.js - npm check and update package if needed - Stack Overflow")),(0,a.kt)("h3",{id:"check-exist-locally-and-globally-with-and-without-dependencies"},"check exist, locally and globally, with and without dependencies"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"# check a npm package P exist locally\nnpm list P\n\n# check a npm package P exist globally: `/usr/local/lib/node_modules/PACKAGE`\nnpm list -g P\n\n# check exist without dependencies\nnpm list P --depth=0\n")),(0,a.kt)("p",null,"ref:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://reactgo.com/check-npm-packages-installed/"},"How to check if an npm package installed globally or locally | Reactgo"))),(0,a.kt)("h2",{id:"tutorial-modify-diff2html-cli-html-logo"},"TUTORIAL: modify ",(0,a.kt)("inlineCode",{parentName:"h2"},"diff2html-cli")," html logo"),(0,a.kt)("h3",{id:"step-1-locate-the-package-position"},"Step 1. locate the package position"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npm list -g diff2html-cli\n# /usr/local/lib\n\ncd /usr/local/lib/node_modules/diff2html-cli\n")),(0,a.kt)("p",null,"ref:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/5926672/where-does-npm-install-packages#:~:text=The%20npm%20modules%20are%20first,your%2Dproject%2Fnode_modules%20"},"javascript - Where does npm install packages? - Stack Overflow"),".&text=which%20will%20print%20the%20location%20along%20with%20the%20list%20of%20installed%20modules.)")),(0,a.kt)("h3",{id:"step-2-modify-the-template-html-file-since-the-inner-code-generates-dependent-on-it"},"Step 2. modify the template html file, since the inner code generates dependent on it"),(0,a.kt)("p",null,"The main change is to add an icon ref:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- the icon path need to be absolute, since when executing `diff2html` in terminal, the path cannot ensure to be int current directory --\x3e\n<link rel="icon" href="/usr/local/lib/node_modules/diff2html-cli/logos/logo.png"/>\n')),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/npm_yarn-howto-1642744901058-548b42f9ffdc9c14247c60cd0bf63d8dd5620328ed96cc7d1e9eef7233a4c956.png",alt:"picture 29"}),"  "),(0,a.kt)("p",null,"ref:"),(0,a.kt)("p",null,"how to change logo in html"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/11488960/how-do-i-put-my-websites-logo-to-be-the-icon-image-in-browser-tabs"},"html - How do I put my website's logo to be the icon image in browser tabs? - Stack Overflow"))),(0,a.kt)("p",null,"logo url"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.freelogodesign.org/manager/showcase/d8b47e4c8338433bb7e70e4b99c2daa9"},"Manage | FreeLogoDesign"))),(0,a.kt)("h3",{id:"ref-1-check-tree-structure"},"Ref 1. check tree structure"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u279c  diff2html-cli tree -L 2 .                                                                             [21-01-22 | 1:57:54]\n.\n\u251c\u2500\u2500 LICENSE\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 bin\n\u2502\xa0\xa0 \u2514\u2500\u2500 diff2html\n\u251c\u2500\u2500 lib\n\u2502\xa0\xa0 \u251c\u2500\u2500 cli.d.ts\n\u2502\xa0\xa0 \u251c\u2500\u2500 cli.d.ts.map\n\u2502\xa0\xa0 \u251c\u2500\u2500 cli.js\n\u2502\xa0\xa0 \u251c\u2500\u2500 cli.js.map\n\u2502\xa0\xa0 \u251c\u2500\u2500 configuration.d.ts\n\u2502\xa0\xa0 \u251c\u2500\u2500 configuration.d.ts.map\n\u2502\xa0\xa0 \u251c\u2500\u2500 configuration.js\n\u2502\xa0\xa0 \u251c\u2500\u2500 configuration.js.map\n\u2502\xa0\xa0 \u251c\u2500\u2500 http-utils.d.ts\n\u2502\xa0\xa0 \u251c\u2500\u2500 http-utils.d.ts.map\n\u2502\xa0\xa0 \u251c\u2500\u2500 http-utils.js\n\u2502\xa0\xa0 \u251c\u2500\u2500 http-utils.js.map\n\u2502\xa0\xa0 \u251c\u2500\u2500 logger.d.ts\n\u2502\xa0\xa0 \u251c\u2500\u2500 logger.d.ts.map\n\u2502\xa0\xa0 \u251c\u2500\u2500 logger.js\n\u2502\xa0\xa0 \u251c\u2500\u2500 logger.js.map\n\u2502\xa0\xa0 \u251c\u2500\u2500 main.d.ts\n\u2502\xa0\xa0 \u251c\u2500\u2500 main.d.ts.map\n\u2502\xa0\xa0 \u251c\u2500\u2500 main.js\n\u2502\xa0\xa0 \u251c\u2500\u2500 main.js.map\n\u2502\xa0\xa0 \u251c\u2500\u2500 types.d.ts\n\u2502\xa0\xa0 \u251c\u2500\u2500 types.d.ts.map\n\u2502\xa0\xa0 \u251c\u2500\u2500 types.js\n\u2502\xa0\xa0 \u251c\u2500\u2500 types.js.map\n\u2502\xa0\xa0 \u251c\u2500\u2500 utils.d.ts\n\u2502\xa0\xa0 \u251c\u2500\u2500 utils.d.ts.map\n\u2502\xa0\xa0 \u251c\u2500\u2500 utils.js\n\u2502\xa0\xa0 \u251c\u2500\u2500 utils.js.map\n\u2502\xa0\xa0 \u251c\u2500\u2500 yargs.d.ts\n\u2502\xa0\xa0 \u251c\u2500\u2500 yargs.d.ts.map\n\u2502\xa0\xa0 \u251c\u2500\u2500 yargs.js\n\u2502\xa0\xa0 \u2514\u2500\u2500 yargs.js.map\n\u251c\u2500\u2500 logos\n\u2502\xa0\xa0 \u2514\u2500\u2500 logo.png\n\u251c\u2500\u2500 node_modules\n\u2502\xa0\xa0 \u251c\u2500\u2500 abbrev\n\u2502\xa0\xa0 \u251c\u2500\u2500 ansi-regex\n\u2502\xa0\xa0 \u251c\u2500\u2500 ansi-styles\n\u2502\xa0\xa0 \u251c\u2500\u2500 arch\n\u2502\xa0\xa0 \u251c\u2500\u2500 clipboardy\n\u2502\xa0\xa0 \u251c\u2500\u2500 cliui\n\u2502\xa0\xa0 \u251c\u2500\u2500 color-convert\n\u2502\xa0\xa0 \u251c\u2500\u2500 color-name\n\u2502\xa0\xa0 \u251c\u2500\u2500 cross-spawn\n\u2502\xa0\xa0 \u251c\u2500\u2500 diff\n\u2502\xa0\xa0 \u251c\u2500\u2500 diff2html\n\u2502\xa0\xa0 \u251c\u2500\u2500 emoji-regex\n\u2502\xa0\xa0 \u251c\u2500\u2500 end-of-stream\n\u2502\xa0\xa0 \u251c\u2500\u2500 escalade\n\u2502\xa0\xa0 \u251c\u2500\u2500 execa\n\u2502\xa0\xa0 \u251c\u2500\u2500 get-caller-file\n\u2502\xa0\xa0 \u251c\u2500\u2500 get-stream\n\u2502\xa0\xa0 \u251c\u2500\u2500 highlight.js\n\u2502\xa0\xa0 \u251c\u2500\u2500 hogan.js\n\u2502\xa0\xa0 \u251c\u2500\u2500 is-docker\n\u2502\xa0\xa0 \u251c\u2500\u2500 is-fullwidth-code-point\n\u2502\xa0\xa0 \u251c\u2500\u2500 is-stream\n\u2502\xa0\xa0 \u251c\u2500\u2500 is-wsl\n\u2502\xa0\xa0 \u251c\u2500\u2500 isexe\n\u2502\xa0\xa0 \u251c\u2500\u2500 mkdirp\n\u2502\xa0\xa0 \u251c\u2500\u2500 nice-try\n\u2502\xa0\xa0 \u251c\u2500\u2500 node-fetch\n\u2502\xa0\xa0 \u251c\u2500\u2500 nopt\n\u2502\xa0\xa0 \u251c\u2500\u2500 npm-run-path\n\u2502\xa0\xa0 \u251c\u2500\u2500 once\n\u2502\xa0\xa0 \u251c\u2500\u2500 open\n\u2502\xa0\xa0 \u251c\u2500\u2500 p-finally\n\u2502\xa0\xa0 \u251c\u2500\u2500 path-key\n\u2502\xa0\xa0 \u251c\u2500\u2500 pump\n\u2502\xa0\xa0 \u251c\u2500\u2500 require-directory\n\u2502\xa0\xa0 \u251c\u2500\u2500 semver\n\u2502\xa0\xa0 \u251c\u2500\u2500 shebang-command\n\u2502\xa0\xa0 \u251c\u2500\u2500 shebang-regex\n\u2502\xa0\xa0 \u251c\u2500\u2500 signal-exit\n\u2502\xa0\xa0 \u251c\u2500\u2500 string-width\n\u2502\xa0\xa0 \u251c\u2500\u2500 strip-ansi\n\u2502\xa0\xa0 \u251c\u2500\u2500 strip-eof\n\u2502\xa0\xa0 \u251c\u2500\u2500 tr46\n\u2502\xa0\xa0 \u251c\u2500\u2500 webidl-conversions\n\u2502\xa0\xa0 \u251c\u2500\u2500 whatwg-url\n\u2502\xa0\xa0 \u251c\u2500\u2500 which\n\u2502\xa0\xa0 \u251c\u2500\u2500 wrap-ansi\n\u2502\xa0\xa0 \u251c\u2500\u2500 wrappy\n\u2502\xa0\xa0 \u251c\u2500\u2500 y18n\n\u2502\xa0\xa0 \u251c\u2500\u2500 yargs\n\u2502\xa0\xa0 \u2514\u2500\u2500 yargs-parser\n\u251c\u2500\u2500 package.json\n\u2514\u2500\u2500 template.html\n\n55 directories, 38 files\n")))}m.isMDXComponent=!0}}]);