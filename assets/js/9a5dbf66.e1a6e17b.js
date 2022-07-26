"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7704],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=s(r),d=a,f=u["".concat(p,".").concat(d)]||u[d]||c[d]||o;return r?n.createElement(f,i(i({ref:t},m),{},{components:r})):n.createElement(f,i({ref:t},m))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},43405:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={},i="maven-howto",l={unversionedId:"coding/Java/maven-howto",id:"coding/Java/maven-howto",title:"maven-howto",description:"- use mirrors for repositories",source:"@site/docs/coding/Java/maven-howto.md",sourceDirName:"coding/Java",slug:"/coding/Java/maven-howto",permalink:"/docusaurus/docs/coding/Java/maven-howto",draft:!1,editUrl:"https://github.com/markshawn2020/docusaurus/edit/master/docs/coding/Java/maven-howto.md",tags:[],version:"current",lastUpdatedAt:1658770976,formattedLastUpdatedAt:"2022\u5e747\u670825\u65e5",frontMatter:{},sidebar:"docs",previous:{title:"java howto",permalink:"/docusaurus/docs/coding/Java/java-howto"},next:{title:"markdown howto",permalink:"/docusaurus/docs/coding/Markdown/markdown-howto"}},p={},s=[{value:"use mirrors for repositories",id:"use-mirrors-for-repositories",level:2},{value:"config mysql in <code>application.yml</code>",id:"config-mysql-in-applicationyml",level:2},{value:"config mysql in pom",id:"config-mysql-in-pom",level:2}],m={toc:s};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"maven-howto"},"maven-howto"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#use-mirrors-for-repositories"},"use mirrors for repositories")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#config-mysql-in-applicationyml"},"config mysql in ",(0,a.kt)("inlineCode",{parentName:"a"},"application.yml"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#config-mysql-in-pom"},"config mysql in pom"))),(0,a.kt)("h2",{id:"use-mirrors-for-repositories"},"use mirrors for repositories"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!-- format --\x3e\n\n<settings>\n  ...\n  <mirrors>\n    <mirror>\n      <id>other-mirror</id>\n      <name>Other Mirror Repository</name>\n      <url>https://other-mirror.repo.other-company.com/maven2</url>\n      <mirrorOf>central</mirrorOf>\n    </mirror>\n  </mirrors>\n  ...\n</settings>\n")),(0,a.kt)("p",null,"ref:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://maven.apache.org/guides/mini/guide-mirror-settings.html"},"Maven \u2013 Guide to Mirror Settings"))),(0,a.kt)("p",null,"\u4e0b\u8f7d\u901f\u5ea6\uff1a ",(0,a.kt)("strong",{parentName:"p"},"\u534e\u4e3a\u4e91"),">\u963f\u91cc\u4e91>\u817e\u8baf\u4e91\n\u7528\u6237\u4f53\u9a8c\uff1a \u534e\u4e3a\u4e91>\u817e\u8baf\u4e91>\u963f\u91cc\u4e91"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://segmentfault.com/a/1190000022529672"},"Java\u5f00\u53d1\u8005\u5fc5\u5907\u795e\u5668Maven\u56fd\u5185\u955c\u50cf\u52a0\u901f\u6df1\u5ea6\u6d4b\u8bd5 - SegmentFault \u601d\u5426"))),(0,a.kt)("p",null,"\u8fd9\u5e16\u6709\u4e00\u4e9b\u4e89\u8bba\uff0c\u83ab\u8877\u4e00\u662f\uff0c\u9700\u8981\u81ea\u5df1\u6d4b\u8bd5\u3002\nTODO: \u6d4b\u8bd5\u662f\u5426\u6b63\u5728\u4f7f\u7528maven\u955c\u50cf\uff0c\u6d4b\u8bd5\u5176\u901f\u5ea6\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://zhuanlan.zhihu.com/p/71998219"},"\u5c06maven\u6e90\u6539\u4e3a\u56fd\u5185\u963f\u91cc\u4e91\u955c\u50cf - \u77e5\u4e4e"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://segmentfault.com/a/1190000039280184"},"Maven\u914d\u7f6e\u963f\u91cc\u4e91\u955c\u50cf - SegmentFault \u601d\u5426")))),(0,a.kt)("h2",{id:"config-mysql-in-applicationyml"},"config mysql in ",(0,a.kt)("inlineCode",{parentName:"h2"},"application.yml")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"spring:\n  datasource:\n    type: com.alibaba.druid.pool.DruidDataSource\n    druid:\n      url: jdbc:mysql://localhost:3306/RoyalTtiger\n      username: root\n      password: XXXXX\n      driver-class-name: com.mysql.cj.jdbc.Driver   # old: com.mysql.jdbc.Driver\n  servlet:\n    multipart:\n      max-file-size: 300MB\n      max-request-size: 800MB\n")),(0,a.kt)("p",null,"ref:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://spring.io/guides/gs/accessing-data-mysql/"},"Getting Started | Accessing data with MySQL"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/27981789/how-to-use-spring-boot-with-mysql-database-and-jpa"},"java - How to use Spring Boot with MySQL database and JPA? - Stack Overflow")))),(0,a.kt)("h2",{id:"config-mysql-in-pom"},"config mysql in pom"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n <groupId>mysql</groupId>\n <artifactId>mysql-connector-java</artifactId>\n</dependency>\n")),(0,a.kt)("p",null,"ref:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/46995281/maven-dependencies-springboot-and-mysql"},"java - Maven Dependencies SpringBoot and MySQL - Stack Overflow"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://www.appsdeveloperblog.com/add-mysql-support-to-spring-boot-web-app/"},"Add MySQL Support to Spring Boot Web App - Apps Developer Blog")))))}c.isMDXComponent=!0}}]);