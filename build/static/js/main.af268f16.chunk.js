(this["webpackJsonpwhats-app"]=this["webpackJsonpwhats-app"]||[]).push([[0],{114:function(e,t,a){},115:function(e,t,a){},117:function(e,t,a){},120:function(e,t,a){"use strict";a.r(t);var s=a(6),c=a.n(s),n=a(37),r=a.n(n),i=(a(88),a(18)),j=a(16),b=(a(89),a(0)),d=a.n(b),o=a(4),h=a(144),l=a(137),u=a(138),p=a(139),O=a(140),m=a(141),x=a(142),v=(a(91),a(72)),f=a.n(v).a.create({baseURL:"https://whatsappcloneserver.herokuapp.com"}),g=a(13),N=Object(s.createContext)(),w=function(e){var t=e.reducer,a=e.initialState,c=e.children;return Object(g.jsx)(N.Provider,{value:Object(s.useReducer)(t,a),children:c})},_=function(){return Object(s.useContext)(N)},y=function(e){var t,a=e.messages,c=Object(s.useState)(""),n=Object(j.a)(c,2),r=n[0],i=n[1],b=Object(s.useState)(""),v=Object(j.a)(b,2),N=v[0],w=v[1],y=_(),S=Object(j.a)(y,2),k=S[0].user,C=(S[1],function(){var e=Object(o.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,f.post("/messages/new",{message:N,name:k.displayName,timestamp:(new Date).toUTCString(),received:!0});case 3:w("");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());return Object(s.useEffect)((function(){i(Math.floor(5e3*Math.random()))}),[]),Object(g.jsxs)("div",{className:"chat",children:[Object(g.jsxs)("div",{className:"chat_header",children:[Object(g.jsx)(h.a,{src:"https://avatars.dicebar.com/api/human/b".concat(r,".svg")}),Object(g.jsxs)("div",{className:"chat_headerInfo",children:[Object(g.jsx)("h3",{children:"Fun Pandrom"}),Object(g.jsxs)("p",{children:["Last Seen "," ",null===(t=a[a.length-1])||void 0===t?void 0:t.timestamp]})]}),Object(g.jsxs)("div",{className:"chat_headerRight",children:[Object(g.jsx)(l.a,{children:Object(g.jsx)(u.a,{})}),Object(g.jsx)(l.a,{children:Object(g.jsx)(p.a,{})}),Object(g.jsx)(l.a,{children:Object(g.jsx)(O.a,{})})]})]}),Object(g.jsx)("div",{className:"chat_body",children:a.map((function(e){return Object(g.jsxs)("p",{className:"chat_message  ".concat(e.name===k.displayName&&"chat_receiver"),children:[Object(g.jsx)("span",{className:"chat_name",children:e.name}),e.message,Object(g.jsx)("span",{className:"chat_timestamp",children:e.timestamp})]})}))}),Object(g.jsxs)("div",{className:"chat_footer",children:[Object(g.jsx)(m.a,{}),Object(g.jsxs)("form",{children:[Object(g.jsx)("input",{value:N,onChange:function(e){return w(e.target.value)},type:"text",placeholder:"Type a message"}),Object(g.jsx)("button",{onClick:C,type:"submit",children:"Send a msg"})]}),Object(g.jsx)(x.a,{})]})]})},S=(a(114),a(74)),k=a.n(S),C=a(75),E=a.n(C),I=a(76),R=a.n(I),A=(a(115),function(e){var t,a=e.messages,c=Object(s.useState)(""),n=Object(j.a)(c,2),r=n[0],i=n[1];return Object(s.useEffect)((function(){i(Math.floor(5e3*Math.random()))}),[]),Object(g.jsxs)("div",{className:"sidebarChat",children:[Object(g.jsx)(h.a,{src:"https://avatars.dicebar.com/api/human/b".concat(r,".svg")}),Object(g.jsxs)("div",{className:"sidebarChat_info",children:[Object(g.jsx)("h3",{children:"Fun Pandrom"}),Object(g.jsx)("p",{children:null===(t=a[a.length-1])||void 0===t?void 0:t.message})]})]})}),W=function(e){var t=e.messages,a=_(),s=Object(j.a)(a,2),c=s[0].user;s[1];return Object(g.jsxs)("div",{className:"sidebar",children:[Object(g.jsxs)("div",{className:"sidebar_header",children:[Object(g.jsx)(h.a,{src:null===c||void 0===c?void 0:c.photoURL}),Object(g.jsxs)("div",{className:"sidebar_headerRight",children:[Object(g.jsx)(l.a,{children:Object(g.jsx)(k.a,{})}),Object(g.jsx)(l.a,{children:Object(g.jsx)(E.a,{})}),Object(g.jsx)(l.a,{children:Object(g.jsx)(R.a,{})})]})]}),Object(g.jsx)("div",{className:"sidebar_search",children:Object(g.jsxs)("div",{className:"sidebar_searchContainer",children:[Object(g.jsx)(u.a,{}),Object(g.jsx)("input",{type:"text",placeholder:"Search or start new chat"})]})}),Object(g.jsx)("div",{className:"sidebar_chats",children:Object(g.jsx)(A,{messages:t})})]})},M=a(77),P=a.n(M),T=a(78),D=a(143),U=(a(117),a(54)),B=(a(118),a(122),a(123),a(124),U.a.initializeApp({apiKey:"AIzaSyAx7TK0TR24uu0lWaDklc5c2ydEyWBgkGw",authDomain:"whatsapp-mern-5147c.firebaseapp.com",projectId:"whatsapp-mern-5147c",storageBucket:"whatsapp-mern-5147c.appspot.com",messagingSenderId:"835808404126",appId:"1:835808404126:web:5426a279b61d6a98b4118f"}).firestore(),U.a.auth()),G=new U.a.auth.GoogleAuthProvider,L=a(63),z="SET_USER",F=function(e,t){return console.log(t),t.type===z?Object(L.a)(Object(L.a)({},e),{},{user:t.user}):e},J=function(){var e=_(),t=Object(j.a)(e,2);Object(T.a)(t[0]);var a=t[1];return Object(g.jsx)("div",{className:"login",children:Object(g.jsxs)("div",{className:"login_container",children:[Object(g.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/800px-WhatsApp.svg.png",alt:"whatsapp"}),Object(g.jsx)("div",{className:"login_text",children:Object(g.jsx)("h1",{children:"Sign in to Whatsapp"})}),Object(g.jsx)(D.a,{onClick:function(){B.signInWithPopup(G).then((function(e){a({type:z,user:e.user})})).catch((function(e){return alert(e.message)}))},children:"SignIn with Google"})]})})};var K=function(){var e=Object(s.useState)([]),t=Object(j.a)(e,2),a=t[0],c=t[1],n=_(),r=Object(j.a)(n,2),b=r[0].user;return r[1],Object(s.useEffect)((function(){f.get("/messages/sync").then((function(e){return c(e.data)}))}),[]),Object(s.useEffect)((function(){var e=new P.a("7e06f9acc763c9eb3539",{cluster:"ap2"}).subscribe("messages");return e.bind("inserted",(function(e){c([].concat(Object(i.a)(a),[e]))})),function(){e.unbind_all(),e.unsubscribe()}}),[a]),console.log(a),Object(g.jsx)("div",{className:"app",children:b?Object(g.jsxs)("div",{className:"app_body",children:[Object(g.jsx)(W,{messages:a}),Object(g.jsx)(y,{messages:a})]}):Object(g.jsx)(J,{})})};r.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(w,{initialState:{user:null},reducer:F,children:Object(g.jsx)(K,{})})}),document.getElementById("root"))},88:function(e,t,a){},89:function(e,t,a){},91:function(e,t,a){}},[[120,1,2]]]);
//# sourceMappingURL=main.af268f16.chunk.js.map