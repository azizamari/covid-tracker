(this["webpackJsonpcovid-tracker"]=this["webpackJsonpcovid-tracker"]||[]).push([[0],{100:function(e,t,c){},102:function(e,t,c){},103:function(e,t,c){},203:function(e,t,c){},204:function(e,t,c){},206:function(e,t,c){"use strict";c.r(t);var n=c(3),a=c(0),r=c.n(a),s=c(10),o=c.n(s),i=(c(100),c(25)),l=c.n(i),u=c(36),d=c(17),j=(c(102),c(238)),f=c(239),h=c(240),b=c(232),v=c(236),p=c(88),O=c(237);c(103);var x=function(e){var t=e.title,c=e.cases,a=e.total,r=e.active,s=e.isRed,o=Object(p.a)(e,["title","cases","total","active","isRed"]);return console.log(t,r),Object(n.jsx)(b.a,{onClick:o.onClick,className:"infoBox ".concat(r&&"infoBox--selected"," ").concat(s&&"infoBox--red"),children:Object(n.jsxs)(v.a,{children:[Object(n.jsx)(O.a,{color:"textSecondary",gutterBottom:!0,children:t}),Object(n.jsx)("h2",{className:"infoBox__cases ".concat(!s&&"infoBox__cases--green"),children:c}),Object(n.jsxs)(O.a,{className:"infoBox__total",color:"textSecondary",children:[a," Total"]})]})})},m=c(85),g=c(15),y=c.n(g),w={legend:{display:!1},elements:{point:{radius:0}},maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return y()(e.value).format("+0,0")}}},scales:{xAxes:[{type:"time",time:{format:"MM/DD/YY",tooltipFormat:"ll"}}],yAxes:[{gridLines:{display:!1},ticks:{callback:function(e,t,c){return y()(e).format("0a")}}}]}},_=function(e,t){var c,n=[];for(var a in e.cases){if(c){var r={x:a,y:e[t][a]-c};n.push(r)}c=e[t][a]}return n};var k=function(e){var t=e.casesType,c=Object(a.useState)({}),r=Object(d.a)(c,2),s=r[0],o=r[1];return Object(a.useEffect)((function(){(function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120").then((function(e){return e.json()})).then((function(e){var c=_(e,t);o(c),console.log(c)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]),Object(n.jsx)("div",{children:(null===s||void 0===s?void 0:s.length)>0&&Object(n.jsx)(m.Line,{data:{datasets:[{backgroundColor:"rgba(204, 16, 52, 0.5)",borderColor:"#CC1034",data:s}]},options:w})})};c(203);var C=function(e){var t=e.countries;return Object(n.jsx)("div",{className:"table",children:t.map((function(e){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:e.country}),Object(n.jsx)("td",{children:Object(n.jsx)("strong",{children:y()(e.cases).format("0,0")})})]})}))})},N=c(87),S=c(241),B=c(242),I={cases:{hex:"#CC1034",rgb:"rgb(204, 16, 52)",half_op:"rgba(204, 16, 52, 0.5)",multiplier:800},recovered:{hex:"#7dd71d",rgb:"rgb(125, 215, 29)",half_op:"rgba(125, 215, 29, 0.5)",multiplier:1200},deaths:{hex:"#fb4443",rgb:"rgb(251, 68, 67)",half_op:"rgba(251, 68, 67, 0.5)",multiplier:2e3}},R=function(e){var t=Object(N.a)(e);return t.sort((function(e,t){return e.cases>t.cases?-1:1})),t},D=function(e){return e?"+".concat(y()(e).format("0.0a")):"+0"},T=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cases";return e.map((function(e){return Object(n.jsx)(S.a,{center:[e.countryInfo.lat,e.countryInfo.long],color:I[t].hex,fillColor:I[t].hex,fillOpacity:.4,radius:Math.sqrt(e[t])*I[t].multiplier,children:Object(n.jsx)(B.a,{children:Object(n.jsxs)("div",{className:"info-container",children:[Object(n.jsx)("div",{className:"info-flag",style:{backgroundImage:"url(".concat(e.countryInfo.flag,")")}}),Object(n.jsx)("div",{className:"info-name",children:e.country}),Object(n.jsxs)("div",{className:"info-confirmed",children:["Cases: ",y()(e.cases).format("0,0")]}),Object(n.jsxs)("div",{className:"info-recovered",children:["Recovered: ",y()(e.recovered).format("0,0")]}),Object(n.jsxs)("div",{className:"info-deaths",children:["Deaths: ",y()(e.deaths).format("0,0")]})]})})})}))},M=c(243),z=c(244);c(204);var E=function(e){var t=e.countries,c=e.casesType,a=e.center,r=e.zoom;return Object(n.jsx)("div",{className:"map",children:Object(n.jsxs)(M.a,{center:a,zoom:r,children:[Object(n.jsx)(z.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),T(t,c)]})})},W=(c(205),function(){var e=Object(a.useState)("worldwide"),t=Object(d.a)(e,2),c=t[0],r=t[1],s=Object(a.useState)({}),o=Object(d.a)(s,2),i=o[0],p=o[1],O=Object(a.useState)([]),m=Object(d.a)(O,2),g=m[0],w=m[1],_=Object(a.useState)([]),N=Object(d.a)(_,2),S=N[0],B=N[1],I=Object(a.useState)([]),T=Object(d.a)(I,2),M=T[0],z=T[1],W=Object(a.useState)("cases"),A=Object(d.a)(W,2),L=A[0],J=A[1],Y=Object(a.useState)({lat:34,lng:9}),q=Object(d.a)(Y,2),F=q[0],V=q[1],$=Object(a.useState)(4),G=Object(d.a)($,2),H=G[0],K=G[1];Object(a.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/all").then((function(e){return e.json()})).then((function(e){p(e)}))}),[]),Object(a.useEffect)((function(){(function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("https://disease.sh/v3/covid-19/countries").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return{name:e.country,value:e.countryInfo.iso2}})),c=R(e);w(t),B(e),z(c)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),console.log(L);var P=function(){var e=Object(u.a)(l.a.mark((function e(t){var c,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.target.value,n="worldwide"===c?"https://disease.sh/v3/covid-19/all":"https://disease.sh/v3/covid-19/countries/".concat(c),e.next=4,fetch(n).then((function(e){return e.json()})).then((function(e){r(c),p(e),V("worldwide"===c?[34,9]:[e.countryInfo.lat,e.countryInfo.long]),K(4)}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:"app",children:[Object(n.jsxs)("div",{className:"app__left",children:[Object(n.jsxs)("div",{className:"app__header",children:[Object(n.jsx)("h1",{children:"COVID-19 Tracker"}),Object(n.jsx)(j.a,{className:"app__dropdown",children:Object(n.jsxs)(f.a,{variant:"outlined",value:c,onChange:P,children:[Object(n.jsx)(h.a,{value:"worldwide",children:"Worldwide"}),g.map((function(e){return Object(n.jsx)(h.a,{value:e.value,children:e.name})}))]})})]}),Object(n.jsxs)("div",{className:"app__stats",children:[Object(n.jsx)(x,{onClick:function(e){return J("cases")},title:"Coronavirus Cases",isRed:!0,active:"cases"===L,cases:D(i.todayCases),total:y()(i.cases).format("0.0a")}),Object(n.jsx)(x,{onClick:function(e){return J("recovered")},title:"Recovered",active:"recovered"===L,cases:D(i.todayRecovered),total:y()(i.recovered).format("0.0a")}),Object(n.jsx)(x,{onClick:function(e){return J("deaths")},title:"Deaths",isRed:!0,active:"deaths"===L,cases:D(i.todayDeaths),total:y()(i.deaths).format("0.0a")})]}),Object(n.jsx)(E,{countries:S,casesType:L,center:F,zoom:H})]}),Object(n.jsx)(b.a,{className:"app__right",children:Object(n.jsx)(v.a,{children:Object(n.jsxs)("div",{className:"app__information",children:[Object(n.jsx)("h3",{children:"Live Cases by Country"}),Object(n.jsx)(C,{countries:M}),Object(n.jsxs)("h3",{children:["Worldwide new ",L]}),Object(n.jsx)(k,{casesType:L})]})})})]})});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(W,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[206,1,2]]]);
//# sourceMappingURL=main.76e7d9cf.chunk.js.map