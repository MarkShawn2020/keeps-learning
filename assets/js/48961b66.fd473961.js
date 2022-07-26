"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3990],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(r),d=a,k=c["".concat(u,".").concat(d)]||c[d]||m[d]||o;return r?n.createElement(k,i(i({ref:t},p),{},{components:r})):n.createElement(k,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=c;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},95404:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={},i="virtualbox",l={unversionedId:"OS/virtual-machine/virtualbox-howto",id:"OS/virtual-machine/virtualbox-howto",title:"virtualbox",description:"1. \u76d8\u7b26\u5207\u6362\uff08\u76d8\u5df2\u6ee1\uff09",source:"@site/docs/OS/virtual-machine/virtualbox-howto.md",sourceDirName:"OS/virtual-machine",slug:"/OS/virtual-machine/virtualbox-howto",permalink:"/keeps-learning/docs/OS/virtual-machine/virtualbox-howto",draft:!1,editUrl:"https://github.com/markshawn2020/keeps-learning/edit/master/docs/OS/virtual-machine/virtualbox-howto.md",tags:[],version:"current",lastUpdatedAt:1658857065,formattedLastUpdatedAt:"2022\u5e747\u670826\u65e5",frontMatter:{},sidebar:"docs",previous:{title:"ios",permalink:"/keeps-learning/docs/OS/iOS"},next:{title:"vmware howto",permalink:"/keeps-learning/docs/OS/virtual-machine/vmware-howto"}},u={},s=[{value:"\u76d8\u7b26\u5207\u6362\uff08\u76d8\u5df2\u6ee1\uff09",id:"\u76d8\u7b26\u5207\u6362\u76d8\u5df2\u6ee1",level:2},{value:"\u2705 \u5206\u8fa8\u7387\u5207\u6362",id:"-\u5206\u8fa8\u7387\u5207\u6362",level:2},{value:"\u2705 Fixed: <code>Develop on a Linux computer that supports VT-x or SVM</code>",id:"-fixed-develop-on-a-linux-computer-that-supports-vt-x-or-svm",level:2},{value:"\u2705 Fixed: <code>emulator: ERROR: Can&#39;t get kernel version from the kernel image file: &#39;/home/mark/android/prebuilts/qemu-kernel/arm/ranchu/kernel-qemu&#39;</code>",id:"-fixed-emulator-error-cant-get-kernel-version-from-the-kernel-image-file-homemarkandroidprebuiltsqemu-kernelarmranchukernel-qemu",level:2},{value:"\u542f\u7528Hypervisor(\u865a\u62df\u673a\u52a0\u901f)",id:"\u542f\u7528hypervisor\u865a\u62df\u673a\u52a0\u901f",level:2},{value:"\u8fd0\u884c\u6a21\u62df\u5668",id:"\u8fd0\u884c\u6a21\u62df\u5668",level:2}],p={toc:s};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"virtualbox"},"virtualbox"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#%E7%9B%98%E7%AC%A6%E5%88%87%E6%8D%A2%E7%9B%98%E5%B7%B2%E6%BB%A1"},"\u76d8\u7b26\u5207\u6362\uff08\u76d8\u5df2\u6ee1\uff09")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#white_check_mark-%E5%88%86%E8%BE%A8%E7%8E%87%E5%88%87%E6%8D%A2"},"\u2705 \u5206\u8fa8\u7387\u5207\u6362")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#white_check_mark-fixed-develop-on-a-linux-computer-that-supports-vt-x-or-svm"},"\u2705 Fixed: ",(0,a.kt)("inlineCode",{parentName:"a"},"Develop on a Linux computer that supports VT-x or SVM"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#white_check_mark-fixed-emulator-error-cant-get-kernel-version-from-the-kernel-image-file-homemarkandroidprebuiltsqemu-kernelarmranchukernel-qemu"},"\u2705 Fixed: ",(0,a.kt)("inlineCode",{parentName:"a"},"emulator: ERROR: Can't get kernel version from the kernel image file: '/home/mark/android/prebuilts/qemu-kernel/arm/ranchu/kernel-qemu'"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#%E5%90%AF%E7%94%A8hypervisor%E8%99%9A%E6%8B%9F%E6%9C%BA%E5%8A%A0%E9%80%9F"},"\u542f\u7528Hypervisor(\u865a\u62df\u673a\u52a0\u901f)")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#%E8%BF%90%E8%A1%8C%E6%A8%A1%E6%8B%9F%E5%99%A8"},"\u8fd0\u884c\u6a21\u62df\u5668"))),(0,a.kt)("h2",{id:"\u76d8\u7b26\u5207\u6362\u76d8\u5df2\u6ee1"},"\u76d8\u7b26\u5207\u6362\uff08\u76d8\u5df2\u6ee1\uff09"),(0,a.kt)("p",null,"\u5728\u89e3\u538bandroid\u6e90\u7801\u8fc7\u7a0b\u4e2d\uff0c\u53d1\u73b0windows\u5bbf\u4e3b\u673a\u7684C\u76d8\u7a7a\u95f4\u6025\u5267\u51cf\u5c11\uff0c\u8bf4\u660e\u5f53\u65f6\u5b89\u88c5virtualbox\u7684\u9ed8\u8ba4\u4f4d\u7f6e\u5728C\u76d8\uff0c\u4f46\u662f\u6211\u7684C\u76d8\u53ea\u6709200\u591aG\u3002"),(0,a.kt)("p",null,"\u67e5\u8be2\u4e86\u4e00\u70b9\u6587\u7ae0\u540e\uff0c\u53d1\u73b0\u53ea\u8981\u628a",(0,a.kt)("inlineCode",{parentName:"p"},"vdi"),"\u6587\u4ef6\u8f6c\u79fb\u5373\u53ef\u3002"),(0,a.kt)("p",null,"\u4e8e\u662f\u6211\u627e\u5230\u4e86C\u76d8\u76ee\u5f55\u4e0b\u7684virtualbox\u6587\u4ef6\u5939\uff0c\u7136\u540e\u5c06\u5b83\u6574\u4f53\u79fb\u5230D\u76d8\uff0c\u5e76\u4e14\u4fee\u6539virtualbox\u4e2d\u6240\u6709\u548c\u8def\u5f84\u76f8\u5173\u7684\u5c5e\u6027\u3002"),(0,a.kt)("h2",{id:"-\u5206\u8fa8\u7387\u5207\u6362"},"\u2705 \u5206\u8fa8\u7387\u5207\u6362"),(0,a.kt)("p",null,"\u5728\u865a\u62df\u673a\u5185\uff0c\u70b9\u51fb",(0,a.kt)("inlineCode",{parentName:"p"},"\u8bbe\u5907 | \u5b89\u88c5\u589e\u5f3a\u529f\u80fd"),"\uff0c\u88c5\u5b8c\u4e4b\u540e\uff0c\u5728\u684c\u9762\u4e0a\u4f1a\u6709\u4e2a\u6302\u8f7d\uff0c\u5b9e\u9645\u4e0a\u662f\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"/media/mark/"),"\u4e0b\u3002"),(0,a.kt)("p",null,"\u7136\u540e\u8fdb\u5165\u6587\u4ef6\u5939\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"sudo sh VBoxLinuxAdditions.run"),"\uff0c\u5c31\u80fd\u81ea\u52a8\u5b89\u88c5\u76f8\u5173\u589e\u5f3a\u5de5\u5177\uff0c\u63a5\u7740\u5728\u865a\u62df\u673a\u53f3\u4e0a\u89d2\u70b9\u51fb\u91cd\u542f\u5373\u53ef\u3002"),(0,a.kt)("p",null,"\u4e4b\u540e\u865a\u62df\u673a\u7684\u754c\u9762\u5c31\u53ef\u4ee5\u624b\u52a8\u62c9\u5347\u4e86\uff0c\u5e76\u4e14\u4e0d\u635f\u5931\u5206\u8fa8\u7387\uff0c\u5426\u5219\u57fa\u4e8e\u7cfb\u7edf\u5185\u7f6e\u7684\u663e\u793a\uff0c\u53ea\u53ef\u4ee5\u7f29\u653e\uff0c\u4f1a\u5f88\u6a21\u7cca\u3002"),(0,a.kt)("h2",{id:"-fixed-develop-on-a-linux-computer-that-supports-vt-x-or-svm"},"\u2705 Fixed: ",(0,a.kt)("inlineCode",{parentName:"h2"},"Develop on a Linux computer that supports VT-x or SVM")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/aosp-notes-1642426586567-5dd5004fa15434f9f54bbbaba0c464a62e21654e1922b3cf51b50e0886e6bbf5.png",alt:"picture 4"}),"  "),(0,a.kt)("p",null,"Solution: \u5173\u95ed\u865a\u62df\u673a\uff0c\u7136\u540e\u542f\u7528virtualbox\u91cc\u7684\u865a\u62df\u9009\u9879\u5373\u53ef\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/aosp-notes-1642477539269-0c2cf882af6d4dc2287d208df41471648a21a4759a39bf0c0bf3b4fffe158e5b.png",alt:"picture 5"}),"  "),(0,a.kt)("p",null,"Evidence: \u6253\u5f00Android studio\u91cc\u7684avd\uff0c\u5df2\u7ecf\u4e0d\u63d0\u793a\u865a\u62df\u5316\u62a5\u9519\u4e86\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/aosp-notes-1642477595429-2294709782ed8ec7740920ff48eb0660e561c223fc302d874464678b4158d6bb.png",alt:"picture 6"}),"  "),(0,a.kt)("p",null,"ref:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://forums.virtualbox.org/viewtopic.php?f=6&t=69076"},"virtualbox.org \u2022 View topic - VT-x error This computer does not support Intel Virtualizati"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://www.qnap.com/en/how-to/faq/article/how-to-enable-intel-vtx-and-amd-svm-for-qnap-nas"},"How to enable Intel VTx and AMD SVM for QNAP NAS? | QNAP"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/24340272/enabling-the-vt-x-inside-a-virtual-machine"},"linux - Enabling the VT-x inside a virtual machine - Stack Overflow")))),(0,a.kt)("h2",{id:"-fixed-emulator-error-cant-get-kernel-version-from-the-kernel-image-file-homemarkandroidprebuiltsqemu-kernelarmranchukernel-qemu"},"\u2705 Fixed: ",(0,a.kt)("inlineCode",{parentName:"h2"},"emulator: ERROR: Can't get kernel version from the kernel image file: '/home/mark/android/prebuilts/qemu-kernel/arm/ranchu/kernel-qemu'")),(0,a.kt)("p",null,"You should download one emulator first, such as in the android studio AVD."),(0,a.kt)("h2",{id:"\u542f\u7528hypervisor\u865a\u62df\u673a\u52a0\u901f"},"\u542f\u7528Hypervisor(\u865a\u62df\u673a\u52a0\u901f)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ ~/Android$ ./Sdk/emulator/emulator -accel-check\naccel:\n0\nKVM (version 12) is installed and usable.\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'\u279c  Android ./Sdk/emulator/emulator -accel-check\nProbeKVM: This user doesn\\\'t have permissions to use KVM (/dev/kvm).\nThe KVM line in /etc/group is: [kvm:x:998:mark]\n\nIf the current user has KVM permissions,\nthe KVM line in /etc/group should end with ":" followed by your username.\n\nIf we see LINE_NOT_FOUND, the kvm group may need to be created along with permissions:\n    sudo groupadd -r kvm\n    # Then ensure /lib/udev/rules.d/50-udev-default.rules contains something like:\n    # KERNEL=="kvm", GROUP="kvm", MODE="0660"\n    # and then run:\n    sudo gpasswd -a $USER kvm\n\nIf we see kvm:... but no username at the end, running the following command may allow KVM access:\n    sudo gpasswd -a $USER kvm\n\nYou may need to log out and back in for changes to take effect.\n\naccel:\n11\nThis user doesn\\\'t have permissions to use KVM (/dev/kvm).\nThe KVM line in /etc/group is: [kvm:x:998:mark]\n\nIf the current user has KVM permissions,\nthe KVM line in /etc/group should end with ":" followed by your username.\n\nIf we see LINE_NOT_FOUND, the kv\naccel\n')),(0,a.kt)("p",null,"ref:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.android.com/studio/run/emulator-acceleration#hypervisors"},"\u4e3a Android \u6a21\u62df\u5668\u914d\u7f6e\u786c\u4ef6\u52a0\u901f \xa0|\xa0 Android \u5f00\u53d1\u8005 \xa0|\xa0 Android Developers"))),(0,a.kt)("h2",{id:"\u8fd0\u884c\u6a21\u62df\u5668"},"\u8fd0\u884c\u6a21\u62df\u5668"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/aosp-notes-1642484534629-67ed469bdcfb204bdd23a52bdf55d2b1fa6239641dfa8b0165070dd834aecbf1.png",alt:"picture 8"})))}m.isMDXComponent=!0}}]);