(self.webpackChunklite=self.webpackChunklite||[]).push([[7098],{353:(e,n,i)=>{"use strict";i.d(n,{Z:()=>d});var t=i(67294);function a(){return a=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t])}return e},a.apply(this,arguments)}var o=t.createElement("path",{d:"M18 2.5a.5.5 0 0 1 1 0V5h2.5a.5.5 0 0 1 0 1H19v2.5a.5.5 0 1 1-1 0V6h-2.5a.5.5 0 0 1 0-1H18V2.5zM7 7a1 1 0 0 1 1-1h3.5a.5.5 0 0 0 0-1H8a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V7z",fill:"currentColor"});const d=function(e){return t.createElement("svg",a({width:25,height:25,viewBox:"0 0 25 25",fill:"none"},e),o)}},91553:(e,n,i)=>{"use strict";i.d(n,{a:()=>o});var t=i(67294),a=i(43487);function o(e){var n=e.disabled,i=e.message,o=void 0===i?"Changes you made may not be saved.":i,d=(0,a.v9)((function(e){return e.client.hydrated}));t.useEffect((function(){if(!n&&d)return window.addEventListener("beforeunload",e),function(){window.removeEventListener("beforeunload",e)};function e(e){return e.preventDefault(),e.returnValue=o,o}}),[n,o,d])}},57477:(e,n,i)=>{"use strict";i.d(n,{_C:()=>l,$l:()=>c});var t=i(87329),a=i(98007),o=i(33974),d=i(12746),r=i(88398),l={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"AddToCatalogBase_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"isPublished"}},{kind:"FragmentSpread",name:{kind:"Name",value:"SusiClickable_post"}}]}}].concat((0,t.Z)(a.qU.definitions))},s={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"AddToCatalogBaseQuery_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"viewerEdge"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"catalogsConnection"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"catalogsContainingThis"},arguments:[{kind:"Argument",name:{kind:"Name",value:"type"},value:{kind:"EnumValue",value:"LISTS"}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"catalogId"}},{kind:"Field",name:{kind:"Name",value:"catalogItemIds"}}]}},{kind:"Field",name:{kind:"Name",value:"predefinedContainingThis"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"catalogId"}},{kind:"Field",name:{kind:"Name",value:"predefined"}},{kind:"Field",name:{kind:"Name",value:"catalogItemIds"}}]}}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"editCatalogItemsMutation_postViewerEdge"}},{kind:"FragmentSpread",name:{kind:"Name",value:"useAddItemToPredefinedCatalog_postViewerEdge"}}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"WithToggleInsideCatalog_post"}}]}}].concat((0,t.Z)(o.S.definitions),(0,t.Z)(d.F.definitions),(0,t.Z)(r.m.definitions))},c={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"AddToCatalogBaseQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"postId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"isPostKind"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Boolean"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"postResult"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"postId"}}}],directives:[{kind:"Directive",name:{kind:"Name",value:"include"},arguments:[{kind:"Argument",name:{kind:"Name",value:"if"},value:{kind:"Variable",name:{kind:"Name",value:"isPostKind"}}}]}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"AddToCatalogBaseQuery_post"}}]}}]}}]}}].concat((0,t.Z)(s.definitions))}},23768:(e,n,i)=>{"use strict";i.d(n,{a:()=>se});var t=i(22122),a=i(81253),o=i(34699),d=i(64718),r=i(67294),l=i(96156),s=i(87329),c=i(39210),u=i(65368),m=i(77355),v=i(93310),g=i(87691),k=i(14646),p=i(78285),f=i(14813),b=i(87529),y=i(31379),N=i(75221);function h(){return h=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t])}return e},h.apply(this,arguments)}var S=r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2.73 3.08A2.21 2.21 0 0 1 5 .94c1.26 0 2.27.97 2.27 2.14v2.44H2.73V3.08zm5.46 2.44V3.08C8.18 1.38 6.74 0 5 0a3.13 3.13 0 0 0-3.18 3.08v2.44c-.49 0-.95.2-1.29.55A1.9 1.9 0 0 0 0 7.39v3.74a1.9 1.9 0 0 0 .53 1.32A1.8 1.8 0 0 0 1.8 13H8.2c.48 0 .94-.2 1.28-.55.34-.35.53-.82.53-1.32V7.4a1.9 1.9 0 0 0-.53-1.32 1.8 1.8 0 0 0-1.28-.55z",fill:"#A8A8A8"});const C=function(e){return r.createElement("svg",h({width:10,height:13,viewBox:"0 0 10 13",fill:"none"},e),S)};var I=i(92305),E=i(54758);function P(e){var n,i,t=e.children,a=e.target,d=e.kind,l=e.catalog,s=e.viewer,c=r.useMemo((function(){if(l.predefined){var e,n=null===(e=a.viewerEdge.catalogsConnection)||void 0===e?void 0:e.predefinedContainingThis.find((function(e){return e.predefined===l.predefined}));return[!!n,null==n?void 0:n.catalogItemIds]}var i,t=null===(i=a.viewerEdge.catalogsConnection)||void 0===i?void 0:i.catalogsContainingThis.find((function(e){return e.catalogId===l.id}));return[!!t,null==t?void 0:t.catalogItemIds]}),[l.predefined,l.id,a.viewerEdge]),u=(0,o.Z)(c,2),m=u[0],v=u[1],g=(0,E.qY)(s.id,l.id,l.version,a.id,d,null!==(n=l.predefined)&&void 0!==n?n:void 0),k=(0,o.Z)(g,2),p=k[0],f=k[1].loading,b=(0,E.Yi)(s.id,l.id,l.version,[{entityId:a.id,entityType:d,catalogItemIds:v||[]}],null!==(i=l.predefined)&&void 0!==i?i:void 0),y=(0,o.Z)(b,2),N=y[0],h=y[1].loading;return t({toggleInsideCatalog:m?N:p,isInsideCatalog:m,loading:f||h})}var T={display:"flex",alignItems:"center",justifyContent:"space-between",paddingBottom:"16px",paddingRight:"5px"},O=function(e){return{marginBottom:"1px","& path":{fill:e.colorTokens.border.neutral.secondary.base}}};function w(e){var n=e.catalog,i=e.target,t=e.kind,a=e.viewer,o=(0,k.I)();return r.createElement(P,{viewer:a,target:i,kind:t,catalog:n},(function(e){var i=e.toggleInsideCatalog,t=e.isInsideCatalog,a=e.loading,d=n.predefined?(0,I.S6)(n.predefined):n.name;return r.createElement("div",{className:o(T)},r.createElement(y.X,{key:n.id,checked:t,checkboxStyle:"OBVIOUS",onChange:i,disabled:a||n.visibility===N.n2.LOCKED,textScale:"L",clampText:1},d),n.visibility!==N.n2.PUBLIC&&r.createElement(m.x,{paddingLeft:"8px"},r.createElement(C,{className:o(O)})))}))}function F(e){var n=e.target,i=e.kind,t=e.catalogs,a=e.isLoading,o=e.viewer,d=e.fetchMore,l=e.scrollableEl;return a?r.createElement(m.x,{display:"flex",justifyContent:"center",padding:"40px 0"},r.createElement(g.F,{color:"DARKER",scale:"L",tag:"div"},r.createElement(b.T,null))):t?r.createElement(f.P,{fetchMore:d,scrollableEl:l},t.map((function(e){return r.createElement(w,{viewer:o,key:e.id,catalog:e,target:n,kind:i})}))):null}function D(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function j(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?D(Object(i),!0).forEach((function(n){(0,l.Z)(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):D(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}var A={maxHeight:"240px",overflowY:"auto",padding:"24px 20px 16px 24px"};function V(e){var n,i,t,a=e.target,o=e.kind,l=e.showCreateModal,f=e.hidePanel,b=e.viewer,y=e.addToPredefinedLoading,N=r.useRef(null),h=(0,k.I)(),S=(0,c.Ln)({limit:c.W,userId:b.id}),C=(0,p.w)(),I=(0,d.a)(u.D,{variables:S,skip:y}),E=I.data,P=I.error,T=I.loading,O=I.fetchMore,w=y||T;r.useEffect((function(){P&&C({toastStyle:"RETRYABLE_ERROR",duration:4e3})}),[P]);var D,V=r.useCallback((function(){l(),f()}),[l,f]),_=null==E?void 0:E.catalogsByUser.catalogs;return _&&"Catalog"===(null==E||null===(n=E.readingList)||void 0===n?void 0:n.__typename)&&(_=[E.readingList].concat((0,s.Z)(_))),null!=E&&null!==(i=E.catalogsByUser)&&void 0!==i&&null!==(t=i.paging)&&void 0!==t&&t.nextPageCursor&&(D=function(){return O({variables:j(j({},S),{},{pagingOptions:j(j({},S.pagingOptions),{},{cursor:{id:E.catalogsByUser.paging.nextPageCursor.id}})})})}),r.createElement(m.x,{width:"300px"},r.createElement("div",{className:h(A),ref:N},r.createElement(F,{target:a,kind:o,viewer:b,catalogs:_,isLoading:w,fetchMore:D,scrollableEl:N.current})),!w&&r.createElement(m.x,{borderTop:"neutral.primary",padding:"20px 24px 24px"},r.createElement(g.F,{color:"ACCENT",scale:"L"},r.createElement(v.r,{onClick:V},"Create new list"))))}var _=i(63508),x=i(50361),B=i.n(x),L=i(21919),Z=i(12476),R=i(18627),M=i(11462),U=i(12746);function H(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function z(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?H(Object(i),!0).forEach((function(n){(0,l.Z)(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):H(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}var K="temp-catalog-id",Q=i(73917),Y=i(66227),q=i(68894),G=i(57477);function W(){return W=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t])}return e},W.apply(this,arguments)}var X=r.createElement("path",{d:"M17.5 1.25a.5.5 0 0 1 1 0v2.5H21a.5.5 0 0 1 0 1h-2.5v2.5a.5.5 0 0 1-1 0v-2.5H15a.5.5 0 0 1 0-1h2.5v-2.5zm-11 4.5a1 1 0 0 1 1-1H11a.5.5 0 0 0 0-1H7.5a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V5.75z",fill:"#000"});const $=function(e){return r.createElement("svg",W({width:24,height:24,viewBox:"0 0 24 24",fill:"none"},e),X)};function J(){return J=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t])}return e},J.apply(this,arguments)}var ee=r.createElement("path",{d:"M7.5 3.75a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-14a2 2 0 0 0-2-2h-9z",fill:"#000"});const ne=function(e){return r.createElement("svg",J({width:24,height:24,viewBox:"0 0 24 24",fill:"none"},e),ee)};var ie=function(e){return{"& path":{fill:e.colorTokens.border.neutral.secondary.base}}},te=function(e){return{"& path":{fill:e.colorTokens.foreground.neutral.primary.hover}}},ae=function(){var e=(0,k.I)();return r.createElement($,{className:e(ie)})},oe=function(){var e=(0,k.I)();return r.createElement(ne,{className:e(te)})};function de(e){return e.insideACatalog?r.createElement(oe,null):r.createElement(ae,null)}var re=["viewer","defaultToBookmarkIcon"];function le(e){var n=e.children,i=e.isPanelVisible,t=e.hidePanel,a=e.togglePanel,d=e.target,l=e.kind,s=e.viewer,c=e.bookmarkIcon,u=e.isInACatalog,m=e.isInReadingList,v=e.catalogsCount,g=e.popoverDisplay,k=(0,q.O)(!1),p=(0,o.Z)(k,3),f=p[0],b=p[1],y=p[2],h=function(e,n,i,t){var a=(0,R.A)(),d=(0,L.D)(U.Q,{variables:{type:n,operation:{preprend:{type:t,id:i}}},optimisticResponse:{addToPredefinedCatalog:{__typename:"AddToPredefinedCatalogSucces",version:E.xt,insertedItem:{__typename:"CatalogItemV2",catalogId:K,catalogItemId:E.PH}}},onCompleted:function(e){if("AddToPredefinedCatalogSucces"===e.addToPredefinedCatalog.__typename&&t===N.ej.POST){var n=e.addToPredefinedCatalog.insertedItem;a.event("post.addToList",{listId:n.catalogId,postId:n.catalogItemId})}},update:function(a,o){var d,r=null===(d=o.data)||void 0===d?void 0:d.addToPredefinedCatalog;if("AddToPredefinedCatalogSucces"===(null==r?void 0:r.__typename)){var l,s,c=r.insertedItem,u=r.version;if(c.catalogId!==K&&((0,Z.UV)(a,c.catalogId,u),(0,Z.Rx)(a,c.catalogId,[c.catalogItemId],t)),t===N.ej.POST){l="PostViewerEdge:".concat((0,M.Q)(i,e)),s=U.F;var m=a.readFragment({id:l,fragment:s});if(null!=m&&m.catalogsConnection){var v=B()(m.catalogsConnection.predefinedContainingThis),g=v.findIndex((function(e){return e.predefined===n}));if(-1!==g)v[g].catalogItemIds.push(c.catalogItemId);else{var k={catalogId:c.catalogId,predefined:n,version:u,catalogItemIds:[c.catalogItemId]};v.push(k)}a.writeFragment({id:l,fragment:s,data:z(z({},m),{},{catalogsConnection:z(z({},m.catalogsConnection),{},{predefinedContainingThis:v})})})}}}}}),r=(0,o.Z)(d,2);return{addToPredefined:r[0],addToPredefinedLoading:r[1].loading}}(s.id,N.l8.READING_LIST,d.id,l),S=h.addToPredefined,C=h.addToPredefinedLoading,I=r.useCallback((function(){a(),m||u||S()}),[a,u,m,S]);return r.createElement(Q.J,{isVisible:i,popoverRenderFn:function(){return r.createElement(V,{showCreateModal:b,hidePanel:t,target:d,kind:l,viewer:s,addToPredefinedLoading:C})},hide:t,targetDistance:15,display:g},r.createElement(_.a,{isVisible:f,hide:y,target:d,kind:l,viewer:s}),null==n?void 0:n({onClick:I,bookmarkIcon:c,catalogsCount:v,isPanelVisible:i}))}function se(e){var n,i,o,l=e.viewer,s=e.defaultToBookmarkIcon,c=(0,a.Z)(e,re),u=r.useMemo((function(){return c.kind===N.ej.POST?{postId:c.target.id,isPostKind:!0}:{postId:"",isPostKind:!1}}),[c.kind,c.target]),m=(0,d.a)(G.$l,{ssr:!1,variables:u}).data,v=null,g=null;"Post"===(null==m||null===(n=m.postResult)||void 0===n?void 0:n.__typename)&&(v=m.postResult.viewerEdge.catalogsConnection,g=m.postResult);var k=(null===(i=v)||void 0===i?void 0:i.catalogsContainingThis)&&v.catalogsContainingThis.length>0,p=r.useMemo((function(){var e,n;return!!(null===(e=v)||void 0===e||null===(n=e.predefinedContainingThis)||void 0===n?void 0:n.find((function(e){return e.predefined===N.l8.READING_LIST})))}),[v]),f=r.useMemo((function(){var e;return((null===(e=v)||void 0===e?void 0:e.catalogsContainingThis.length)||0)+(p?1:0)}),[null===(o=v)||void 0===o?void 0:o.catalogsContainingThis.length,p]),b=r.createElement(de,{insideACatalog:!!k||p});return u.isPostKind?l&&v&&g?r.createElement(Y.B,null,(function(e){var n=e.isVisible,i=e.toggle,a=e.hide;return r.createElement(le,(0,t.Z)({},c,{target:g,viewer:l,isPanelVisible:n,togglePanel:i,hidePanel:a,bookmarkIcon:b,isInACatalog:!!k,isInReadingList:p,catalogsCount:f}))})):s||!c.children?b:c.children({onClick:function(){return null},bookmarkIcon:b,catalogsCount:f,isPanelVisible:!1,isDisabled:!0}):null}},84130:(e,n,i)=>{"use strict";i.d(n,{G:()=>o});var t=i(87329),a=i(57477),o={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"AddToCatalogBookmarkButton_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"AddToCatalogBase_post"}}]}}].concat((0,t.Z)(a._C.definitions))}},70929:(e,n,i)=>{"use strict";i.d(n,{o:()=>h});var t=i(22122),a=i(81253),o=i(96156),d=i(67294),r=i(6443),l=i(26350),s=i(78817),c=i(30020),u=i(14646),m=i(75221),v=i(353),g=i(23768),k=["susiEntry","susiActionUrl","rules","testId","targetDistance"];function p(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}var f=function(e){return{color:e.colorTokens.foreground.neutral.secondary.base,"&:hover":{color:e.colorTokens.foreground.neutral.primary.hover}}},b=function(e,n){return function(i){var t=i.colorTokens.foreground.neutral.primary.hover,a=i.colorTokens.foreground.neutral.secondary.base;return function(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?p(Object(i),!0).forEach((function(n){(0,o.Z)(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):p(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}({padding:"8px 2px",":hover:not(:disabled) svg path":{fill:n?a:t},":focus svg path":{fill:n?a:t},cursor:n?"not-allowed":"pointer",opacity:n?.3:void 0,"& svg path":{fill:a}},e)}},y="Add to list bookmark button",N=function(e){var n=e.bookmarkIcon,i=e.onClick,t=e.isPanelVisible,a=e.rules,o=e.disabled,r=e.testId;return d.createElement(s.P,{ariaControls:"addToCatalogBookmarkButton",ariaLabel:y,ariaExpanded:t?"true":"false",onClick:i,rules:b(a),disabled:o,testId:r},n)};function h(e){var n=e.susiEntry,i=void 0===n?"list":n,o=e.susiActionUrl,s=e.rules,p=e.testId,h=e.targetDistance,S=void 0===h?10:h,C=(0,a.Z)(e,k),I=(0,u.I)(),E=(0,r.H)().value,P=C.kind===m.ej.POST,T=P?C.target.isPublished:void 0;return P&&!T?d.createElement(c._,{placement:"top",targetDistance:S,tooltipText:"You cannot Save a draft"},d.createElement("div",{className:I(b(s,!0)),"data-testid":p},d.createElement(v.Z,{className:I(f),"aria-label":y,disabled:!0}))):E?d.createElement(c._,{placement:"top",targetDistance:S,tooltipText:"Save"},d.createElement(g.a,(0,t.Z)({},C,{viewer:E}),(function(e){var n=e.onClick,i=e.bookmarkIcon,t=e.isPanelVisible,a=e.isDisabled;return d.createElement(N,{bookmarkIcon:i,onClick:n,isPanelVisible:t,rules:s,disabled:a,testId:p})}))):d.createElement(c._,{placement:"top",targetDistance:S,tooltipText:"Save"},d.createElement(l.R,{operation:"register",susiEntry:i,actionUrl:o,testId:p,post:P?C.target:void 0},d.createElement(v.Z,{className:I([f,s]),"aria-label":y})))}},12746:(e,n,i)=>{"use strict";i.d(n,{F:()=>t,Q:()=>a});var t={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"useAddItemToPredefinedCatalog_postViewerEdge"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"PostViewerEdge"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"catalogsConnection"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"predefinedContainingThis"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"catalogId"}},{kind:"Field",name:{kind:"Name",value:"version"}},{kind:"Field",name:{kind:"Name",value:"predefined"}},{kind:"Field",name:{kind:"Name",value:"catalogItemIds"}}]}}]}}]}}]},a={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"AddToPredefinedCatalog"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"type"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"PredefinedCatalogType"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"operation"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"PredefinedCatalogAddOperationInput"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"addToPredefinedCatalog"},arguments:[{kind:"Argument",name:{kind:"Name",value:"type"},value:{kind:"Variable",name:{kind:"Name",value:"type"}}},{kind:"Argument",name:{kind:"Name",value:"operation"},value:{kind:"Variable",name:{kind:"Name",value:"operation"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"AddToPredefinedCatalogSucces"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"version"}},{kind:"Field",name:{kind:"Name",value:"insertedItem"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"catalogItemId"}},{kind:"Field",name:{kind:"Name",value:"catalogId"}}]}}]}}]}}]}}]}},93403:(e,n,i)=>{"use strict";i.d(n,{z:()=>d});var t=i(87329),a=i(98007),o=i(84130),d={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"BookmarkButton_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"visibility"}},{kind:"FragmentSpread",name:{kind:"Name",value:"SusiClickable_post"}},{kind:"FragmentSpread",name:{kind:"Name",value:"AddToCatalogBookmarkButton_post"}}]}}].concat((0,t.Z)(a.qU.definitions),(0,t.Z)(o.G.definitions))}},50455:(e,n,i)=>{"use strict";i.d(n,{e:()=>l});var t=i(67294),a=i(70929),o=i(75221),d=i(43487),r=i(50458);function l(e){var n=e.post,i=e.susiEntry,l=e.rules,s=e.targetDistance,c=e.testId,u=n.id,m=n.visibility,v=(0,d.v9)((function(e){return e.config.authDomain}));return m===o.Wn.UNLISTED?null:t.createElement(a.o,{kind:o.ej.POST,target:n,rules:l,susiEntry:i,susiActionUrl:(0,r.XE)(v,u),targetDistance:s,testId:c})}},93647:(e,n,i)=>{"use strict";i.d(n,{C:()=>t});var t={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"auroraHooks_publisher"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Publisher"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"isAuroraEligible"}},{kind:"Field",name:{kind:"Name",value:"isAuroraVisible"}},{kind:"Field",name:{kind:"Name",value:"viewerEdge"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"isEditor"}}]}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"isAuroraVisible"}}]}}]}}]}},60448:(e,n,i)=>{"use strict";i.d(n,{T:()=>d});var t=i(34699),a=i(67294),o=i(62896),d=function(){var e=a.useState(!1),n=(0,t.Z)(e,2),i=n[0],d=n[1];return a.useEffect((function(){d((0,o.ic)(navigator.userAgent))}),[]),i}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/7098.7bbb418a.chunk.js.map