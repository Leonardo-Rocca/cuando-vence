(this["webpackJsonpcuando-vence"]=this["webpackJsonpcuando-vence"]||[]).push([[0],{47:function(e,a,n){e.exports=n(69)},52:function(e,a,n){},53:function(e,a,n){},69:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),c=n(21),i=n.n(c),o=(n(52),n(32)),s=(n(53),n(26)),u=n.n(s),l=n(34),m=n(89),p=n(90),f=n(87),d=n(88),b=n(85),v=n(33),g=n.n(v);g.a.initializeApp({apiKey:"AIzaSyDbOax-9wp5A22eUTIrgW5hAzu6V65i3fY",authDomain:"cuando-vence.firebaseapp.com",databaseURL:"https://cuando-vence.firebaseio.com",projectId:"cuando-vence",storageBucket:"cuando-vence.appspot.com",messagingSenderId:"350697025690",appId:"1:350697025690:web:28aa0c17e120f1ed922f23",measurementId:"G-M0T9CQ2GB3"}),g.a.analytics();var h=g.a,E=h.messaging(),k=Object(b.a)((function(e){return Object(m.a)({root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}})}));function y(){return w.apply(this,arguments)}function w(){return(w=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Notification.requestPermission();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var j=function(e){e.firebase;var a=Object(t.useState)(""),n=Object(o.a)(a,2),c=n[0],i=n[1];Object(t.useEffect)((function(){var e=E;y().then(Object(l.a)(u.a.mark((function a(){var n;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.getToken();case 2:return n=a.sent,a.abrupt("return",n);case 4:case"end":return a.stop()}}),a)})))).then(i).catch((function(e){console.log("Unable to get permission to notify.",e)})),navigator.serviceWorker.addEventListener("message",(function(e){return console.log(e)}))}),[]);var s=k();return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{position:"static"}," ",r.a.createElement(f.a,{variant:"h6",className:s.title},"Cuando vence")),r.a.createElement("br",null),r.a.createElement(d.a,{variant:"contained",color:"primary",onClick:function(){}}," Show Notif after 3 seconds"),"v13",r.a.createElement(d.a,{variant:"outlined",color:"primary",onClick:y}," ask User Permission"),r.a.createElement(d.a,{variant:"contained",color:"primary",onClick:function(){navigator.serviceWorker.ready.then((function(e){e.pushManager.subscribe({applicationServerKey:"BGNFTJy7-RHmBkIJsqzRIyIv4Z2qPoChB7A2Wqzmi_n8zMVxzcPSy1ksrgha3CFma8JCqX4AfJ6W4_BTZDRjST8",userVisibleOnly:!0}).then((function(e){console.log("Endpoint URL: ",e.endpoint)})).catch((function(e){"denied"===Notification.permission?console.warn("Permission for notifications was denied"):console.error("Unable to subscribe to push",e)}))}))}}," subscribe User"),r.a.createElement(d.a,{variant:"contained",color:"primary",onClick:function(){return null}}," Cancel suscription"),"token: ",c)},x=n(44),O=n(5);var S=function(e){var a=e.firebase,n=Object(t.useState)(!1),c=Object(o.a)(n,2),i=c[0],s=c[1];return Object(t.useEffect)((function(){"serviceWorker"in navigator&&navigator.serviceWorker.register(" /cuando-vence/build/firebase-messaging-sw.js").then((function(e){console.log("Registration successful, scope is:",e.scope),a.messaging().useServiceWorker(e),s(!0)})).catch((function(e){console.log("Service worker registration failed, error:",e),s(!0)}))}),[]),i?r.a.createElement("div",{className:"App"},r.a.createElement(x.a,null,r.a.createElement(O.b,{exact:!0,path:"/"},r.a.createElement(j,{firebase:a})),r.a.createElement(O.b,{exact:!0,path:"/cuando-vence/build"},r.a.createElement(j,{firebase:a})),r.a.createElement(O.b,{exact:!0,path:"/firebase-messaging-sw.js"},r.a.createElement("div",null)),r.a.createElement(O.b,{exact:!0,path:"/firebase-cloud-messaging-push-scope"},r.a.createElement(O.a,{to:"/asas"})),r.a.createElement(O.b,{exact:!0,path:"/a"},r.a.createElement("div",null,"asasa")))):r.a.createElement("div",null,"Loading...")};i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,{firebase:h})),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.a1754734.chunk.js.map