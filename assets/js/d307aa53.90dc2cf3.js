"use strict";(self.webpackChunkSkillwBlog=self.webpackChunkSkillwBlog||[]).push([[9965],{3418:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>t,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(4848),o=n(8453);const i={sidebar_position:2,title:"\u4ece\u5bfc\u5165\u5f00\u59cb"},t="Pouvoir \u811a\u672c\u5bfc\u5165\u7c7b\u5bf9\u8c61",s={id:"Pouvoir/\u811a\u672c\u8fdb\u9636/\u5bfc\u5165",title:"\u4ece\u5bfc\u5165\u5f00\u59cb",description:"\u5728Pouvoir\u4e2d\u4f7f\u7528JavaScript\u7f16\u5199\u811a\u672c\u65f6\uff0c\u4f60\u53ef\u80fd\u4f1a\u5e0c\u671b\u4f7f\u7528\u7b80\u5316\u7684\u7c7b\u540d\u800c\u4e0d\u662f\u5197\u957f\u7684\u5b8c\u6574\u5305\u540d\u3002Pouvoir 1.4 \u63d0\u4f9b\u4e86\u51e0\u79cd\u65b9\u6cd5\u6765\u8fbe\u5230\u8fd9\u4e00\u76ee\u7684\u3002",source:"@site/docs/Pouvoir/\u811a\u672c\u8fdb\u9636/\u5bfc\u5165.md",sourceDirName:"Pouvoir/\u811a\u672c\u8fdb\u9636",slug:"/Pouvoir/\u811a\u672c\u8fdb\u9636/\u5bfc\u5165",permalink:"/docs/Pouvoir/\u811a\u672c\u8fdb\u9636/\u5bfc\u5165",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Pouvoir/\u811a\u672c\u8fdb\u9636/\u5bfc\u5165.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"\u4ece\u5bfc\u5165\u5f00\u59cb"},sidebar:"tutorialSidebar",previous:{title:"\u81ea\u7ed9\u81ea\u8db3",permalink:"/docs/Pouvoir/\u811a\u672c\u8fdb\u9636/\u81ea\u7ed9\u81ea\u8db3"},next:{title:"\u4f55\u65f6\u9192\u6765?",permalink:"/docs/Pouvoir/\u811a\u672c\u8fdb\u9636/\u4f55\u65f6\u9192\u6765"}},c={},l=[{value:"static \u51fd\u6570",id:"static-\u51fd\u6570",level:2},{value:"find \u51fd\u6570",id:"find-\u51fd\u6570",level:2},{value:"Packages \u5c5e\u6027",id:"packages-\u5c5e\u6027",level:2},{value:"java \u5bfc\u5165\u65b9\u6cd5",id:"java-\u5bfc\u5165\u65b9\u6cd5",level:2},{value:"Nashorn \u7684 Java.type \u65b9\u6cd5",id:"nashorn-\u7684-javatype-\u65b9\u6cd5",level:2},{value:"JavaImporter",id:"javaimporter",level:2}];function d(e){const a={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.h1,{id:"pouvoir-\u811a\u672c\u5bfc\u5165\u7c7b\u5bf9\u8c61",children:"Pouvoir \u811a\u672c\u5bfc\u5165\u7c7b\u5bf9\u8c61"}),"\n",(0,r.jsx)(a.p,{children:"\u5728Pouvoir\u4e2d\u4f7f\u7528JavaScript\u7f16\u5199\u811a\u672c\u65f6\uff0c\u4f60\u53ef\u80fd\u4f1a\u5e0c\u671b\u4f7f\u7528\u7b80\u5316\u7684\u7c7b\u540d\u800c\u4e0d\u662f\u5197\u957f\u7684\u5b8c\u6574\u5305\u540d\u3002Pouvoir 1.4 \u63d0\u4f9b\u4e86\u51e0\u79cd\u65b9\u6cd5\u6765\u8fbe\u5230\u8fd9\u4e00\u76ee\u7684\u3002"}),"\n",(0,r.jsx)(a.h2,{id:"static-\u51fd\u6570",children:"static \u51fd\u6570"}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"static"})," \u662f\u4e00\u4e2a\u9876\u7ea7\u51fd\u6570\uff0c\u7528\u4e8e\u5feb\u901f\u83b7\u53d6\u9759\u6001\u7c7b\u5bf9\u8c61\u3002"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-javascript",children:'// \u4f7f\u7528\u7c7b\u7684SimpleName\u6765\u83b7\u53d6\u9759\u6001\u7c7b\u5bf9\u8c61\nvar Core = static("Core");\nfunction isNumber(numStr) {\n  return Core.asDouble(numStr).isPresent; // \u68c0\u67e5\u5b57\u7b26\u4e32\u662f\u5426\u53ef\u4ee5\u8f6c\u6362\u4e3a\u6570\u5b57\n}\n'})}),"\n",(0,r.jsx)(a.h2,{id:"find-\u51fd\u6570",children:"find \u51fd\u6570"}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"find"})," \u51fd\u6570\u7528\u6765\u901a\u8fc7\u5b8c\u6574\u7684\u7c7b\u8def\u5f84\u6765\u83b7\u53d6\u9759\u6001\u7c7b\u5bf9\u8c61\u3002"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-javascript",children:'// \u4f7f\u7528\u5b8c\u6574\u8def\u5f84\u6765\u83b7\u53d6\u7c7b\u5bf9\u8c61\nvar Core = find("com.pouvoir.taboolib.common5.Core");\nfunction isNumber(numStr) {\n  return Core.asDouble(numStr).isPresent; // \u662f\u5426\u662f\u6570\u5b57\n}\n//TabooLib\u7c7b\u8def\u5f84\u53ef\u4ee5\u4f7f\u7528 > \u7b26\u53f7\u6765\u7f29\u77ed\u3002\nvar Core = find(">taboolib.common5.Core");\n'})}),"\n",(0,r.jsx)(a.h2,{id:"packages-\u5c5e\u6027",children:"Packages \u5c5e\u6027"}),"\n",(0,r.jsx)(a.p,{children:"Packages \u662f\u4e00\u4e2a\u7528\u6765\u5bfc\u5165\u7c7b\u6216\u5305\u7684\u9876\u7ea7\u5c5e\u6027\u3002"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-javascript",children:"// \u5bfc\u5165\u7c7b\u4f7f\u7528 Packages\nvar Core = Packages.com.pouvoir.taboolib.common5.Core;\n"})}),"\n",(0,r.jsx)(a.h2,{id:"java-\u5bfc\u5165\u65b9\u6cd5",children:"java \u5bfc\u5165\u65b9\u6cd5"}),"\n",(0,r.jsx)(a.p,{children:"Packages \u662f\u4e00\u4e2a\u7528\u6765\u5bfc\u5165\u7c7b\u6216\u5305\u7684\u9876\u7ea7\u5c5e\u6027\u3002"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-javascript",children:"// \u5bfc\u5165\u7c7b\u4f7f\u7528 java\nvar ArrayList = java.util.ArrayList;\nfunction newList() {\n  return new ArrayList();\n}\n"})}),"\n",(0,r.jsx)(a.h2,{id:"nashorn-\u7684-javatype-\u65b9\u6cd5",children:"Nashorn \u7684 Java.type \u65b9\u6cd5"}),"\n",(0,r.jsx)(a.p,{children:"Java.type \u53ef\u4ee5\u7528\u6765\u9ad8\u6548\u5bfc\u5165\u7c7b\u3002"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-javascript",children:'// \u4f7f\u7528 Java.type \u9ad8\u6548\u5bfc\u5165\u7c7b\nvar Core = Java.type("com.pouvoir.taboolib.common5.Core");\n'})}),"\n",(0,r.jsx)(a.h2,{id:"javaimporter",children:"JavaImporter"}),"\n",(0,r.jsx)(a.p,{children:"JavaImporter \u7ed3\u5408 with \u8bed\u53e5\u53ef\u4ee5\u4e00\u6b21\u6027\u5bfc\u5165\u591a\u4e2a\u7c7b\u3002"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-javascript",children:'// \u4f7f\u7528 JavaImporter \u548c with \u6765\u96c6\u4e2d\u5bfc\u5165\u591a\u4e2a\u7c7b\nvar imports = new JavaImporter(java.io, java.lang);\nwith (imports) {\n  var file = new File(__FILE__); // \u67e5\u627e\u5f53\u524d\u811a\u672c\u6240\u5728\u4f4d\u7f6e\n  print("Location: " + file.getAbsolutePath());\n}\n'})}),"\n",(0,r.jsx)(a.p,{children:"Pouvoir\u63d0\u4f9b\u4e86\u591a\u79cd\u65b9\u5f0f\u6765\u5bfc\u5165\u548c\u4f7f\u7528Java\u7c7b\uff0c\u4ee5\u7b80\u5316\u811a\u672c\u7f16\u5199\u8fc7\u7a0b\u4e2d\u7684\u7c7b\u8c03\u7528\u3002\u65e0\u8bba\u662f\u901a\u8fc7 static , find, Packages, java \u65b9\u6cd5\uff0c\u8fd8\u662f\u4f7f\u7528 Java.type \u548c JavaImporter\uff0c\u6bcf\u79cd\u65b9\u6cd5\u90fd\u6709\u5176\u4f7f\u7528\u573a\u666f\u548c\u4f18\u70b9\u3002"})]})}function u(e={}){const{wrapper:a}={...(0,o.R)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,a,n)=>{n.d(a,{R:()=>t,x:()=>s});var r=n(6540);const o={},i=r.createContext(o);function t(e){const a=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function s(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),r.createElement(i.Provider,{value:a},e.children)}}}]);