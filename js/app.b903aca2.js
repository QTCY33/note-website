(function(t){function e(e){for(var o,r,i=e[0],c=e[1],s=e[2],d=0,l=[];d<i.length;d++)r=i[d],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&l.push(a[r][0]),a[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);f&&f(e);while(l.length)l.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var t,e=0;e<u.length;e++){for(var n=u[e],o=!0,r=1;r<n.length;r++){var i=n[r];0!==a[i]&&(o=!1)}o&&(u.splice(e--,1),t=c(c.s=n[0]))}return t}var o={},r={app:0},a={app:0},u=[];function i(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-431e391c":"27929721","chunk-0d05513c":"ffa51aea","chunk-51a9ba70":"41a7b902","chunk-469f527a":"4f103bf0","chunk-473dd315":"15c73864"}[t]+".js"}function c(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-431e391c":1,"chunk-0d05513c":1,"chunk-51a9ba70":1,"chunk-469f527a":1,"chunk-473dd315":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var o="css/"+({}[t]||t)+"."+{"chunk-431e391c":"447d3081","chunk-0d05513c":"8e29b1f3","chunk-51a9ba70":"239430d8","chunk-469f527a":"13e87227","chunk-473dd315":"1e7ae376"}[t]+".css",a=c.p+o,u=document.getElementsByTagName("link"),i=0;i<u.length;i++){var s=u[i],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===o||d===a))return e()}var l=document.getElementsByTagName("style");for(i=0;i<l.length;i++){s=l[i],d=s.getAttribute("data-href");if(d===o||d===a)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var o=e&&e.target&&e.target.src||a,u=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=o,delete r[t],f.parentNode.removeChild(f),n(u)},f.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){r[t]=0})));var o=a[t];if(0!==o)if(o)e.push(o[2]);else{var u=new Promise((function(e,n){o=a[t]=[e,n]}));e.push(o[2]=u);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=i(t);var l=new Error;s=function(e){d.onerror=d.onload=null,clearTimeout(f);var n=a[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+o+": "+r+")",l.name="ChunkLoadError",l.type=o,l.request=r,n[1](l)}a[t]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(e)},c.m=t,c.c=o,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)c.d(n,o,function(e){return t[e]}.bind(null,o));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var f=d;u.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"20be":function(t,e,n){"use strict";n("6ead")},"2eab":function(t,e){t.exports={baseURL:"https://note-server.hunger-valley.com"}},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("sidebar"),n("router-view")],1)},a=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"sidebar"}},[n("avatar"),n("div",{staticClass:"icons"},[n("router-link",{attrs:{to:"/note",title:"笔记"}},[n("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#icon-a-jibijilianxibianji"}})])]),n("router-link",{attrs:{to:"/notebooks",title:"笔记本"}},[n("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#icon-a-bijibenbiji"}})])]),n("router-link",{attrs:{to:"/trash",title:"回收站"}},[n("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#icon-huishouzhan"}})])])],1),n("div",{staticClass:"logout"},[n("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"},on:{click:t.onLogout}},[n("use",{attrs:{"xlink:href":"#icon-logout"}})])])],1)},i=[],c=n("5530"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{attrs:{title:t.username}},[t._v(t._s(t.slug))])},d=[],l=n("2f62"),f={data:function(){return{}},created:function(){this.setUser()},methods:Object(c["a"])({},Object(l["b"])({setUser:"checkLogin"})),computed:Object(c["a"])({},Object(l["c"])(["username","slug"]))},h=f,p=(n("20be"),n("2877")),b=Object(p["a"])(h,s,d,!1,null,"f9b23426",null),m=b.exports,k={components:{avatar:m},methods:Object(c["a"])(Object(c["a"])({},Object(l["b"])(["logout"])),{},{onLogout:function(){this.logout({path:"/login"})}})},g=k,v=(n("845f"),Object(p["a"])(g,u,i,!1,null,"1b893c35",null)),N=v.exports,I={name:"app",components:{sidebar:N}},T=I,E=(n("034f"),Object(p["a"])(T,r,a,!1,null,null,null)),A=E.exports,y=(n("d3b7"),n("3ca3"),n("ddb0"),n("ac1f"),n("8c4f"));o["default"].use(y["a"]);var w=new y["a"]({routes:[{path:"/",alias:"/notebooks",component:function(){return n.e("chunk-473dd315").then(n.bind(null,"0028"))}},{path:"/login",component:function(){return n.e("chunk-469f527a").then(n.bind(null,"578a"))}},{path:"/note",component:function(){return Promise.all([n.e("chunk-431e391c"),n.e("chunk-51a9ba70")]).then(n.bind(null,"128e"))}},{path:"/trash",component:function(){return Promise.all([n.e("chunk-431e391c"),n.e("chunk-0d05513c")]).then(n.bind(null,"137e"))}}]}),O=y["a"].prototype.push,P=y["a"].prototype.replace;y["a"].prototype.push=function(t){return O.call(this,t).catch((function(t){return t}))},y["a"].prototype.replace=function(t){return P.call(this,t).catch((function(t){return t}))};var j=n("5c96"),L=n.n(j),D=(n("0fae"),n("7db0"),n("4de4"),n("4e82"),n("159b"),n("5319"),n("62c3")),C=n.n(D),_=n("2eab"),x=n.n(_);function S(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise((function(o,r){var a={url:t,method:e,validateStatus:function(t){return t>=200&&t<300||400===t}};"get"===e.toLowerCase()?a.params=n:a.data=n,C()(a).then((function(t){200===t.status?o(t.data):(j["Message"].error(t.data.msg),r(t.data))})).catch((function(t){j["Message"].error(t.data.msg),r({msg:"网络异常"})}))}))}C.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",C.a.defaults.baseURL=x.a.baseURL,C.a.defaults.withCredentials=!0;var U=n("53ca");function G(t){var e="object"===Object(U["a"])(t)?t:new Date(t),n=e.getTime(),o=Date.now(),r=o-n,a="";switch(!0){case r<6e4:a="刚刚";break;case r<36e5:a=Math.floor(r/6e4)+"分钟前";break;case r<864e5:a=Math.floor(r/36e5)+"小时前";break;default:a=Math.floor(r/864e5)+"天前"}return a}var M={GET:"/notebooks",ADD:"/notebooks",UPDATE:"/notebooks/:id",DELETE:"/notebooks/:id"},F={getAll:function(){return new Promise((function(t,e){S(M.GET).then((function(e){e.data=e.data.sort((function(t,e){return t.createdAt<e.createdAt})),e.data.forEach((function(t){t.createdAtFriendly=G(t.createdAt),t.updatedAtFriendly=G(t.updatedAt)})),t(e)})).catch((function(t){e(t)}))}))},updateNotebook:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{title:""},n=e.title,o=void 0===n?"":n;return S(M.UPDATE.replace(":id",t),"PATCH",{title:o})},deleteNotebook:function(t){return S(M.DELETE.replace(":id",t),"DELETE")},addNotebook:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{title:""},e=t.title,n=void 0===e?"":e;return new Promise((function(t,e){S(M.ADD,"POST",{title:n}).then((function(e){e.data.createdAtFriendly=G(e.data.createdAt),e.data.updatedAtFriendly=G(e.data.updatedAt),t(e)})).catch((function(t){e(t)}))}))}},R={notebooks:null,curBookId:null},B={notebooks:function(t){return t.notebooks||[]},curBook:function(t){return Array.isArray(t.notebooks)?t.curBookId?t.notebooks.find((function(e){return e.id==t.curBookId}))||{}:t.notebooks[0]||{}:{}}},H={setNotebooks:function(t,e){t.notebooks=e.notebooks},addNotebook:function(t,e){t.notebooks.unshift(e.notebook)},updateNotebook:function(t,e){var n=t.notebooks.find((function(t){return t.id==e.notebookId}))||{};n.title=e.title},deleteNotebook:function(t,e){t.notebooks=t.notebooks.filter((function(t){return t.id!=e.notebookId}))},setCurBook:function(t,e){t.curBookId=e.curBookId}},$={getNotebooks:function(t){var e=t.commit;return F.getAll().then((function(t){e("setNotebooks",{notebooks:t.data})}))},addNotebook:function(t,e){var n=t.commit;return F.addNotebook({title:e.title}).then((function(t){n("addNotebook",{notebook:t.data}),j["Message"].success(t.msg)}))},updateNotebook:function(t,e){var n=t.commit;return F.updateNotebook(e.notebookId,{title:e.title}).then((function(t){n("updateNotebook",{notebookId:e.notebookId,title:e.title}),j["Message"].success(t.msg)}))},deleteNotebook:function(t,e){var n=t.commit;return F.deleteNotebook(e.notebookId).then((function(t){n("deleteNotebook",{notebookId:e.notebookId}),j["Message"].success(t.msg)}))}},q={state:R,getters:B,mutations:H,actions:$},J=(n("d81d"),{GET:"/notes/from/:notebookId",ADD:"/notes/to/:notebookId",UPDATE:"/notes/:noteId",DELETE:"/notes/:noteId"}),V={getAll:function(t){var e=t.notebookId;return new Promise((function(t,n){S(J.GET.replace(":notebookId",e)).then((function(e){e.data=e.data.map((function(t){return t.createdAtFriendly=G(t.createdAt),t.updatedAtFriendly=G(t.updatedAt),t})).sort((function(t,e){return t.updatedAt<e.updatedAt})),t(e)})).catch((function(t){n(t)}))}))},updateNote:function(t,e){var n=t.noteId,o=e.title,r=e.content;return S(J.UPDATE.replace(":noteId",n),"PATCH",{title:o,content:r})},deleteNote:function(t){var e=t.noteId;return S(J.DELETE.replace(":noteId",e),"DELETE")},addNote:function(t){var e=t.notebookId,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{title:"",content:""},o=n.title,r=void 0===o?"":o,a=n.content,u=void 0===a?"":a;return new Promise((function(t,n){S(J.ADD.replace(":notebookId",e),"POST",{title:r,content:u}).then((function(e){e.data.createdAtFriendly=G(e.data.createdAt),e.data.updatedAtFriendly=G(e.data.updatedAt),t(e)})).catch((function(t){n(t)}))}))}},z={notes:null,curNoteId:null},K={notes:function(t){return t.notes||[]},curNote:function(t){return Array.isArray(t.notes)?t.curNoteId?t.notes.find((function(e){return e.id==t.curNoteId}))||{}:t.notes[0]||{}:{}}},Q={setNote:function(t,e){t.notes=e.notes},addNote:function(t,e){t.notes.unshift(e.note)},updateNote:function(t,e){var n=t.notes.find((function(t){return t.id===e.noteId}))||{};n.title=e.title,n.content=e.content},deleteNote:function(t,e){t.notes=t.notes.filter((function(t){return t.id!==e.noteId}))},setCurNote:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.curNoteId=e.curNoteId}},W={getNotes:function(t,e){var n=t.commit,o=e.notebookId;return V.getAll({notebookId:o}).then((function(t){n("setNote",{notes:t.data})}))},addNote:function(t,e){var n=t.commit,o=e.notebookId,r=e.title,a=e.content;return V.addNote({notebookId:o},{title:r,content:a}).then((function(t){n("addNote",{note:t.data})}))},updateNote:function(t,e){var n=t.commit,o=e.noteId,r=e.title,a=e.content;return V.updateNote({noteId:o},{title:r,content:a}).then((function(){n("updateNote",{noteId:o,title:r,content:a})}))},deleteNote:function(t,e){var n=t.commit,o=e.noteId;return V.deleteNote({noteId:o}).then((function(t){n("deleteNote",{noteId:o}),j["Message"].success(t.msg)}))}},X={state:z,getters:K,mutations:Q,actions:W},Y={GET:"/notes/trash",REVERT:"/notes/:noteId/revert",DELETE:"/notes/:noteId/confirm"},Z={getAll:function(){return new Promise((function(t,e){S(Y.GET).then((function(e){e.data=e.data.sort((function(t,e){return t.createdAt<e.createdAt})),e.data.forEach((function(t){t.createdAtFriendly=G(t.createdAt),t.updatedAtFriendly=G(t.updatedAt)})),t(e)})).catch((function(t){e(t)}))}))},deleteNote:function(t){var e=t.noteId;return S(Y.DELETE.replace(":noteId",e),"DELETE")},revertNote:function(t){var e=t.noteId;return S(Y.REVERT.replace(":noteId",e),"PATCH")}},tt={trashNotes:null,curTrashNoteId:null},et={trashNotes:function(t){return t.trashNotes||[]},curTrashNote:function(t,e){return t.curTrashNoteId?t.trashNotes.find((function(e){return e.id==t.curTrashNoteId}))||{}:e.trashNotes[0]||{}},belongTo:function(t,e,n,o){var r=o.notebooks.find((function(t){return t.id==e.curTrashNote.notebookId}))||{};return r.title||""}},nt={setTrashNotes:function(t,e){t.trashNotes=e.trashNotes},addTrashNote:function(t,e){this.setTrashNotes.unshift(e.note)},deleteTrashNote:function(t,e){t.trashNotes=t.trashNotes.filter((function(t){return t.id!=e.noteId}))},setCurTrashNote:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.curTrashNoteId=e.curTrashNoteId}},ot={getTrashNotes:function(t){var e=t.commit;return Z.getAll().then((function(t){e("setTrashNotes",{trashNotes:t.data})}))},deleteTrashNote:function(t,e){var n=t.commit,o=e.noteId;return Z.deleteNote({noteId:o}).then((function(t){n("deleteTrashNote",{noteId:o}),j["Message"].success(t.msg)}))},revertTrashNote:function(t,e){var n=t.commit,o=e.noteId;return Z.revertNote({noteId:o}).then((function(t){n("deleteTrashNote",{noteId:o}),j["Message"].success(t.msg)}))}},rt={state:tt,getters:et,mutations:nt,actions:ot},at={REGISTER:"/auth/register",LOGIN:"/auth/login",LOGOUT:"/auth/logout",GET_INFO:"/auth"},ut={register:function(t){var e=t.username,n=t.password;return S(at.REGISTER,"POST",{username:e,password:n})},login:function(t){var e=t.username,n=t.password;return S(at.LOGIN,"POST",{username:e,password:n})},logout:function(){return S(at.LOGOUT)},getInfo:function(){return S(at.GET_INFO)}},it={user:null},ct={username:function(t){return null===t.user?"未登录":t.user.username},slug:function(t){return null===t.user?"未":t.user.username.charAt(0)}},st={setUser:function(t,e){t.user=e.user}},dt={login:function(t,e){var n=t.commit,o=e.username,r=e.password;return ut.login({username:o,password:r}).then((function(t){n("setUser",{user:t.data})}))},register:function(t,e){var n=t.commit,o=e.username,r=e.password;return ut.register({username:o,password:r}).then((function(t){n("setUser",{user:t.data})}))},logout:function(t){var e=t.commit,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{path:"/login"};return ut.logout().then((function(){e("setUser",{user:null}),console.log(n),w.push(n)}))},checkLogin:function(t,e){var n=t.commit;return ut.getInfo().then((function(t){t.isLogin?n("setUser",{user:t.data}):w.push(e)}))}},lt={state:it,getters:ct,mutations:st,actions:dt};o["default"].use(l["a"]);var ft=new l["a"].Store({modules:{notebook:q,note:X,trash:rt,user:lt}});o["default"].config.productionTip=!1,o["default"].use(L.a),new o["default"]({router:w,store:ft,render:function(t){return t(A)}}).$mount("#app")},"6ead":function(t,e,n){},"845f":function(t,e,n){"use strict";n("c343")},"85ec":function(t,e,n){},c343:function(t,e,n){}});
//# sourceMappingURL=app.b903aca2.js.map