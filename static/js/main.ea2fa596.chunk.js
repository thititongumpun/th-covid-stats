(this["webpackJsonpcovid-stats"]=this["webpackJsonpcovid-stats"]||[]).push([[0],{13:function(e,t,a){e.exports={container:"Cards_container__3bjn6",svgMain:"Cards_svgMain__3Eivr",infected:"Cards_infected__-adYp",currentInfected:"Cards_currentInfected__3KKO5",recovered:"Cards_recovered__1aizD",deaths:"Cards_deaths__Qdjzq",currentRecovered:"Cards_currentRecovered__3Kk8o",hospital:"Cards_hospital__3eIpr",hospitaled:"Cards_hospitaled__h3c3L"}},233:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(67),s=a.n(c),o=(a(93),a(12)),i=a.n(o),d=a(16),u=a(68),l=a(69),j=a(85),b=a(83),p=a(70),h=a.n(p),f=a(71),v=a.n(f),m=function(){var e=Object(d.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.get("https://covid19.th-stat.com/api/open/today");case 3:return t=e.sent,a=t.data,e.abrupt("return",a);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),O=a(248),x=a(245),_=a(250),C=a(249),N=a(247),g=a(72),y=a.n(g),w=a(73),S=a.n(w),I=a(74),D=a.n(I),T=a(2),k=function(e){var t=e.className,a=e.cardTitle,r=e.value,n=e.cardSubtitle;return Object(T.jsx)(x.a,{item:!0,xs:12,md:3,component:C.a,className:S()(D.a.card,t),children:Object(T.jsxs)(N.a,{children:[Object(T.jsx)(O.a,{color:"textSecondary",gutterBottom:!0,children:a}),Object(T.jsx)(O.a,{variant:"h5",component:"h2",children:Object(T.jsx)(y.a,{start:0,end:r,duration:3.5,separator:","})}),Object(T.jsx)(O.a,{color:"textSecondary",children:(new Date).toDateString()}),Object(T.jsx)(O.a,{variant:"body2",component:"p",children:n})]})})},V=a(13),z=a.n(V),B=(a(119),a(80)),M=a.n(B),E=function(e){var t=e.data,a=t.Confirmed,r=t.NewConfirmed,n=t.NewDeaths,c=t.Recovered,s=t.NewHospitalized,o=t.Hospitalized;return a?Object(T.jsxs)("div",{className:z.a.container,children:[Object(T.jsx)(O.a,{gutterBottom:!0,variant:"h4",component:"h2",children:"Thailand Covid 19 Stats"}),Object(T.jsxs)(x.a,{container:!0,spacing:3,justify:"center",children:[Object(T.jsx)(k,{className:z.a.infected,cardTitle:"\u0e15\u0e34\u0e14\u0e40\u0e0a\u0e37\u0e49\u0e2d\u0e2a\u0e30\u0e2a\u0e21",value:a,cardSubtitle:"Number of active cases from COVID-19."}),Object(T.jsx)(k,{className:z.a.currentInfected,cardTitle:"\u0e15\u0e34\u0e14\u0e40\u0e0a\u0e37\u0e49\u0e2d\u0e27\u0e31\u0e19\u0e19\u0e35\u0e49",value:r,cardSubtitle:"Number of today active cases from COVID-19."}),Object(T.jsx)(k,{className:z.a.deaths,cardTitle:"\u0e40\u0e2a\u0e35\u0e22\u0e0a\u0e35\u0e27\u0e34\u0e15",value:n,cardSubtitle:"Number of today death cases from COVID-19."}),Object(T.jsx)(k,{className:z.a.recovered,cardTitle:"\u0e2b\u0e32\u0e22\u0e41\u0e25\u0e49\u0e27",value:c,cardSubtitle:"Number of today recover cases from COVID-19."}),Object(T.jsx)(k,{className:z.a.hospital,cardTitle:"\u0e23\u0e31\u0e01\u0e29\u0e32\u0e2d\u0e22\u0e39\u0e48\u0e43\u0e19 \u0e23\u0e1e.",value:o,cardSubtitle:"Number of today Hospitalized cases from COVID-19."}),Object(T.jsx)(k,{className:z.a.hospitaled,cardTitle:"\u0e23\u0e31\u0e01\u0e29\u0e32\u0e2b\u0e32\u0e22",value:s,cardSubtitle:"Number of today recovered cases from COVID-19."})]})]}):Object(T.jsxs)("div",{children:[Object(T.jsx)(M.a,{className:"svgMain",type:"Plane",color:"#7B68EE",height:500,width:500}),Object(T.jsx)(O.a,{variant:"h4",component:"h2",children:Object(T.jsx)(_.a,{})})]})},P=a(84),F=a(81),H=a(82),L=a.n(H),A=function(e){var t=e.data,a=t.Confirmed,n=t.NewConfirmed,c=t.NewDeaths,s=t.NewHospitalized,o=Object(r.useState)({}),u=Object(P.a)(o,2),l=(u[0],u[1]);Object(r.useEffect)((function(){(function(){var e=Object(d.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:t=e.sent,l(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var j=a?Object(T.jsx)(F.Bar,{data:{labels:["\u0e15\u0e34\u0e14\u0e40\u0e0a\u0e37\u0e49\u0e2d\u0e27\u0e31\u0e19\u0e19\u0e35\u0e49","\u0e23\u0e31\u0e01\u0e29\u0e32\u0e2b\u0e32\u0e22","\u0e40\u0e2a\u0e35\u0e22\u0e0a\u0e35\u0e27\u0e34\u0e15"],datasets:[{label:"People",backgroundColor:["rgba(243, 8, 173, 0.5)","rgba(0, 255, 0, 0.5)","rgba(255, 0, 0, 0.5)"],data:[n,s,c]}]},options:{legend:{display:!0},title:{display:!0,text:"Current stats in Thailand"}}}):null;return Object(T.jsx)("div",{className:L.a.container,children:j})},K=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(u.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={data:{}},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=Object(d.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:t=e.sent,console.log(t),this.setState({data:t});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.data;return Object(T.jsxs)("div",{className:h.a.container,children:[Object(T.jsx)(E,{data:e}),Object(T.jsx)(A,{data:e})]})}}]),a}(n.a.Component),R=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,252)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),r(e),n(e),c(e),s(e)}))};s.a.render(Object(T.jsx)(n.a.StrictMode,{children:Object(T.jsx)(K,{})}),document.getElementById("root")),R()},70:function(e,t,a){e.exports={container:"App_container__1MQN3",image:"App_image__3byI1"}},74:function(e,t,a){e.exports={card:"Card_card__LmsGV"}},82:function(e,t,a){e.exports={container:"Chart_container__1PIOn"}},93:function(e,t,a){}},[[233,1,2]]]);
//# sourceMappingURL=main.ea2fa596.chunk.js.map