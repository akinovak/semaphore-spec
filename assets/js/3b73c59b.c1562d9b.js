"use strict";(self.webpackChunksemaphore_spec=self.webpackChunksemaphore_spec||[]).push([[568],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=s(r),f=o,m=d["".concat(c,".").concat(f)]||d[f]||l[f]||a;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6791:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],u={sidebar_position:8},c="Security audit",s={unversionedId:"audit",id:"audit",isDocsHomePage:!1,title:"Security audit",description:"The Ethereum Foundation and [POA",source:"@site/docs/audit.md",sourceDirName:".",slug:"/audit",permalink:"/semaphore-spec/audit",editUrl:"https://github.com/akinovak/semaphore-spec/edit/main/docs/audit.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Multi-party trusted setup",permalink:"/semaphore-spec/trustedsetup"},next:{title:"Credits",permalink:"/semaphore-spec/creditsandresources"}},p=[],l={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"security-audit"},"Security audit"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://ethereum.org/"},"Ethereum Foundation")," and ",(0,a.kt)("a",{parentName:"p",href:"https://www.poa.network/"},"POA\nNetwork")," commissioned ",(0,a.kt)("a",{parentName:"p",href:"https://www.abdk.consulting"},"ABDK\nConsulting")," to audit the source code of Semaphore\nas well as relevant circuits in\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/iden3/circomlib"},"circomlib"),", which contains components\nwhich the Semaphore zk-SNARK uses."),(0,a.kt)("p",null,"The summary of the audit results can be found\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/appliedzkp/semaphore/tree/master/audit"},"here"),". After three\nrounds of fixes, all security and performance issues were fixed, and the few\nremaining issues are minor and do not affect security."))}d.isMDXComponent=!0}}]);