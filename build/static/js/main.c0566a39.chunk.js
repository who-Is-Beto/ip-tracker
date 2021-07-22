(this["webpackJsonpwhoisbeto-ip-tracker"]=this["webpackJsonpwhoisbeto-ip-tracker"]||[]).push([[0],{31:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var c,a=n(13),i=n.n(a),r=(n(31),n(9)),o=n.n(r),s=n(12),l=n(0),u=n.n(l),j=n(15),d=n(20);!function(e){e.GET_IP="GET_IP"}(c||(c={}));var p=n(2),h={ip:{ip:"8.8.8.8",location:{country:"",region:"",city:"",lat:NaN,lng:NaN,postalCode:"",timezone:NaN,geonameId:NaN},domains:["","","","",""],as:{asn:NaN,name:"",route:"",domain:"",type:""},isp:"",proxy:{proxy:!1,vpn:!1,tor:!1}}},b=Object(l.createContext)({state:h,dispatch:function(){return null}}),O=function(e,t){switch(t.type){case c.GET_IP:return Object(d.a)(Object(d.a)({},e),{},{ip:t.payload})}},x=function(e){var t=e.children,n=Object(l.useReducer)(O,h),c=Object(j.a)(n,2),a=c[0],i=c[1];return Object(p.jsx)(b.Provider,{value:{state:a,dispatch:i},children:t})},f=(n(34),function(){var e=Object(l.useContext)(b).state;return Object(p.jsxs)("div",{className:"data-container",children:[Object(p.jsxs)("div",{className:"data-info",children:[Object(p.jsx)("small",{children:"Ip address"}),Object(p.jsx)("h4",{children:e.ip.ip})]}),Object(p.jsxs)("div",{className:"data-info",children:[Object(p.jsx)("small",{children:"Location"}),Object(p.jsx)("h4",{children:e.ip.location.region})]}),Object(p.jsxs)("div",{className:"data-info",children:[Object(p.jsx)("small",{children:"Time zone"}),Object(p.jsx)("h4",{children:"UTC \n        ".concat(e.ip.location.timezone)})]}),Object(p.jsxs)("div",{className:"data-info",children:[Object(p.jsx)("small",{children:"ISP"}),Object(p.jsx)("h4",{children:e.ip.isp})]})]})}),m=n(25),v=(n(35),n(19)),g=n.n(v),y=n(23),N=n.n(y),I=function(e){return/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gi.test(e)||""===e?g()("https://geo.ipify.org/api/v1?apiKey=at_hDYDIDdHjJm5uy0GepjjjDLmuGkaT&ipAddress=".concat(e)).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return e})):(N.a.fire({title:"Error!",text:"Please introduce a good IP address format, I'll take you to Google...",icon:"error",confirmButtonText:"Ok :c"}),{ip:"8.8.8.8",location:{country:"US",region:"California",city:"Mountain View",lat:37.38605,lng:-122.08385,postalCode:"94035",timezone:"-07:00",geonameId:5375480},domains:["0--9.ru","000.lyxhwy.xyz","000180.top","00049ok.com","000xs.net"],as:{asn:15169,name:"Google LLC",route:"8.8.8.0/24",domain:"https://about.google/intl/en/",type:"Content"},isp:"Google LLC",proxy:{proxy:!1,vpn:!1,tor:!1}})},C=function(){var e=Object(l.useState)(""),t=Object(j.a)(e,2),n=t[0],a=t[1],i=Object(l.useContext)(b).dispatch,r=function(){var e=Object(s.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I(n);case 2:t=e.sent,i({type:c.GET_IP,payload:t});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.useEffect)((function(){r()}),[]),Object(p.jsx)("div",{className:"info-container",children:Object(p.jsxs)("div",{className:"input-container",children:[Object(p.jsx)("input",{className:"input",type:"ip",value:n,placeholder:"Your IP",onChange:function(e){a(e.target.value)}}),Object(p.jsxs)("button",{onClick:r,className:"input-btn",children:[" ",Object(p.jsx)(m.a,{className:"btn-icon"})," "]})]})})},w=n(16),P={width:"100%",height:"70vh",bottom:"0rem"};function k(){var e=Object(l.useContext)(b).state,t={lat:e.ip.location.lat,lng:e.ip.location.lng};return Object(p.jsx)(w.b,{googleMapsApiKey:"AIzaSyAmcEWw0e7tn-vXuuOpOYn1L457GBe4OtY",children:Object(p.jsx)(w.a,{mapContainerStyle:P,center:t,zoom:10,children:Object(p.jsx)(w.c,{position:t})})})}var G=u.a.memo(k),T=n(49);var L=function(){var e=Object(l.useContext)(b).dispatch,t=Object(T.a)("InitialFetch",(function(){fetch("https://api.ipify.org/?format=json").then((function(e){return e.json()})).then(function(){var t=Object(s.a)(o.a.mark((function t(n){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,I(n.ip);case 2:return a=t.sent,e({type:c.GET_IP,payload:a}),t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())})),n=t.isLoading,a=t.error;return Object(p.jsxs)(x,{children:[a&&Object(p.jsx)("h1",{children:"An error occurred"}),Object(p.jsx)("div",{className:"app",children:n?Object(p.jsx)("h1",{children:"LOADING..."}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:"content",children:[Object(p.jsx)("h2",{children:"IP Adress Tracker"}),Object(p.jsx)(C,{}),Object(p.jsx)(f,{})]}),Object(p.jsx)(G,{})]})})]})},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,50)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),i(e),r(e)}))},z=n(48),A=n(24),D=new z.a;i.a.render(Object(p.jsx)(x,{children:Object(p.jsx)(A.a,{client:D,children:Object(p.jsx)(L,{})})}),document.getElementById("root")),E()}},[[46,1,2]]]);
//# sourceMappingURL=main.c0566a39.chunk.js.map