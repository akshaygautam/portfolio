(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{111:function(e,t,a){e.exports=a(172)},116:function(e,t,a){},119:function(e,t,a){},125:function(e,t,a){},126:function(e,t,a){},127:function(e,t,a){},149:function(e,t,a){},150:function(e,t,a){},151:function(e,t,a){},172:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(15),i=a.n(o),c=(a(116),a(117),a(46)),l=a.n(c),s=a(71),m=a(26),u=a(27),p=a(30),f=a(29),d=(a(119),a(177)),h=a(174),g=a(175),E=a(85),b=a(64),y=a.n(b);a(120),a(123);y.a.initializeApp({apiKey:"AIzaSyAEQtWWA_YtR-VG4y7qJeKGBU8Sh7bD5X0",authDomain:"crown-db-a0e18.firebaseapp.com",databaseURL:"https://crown-db-a0e18.firebaseio.com",projectId:"crown-db-a0e18",storageBucket:"crown-db-a0e18.appspot.com",messagingSenderId:"131627979395",appId:"1:131627979395:web:5c1af8e59433606f0b41b6",measurementId:"G-07Y73K5FYY"});var v=function(e){return e.docs.map((function(e){return Object(E.a)({id:e.id},e.data())})).filter((function(e){return e.active}))},j=(y.a.auth(),y.a.firestore()),k=(y.a,a(125),a(126),function(e){var t=e.content;return r.a.createElement("div",{className:"portfolio-container"},r.a.createElement("a",{href:t.siteURL,target:"_blank",rel:"noopner noreferrer"},r.a.createElement("img",{alt:"monster",src:t.imageURL})),r.a.createElement("h3",null,t.displayInfo))}),C=(a(127),a(176)),w=a(173),x=a(57),O=a(34),L=function(e){var t=e.title,a=e.portfolioContentList,n=e.gradientClassName,o=e.showItems;return r.a.createElement(C.a,{className:n},r.a.createElement(w.a,{orientation:"center"},r.a.createElement("h1",null,t)),r.a.createElement(x.a,{gutter:{xs:8,sm:16,md:24,lg:32}},a.filter((function(e,t){return t<o})).map((function(e){return r.a.createElement(O.a,{className:"gutter-row",key:e.id,span:6},r.a.createElement(k,{key:e.id,content:e}))}))))},S=(a(149),a(108)),P=a(178),N=a(179),I=a(180),D=a(181),_=function(e){var t=e.text,a=e.textStyle,n=e.iconStyle,o=e.tooltipPlacement;return r.a.createElement(x.a,null,r.a.createElement(O.a,null,r.a.createElement("span",{style:a},t),r.a.createElement("a",{href:"https://www.linkedin.com/in/akshay-gautam-74577a117/",target:"_blank",rel:"noopener noreferrer",style:n},r.a.createElement(S.a,{placement:o,title:"LikedIn"},r.a.createElement(P.a,null))),r.a.createElement("a",{href:"https://github.com/akshaygautam",target:"_blank",rel:"noopener noreferrer",style:n},r.a.createElement(S.a,{placement:o,title:"Github"},r.a.createElement(N.a,null))),r.a.createElement("a",{href:"https://drive.google.com/file/d/1ZJuFFjg1Mmc7KcfhNG5c5j0LA5AHRrXp/view?usp=sharing",target:"_blank",rel:"noopener noreferrer",style:n},r.a.createElement(S.a,{placement:o,title:"Resume"},r.a.createElement(I.a,null))),r.a.createElement("a",{href:"mailto:akshay.gautam2209@gmail.com",style:n},r.a.createElement(S.a,{placement:o,title:"Email"},r.a.createElement(D.a,null)))))},z=function(e){var t=e.bio,a=t.imageURL,n=t.content,o=t.intro;return r.a.createElement(C.a,{className:"bio"},r.a.createElement(x.a,{gutter:{xs:8,sm:16,md:24,lg:32}},r.a.createElement(O.a,{span:12},r.a.createElement("img",{src:a,alt:"me.jpg"})),r.a.createElement(O.a,{span:12},r.a.createElement("h1",null,o),r.a.createElement("h3",null,n),r.a.createElement(_,{text:"Know more",textStyle:{margin:"10px",color:"white",fontSize:"x-large"},iconStyle:{color:"white",margin:"5px",fontSize:"30px"},tooltipPlacement:"bottom"}))))},A=function(e){var t=e.portfolioCertificationList,a=e.portfolioDemoProjectList;return r.a.createElement(C.a,null,r.a.createElement(z,{bio:{imageURL:"https://firebasestorage.googleapis.com/v0/b/crown-db-a0e18.appspot.com/o/portfolio%2Fme%2FIMG_1255.jpg?alt=media&token=93369c81-25d4-4571-bb9c-81d4f209a711",content:"hey there this is my portfolio",intro:"I'm Akshay Gautam"}}),t&&t.length>0?r.a.createElement(L,{gradientClassName:"certificate-gradient",title:"Certifications",portfolioContentList:t,showItems:"3"}):null,a&&a.length>0?r.a.createElement(L,{gradientClassName:"demo-project-gradient",title:"Demo projects",portfolioContentList:a,showItems:"3"}):null)},G=(a(150),function(){return r.a.createElement("div",{className:"footer"},"Portfolio \xa92020 Created by Akshay Gautam",r.a.createElement("div",{className:"footer"},r.a.createElement(_,{text:"Connect On",textStyle:{margin:"10px",color:"black",fontSize:"x-large"},iconStyle:{color:"black",fontSize:"20px",margin:"5px"},tooltipPlacement:"top"})))}),H=a(182),R=a(6),F=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(){return Object(m.a)(this,a),t.call(this)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("h1",null,"Hey blogs")}}]),a}(r.a.Component),K=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(e){return Object(m.a)(this,a),t.call(this,e)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(L,{gradientClassName:"certificate-gradient",title:"Certifications",portfolioContentList:this.props.portfolioCertificationList,showItems:this.props.portfolioCertificationList.length})}}]),a}(r.a.Component),U=a(70),M=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(e){return Object(m.a)(this,a),t.call(this,e)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(L,{gradientClassName:"certificate-gradient",title:"Certifications",portfolioContentList:this.props.portfolioDemoProjectList,showItems:this.props.portfolioDemoProjectList.length})}}]),a}(r.a.Component),B=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(){return Object(m.a)(this,a),t.call(this)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("h1",null,"Hey Cert")}}]),a}(r.a.Component),J=(a(151),function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(){return Object(m.a)(this,a),t.call(this)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"contact-page"},r.a.createElement(_,{text:"Contact Me On",textStyle:{margin:"10px",color:"white",fontSize:"x-large"},iconStyle:{color:"white",margin:"5px",fontSize:"40px"},tooltipPlacement:"bottom"}))}}]),a}(r.a.Component)),W=r.a.createElement(H.a,{style:{fontSize:24},spin:!0}),Y=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).renderHeader=function(e){return r.a.createElement(e,{style:{position:"fixed",zIndex:1,width:"100%"}},r.a.createElement("div",{className:"logo"}),r.a.createElement(d.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["0"]},n.state.headerOptions.map((function(e){return r.a.createElement(d.a.Item,{key:e.sequence},r.a.createElement(U.b,{to:e.link,className:"option"},e.title))}))))},n.renderHomePage=function(){return r.a.createElement(A,{portfolioCertificationList:n.state.portfolioCertificationList,portfolioDemoProjectList:n.state.portfolioDemoProjectList})},n.renderCertificationsPage=function(){return r.a.createElement(K,{portfolioCertificationList:n.state.portfolioCertificationList})},n.renderDemoProjectsPage=function(){return r.a.createElement(M,{portfolioDemoProjectList:n.state.portfolioDemoProjectList})},n.renderContent=function(){return r.a.createElement(R.c,null,r.a.createElement(R.a,{exact:!0,path:"/",render:n.renderHomePage}),r.a.createElement(R.a,{exact:!0,path:"/blogs",component:F}),r.a.createElement(R.a,{exact:!0,path:"/certifications",component:n.renderCertificationsPage}),r.a.createElement(R.a,{exact:!0,path:"/demo_projects",component:n.renderDemoProjectsPage}),r.a.createElement(R.a,{exact:!0,path:"/useful_resources",component:B}),r.a.createElement(R.a,{exact:!0,path:"/contact",component:J}))},n.state={loading:!0,portfolioCertificationList:[],portfolioDemoProjectList:[],headerOptions:[{sequence:1,title:"About me",link:"/"}]},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(e){var t=this;console.log(e),j.collection("portfolio_certificates").onSnapshot(function(){var e=Object(s.a)(l.a.mark((function e(a){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=v(a),t.setState({loading:!1,portfolioCertificationList:n});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),j.collection("portfolio_demo_projects").onSnapshot(function(){var e=Object(s.a)(l.a.mark((function e(a){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=v(a),t.setState({loading:!1,portfolioDemoProjectList:n});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),j.collection("portfolio_header_options").onSnapshot(function(){var e=Object(s.a)(l.a.mark((function e(a){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=a.docs.map((function(e){return Object(E.a)({id:e.id},e.data())})).filter((function(e){return e.active})),t.setState({loading:!1,headerOptions:n});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}},{key:"renderSpinner",value:function(){return r.a.createElement("div",{className:"spinner"},r.a.createElement(h.a,{size:"large",indicator:W}))}},{key:"renderPage",value:function(){var e=g.a.Content,t=g.a.Footer,a=g.a.Header;return r.a.createElement(g.a,null,this.renderHeader(a),r.a.createElement(e,{className:"site-layout",style:{padding:"0 50px",marginTop:64}},this.renderContent()),r.a.createElement(t,{style:{textAlign:"center",position:"sticky",bottom:"0"}},r.a.createElement(G,null)))}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},this.state.loading?this.renderSpinner():this.renderPage())}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(U.a,null,r.a.createElement(Y,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[111,1,2]]]);
//# sourceMappingURL=main.bb484a66.chunk.js.map