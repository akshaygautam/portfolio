(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{191:function(e,t,a){e.exports=a(367)},196:function(e,t,a){},198:function(e,t,a){},204:function(e,t,a){},205:function(e,t,a){},206:function(e,t,a){},227:function(e,t,a){},228:function(e,t,a){},229:function(e,t,a){},326:function(e,t,a){},367:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(25),i=a.n(o),c=(a(196),a(197),a(54)),l=a.n(c),s=a(84),m=a(42),u=a(43),p=a(46),f=a(44),d=(a(198),a(371)),h=a(182),E=a(76),g=a(374),v=a(116),b=a(114),y=a.n(b);a(199),a(202);function j(e,t){return"date"===t?e.sort((function(e,t){var a=new Date(e.created),n=new Date(t.created);return a>n?-1:a<n?1:0})):e.sort((function(e,t){return e.sequence<t.sequence?-1:e.sequence<t.sequence?1:0})),e}y.a.initializeApp({apiKey:"AIzaSyAEQtWWA_YtR-VG4y7qJeKGBU8Sh7bD5X0",authDomain:"crown-db-a0e18.firebaseapp.com",databaseURL:"https://crown-db-a0e18.firebaseio.com",projectId:"crown-db-a0e18",storageBucket:"crown-db-a0e18.appspot.com",messagingSenderId:"131627979395",appId:"1:131627979395:web:5c1af8e59433606f0b41b6",measurementId:"G-07Y73K5FYY"});var w=function(e){return j(e.docs.map((function(e){return Object(v.a)({id:e.id},e.data())})).filter((function(e){return e.active})),"date")},k=function(e){for(var t=e.docs.map((function(e){return Object(v.a)({id:e.id},e.data())})),a=1;a<5;a++)t=t.concat(t);return j(t,"date")},x=y.a.firestore(),O=(y.a,a(204),a(205),function(e){var t=e.content;return r.a.createElement("div",{className:"portfolio-container"},r.a.createElement("a",{href:t.siteURL,target:"_blank",rel:"noopner noreferrer"},r.a.createElement("img",{className:"img-responsive img-thumbnail",alt:"monster",src:t.imageURL})),r.a.createElement("h3",{style:{color:"white",marginTop:"2px"},className:"text-primary"},t.displayInfo))}),C=(a(206),a(373)),L=a(369),N=a(75),S=a(67),P=a(375),I=function(e){var t=e.title,a=e.portfolioContentList,n=e.gradientClassName,o=e.showItems,i=e.link,c=e.showMore;return r.a.createElement(C.a,{className:n},r.a.createElement("div",{className:"fluid-container"},r.a.createElement(L.a,{orientation:"center"},r.a.createElement(S.b,{to:i,className:"portfolio-divider-content"},r.a.createElement("div",null,t))),r.a.createElement("div",{className:"row"},a.filter((function(e,t){return t<o})).map((function(e){return r.a.createElement("div",{className:"col-md-4 col-xs-12",key:e.id},r.a.createElement(O,{key:e.id,content:e}))}))),c?r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-* col-xs-*"},r.a.createElement(S.b,{to:i,className:"portfolio-Col span={6}ider-content"},r.a.createElement(N.a,{style:{color:"white"},type:"ghost",shape:"round",icon:r.a.createElement(P.a,null),size:"large"},"Show All")))):null))},D=(a(227),a(108)),_=a(376),z=a(377),R=a(378),A=a(379),M=function(e){var t=e.text,a=e.textStyle,n=e.iconStyle,o=e.tooltipPlacement;return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-* col-xs-*"},r.a.createElement("span",{style:a},t),r.a.createElement("a",{href:"https://www.linkedin.com/in/akshay-gautam-74577a117/",target:"_blank",rel:"noopener noreferrer",style:n},r.a.createElement(D.a,{placement:o,title:"LikedIn"},r.a.createElement(_.a,null))),r.a.createElement("a",{href:"https://github.com/akshaygautam",target:"_blank",rel:"noopener noreferrer",style:n},r.a.createElement(D.a,{placement:o,title:"Github"},r.a.createElement(z.a,null))),r.a.createElement("a",{href:"https://drive.google.com/file/d/1ZJuFFjg1Mmc7KcfhNG5c5j0LA5AHRrXp/view?usp=sharing",target:"_blank",rel:"noopener noreferrer",style:n},r.a.createElement(D.a,{placement:o,title:"Resume"},r.a.createElement(R.a,null))),r.a.createElement("a",{href:"mailto:akshay.gautam2209@gmail.com",style:n},r.a.createElement(D.a,{placement:o,title:"Email"},r.a.createElement(A.a,null)))))},G=a(167),q=a.n(G),K=function(e){var t=e.bio,a=t.imageURL,n=t.content,o=t.intro,i=t.subIntro;return r.a.createElement(C.a,{className:"bio"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xs-12 col-md-4"},r.a.createElement("img",{className:"img-responsive img-thumbnail",src:a,alt:"me.jpg"})),r.a.createElement("div",{className:"col-xs-12 col-md-8"},r.a.createElement("h1",null,o),r.a.createElement(q.a,{cursor:"_",className:"lead",text:i}),r.a.createElement("div",{id:"demo"},n),r.a.createElement(M,{text:"Know more",textStyle:{margin:"10px",color:"white",fontSize:"x-large"},iconStyle:{color:"white",margin:"5px",fontSize:"30px"},tooltipPlacement:"bottom"})))))},U=a(370),F=function(e){var t=e.portfolioCertificationList,a=e.portfolioDemoProjectList;return r.a.createElement(U.a,{size:"middle",direction:"vertical"},r.a.createElement(K,{bio:{imageURL:"https://firebasestorage.googleapis.com/v0/b/crown-db-a0e18.appspot.com/o/portfolio%2Fme%2FIMG_1255.jpg?alt=media&token=93369c81-25d4-4571-bb9c-81d4f209a711",content:"Delhi Based Software Engineer",subIntro:"Developer, Gamer, Singer, Geek",intro:"I'm Akshay Gautam"}}),t&&t.length>0?r.a.createElement(I,{gradientClassName:"certificate-gradient",title:"Certifications",portfolioContentList:t,showItems:"3",link:"/certifications",showMore:!0}):null,a&&a.length>0?r.a.createElement(I,{gradientClassName:"demo-project-gradient",title:"Demo Projects",portfolioContentList:a,showItems:"3",link:"/demo_projects",showMore:!0}):null)},H=(a(228),function(){return r.a.createElement("div",{className:"footer"},"Portfolio \xa92020 Created by Akshay Gautam",r.a.createElement("div",{className:"footer"},r.a.createElement(M,{text:"Connect On",textStyle:{margin:"10px",color:"black",fontSize:"x-large"},iconStyle:{color:"black",fontSize:"20px",margin:"5px"},tooltipPlacement:"top"})))}),B=a(380),J=a(20),W=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("h1",null,"Hey blogs")}}]),a}(r.a.Component),Y=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(C.a,null,r.a.createElement(I,{gradientClassName:"certificate-gradient",title:"Certifications",portfolioContentList:this.props.portfolioCertificationList,showItems:this.props.portfolioCertificationList.length,showMore:!1}))}}]),a}(r.a.Component),T=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(C.a,null,r.a.createElement(I,{gradientClassName:"certificate-gradient",title:"Demo Projects",portfolioContentList:this.props.portfolioDemoProjectList,showItems:this.props.portfolioDemoProjectList.length,showMore:!1}))}}]),a}(r.a.Component),X=(a(229),a(372)),Q=[{title:"Resource Title",dataIndex:"title"},{title:"Resource Description",dataIndex:"desc",responsive:["md"]},{title:"Resource Source",dataIndex:"sourceName",render:function(e,t){return r.a.createElement("a",{href:t.sourceURL,target:"_blank",rel:"noopner noreferrer"},e)}},{title:"Resource Category",dataIndex:"category",responsive:["lg"]},{title:"Added On",dataIndex:"created",responsive:["lg"]}],V=function(e){var t=e.resourceList,a=e.loading;return r.a.createElement(C.a,{className:"resource-list",loading:a},r.a.createElement(L.a,{orientation:"center"},r.a.createElement("h1",null,"Resources")),r.a.createElement(C.a,null,r.a.createElement(X.a,{loading:a,columns:Q,dataSource:t,bordered:!0})))},Z=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).state={resourceList:[],loading:!0},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;x.collection("portfolio_useful_resources").onSnapshot(function(){var t=Object(s.a)(l.a.mark((function t(a){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=k(a),e.setState({loading:!1,resourceList:n});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"render",value:function(){return r.a.createElement(C.a,null,r.a.createElement(V,{loading:this.state.loading,resourceList:this.state.resourceList}))}}]),a}(r.a.Component),$=(a(326),function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(C.a,null,r.a.createElement("div",{className:"contact-page"},r.a.createElement(M,{text:"Contact Me On",textStyle:{margin:"10px",color:"white",fontSize:"x-large"},iconStyle:{color:"white",margin:"5px",fontSize:"40px"},tooltipPlacement:"bottom"})))}}]),a}(r.a.Component)),ee=a(184),te=a.n(ee),ae=r.a.createElement(B.a,{style:{fontSize:24},spin:!0}),ne=d.a.Content,re=d.a.Footer,oe=d.a.Header,ie=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).renderHomePage=function(){return r.a.createElement(F,{portfolioCertificationList:n.state.portfolioCertificationList,portfolioDemoProjectList:n.state.portfolioDemoProjectList})},n.renderCertificationsPage=function(){return r.a.createElement(Y,{portfolioCertificationList:n.state.portfolioCertificationList})},n.renderDemoProjectsPage=function(){return r.a.createElement(T,{portfolioDemoProjectList:n.state.portfolioDemoProjectList})},n.renderContent=function(){return r.a.createElement(J.c,null,r.a.createElement(J.a,{path:"/portfolio",render:n.renderHomePage}),r.a.createElement(J.a,{path:"/blogs",component:W}),r.a.createElement(J.a,{path:"/certifications",component:n.renderCertificationsPage}),r.a.createElement(J.a,{path:"/demo_projects",component:n.renderDemoProjectsPage}),r.a.createElement(J.a,{path:"/useful_resources",component:Z}),r.a.createElement(J.a,{path:"/contact",component:$}))},n.state={loading:!0,portfolioCertificationList:[],portfolioDemoProjectList:[],headerOptions:[{sequence:1,title:"About me",link:"/portfolio"}],selectedHeader:["1","2"]},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;x.collection("portfolio_certificates").onSnapshot(function(){var t=Object(s.a)(l.a.mark((function t(a){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=w(a),e.setState({loading:!1,portfolioCertificationList:n});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),x.collection("portfolio_demo_projects").onSnapshot(function(){var t=Object(s.a)(l.a.mark((function t(a){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=w(a),e.setState({loading:!1,portfolioDemoProjectList:n});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),x.collection("portfolio_header_options").onSnapshot(function(){var t=Object(s.a)(l.a.mark((function t(a){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=j(a.docs.map((function(e){return Object(v.a)({id:e.id},e.data())})).filter((function(e){return e.active}))),e.setState({loading:!1,headerOptions:n});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"renderSpinner",value:function(){return r.a.createElement("div",{className:"spinner"},r.a.createElement(h.a,{size:"large",indicator:ae}))}},{key:"renderPage",value:function(){var e=this,t=[],a=this.state.headerOptions.find((function(t){return t.link===e.props.history.location.pathname}));return a&&t.push(a.id+""),r.a.createElement(d.a,{hasSider:"false",className:"layout"},r.a.createElement(oe,{style:{position:"fixed",zIndex:1,width:"100%"}},r.a.createElement(S.b,{to:"/portfolio"},r.a.createElement("div",{className:"logo"},r.a.createElement(te.a,{shape:"square",src:"https://img.icons8.com/officel/40/000000/popeye.png"}))),r.a.createElement(E.a,{theme:"dark",mode:"horizontal",selectedKeys:t,defaultSelectedKeys:["1"]},this.state.headerOptions.map((function(e){return r.a.createElement(E.a.Item,{key:e.id},r.a.createElement(S.b,{to:e.link,className:"option"},e.title))})))),r.a.createElement(ne,{style:{padding:"0 50px",marginTop:64}},this.state.loading?this.renderSpinner():this.renderContent(),r.a.createElement(g.a,null)),r.a.createElement(re,{style:{textAlign:"center"}},r.a.createElement(H,null)))}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},this.renderPage())}}]),a}(r.a.Component),ce=Object(J.f)(ie);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S.a,null,r.a.createElement(ce,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[191,1,2]]]);
//# sourceMappingURL=main.e3bd52f1.chunk.js.map