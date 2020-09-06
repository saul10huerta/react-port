(this["webpackJsonpreact-port"]=this["webpackJsonpreact-port"]||[]).push([[0],[,,,function(e,t,a){e.exports=a.p+"static/media/profilePic.3621e81b.png"},function(e,t,a){e.exports=a.p+"static/media/githubImage.cefc2023.png"},function(e,t,a){e.exports=a.p+"static/media/linkedinImage.c24cde28.png"},function(e,t,a){e.exports=a.p+"static/media/stOver.ac44060f.png"},,,,function(e,t,a){e.exports=a(30)},,,,,function(e,t,a){},function(e,t,a){var n={"./footer/githubImage.png":4,"./footer/linkedinImage.png":5,"./footer/stOver.png":6,"./portfolio/0.png":17,"./portfolio/1.png":18,"./portfolio/10.png":19,"./portfolio/11.png":20,"./portfolio/2.png":21,"./portfolio/3.png":22,"./portfolio/4.png":23,"./portfolio/5.png":24,"./portfolio/6.png":25,"./portfolio/7.png":26,"./portfolio/8.png":27,"./portfolio/9.png":28,"./profilepic/profilePic.png":3,"./reactport.png":29};function r(e){var t=l(e);return a(t)}function l(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=l,e.exports=r,r.id=16},function(e,t,a){e.exports=a.p+"static/media/0.e2fcb7f0.png"},function(e,t,a){e.exports=a.p+"static/media/1.b4baaa99.png"},function(e,t,a){e.exports=a.p+"static/media/10.9c5e50ae.png"},function(e,t,a){e.exports=a.p+"static/media/11.7397b742.png"},function(e,t,a){e.exports=a.p+"static/media/2.2c7d41f0.png"},function(e,t,a){e.exports=a.p+"static/media/3.2338d834.png"},function(e,t,a){e.exports=a.p+"static/media/4.da340d99.png"},function(e,t,a){e.exports=a.p+"static/media/5.131f9026.png"},function(e,t,a){e.exports=a.p+"static/media/6.abcf081a.png"},function(e,t,a){e.exports=a.p+"static/media/7.134c59fe.png"},function(e,t,a){e.exports=a.p+"static/media/8.de028cc4.png"},function(e,t,a){e.exports=a.p+"static/media/9.ed0d3e00.png"},function(e,t,a){e.exports=a.p+"static/media/reactport.b97d7d41.png"},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(9),o=a.n(l),i=(a(15),a(1)),c=a(3),s=a.n(c);var u=function(){return r.a.createElement("section",null,r.a.createElement("h1",{id:"about"},"About Me"),r.a.createElement("img",{src:s.a,className:"my-1",style:{width:"100%"},alt:"AboutMeImg"}),r.a.createElement("p",{className:"my-5"},"Attended the University of Texas at Austin where I earned a BSA in Biology as well as certificates in both Business and Health Information Technology. In addition, I\u2019m currently enrolled in UT Austin coding bootcamp working to be a full stack web developer. Will be earning a certificate from this bootcamp in October 2020."),r.a.createElement("p",{className:"my-5"},"I currently work as a Business Analyst  (BA) Consultant for eClinicalWorks. Responsabilities include implementing medical practices of various sizes with eCW Electronic Health Record (EHR) and Practice Management (PM) system from project initiation to application deployment. I also help optimize practices who typically have been live with eCW EHR & PM for a few years. I\u2019ve worked for this company since 2017, as a software trainer for the first 8 months, and now as a BA."),r.a.createElement("p",{className:"my-5"},"In my free time, I enjoy playing soccer throughout the year in competitive leagues, running, and hiking the trails in Austin. I also like to travel regularly to places like Puerto Vallarta, Mexico for vacation, and to visit family in different parts in Mexico and California."))};function m(e){return e.charAt(0).toUpperCase()+e.slice(1)}var p=function(e){var t=e.categories,a=void 0===t?[]:t,l=e.setCurrentCategory,o=e.currentCategory,i=e.contactSelected,c=e.setContactSelected,s=e.setPortfolioSelected,u=e.aboutmeSelected,p=e.setAboutmeSelected,g=e.resumeSelected,d=e.setResumeSelected;return Object(n.useEffect)((function(){document.title=m(o.name)}),[o]),r.a.createElement("header",{className:"flex-row"},r.a.createElement("h2",{className:"mx-3 my-2"},r.a.createElement("a",{href:"/"}," Saul Huerta ")),r.a.createElement("nav",null,r.a.createElement("ul",{className:"flex-row my-8"},r.a.createElement("li",{className:"mx-2 ".concat(u&&"navActive")},r.a.createElement("span",{"data-testid":"about",onClick:function(){c(!1),p(!0),s(!1),d(!1)}},"About me")),a.map((function(e){return r.a.createElement("li",{className:"mx-2 ".concat(o.name===e.name&&!u&&!i&&!g&&"navActive"),key:e.name},r.a.createElement("span",{onClick:function(){l(e),c(!1),p(!1),s(!0),d(!1)}},m(e.name)))})),r.a.createElement("li",{className:"mx-2 ".concat(i&&"navActive")},r.a.createElement("span",{onClick:function(){c(!0),p(!1),s(!1),d(!1)}},"Contact")),r.a.createElement("li",{className:"mx-2 ".concat(g&&"navActive")},r.a.createElement("span",{onClick:function(){c(!1),p(!1),s(!1),d(!0)}},"Resume")))))},g=a(4),d=a.n(g),h=a(5),b=a.n(h),f=a(6),E=a.n(f);var y=function(){return r.a.createElement("footer",{className:"flex-row"},r.a.createElement("a",{href:"https://github.com/saul10huerta",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{id:"img1",src:d.a,className:"my-1",style:{width:"100%"},alt:"GitHub"})),r.a.createElement("a",{href:"https://www.linkedin.com/in/saul10huerta/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{id:"img2",src:b.a,className:"my-1",style:{width:"100%"},alt:"LinkedIn"})),r.a.createElement("a",{href:"https://stackoverflow.com/users/12970784/saul10huerta?tab=profile",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{id:"img2",src:E.a,className:"my-1",style:{width:"100%"},alt:"StackOverflow"})))};var v=function(e){var t=e.category,l=Object(n.useState)([{name:"Frame It",category:"projects",weblink:"https://cryptic-peak-35227.herokuapp.com/",githubrepo:"https://github.com/saul10huerta/frame-it",date:"August 2020"},{name:"UpDog",category:"projects",weblink:"https://gentle-badlands-57330.herokuapp.com/",githubrepo:"https://github.com/saul10huerta/UpDog",date:"July 2020"},{name:"Tasty Events",category:"projects",weblink:"https://saul10huerta.github.io/tasty-events/",githubrepo:"https://github.com/saul10huerta/tasty-events",date:"May 2020"},{name:"Weather Dashboard",category:"projects",weblink:"https://saul10huerta.github.io/weather-dashboard/",githubrepo:"https://github.com/saul10huerta/weather-dashboard",date:"April 2020"},{name:"Git It Done",category:"projects",weblink:"https://saul10huerta.github.io/git-it-done/",githubrepo:"https://github.com/saul10huerta/git-it-done",date:"April 2020"},{name:"Work Day Scheduler",category:"projects",weblink:"https://saul10huerta.github.io/workday-scheduler/",githubrepo:"https://github.com/saul10huerta/workday-scheduler",date:"April 2020"},{name:"Taskmaster Pro",category:"projects",weblink:"https://saul10huerta.github.io/taskmaster-pro/",githubrepo:"https://github.com/saul10huerta/taskmaster-pro",date:"April 2020"},{name:"Coding Quiz",category:"projects",weblink:"https://saul10huerta.github.io/coding-quiz/",githubrepo:"https://github.com/saul10huerta/coding-quiz",date:"April 2020"},{name:"Taskinator",category:"projects",weblink:"https://saul10huerta.github.io/taskinator/",githubrepo:"https://github.com/saul10huerta/taskinator",date:"April 2020"},{name:"Password Generator",category:"projects",weblink:"https://saul10huerta.github.io/password-generator/",githubrepo:"https://github.com/saul10huerta/password-generator",date:"April 2020"},{name:"Robot Gladiators",category:"projects",weblink:"https://saul10huerta.github.io/robot-gladiators/",githubrepo:"https://github.com/saul10huerta/robot-gladiators",date:"April 2020"},{name:"Run Buddy",category:"projects",weblink:"https://saul10huerta.github.io/run-buddy/",githubrepo:"https://github.com/saul10huerta/run-buddy",date:"April 2020"}]),o=Object(i.a)(l,1)[0];return r.a.createElement("div",null,r.a.createElement("div",{className:"flex-row"},o.map((function(e,n){return r.a.createElement("div",{className:"card mx-3 my-5",key:e.name},r.a.createElement("p",{className:"my-2"},e.name),r.a.createElement("img",{src:a(16)("./".concat(t,"/").concat(n,".png")),alt:e.name,className:"img-thumbnail",style:{width:"100%"}}),r.a.createElement("div",{className:"my-2"},r.a.createElement("button",{type:"button",className:"mx-1 my-1"},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:e.weblink},"Website Link")),r.a.createElement("button",{type:"button",className:"mx-1"},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:e.githubrepo},"GitHub Repo"))),r.a.createElement("p",null,e.date))}))))};var k=function(e){var t=e.currentCategory,a=t.name,n=t.description;return r.a.createElement("section",null,r.a.createElement("h1",null,m(a)),r.a.createElement("p",null,n),r.a.createElement(v,{category:t.name}))},w=a(2),j=a(7);var x=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)({name:"",email:"",message:""}),c=Object(i.a)(o,2),s=c[0],u=c[1],m=s.name,p=s.email,g=s.message;function d(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);console.log(t),t?e.target.value.length?l(""):l("".concat(e.target.name," is required.")):l("Your email is invalid.")}a||u(Object(j.a)(Object(j.a)({},s),{},Object(w.a)({},e.target.name,e.target.value)))}return r.a.createElement("section",{className:"marginbottom"},r.a.createElement("h1",null,"Contact me"),r.a.createElement("form",{id:"contact-form",onSubmit:function(e){e.preventDefault(),console.log(s)}},r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"name"},"Name:"),r.a.createElement("input",{type:"text",name:"name",defaultValue:m,onBlur:d})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"email"},"Email address:"),r.a.createElement("input",{type:"email",name:"email",defaultValue:p,onBlur:d})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"message"},"Message:"),r.a.createElement("textarea",{name:"message",rows:"5",defaultValue:g,onBlur:d})),a&&r.a.createElement("div",null,r.a.createElement("p",{className:"error-text"},a)),r.a.createElement("button",{type:"submit"},"Submit")))};var S=function(){return r.a.createElement("section",null,r.a.createElement("h1",{id:"about"},"Resume"),r.a.createElement("p",{className:"my-5"},"Download my ",r.a.createElement("a",{href:"https://www.linkedin.com/in/saul10huerta/",target:"_blank",rel:"noopener noreferrer"},"resume")," from my LinkedIn profile."),r.a.createElement("h3",null,"Front-end Proficiencies"),r.a.createElement("ul",null,r.a.createElement("li",null,"- HTML"),r.a.createElement("li",null,"- CSS"),r.a.createElement("li",null,"- JavaScript"),r.a.createElement("li",null,"- jQuery"),r.a.createElement("li",null,"- responsive design"),r.a.createElement("li",null,"- React"),r.a.createElement("li",null,"- Bootstrap")),r.a.createElement("h3",null,"Back-end Proficiencies"),r.a.createElement("ul",null,r.a.createElement("li",null,"- APIs"),r.a.createElement("li",null,"- Node"),r.a.createElement("li",null,"- Express"),r.a.createElement("li",null,"- MySQL"),r.a.createElement("li",null,"- Sequelize"),r.a.createElement("li",null,"- MongoDB"),r.a.createElement("li",null,"- Mongoose"),r.a.createElement("li",null,"- REST"),r.a.createElement("li",null,"- GraphQL")))};var A=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)(!1),c=Object(i.a)(o,2),s=c[0],m=c[1],g=Object(n.useState)(!0),d=Object(i.a)(g,2),h=d[0],b=d[1],f=Object(n.useState)(!1),E=Object(i.a)(f,2),v=E[0],w=E[1],j=Object(n.useState)([{name:"portfolio",description:"Projects & Work"}]),A=Object(i.a)(j,1)[0],O=Object(n.useState)(A[0]),N=Object(i.a)(O,2),C=N[0],I=N[1];return r.a.createElement("div",null,r.a.createElement(p,{categories:A,setCurrentCategory:I,currentCategory:C,contactSelected:a,setContactSelected:l,portfolioSelected:s,setPortfolioSelected:m,aboutmeSelected:h,setAboutmeSelected:b,resumeSelected:v,setResumeSelected:w}),r.a.createElement("main",null,a?r.a.createElement(x,null):r.a.createElement(r.a.Fragment,null),s?r.a.createElement(k,{currentCategory:C}):r.a.createElement(r.a.Fragment,null),h?r.a.createElement(u,null):r.a.createElement(r.a.Fragment,null),v?r.a.createElement(S,null):r.a.createElement(r.a.Fragment,null)),r.a.createElement(y,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.4535921a.chunk.js.map