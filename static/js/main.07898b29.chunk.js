(this["webpackJsonpcovid-stats"]=this["webpackJsonpcovid-stats"]||[]).push([[0],{12:function(e,t,a){e.exports={container:"Cards_container__3bjn6",svgMain:"Cards_svgMain__3Eivr",infected:"Cards_infected__-adYp",currentInfected:"Cards_currentInfected__3KKO5",recovered:"Cards_recovered__1aizD",deaths:"Cards_deaths__Qdjzq",hospital:"Cards_hospital__3eIpr",hospitaled:"Cards_hospitaled__h3c3L"}},226:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(61),s=a.n(c),o=(a(86),a(11)),i=a.n(o),d=a(14),u=a(62),l=a(63),p=a(79),b=a(77),j=a(64),f=a.n(j),h=a(65),v=a.n(h),m=function(){var e=Object(d.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.get("https://covid19.th-stat.com/api/open/today");case 3:return t=e.sent,a=t.data,e.abrupt("return",a);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),O=a(243),x=a(239),_=a(242),C=a(241),N=a(66),g=a.n(N),y=a(67),w=a.n(y),S=a(68),I=a.n(S),D=a(2),T=function(e){var t=e.className,a=e.cardTitle,n=e.value,r=e.cardSubtitle;return Object(D.jsx)(x.a,{item:!0,xs:12,md:3,component:_.a,className:w()(I.a.card,t),children:Object(D.jsxs)(C.a,{children:[Object(D.jsx)(O.a,{color:"textSecondary",gutterBottom:!0,children:a}),Object(D.jsx)(O.a,{variant:"h5",component:"h2",children:Object(D.jsx)(g.a,{start:0,end:n,duration:3.5,separator:","})}),Object(D.jsx)(O.a,{color:"textSecondary",children:(new Date).toDateString()}),Object(D.jsx)(O.a,{variant:"body2",component:"p",children:r})]})})},k=a(12),V=a.n(k),z=(a(112),a(74)),B=a.n(z),M=function(e){var t=e.data,a=t.Confirmed,n=t.NewConfirmed,r=t.NewDeaths,c=t.Recovered,s=t.NewHospitalized,o=t.Hospitalized;return a?Object(D.jsxs)("div",{className:V.a.container,children:[Object(D.jsx)(O.a,{gutterBottom:!0,variant:"h4",component:"h2",children:"Thailand Covid 19 Stats"}),Object(D.jsxs)(x.a,{container:!0,spacing:3,justify:"center",children:[Object(D.jsx)(T,{className:V.a.infected,cardTitle:"\u0e15\u0e34\u0e14\u0e40\u0e0a\u0e37\u0e49\u0e2d\u0e2a\u0e30\u0e2a\u0e21",value:a,cardSubtitle:"Number of active cases from COVID-19."}),Object(D.jsx)(T,{className:V.a.currentInfected,cardTitle:"\u0e15\u0e34\u0e14\u0e40\u0e0a\u0e37\u0e49\u0e2d\u0e27\u0e31\u0e19\u0e19\u0e35\u0e49",value:n,cardSubtitle:"Number of today active cases from COVID-19."}),Object(D.jsx)(T,{className:V.a.deaths,cardTitle:"\u0e40\u0e2a\u0e35\u0e22\u0e0a\u0e35\u0e27\u0e34\u0e15",value:r,cardSubtitle:"Number of today death cases from COVID-19."}),Object(D.jsx)(T,{className:V.a.recovered,cardTitle:"\u0e2b\u0e32\u0e22\u0e41\u0e25\u0e49\u0e27",value:c,cardSubtitle:"Number of today recover cases from COVID-19."}),Object(D.jsx)(T,{className:V.a.hospital,cardTitle:"\u0e23\u0e31\u0e01\u0e29\u0e32\u0e2d\u0e22\u0e39\u0e48\u0e43\u0e19 \u0e23\u0e1e.",value:o,cardSubtitle:"Number of today Hospitalized cases from COVID-19."}),Object(D.jsx)(T,{className:V.a.hospitaled,cardTitle:"\u0e23\u0e31\u0e01\u0e29\u0e32\u0e2b\u0e32\u0e22",value:s,cardSubtitle:"Number of today recovered cases from COVID-19."})]})]}):Object(D.jsx)(B.a,{className:"svgMain",type:"Plane",color:"#7B68EE",height:500,width:500})},E=a(78),P=a(75),F=a(76),H=a.n(F),L=function(e){var t=e.data,a=t.Confirmed,r=t.NewConfirmed,c=t.NewDeaths,s=t.NewHospitalized,o=Object(n.useState)({}),u=Object(E.a)(o,2),l=(u[0],u[1]);Object(n.useEffect)((function(){(function(){var e=Object(d.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:t=e.sent,l(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var p=a?Object(D.jsx)(P.Bar,{data:{labels:["\u0e15\u0e34\u0e14\u0e40\u0e0a\u0e37\u0e49\u0e2d\u0e27\u0e31\u0e19\u0e19\u0e35\u0e49","\u0e23\u0e31\u0e01\u0e29\u0e32\u0e2b\u0e32\u0e22","\u0e40\u0e2a\u0e35\u0e22\u0e0a\u0e35\u0e27\u0e34\u0e15"],datasets:[{label:"People",backgroundColor:["rgba(243, 8, 173, 0.5)","rgba(136, 77, 247, 0.5)","rgba(255, 0, 0, 0.5)"],data:[r,s,c]}]},options:{legend:{display:!0},title:{display:!0,text:"Current stats in Thailand"}}}):null;return Object(D.jsx)("div",{className:H.a.container,children:p})},A=function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{}},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=Object(d.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:t=e.sent,console.log(t),this.setState({data:t});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.data;return Object(D.jsxs)("div",{className:f.a.container,children:[Object(D.jsx)(M,{data:e}),Object(D.jsx)(L,{data:e})]})}}]),a}(r.a.Component),J=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,244)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),c(e),s(e)}))};s.a.render(Object(D.jsx)(r.a.StrictMode,{children:Object(D.jsx)(A,{})}),document.getElementById("root")),J()},64:function(e,t,a){e.exports={container:"App_container__1MQN3",image:"App_image__3byI1"}},68:function(e,t,a){e.exports={card:"Card_card__LmsGV"}},76:function(e,t,a){e.exports={container:"Chart_container__1PIOn"}},86:function(e,t,a){}},[[226,1,2]]]);
//# sourceMappingURL=main.07898b29.chunk.js.map