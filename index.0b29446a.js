!function(){function i(i){if(Array.isArray(i))return i}function t(i){if("undefined"!=typeof Symbol&&null!=i[Symbol.iterator]||null!=i["@@iterator"])return Array.from(i)}function n(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function e(i,t){(null==t||t>i.length)&&(t=i.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=i[n];return e}function o(i,t){if(i){if("string"==typeof i)return e(i,t);var n=Object.prototype.toString.call(i).slice(8,-1);return"Object"===n&&i.constructor&&(n=i.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?e(i,t):void 0}}function r(e,r){return i(e)||t(e)||o(e,r)||n()}function a(i){if(Array.isArray(i))return e(i)}function s(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(i){return a(i)||t(i)||o(i)||s()}var l={},h={logo:"appsilon-logo",url:"https://appsilon.com/"},p={library:"shiny-benchmark",title:"shiny.benchmark"},u={logo:"logo"},d={library:"shiny-fluent",title:"shiny.fluent"},m={library:"semantic-dashboard",title:"semantic.dashboard"},g={library:"shiny-worker",title:"shiny.worker"},f={library:"shiny-info",title:"shiny.info"},y={library:"shiny-router",title:"shiny.router"},b={library:"shiny-i18n",title:"shiny.i18n"},k={library:"shiny-react",title:"shiny.react"},v={library:"shiny-semantic",title:"shiny.semantic"},_={library:"data-validator",title:"data.validator"},A={library:"rhino",title:"Rhino"},w={library:"shiny-blueprint",title:"shiny.blueprint"},L={library:"shiny-telemetry",title:"shiny.telemetry"},S={library:"shiny-emptystate",title:"shiny.emptystate"},M={text:"Welcome to the world of ..."},E={text:"... Rhinoverse"},C=[[[4,h],[3,l],[2,l],[1,l],[0,l],[0,l],[0,l],[0,l],[0,l]],[[2,l],[2,l],[1,l],[1,l],[0,u],[1,A],[1,p],[0,l],[1,S],[0,l]],[[0,l],[1,l],[0,l],[0,l],[1,d],[2,k],[2,v],[2,w],[2,l]],[[0,l],[0,l],[0,l],[0,l],[0,l],[2,g],[2,y],[3,_],[4,L],[4,l]],[[0,l],[0,l],[0,l],[0,l],[0,l],[2,m],[3,f],[4,b],[4,l]],[[0,l],[0,l],[0,l],[0,l],[0,l],[1,l],[1,l],[3,l],[4,l],[4,l]],[[0,l],[0,l],[0,l],[0,l],[0,l],[0,l],[1,l],[2,l],[3,l]],[[0,l],[0,l],[0,l],[0,l],[0,l],[0,l],[0,l],[0,l],[1,l],[2,l]],[[0,l],[0,l],[0,l],[0,l],[0,l],[0,l],[0,l],[0,l],[0,l]]],x=[[[3,h],[2,l],[1,l],[0,l],[0,l],[0,l],[0,l]],[[2,l],[1,l],[1,l],[0,u],[1,A],[1,p],[0,l],[0,l]],[[1,l],[0,l],[0,l],[1,d],[2,k],[2,v],[2,w]],[[0,l],[0,l],[0,l],[0,l],[2,g],[2,y],[3,_],[4,l]],[[0,l],[0,l],[0,l],[0,l],[2,m],[3,f],[4,b]],[[0,l],[0,l],[0,l],[0,l],[1,l],[2,L],[3,S],[4,l]],[[0,l],[0,l],[0,l],[0,l],[0,l],[1,l],[2,l]],[[0,l],[0,l],[0,l],[0,l],[0,l],[0,l],[0,l],[0,l]]],I=[[[3,h],[2,l],[1,l],[0,l],[0,l],[0,l]],[[2,l],[1,l],[1,l],[0,u],[1,A],[1,p],[1,l]],[[0,l],[0,l],[0,l],[1,d],[2,k],[3,v]],[[0,l],[0,l],[0,l],[0,l],[2,g],[3,y],[4,l]],[[0,l],[0,l],[0,l],[1,_],[2,m],[3,f]],[[0,l],[0,l],[0,l],[0,l],[1,w],[2,b],[3,l]],[[0,l],[0,l],[0,l],[0,l],[1,L],[1,S]],[[0,l],[0,l],[0,l],[0,l],[0,l],[0,l],[0,l]]],T=[[[4,h],[3,l],[2,l],[1,l]],[[3,l],[3,l],[1,l],[0,l],[0,l]],[[1,l],[2,M],[0,l],[0,l]],[[0,l],[0,l],[1,u],[0,l],[0,l]],[[0,l],[0,l],[2,E],[1,l]],[[0,l],[0,l],[1,d],[2,A],[1,l]],[[0,l],[1,k],[2,v],[3,l]],[[2,l],[2,g],[2,y],[3,_],[4,l]],[[2,l],[2,m],[3,f],[4,l]],[[2,l],[2,w],[2,b],[3,p],[4,l]],[[2,l],[2,L],[3,S],[4,l]],[[3,l],[3,l],[4,l],[4,l],[4,l]]],j=[[[4,h],[3,l],[2,l]],[[0,l],[2,M],[1,l],[0,l]],[[0,l],[1,u],[0,l]],[[0,l],[0,l],[2,E],[0,l]],[[0,l],[2,A],[2,l]],[[0,l],[1,d],[1,k],[3,l]],[[2,l],[2,v],[3,l]],[[2,l],[3,g],[3,y],[4,l]],[[3,l],[3,_],[4,l]],[[3,l],[3,m],[3,f],[4,l]],[[3,l],[3,b],[4,l]],[[4,l],[4,p],[4,w],[4,l]],[[4,l],[4,L],[4,l]],[[4,l],[4,S],[4,l],[4,l]]],z=function(i){return"calc(".concat(1/i*100,"% + 2px)")},q=function(i,t){var n=2*(i/t)/Math.sqrt(3);return"".concat(n,"px")},R=function(i){return i.reduce((function(i,t){return window.innerWidth>=t.breakpoint?t:i}),i[0])},H=function(i,t,n,e,o){return"\n    <svg\n      class=".concat(n,'\n      viewBox="0 0 ').concat(e," ").concat(o,'"\n      ').concat(t?" data-id=".concat(t):"","\n    >\n      ").concat("blank"===i?'<path d="M100 28.867v57.735L50 115.47 0 86.602V28.867L50 0z"/>':"appLogo"===i?'\n          <polyline class="logo__triangle" points="88.971,27.5 50,95 11.029,27.5 88.971,27.5" />\n          <polyline class="logo__outer" points="88.971,27.5 88.971,72.5 50,95" />\n          <polyline class="logo__outer" points="50,95 11.029,72.5 11.029,27.5 " />\n          <polyline class="logo__outer" points="11.029,27.5 50,5 88.971,27.5" />\n          <polyline class="logo__inner" points="88.971,27.5 50,50" />\n          <polyline class="logo__inner" points="50,95 50,50" />\n          <polyline class="logo__inner" points="11.029,27.5 50,50" />\n          <circle class="logo__circle" cx="88.971" cy="27.5" r="5" />\n          <circle class="logo__circle" cx="11.029" cy="27.5" r="5" />\n          <circle class="logo__circle" cx="50" cy="95" r="5" />\n          <circle class="logo__circle" cx="50" cy="50" r="5" />\n        ':'<use href="svg/vectors.svg#'.concat(t,'"></use>'),"\n    </svg>\n  ")},N=function(i,t){return"<img class='".concat(t,"' src='svg/").concat(i,".svg' alt='").concat(i," icon'>")},U=function(i){return i.reduce((function(i,t){return t.length>i.length?t:i})).length},W=function(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"div",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",e=arguments.length>3&&void 0!==arguments[3]&&arguments[3],o=document.createElement(t);return o.className=i,o.innerHTML=n,"a"!==t||e||(o.target="_blank",o.rel="noopener"),o},B=W("info__link info__link--shiny-fluent","a","Shiny application projects");B.href="https://demo.appsilon.com/";var D,F,O,G,J,P=[{id:"rhino",heading:"Rhino",paragraphs:["Build high quality, enterprise-grade Shiny apps at speed.","Rhino allows you to create Shiny apps The Appsilon Way - like a fullstack software engineer. Apply best software engineering practices, modularize your code, test it well, make UI beautiful, and think about user adoption from the very beginning. Rhino is an opinionated framework with a focus on software engineering practices and development tools."],repoLink:"https://github.com/Appsilon/rhino/",demoLink:"https://connect.appsilon.com/source_electricity/",docsLink:"https://appsilon.github.io/rhino/"},{id:"shiny-fluent",heading:"shiny.fluent",paragraphs:["We believe that a great UI plays a huge role in the success of ".concat(B.outerHTML,". shiny.fluent gives your apps a beautiful and professional look, rich set of easy-to-use components in Shiny, and fast speed of development that Shiny is famous for."),"As Fluent UI is built in React, shiny.fluent is based on another package called shiny.react, which allows for using React libraries in Shiny."],repoLink:"https://github.com/Appsilon/shiny.fluent",demoLink:"https://connect.appsilon.com/fluentui/",docsLink:"https://appsilon.github.io/shiny.fluent/"},{id:"shiny-semantic",heading:"shiny.semantic",paragraphs:["Fomantic (Semantic) UI wrapper for Shiny","With this library it is easy to wrap Shiny with Fomantic (previously Semantic). Add a few simple lines of code to give your UI a fresh, modern and highly interactive look."],repoLink:"https://github.com/Appsilon/shiny.semantic",demoLink:"https://connect.appsilon.com/polluter-alert/",docsLink:"https://appsilon.github.io/shiny.semantic/"},{id:"semantic-dashboard",heading:"semantic.dashboard",paragraphs:["Dashboard with Semantic UI Support for Shiny","Are you fed up with ordinary shinydashboard look? Give your app a new life with Semantic UI support. It cannot be any easier! Just install semantic.dashboard and load it instead to your app. Thanks to the compatibility with classical dashboard you don't have to start from scratch."],repoLink:"https://github.com/Appsilon/semantic.dashboard",demoLink:"https://connect.appsilon.com/Deer-Observations-Explorer/",docsLink:"https://appsilon.github.io/semantic.dashboard/"},{id:"shiny-worker",heading:"shiny.worker",paragraphs:["","Shiny.worker allows you to delegate heavy computation tasks to a separate process, such that it does not freeze your Shiny app."],repoLink:"https://github.com/Appsilon/shiny.worker",demoLink:"https://connect.appsilon.com/shiny-worker/",docsLink:"https://appsilon.github.io/shiny.worker/"},{id:"shiny-info",heading:"shiny.info",paragraphs:["","Display simple information of the shiny project in the user interface of the app."],repoLink:"https://github.com/Appsilon/shiny.info",demoLink:"https://connect.appsilon.com/shiny_info_demo/",docsLink:"https://appsilon.github.io/shiny.info/"},{id:"shiny-router",heading:"shiny.router",paragraphs:["","A minimalistic router for your Shiny apps."],repoLink:"https://github.com/Appsilon/shiny.router",demoLink:"https://connect.appsilon.com/appsidex/",docsLink:"https://appsilon.github.io/shiny.router/"},{id:"shiny-i18n",heading:"shiny.i18n",paragraphs:["Shiny applications internationalisation made easy!","Using it is very simple: just prepare your translation files in one of the supported formats, read them into your app using user-friendly shiny.i18n interface and surround your expressions to translate by a translator tag. Thanks to that your app will remain neat and readible."],repoLink:"https://github.com/Appsilon/shiny.i18n",demoLink:"https://connect.appsilon.com/i18n/",docsLink:"https://appsilon.github.io/shiny.i18n/"},{id:"shiny-react",heading:"shiny.react",paragraphs:["","This R package enables using React in Shiny apps and is used by the shiny.fluent package. It contains R and JS code which is independent from the React library (e.g. Fluent UI) that is being wrapped."],repoLink:"https://github.com/Appsilon/shiny.react",demoLink:"https://connect.appsilon.com/fluentui/",docsLink:"https://appsilon.github.io/shiny.react/"},{id:"data-validator",heading:"data.validator",paragraphs:["This is a package for scalable and reproducible data validation.","It provides functions for validating datasets in %>% pipelines (validate_if, validate_cols and validate_rows), predicate functions from assertr package (like in_set, within_bounds, etc.) and functions for creating user-friendly reports that you can send to email, store in logs folder, or generate automatically with RStudio Connect."],repoLink:"https://github.com/Appsilon/data.validator",demoLink:"https://connect.prod.aws.appsilon.com/connect_validation_workflow/connect_workflow.html",docsLink:"https://appsilon.github.io/data.validator/"},{id:"shiny-benchmark",heading:"shiny.benchmark",paragraphs:["Tools to measure performance improvements in Shiny apps.","shiny.benchmark is a tool aimed to measure and compare the performance of different versions of a shiny application."],repoLink:"https://github.com/Appsilon/shiny.benchmark/",demoLink:"",docsLink:"https://appsilon.github.io/shiny.benchmark/"},{id:"shiny-blueprint",heading:"shiny.blueprint",paragraphs:["Palantir’s Blueprint for Shiny Apps.","We believe that a great UI plays a huge role in the success of application projects. shiny.blueprint gives your apps a beautiful, professional look, a rich set of components easily usable in Shiny and a fast speed of development that Shiny is famous for."],repoLink:"https://github.com/Appsilon/shiny.blueprint/",demoLink:"https://connect.appsilon.com/shiny-blueprint-showcase/",docsLink:"https://appsilon.github.io/shiny.blueprint/"},{id:"shiny-telemetry",heading:"shiny.telemetry",paragraphs:["Easy logging of users activity and session events of your Shiny App.","The shiny.telemetry R package tracks events occurring on a user session, such as input changes and session duration, and stores them in a local or remote database.","It provides developers with the tools to help understand how users interact with Shiny dashboards and answer questions such as: which tabs/pages are more often visited, which inputs users are changing, what is the average length of a session, etc."],repoLink:"https://github.com/Appsilon/shiny.telemetry/",demoLink:"",docsLink:"https://appsilon.github.io/shiny.telemetry/"},{id:"shiny-emptystate",heading:"shiny.emptystate",paragraphs:["Empty state components for Shiny.","It provides tools to create both default and customizable components for scenarios where data is absent or doesn't match user-defined filters.","The package prioritizes user experience, ensuring clarity and consistency even when data is not available to display."],repoLink:"https://github.com/Appsilon/shiny.emptystate/",demoLink:"https://connect.appsilon.com/shiny-emptystate-demo/",docsLink:"https://appsilon.github.io/shiny.emptystate/"}],V=[{breakpoint:0,data:j},{breakpoint:480,data:T},{breakpoint:800,data:I},{breakpoint:1024,data:x},{breakpoint:1200,data:C}],$=document.getElementById("hex-grid"),K=document.getElementById("wrapper-info"),Q=R(V),X=Q.data,Y=Q.breakpoint,Z=(D=P,F=window.location.href.split("/#"),O=F[F.length-1],G=D.map((function(i){return i.id})),F.length>=2&&G.includes(O)?O:D[0].id),ii=function(i){var t=U(i),n=t-1,e="".concat(-1/(2*n)/Math.sqrt(3)*100-.2,"%"),o="".concat(t/n*100,"%"),a="".concat(-1/(2*n)*100,"%"),s=i.length,c=i.findIndex((function(i){return i.length===t})),l=q($.clientWidth,n);$.innerHTML="",i.forEach((function(i,h){var p=document.createElement("div"),u=h+1;p.className="hex-grid__row",p.style.marginTop=e,p.style.height=l,(c&&u%2==0||!c&&u%2!=0)&&(p.style.width=o,p.style.marginLeft=a),u===s&&(p.style.marginBottom=e),$.appendChild(p),i.forEach((function(e){var o=$.lastElementChild,a=function(i){var t=r(i,2),n=t[0],e=t[1],o=e.logo,a=void 0===o?null:o,s=e.library,c=void 0===s?"":s,l=e.title,h=void 0===l?"":l,p=e.url,u=void 0===p?null:p,d=e.text,m=void 0===d?null:d,g=document.createElement("a"),f='"\n    cell__blank\n    '.concat(c?"cell__blank--library":"","\n    ").concat(c?"cell__blank--".concat(c):"","\n    ").concat(c===Z?"active":"","\n    ").concat(a?"cell__blank--".concat(a):"","\n    ").concat(n?"cell__blank--detached":"cell__blank--attached","\n    ").concat(n?"cell__blank--".concat(n):"",'\n  "');if(g.className="cell".concat(c||u?" cell--interactive":""),c&&(g.href="#".concat(c)),g.innerHTML=H("blank",c,f,100,115.47),c)g.innerHTML+='\n      <div class="cell__label">\n        '.concat(N(c,"cell__logo"),'\n        <p class="cell__title">').concat(function(i){return i.split(".").map((function(i){return"<span>".concat(i,"</span>")})).join(".")}(h),'</p>\n      </div>\n      <div class="cell__tooltip cell__tooltip--').concat(c,'">').concat(h,"</div>\n    ");else if(u){var y=W(a,"a",a?H(null,a,"".concat(a,"__svg"),139,40):"Link");y.href=u,g.appendChild(y)}else a?g.innerHTML+=H("appLogo",null,a,100,100):m&&(g.innerHTML+='<p class="cell__text">'.concat(m,"</p>"));return g}(e);a.style.width=z(i%2==0&&c?t:n),o.appendChild(a)}))}))},ti=function(i){var t,n,e;ii(i),K.innerHTML="",P.forEach((function(i){var t=i.id,n=i.heading,e=i.paragraphs,o=i.repoLink,r=i.demoLink,a=i.docsLink,s=t.replace(/-/g,"."),c=W("info info--".concat(t),"section");c.id=t;var l=W("info__hero info__hero--".concat(t)),h=W("info__svg","svg",N(t,"cell__logo")),p=W("info__heading","h3",n),u=W("info__description"),d=W("info__texts");e.forEach((function(i){var t=W("info__text","p",i);d.appendChild(t)}));var m=W("contributors contributors--".concat(t),"div"),g=W("contributors__label","p","Contributors"),f=W("info__button info__button--".concat(t," info__button--github"),"a","Github");f.href=o;var y=W("info__button info__button--".concat(t," info__button--demo"),"a","Demo");y.href=r;var b=W("info__button info__button--".concat(t," info__button--docs"),"a","Docs");b.href=a;var k=W("info__stars");k.innerHTML=function(i,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"true",e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"large";return'\n  <iframe\n    src="https://ghbtns.com/github-btn.html?user=appsilon&repo='.concat(i,"&type=").concat(t,"&count=").concat(n,"&size=").concat(e,'"\n    frameborder="0"\n    scrolling="0"\n    width="150"\n    height="30"\n    title="GitHub"\n  ></iframe>\n')}(s,"star");var v=W("info__button info__button--".concat(t," info__button--back"),"button","Back");l.appendChild(h),l.appendChild(p),m.appendChild(g),u.appendChild(d),u.appendChild(m),u.appendChild(f),u.appendChild(k),u.appendChild(y),u.appendChild(b),u.appendChild(v),c.appendChild(l),c.appendChild(u),K.appendChild(c)})),c(document.querySelectorAll(".info")).forEach((function(i,t){Y>=799&&i.id===Z?i.classList.add("info--visible"):i.classList.remove("info--visible")})),t=document.querySelectorAll(".cell__blank--library"),n=document.querySelectorAll(".cell__blank--library path"),e=document.querySelectorAll(".info"),c(n).forEach((function(i){i.addEventListener("click",(function(){if("path"===this.tagName){var i=this.parentNode,n=i.dataset.id,o=document.querySelector(".info--".concat(n));Y>=799&&(c(t).forEach((function(i){return i.classList.remove("active")})),i.classList.add("active")),c(e).forEach((function(i){return i.classList.remove("info--visible")})),o.classList.add("info--visible")}})),i.addEventListener("mouseover",(function(){"path"===this.tagName&&this.parentNode.classList.add("hovered")})),i.addEventListener("mouseout",(function(){"path"===this.tagName&&this.parentNode.classList.remove("hovered")}))})),Z&&document.querySelector("a[href='#".concat(Z,"']")).click()};ti(X),J={"shiny.semantic":[{img:"4673386",profile:"github.com/filipstachura",credit:"Author"},{img:"4669074",profile:"github.com/przytu1",credit:"Author"},{img:"47003650",profile:"github.com/jchojna",credit:"Author"},{img:"4321346",profile:"github.com/olgamie",credit:"Author"},{img:"4547289",profile:"github.com/dokato",credit:"Author"},{img:"20457043",profile:"github.com/krystian8207",credit:"Author"},{img:"24652240",profile:"appsilon.github.io/shiny.semantic/authors.html",credit:"More Contributors"}],"semantic.dashboard":[{img:"4673386",profile:"github.com/filipstachura",credit:"Author"},{img:"4547289",profile:"github.com/dokato",credit:"Author"},{img:"20457043",profile:"github.com/krystian8207",credit:"Author"},{img:"24652240",profile:"appsilon.github.io/semantic.dashboard/authors.html",credit:"More Contributors"}],"shiny.worker":[{img:"4669074",profile:"github.com/przytu1",credit:"Author"},{img:"24652240",profile:"appsilon.github.io/shiny.worker/authors.html",credit:"More Contributors"}],"shiny.info":[{img:"7279715",profile:"github.com/jakubnowicki",credit:"Author & Maintainer"},{img:"4669074",profile:"github.com/przytu1",credit:"Author"},{img:"4547289",profile:"github.com/dokato",credit:"Author"}],"shiny.router":[{img:"83692505",profile:"rgithub.com/szymanski",credit:"Author & Maintainer"},{img:"7279715",profile:"github.com/jakubnowicki",credit:"Author"},{img:"4673386",profile:"github.com/filipstachura",credit:"Author"},{img:"4547289",profile:"github.com/dokato",credit:"Author"},{img:"20457043",profile:"github.com/krystian8207",credit:"Author"},{img:"24652240",profile:"appsilon.github.io/shiny.router/authors.html",credit:"More Contributors"}],"shiny.i18n":[{img:"7279715",profile:"github.com/jakubnowicki",credit:"Author & Maintainer"},{img:"37193264",profile:"github.com/jakubsob",credit:"Author"},{img:"4547289",profile:"github.com/dokato",credit:"Author"},{img:"20457043",profile:"github.com/krystian8207",credit:"Author"}],"shiny.react":[{img:"10000651",profile:"github.com/kamilzyla",credit:"Author & Maintainer"},{img:"37193264",profile:"github.com/jakubsob",credit:"Author"},{img:"1421503",profile:"github.com/marekrogala",credit:"Author"}],"shiny.fluent":[{img:"10000651",profile:"github.com/kamilzyla",credit:"Author & Maintainer"},{img:"37193264",profile:"github.com/jakubsob",credit:"Author"},{img:"1421503",profile:"github.com/marekrogala",credit:"Author"}],"data.validator":[{img:"19154385",profile:"github.com/mdubel",credit:"Author & Maintainer"},{img:"4669074",profile:"github.com/przytu1",credit:"Author"},{img:"7279715",profile:"github.com/jakubnowicki",credit:"Author"},{img:"20457043",profile:"github.com/krystian8207",credit:"Author"},{img:"24652240",profile:"appsilon.github.io/data.validator/authors.html",credit:"More Contributors"}],rhino:[{img:"10000651",profile:"github.com/kamilzyla",credit:"Author & Maintainer"},{img:"7279715",profile:"github.com/jakubnowicki",credit:"Author"},{img:"32634801",profile:"github.com/Leszek-Sieminski",credit:"Author"},{img:"1421503",profile:"github.com/marekrogala",credit:"Author"},{img:"110383037",profile:"github.com/vibalre",credit:"Author"},{img:"38053499",profile:"github.com/TymekDev",credit:"Author"},{img:"24652240",profile:"appsilon.github.io/rhino/authors.html",credit:"More Contributors"}],"shiny.benchmark":[{img:"13513569",profile:"github.com/DouglasMesquita",credit:"Author & Maintainer"}],"shiny.blueprint":[{img:"10000651",profile:"github.com/kamilzyla",credit:"Author & Maintainer"},{img:"4673386",profile:"github.com/filipstachura",credit:"Author"},{img:"54677165",profile:"github.com/filipakkad",credit:"Author"},{img:"81753658",profile:"github.com/pawelchabros",credit:"Author"}],"shiny.telemetry":[{img:"211358",profile:"github.com/averissimo",credit:"Author & Maintainer"},{img:"10000651",profile:"github.com/kamilzyla",credit:"Author"},{img:"110383037",profile:"github.com/vibalre",credit:"Author"},{img:"20457043",profile:"github.com/krystian8207",credit:"Author"}],"shiny.emptystate":[{img:"83692505",profile:"github.com/rszymanski",credit:"Author & Maintainer"},{img:"110383037",profile:"github.com/vibalre",credit:"Author"},{img:"24652240",profile:"appsilon.github.io/shiny.emptystate/authors.html",credit:"More Contributors"}]},Object.keys(J).forEach((function(i){var t=i.replace(".","-"),n=document.querySelector(".contributors--".concat(t));J[i].forEach((function(i){n.innerHTML+=function(i,t,n){return'<div class="tooltip">'+'<span class="tooltiptext">'.concat(n,"</span>")+'<a href="https://'.concat(t,'" target="_blank"><img src="https://avatars.githubusercontent.com/u/').concat(i,'" /></a>')+"</div>"}(i.img,i.profile,i.credit)}))})),window.addEventListener("resize",(function(){var i=R(V);if(i.breakpoint!==Y){Y=i.breakpoint;var t=i.data;ti(t)}})),window.addEventListener("resize",(function(){var i=document.querySelectorAll(".hex-grid__row"),t=c(i).reduce((function(i,t){return i<t.children.length?i:t.children.length}),i[0].children.length);c(i).forEach((function(i){return i.style.height=q($.clientWidth,t)}))})),c(document.querySelectorAll(".info__button--back")).forEach((function(i){return i.addEventListener("click",(function(){this.parentNode.parentNode.classList.remove("info--visible")}))}))}();
//# sourceMappingURL=index.0b29446a.js.map
