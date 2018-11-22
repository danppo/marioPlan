(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{220:function(e,t,a){e.exports=a(427)},225:function(e,t,a){},427:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(216),i=a.n(c),l=(a(225),a(20)),o=a(21),s=a(23),u=a(22),m=a(24),d=a(430),h=a(432),p=a(428),E=a(232),f=a(429),b=a(9),g=Object(b.b)(null,function(e){return{signOut:function(){return e(function(e,t,a){(0,a.getFirebase)().auth().signOut().then(function(){e({type:"SIGNOUT_SUCCESS"})})})}}})(function(e){return r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(f.a,{to:"/create"},"New Project")),r.a.createElement("li",null,r.a.createElement("a",{onClick:e.signOut},"Log Out")),r.a.createElement("li",null,r.a.createElement(f.a,{to:"/",className:"btn btn-floating pink lighten-1"},e.profile.initials)))}),N=function(){return r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(f.a,{to:"/signup"},"Signup")),r.a.createElement("li",null,r.a.createElement(f.a,{to:"/signin"},"Login")))},j=Object(b.b)(function(e){return console.log(e),{auth:e.firebase.auth,profile:e.firebase.profile}})(function(e){var t=e.auth,a=e.profile,n=t.uid?r.a.createElement(g,{profile:a}):r.a.createElement(N,null);return r.a.createElement("nav",{className:"nav-wrapper grey darken-3"},r.a.createElement("div",{className:"container"},r.a.createElement(E.a,{to:"/",className:"brand-logo"},"Mario Plan"),n))}),v=a(49),O=a.n(v),y=function(e){var t=e.notifications;return r.a.createElement("div",{className:"section"},r.a.createElement("div",{className:"card z-depth-0"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title"},"Notifications"),r.a.createElement("ul",{className:"notifications"},t&&t.map(function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("span",{className:"pink-text"},e.user," "),r.a.createElement("span",null,e.content),r.a.createElement("div",{className:"grey-text note-date"},O()(e.time.toDate()).fromNow()))})))))},C=function(e){var t=e.project;return r.a.createElement("div",{className:"card z-depth-0 project-summary"},r.a.createElement("div",{className:"card-content grey-text-text-darken-3"},r.a.createElement("span",{className:"card-title"},t.title),r.a.createElement("p",null,"Poster by ",t.authorFirstName," ",t.authorLastName),r.a.createElement("p",{className:"grey-text"},O()(t.createdAt.toDate()).calendar())))},S=function(e){var t=e.projects;return r.a.createElement("div",{className:"project-list section"},t&&t.map(function(e){return r.a.createElement(E.a,{to:"/project/"+e.id,key:e.id},r.a.createElement(C,{project:e}))}))},w=a(26),R=a(15),F=a(431),k=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){console.log(this.props);var e=this.props,t=e.projects,a=e.auth,n=e.notifications;return a.uid?r.a.createElement("div",{className:"dashboard container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 m6"},r.a.createElement(S,{projects:t})),r.a.createElement("div",{className:"col s15 m5 offset-m1"},r.a.createElement(y,{notifications:n})))):r.a.createElement(F.a,{to:"/signin"})}}]),t}(n.Component),x=Object(R.d)(Object(b.b)(function(e){return console.log(e),{projects:e.firestore.ordered.projects,auth:e.firebase.auth,notifications:e.firestore.ordered.notifications}}),Object(w.firestoreConnect)([{collection:"projects",orderBy:["createdAt","desc"]},{collection:"notifications",limit:3,orderBy:["time","desc"]}]))(k),I=Object(R.d)(Object(b.b)(function(e,t){var a=t.match.params.id,n=e.firestore.data.projects;return{project:n?n[a]:null,auth:e.firebase.auth}}),Object(w.firestoreConnect)([{collection:"projects"}]))(function(e){var t=e.project;return e.auth.uid?t?r.a.createElement("div",{className:"container section project-details"},r.a.createElement("div",{className:"card z-depth-0"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title"},t.title),r.a.createElement("p",null,t.content)),r.a.createElement("div",{className:"card-action grey lighten-4 grey-text"},r.a.createElement("div",null,"poster by ",t.authorFirstName," ",t.authorLastName),r.a.createElement("div",null,O()(t.createdAt.toDate()).calendar())))):r.a.createElement("div",{className:"container center"},r.a.createElement("p",null,"Loading Project...")):r.a.createElement(F.a,{to:"/signin"})}),P=a(30),A=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:""},a.handleChange=function(e){a.setState(Object(P.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.signIn(a.state)},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.authError;return e.auth.uid?r.a.createElement(F.a,{to:"/"}):r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},r.a.createElement("h5",{className:"grey-text- txt-darkern-3"},"Sign In"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn lighten-1 pink z-depth-0"},"Login")),r.a.createElement("div",{className:"red-text center"},t?r.a.createElement("p",null,t):null)))}}]),t}(n.Component),U=Object(b.b)(function(e){return{authError:e.auth.authError,auth:e.firebase.auth}},function(e){return{signIn:function(t){return e((a=t,function(e,t,n){(0,n.getFirebase)().auth().signInWithEmailAndPassword(a.email,a.password).then(function(){e({type:"LOGIN_SUCCESS"})}).catch(function(t){e({type:"LOGIN_ERROR",err:t})})}));var a}}})(A),_=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:"",firstName:"",lastName:""},a.handleChange=function(e){a.setState(Object(P.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.signUp(a.state)},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.auth,a=e.authError;return t.uid?r.a.createElement(F.a,{to:"/"}):r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},r.a.createElement("h5",{className:"grey-text- txt-darkern-3"},"Sign Up"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"lastName"},"Last Name"),r.a.createElement("input",{type:"text",id:"lastName",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"firstName"},"First Name"),r.a.createElement("input",{type:"text",id:"firstName",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn lighten-1 pink z-depth-0"},"Sign Up")),r.a.createElement("div",{className:"red-text center"},a?r.a.createElement("p",null,a):null)))}}]),t}(n.Component),L=Object(b.b)(function(e){return{auth:e.firebase.auth,authError:e.auth.authError}},function(e){return{signUp:function(t){return e(function(e){return function(t,a,n){var r=n.getFirebase,c=n.getFirestore,i=r(),l=c();i.auth().createUserWithEmailAndPassword(e.email,e.password).then(function(t){return l.collection("users").doc(t.user.uid).set({firstName:e.firstName,lastName:e.lastName,initials:e.firstName[0]+e.lastName[0]})}).then(function(){t({type:"SIGNUP_SUCCESS"})}).catch(function(e){t({type:"SIGNUP_ERROR",err:e})})}}(t))}}})(_),T=a(41),D=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",content:""},a.handleChange=function(e){a.setState(Object(P.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.createProject(a.state),a.props.history.push("/")},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return this.props.auth.uid?r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},r.a.createElement("h5",{className:"grey-text- txt-darkern-3"},"Create New Project"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"title"},"Title"),r.a.createElement("input",{type:"text",id:"title",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"content"},"Project Content"),r.a.createElement("textarea",{id:"content",className:"materialize-textarea",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn lighten-1 pink z-depth-0"},"Create")))):r.a.createElement(F.a,{to:"/signin"})}}]),t}(n.Component),G=Object(b.b)(function(e){return{auth:e.firebase.auth}},function(e){return{createProject:function(t){return e(function(e){return function(t,a,n){n.getFirebase;var r=(0,n.getFirestore)(),c=a().firebase.profile,i=a().firebase.auth.uid;console.log(c.firstName),console.log(c.lastName),console.log(i),r.collection("projects").add(Object(T.a)({},e,{authorFirstName:c.firstName,authorLastName:c.lastName,authorId:i,createdAt:new Date})).then(function(){t({type:"CREATE_PROJECT",project:e})}).catch(function(e){t({type:"CREATE_PROJECT_ERROR",err:e})})}}(t))}}})(D),z=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(j,null),r.a.createElement(h.a,null,r.a.createElement(p.a,{exact:!0,path:"/",component:x}),r.a.createElement(p.a,{path:"/project/:id",component:I}),r.a.createElement(p.a,{path:"/signin",component:U}),r.a.createElement(p.a,{path:"/signup",component:L}),r.a.createElement(p.a,{path:"/create",component:G}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var J={authError:null},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_ERROR":return console.log("login error"),Object(T.a)({},e,{authError:"Login Failed"});case"LOGIN_SUCCESS":return console.log("login success"),Object(T.a)({},e,{authError:null});case"SIGNOUT_SUCCESS":return console.log("signout success"),e;case"SIGNUP_SUCCESS":return console.log("signup success"),Object(T.a)({},e,{authError:null});case"SIGNUP_ERROR":return console.log("signup error"),Object(T.a)({},e,{authError:t.err.message});default:return e}},W={projects:[{id:"1",title:"title 1",content:"blah blah blah"},{id:"2",title:"title 2",content:"blah blah blah"},{id:"3",title:"title 3",content:"blah blah blah"}]},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_PROJECT":return console.log("created project",t.project),e;case"CREATE_PROJECT_ERROR":return console.log("create project error",t.err),e;default:return e}},M=a(62),V=Object(R.c)({auth:B,project:K,firestore:M.firestoreReducer,firebase:w.firebaseReducer}),X=a(219),$=a(90),q=a.n($);a(420),a(425);q.a.initializeApp({apiKey:"AIzaSyDsyLK9rO486kX1_Skb4MxvDd0jEjJ2VhE",authDomain:"danppo-marioplan.firebaseapp.com",databaseURL:"https://danppo-marioplan.firebaseio.com",projectId:"danppo-marioplan",storageBucket:"danppo-marioplan.appspot.com",messagingSenderId:"676700959245"}),q.a.firestore().settings({timestampsInSnapshots:!0});var H=q.a,Q=Object(R.e)(V,Object(R.d)(Object(R.a)(X.a.withExtraArgument({getFirebase:w.getFirebase,getFirestore:M.getFirestore})),Object(M.reduxFirestore)(H),Object(w.reactReduxFirebase)(H,{useFirestoreForProfile:!0,userProfile:"users",attachAuthIsReady:!0})));Q.firebaseAuthIsReady.then(function(){i.a.render(r.a.createElement(b.a,{store:Q},r.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})})}},[[220,2,1]]]);
//# sourceMappingURL=main.d5ed99cd.chunk.js.map