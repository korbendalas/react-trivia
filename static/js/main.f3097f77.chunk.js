(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{41:function(e,t,n){e.exports=n(76)},46:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(18),c=n.n(r),i=(n(46),n(33)),s=n(11),u=n(12),l=n(15),m=n(13),p=n(14),E=n(23),v=n.n(E),h=n(34),f=n(35),d=n.n(f),y=n(8),O=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={num:10,category:"",dificulty:""},n.onSelectCategory=function(e){n.setState({category:e.target.value})},n.onSelectDificulty=function(e){n.setState({dificulty:e.target.value})},n.onChange=function(e){n.setState(Object(i.a)({},e.target.name,e.target.value))},n.onSubmit=function(e){e.preventDefault();var t={num:n.state.num,category:n.state.category,dificulty:n.state.dificulty};n.props.fetchQuestions(t),n.props.history.push("/quiz")},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"setup"},o.a.createElement("form",{onSubmit:this.onSubmit,className:"setup-form"},o.a.createElement("label",null,"Number of questions:"),o.a.createElement("input",{type:"text",name:"num",value:this.state.num,onChange:this.onChange}),o.a.createElement("label",null,"Category:"),o.a.createElement("select",{onChange:this.onSelectCategory},o.a.createElement("option",{value:""},"All"),o.a.createElement("option",{value:"9"},"General Knowlege"),o.a.createElement("option",{value:"10"},"Entertaiment: Books"),o.a.createElement("option",{value:"11"},"Entertaiment: Film"),o.a.createElement("option",{value:"12"},"Entertaiment: Music"),o.a.createElement("option",{value:"13"},"Entertaiment: Musicals & Theaters"),o.a.createElement("option",{value:"14"},"Entertaiment: Televison"),o.a.createElement("option",{value:"15"},"Entertaiment: Video Games"),o.a.createElement("option",{value:"16"},"Entertaiment: Board Games"),o.a.createElement("option",{value:"17"},"Science & Nature"),o.a.createElement("option",{value:"18"},"Science: Computers"),o.a.createElement("option",{value:"19"},"Science:Mathematics"),o.a.createElement("option",{value:"20"},"Mythology"),o.a.createElement("option",{value:"21"},"Sports"),o.a.createElement("option",{value:"22"},"Geography"),o.a.createElement("option",{value:"23"},"History"),o.a.createElement("option",{value:"24"},"Politics"),o.a.createElement("option",{value:"25"},"Art"),o.a.createElement("option",{value:"26"},"Celebrities"),o.a.createElement("option",{value:"27"},"Animals"),o.a.createElement("option",{value:"28"},"Vehicles"),o.a.createElement("option",{value:"29"},"Entertaiment:Comics"),o.a.createElement("option",{value:"30"},"Science: Gadgets"),o.a.createElement("option",{value:"31"},"Entertaiment: Japanese Anime & Manga"),o.a.createElement("option",{value:"32"},"Entertaiment: Cartoon & Animations")),o.a.createElement("label",null,"Dificulty:"),o.a.createElement("select",{onChange:this.onSelectDificulty},o.a.createElement("option",{value:""},"Any"),o.a.createElement("option",{value:"easy"},"Easy"),o.a.createElement("option",{value:"medium"},"Medium"),o.a.createElement("option",{value:"hard"},"Hard")),o.a.createElement("input",{className:"submit-button",type:"submit",value:"Submit"})))}}]),t}(a.Component),b=Object(y.b)(null,{fetchQuestions:function(e){return function(){var t=Object(h.a)(v.a.mark(function t(n){var a;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.get("https://opentdb.com/api.php",{params:{amount:e.num,category:e.category,dificulty:e.dificulty}});case 2:a=t.sent,n({type:"FETCH_QUESTIONS",payload:a.data});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}})(O),g=n(40),S=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={question_title:"",correct_answer:"",score:0,answers:[]},n.handleCheck=function(e){var t=e.currentTarget.dataset.id;n.props.click(),n.props.scoreAction(n.state.score),n.state.answers[t]===n.state.correct_answer?(n.setState({score:n.state.score+1}),console.log("CORRECT!!!!!")):console.log("SRY INCORRECT")},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){if(console.log("QUESTION RECIVED ",e.question),e){var t=function(e){for(var t,n,a=e.length;a>0;)n=Math.floor(Math.random()*a),t=e[--a],e[a]=e[n],e[n]=t;return e},n=[].concat(Object(g.a)(e.question.incorrect_answers),[e.question.correct_answer]);this.setState({question_title:e.question.question,correct_answer:e.question.correct_answer,answers:t(n)}),console.log(t(this.state.answers))}}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"question"},this.state.question_title,this.state.answers.map(function(t,n){return o.a.createElement("li",{key:n,onClick:e.handleCheck,"data-id":n}," ",o.a.createElement("p",null,t," "))}))}}]),t}(a.Component),C=Object(y.b)(null,{scoreAction:function(e){return{type:"GET_SCORE",payload:e}}})(S),w=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={numOfQuestions:null,currentQuestionNum:0,questions:[],index:!0,score:0},n.incrementIndex=function(){n.state.currentQuestionNum<n.state.numOfQuestions-1?n.setState({currentQuestionNum:n.state.currentQuestionNum+1}):n.setState({index:!1})},n.nextQuestionOnClick=function(){return n.state.questions[n.state.currentQuestionNum]},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){this.setState({numOfQuestions:e.questions.length}),this.setState({questions:e.questions})}},{key:"render",value:function(){return o.a.createElement("div",{className:"quiz"},this.state.numOfQuestions?"".concat(this.state.currentQuestionNum+1," / ").concat(this.state.numOfQuestions):null,this.state.index?o.a.createElement(C,{question:this.nextQuestionOnClick(),click:this.incrementIndex,getScore:this.getScore}):o.a.createElement("div",{className:"score"}," SCORE:",this.props.score))}}]),t}(a.Component),j=Object(y.b)(function(e){return{questions:e.questions.results,score:e.score}},{})(w),q=n(37),N=n(10),_=n(4),Q=Object(_.a)();var k=function(){return o.a.createElement(q.a,{history:Q},o.a.createElement("div",{className:"container"},o.a.createElement(N.a,{exact:!0,path:"/",component:b}),o.a.createElement(N.a,{exact:!0,path:"/quiz",component:j})))},T=n(9),x=n(39),A={},R=Object(T.c)({questions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_QUESTIONS":return t.payload;default:return e}},score:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_SCORE":return t.payload;default:return e}}}),I=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||T.d,M=Object(T.e)(R,{},I(Object(T.a)(x.a)));c.a.render(o.a.createElement(y.a,{store:M},o.a.createElement(k,null)),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.f3097f77.chunk.js.map