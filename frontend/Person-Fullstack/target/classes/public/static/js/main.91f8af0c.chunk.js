(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{52:function(e,a,t){e.exports=t(83)},57:function(e,a,t){},58:function(e,a,t){},83:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(17),c=t.n(r),o=(t(57),t(58),t(13)),m=t(14),s=t(21),u=t(20),i=t(31),d=t.n(i),h=t(85),g=t(49),E=t(86),p=t(87),f=function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={persons:[]},e}return Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;d.a.get("http://localhost:8080/persons").then(function(a){var t=a.data;console.log(t),e.setState({persons:t})})}},{key:"render",value:function(){return l.a.createElement(h.a,null,l.a.createElement(g.a,null,l.a.createElement(E.a,{striped:!0,bordered:!0,hover:!0},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"#"),l.a.createElement("th",null,"First Name"),l.a.createElement("th",null,"Last Name"),l.a.createElement("th",null,"age"))),l.a.createElement("tbody",null,this.state.persons.map(function(e){return l.a.createElement("tr",null,l.a.createElement("td",{key:e.id},e.id),l.a.createElement("td",null,e.fname),l.a.createElement("td",null,e.lname),l.a.createElement("td",null,e.age))})))),l.a.createElement(g.a,{xs:!0,lg:"2"},l.a.createElement("div",{className:"d-grid gap-2"},this.state.persons.map(function(e){return l.a.createElement(p.a,{variant:"danger",type:"submit"},"Delete person")}))))}}]),t}(l.a.Component),b=t(91),v=function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={id:null,fname:"",lname:"",age:0},e.handleChangefname=function(a){e.setState({fname:a.target.value})},e.handleChangelname=function(a){e.setState({lname:a.target.value})},e.handleChangeage=function(a){e.setState({age:a.target.value})},e.handleSubmit=function(a){a.preventDefault();e.state.fname,e.state.lname,e.state.age;d.a.post("http://localhost:8080/person",{fname:e.state.fname,lname:e.state.lname,age:e.state.age}).then(function(e){console.log(e),console.log(e.data)})},e}return Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement(b.a,{onSubmit:this.handleSubmit},l.a.createElement("br",null),l.a.createElement(h.a,{className:"justify-content-md-center"},l.a.createElement(g.a,{xs:!0,lg:"2"},l.a.createElement("h3",null,"Add Person")),l.a.createElement(g.a,{xs:!0,lg:"2"},l.a.createElement(b.a.Group,{className:"mb-3",controlId:"formBasicEmail"},l.a.createElement(b.a.Control,{type:"text",placeholder:"First name",fname:"fname",onChange:this.handleChangefname}))),l.a.createElement(g.a,{xs:!0,lg:"2"},l.a.createElement(b.a.Group,{className:"mb-3",controlId:"formBasicPassword"},l.a.createElement(b.a.Control,{type:"text",placeholder:"Last name",lname:"lname",onChange:this.handleChangelname}))),l.a.createElement(g.a,{xs:!0,lg:"2"},l.a.createElement(b.a.Group,{className:"mb-3",controlId:"formBasicPassword"},l.a.createElement(b.a.Control,{type:"int",placeholder:"Age",age:"age",onChange:this.handleChangeage}))),l.a.createElement(g.a,{xs:!0,lg:"2"},l.a.createElement("div",{className:"d-grid gap-2"},l.a.createElement(p.a,{variant:"primary",type:"submit"},"Submit")))))}}]),t}(l.a.Component),y=(t(48),t(89)),C=t(88),j=t(90),O=function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement(y.a,{bg:"dark",variant:"dark"},l.a.createElement(C.a,null,l.a.createElement(y.a.Brand,{href:"#home"},"Navbar"),l.a.createElement(j.a,{className:"me-auto"},l.a.createElement(j.a.Link,{href:"#home"},"Home"))))}}]),t}(l.a.Component);var N=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(O,null),l.a.createElement(f,null),l.a.createElement(v,null))},k=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,92)).then(function(a){var t=a.getCLS,n=a.getFID,l=a.getFCP,r=a.getLCP,c=a.getTTFB;t(e),n(e),l(e),r(e),c(e)})};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(N,null)),document.getElementById("root")),k()}},[[52,1,2]]]);
//# sourceMappingURL=main.91f8af0c.chunk.js.map