(this["webpackJsonplolrecommender-frontend"]=this["webpackJsonplolrecommender-frontend"]||[]).push([[0],{41:function(e,a,t){e.exports=t(70)},46:function(e,a,t){},47:function(e,a,t){},70:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(15),l=t.n(r),m=(t(46),t(47),t(97)),s=t(21),i=t.n(s),o=t(24),u=t(7),d=t(36),p=t.n(d),b=t(99),E=t(100),h=t(101),f=function(e){var a=Object(n.useState)(""),t=Object(u.a)(a,2),r=t[0],l=t[1];return c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement(h.a,null,c.a.createElement(E.a,null),c.a.createElement(b.a,{onChange:function(a){e.callback(a.target.value),l("http://ddragon.leagueoflegends.com/cdn/10.1.1/img/champion/"+a.target.value+".png")}},c.a.createElement("option",{disabled:!0,selected:!0,value:!0}),e.champNames.map((function(e){return c.a.createElement("option",null,e)}))))),""===r?c.a.createElement("div",null):c.a.createElement("img",{src:r,alt:"A Champion"}))},g=t(95),k=function(e){return c.a.createElement("div",null,"allies"===e.id?c.a.createElement(g.a,{container:!0,direction:"row",spacing:4,alignItems:"center",justify:"center"},c.a.createElement(g.a,{item:!0,xs:12,sm:3,md:3,lg:3},c.a.createElement(f,{champNames:e.champNames,callback:e.callbacks[0]})),c.a.createElement(g.a,{item:!0,xs:12,sm:3,md:3,lg:3},c.a.createElement(f,{champNames:e.champNames,callback:e.callbacks[1]})),c.a.createElement(g.a,{item:!0,xs:12,sm:3,md:3,lg:3},c.a.createElement(f,{champNames:e.champNames,callback:e.callbacks[2]})),c.a.createElement(g.a,{item:!0,xs:12,sm:3,md:3,lg:3},c.a.createElement(f,{champNames:e.champNames,callback:e.callbacks[3]}))):"enemies"===e.id?c.a.createElement(g.a,{container:!0,direction:"row",alignItems:"center",justify:"center",spacing:4},c.a.createElement(g.a,{item:!0,xs:12,sm:2,md:2,lg:2},c.a.createElement(f,{champNames:e.champNames,callback:e.callbacks[0]})),c.a.createElement(g.a,{item:!0,xs:12,sm:2,md:2,lg:2},c.a.createElement(f,{champNames:e.champNames,callback:e.callbacks[1]})),c.a.createElement(g.a,{item:!0,xs:12,sm:2,md:2,lg:2},c.a.createElement(f,{champNames:e.champNames,callback:e.callbacks[2]})),c.a.createElement(g.a,{item:!0,xs:12,sm:2,md:2,lg:2},c.a.createElement(f,{champNames:e.champNames,callback:e.callbacks[3]})),c.a.createElement(g.a,{item:!0,xs:12,sm:2,md:2,lg:2},c.a.createElement(f,{champNames:e.champNames,callback:e.callbacks[4]}))):c.a.createElement("div",null))},j=function(e){return c.a.createElement("div",null,c.a.createElement(g.a,{container:!0},c.a.createElement(g.a,{item:!0,xs:3},c.a.createElement("img",{src:"http://ddragon.leagueoflegends.com/cdn/10.1.1/img/champion/"+e.champInfo.id+".png",alt:"",style:{width:"75%"}})),c.a.createElement(g.a,{item:!0,xs:9},e.champInfo.name)))},x=t(96),O=t(98),y=function(){var e=Object(n.useState)({}),a=Object(u.a)(e,2),t=a[0],r=a[1],l=Object(n.useState)([]),m=Object(u.a)(l,2),s=m[0],d=m[1],b=Object(n.useState)([]),E=Object(u.a)(b,2),h=E[0],f=E[1],y=Object(n.useState)(""),v=Object(u.a)(y,2),w=v[0],N=v[1],S=Object(n.useState)(""),I=Object(u.a)(S,2),C=I[0],A=I[1],R=Object(n.useState)(""),B=Object(u.a)(R,2),D=B[0],J=B[1],L=Object(n.useState)(""),W=Object(u.a)(L,2),U=W[0],$=W[1],_=Object(n.useState)(""),q=Object(u.a)(_,2),z=q[0],F=q[1],G=Object(n.useState)(""),H=Object(u.a)(G,2),K=H[0],M=H[1],P=Object(n.useState)(""),Q=Object(u.a)(P,2),T=Q[0],V=Q[1],X=Object(n.useState)(""),Y=Object(u.a)(X,2),Z=Y[0],ee=Y[1],ae=Object(n.useState)(""),te=Object(u.a)(ae,2),ne=te[0],ce=te[1];function re(){return(re=Object(o.a)(i.a.mark((function e(){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://ddragon.leagueoflegends.com/cdn/10.1.1/data/en_US/champion.json");case 2:return a=e.sent,e.next=5,a.json();case 5:a=e.sent,r(a.data),f(Object.keys(a.data));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function le(){return(le=Object(o.a)(i.a.mark((function e(){var a,n,c,r,l,m,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(l in n=[z,K,T,Z,ne],a=(a=[w,C,D,U]).filter((function(e){return""!==e})),n=n.filter((function(e){return""!==e})),a=Array.from(new Set(a)),n=Array.from(new Set(n)),c=[],r=[],a)c.push(t[a[l]].key);for(m in n)r.push(t[n[m]].key);return e.next=12,p.a.post("https://deeplol-api.herokuapp.com/recommend",{body:{allies:c,enemies:r},crossdomain:!0,mode:"cors"});case 12:s=e.sent,d(s.data);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){re.apply(this,arguments)}()}),[]),c.a.createElement("div",null,c.a.createElement(g.a,{container:!0,spacing:3},c.a.createElement(g.a,{item:!0,xs:12},c.a.createElement(x.a,{style:{backgroundColor:"rgba(75,83,83,0.8)",borderStyle:"solid",borderRadius:"10px",margin:"10px"}},c.a.createElement(g.a,{container:!0},c.a.createElement(g.a,{item:!0,xs:12},c.a.createElement("h2",null,"Allies"),c.a.createElement(k,{champNames:h,id:"allies",callbacks:[N,A,J,$]})),c.a.createElement(g.a,{item:!0,xs:12,style:{margin:25}},c.a.createElement("h2",null,"Enemies"),c.a.createElement(k,{champNames:h,id:"enemies",callbacks:[F,M,V,ee,ce]}))))),c.a.createElement(g.a,{item:!0,xs:12},c.a.createElement(O.a,{variant:"contained",onClick:function(){return le.apply(this,arguments)},style:{spacing:"3",backgroundColor:"rgba(220,220,220,0.6)",color:"black",border:"2px solid",borderRadius:"10px"}},"Recommend!")),c.a.createElement(g.a,{item:!0},c.a.createElement(g.a,{container:!0,direction:"row",justify:"center",alignItems:"center",spacing:3},c.a.createElement(g.a,{item:!0,xs:6,xl:4,style:{background:"rgba(12,34,56,0.5)",borderRadius:"10px"}},c.a.createElement(g.a,{container:!0,spacing:3,justify:"center"},s.map((function(e){var a,n;for(a in t)t[a].key==e&&(n=a);return c.a.createElement(g.a,{item:!0,xs:12},c.a.createElement(x.a,{style:{backgroundColor:"rgba(75,83,83,0.8)",borderStyle:"solid"}},c.a.createElement("b",null,"#",s.indexOf(e)+1),c.a.createElement("hr",null),c.a.createElement(j,{champId:e,champInfo:t[n]})))}))))))))};var v=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(m.a,null,c.a.createElement("h1",null,"Deep LoL"),c.a.createElement(g.a,{container:!0,alignItems:"flex-start",justify:"flex-end",direction:"row"},c.a.createElement("a",{href:"https://www.paypal.me/deeplol"},c.a.createElement(O.a,{variant:"contained",style:{backgroundColor:"rgba(0,0,0)",color:"grey",border:"1px solid",borderRadius:"10px",justifyContent:"space-between"}},"Donate!")))),c.a.createElement(y,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[41,1,2]]]);
//# sourceMappingURL=main.5dccfee1.chunk.js.map