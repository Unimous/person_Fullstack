(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{52:function(e,a,t){e.exports=t(83)},57:function(e,a,t){},58:function(e,a,t){},83:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(12),o=t.n(r),c=(t(57),t(58),t(14)),s=t(15),m=t(21),u=t(20),i=t(26),h=t.n(i),d=t(85),g=t(49),p=t(86),f=t(87),E=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={persons:[]},e}return Object(s.a)(t,[{key:"updateList",value:function(){var e=this;h.a.get("http://localhost:8080/persons").then(function(a){var t=a.data;console.log(t),e.setState({persons:t})})}},{key:"removePerson",value:function(e){var a=this;console.log("handler"),h.a.delete("http://localhost:8080/persons/"+e,{data:{id:e}}).then(function(e){console.log(e),console.log(e.data),a.updateList()})}},{key:"componentDidMount",value:function(){var e=this;h.a.get("http://localhost:8080/persons").then(function(a){var t=a.data;console.log(t),e.setState({persons:t})})}},{key:"render",value:function(){var e=this;return l.a.createElement(d.a,null,l.a.createElement(g.a,null,l.a.createElement(p.a,{className:"striped bordered hover"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"First Name"),l.a.createElement("th",null,"Last Name"),l.a.createElement("th",null,"age"),l.a.createElement("th",null,"  "))),l.a.createElement("tbody",null,this.state.persons.map(function(a){return l.a.createElement("tr",{key:a.id},l.a.createElement("td",null,a.fname),l.a.createElement("td",null,a.lname),l.a.createElement("td",null,a.age),l.a.createElement("td",null,l.a.createElement(f.a,{variant:"danger",type:"submit",onClick:e.removePerson.bind(e,a.id)},"Delete person")))})))))}}]),t}(l.a.Component),v=t(91),b=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={id:null,fname:"",lname:"",age:0},e.handleChangefname=function(a){e.setState({fname:a.target.value})},e.handleChangelname=function(a){e.setState({lname:a.target.value})},e.handleChangeage=function(a){e.setState({age:a.target.value})},e.handleSubmit=function(a){a.preventDefault();e.state.fname,e.state.lname,e.state.age;h.a.post("http://localhost:8080/person",{fname:e.state.fname,lname:e.state.lname,age:e.state.age}).then(function(e){console.log(e),console.log(e.data)})},e}return Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(v.a,{onSubmit:this.handleSubmit},l.a.createElement("br",null),l.a.createElement(d.a,{className:"justify-content-md-center"},l.a.createElement(g.a,{xs:!0,lg:"2"},l.a.createElement("h3",null,"Add Person")),l.a.createElement(g.a,{xs:!0,lg:"2"},l.a.createElement(v.a.Group,{className:"mb-3",controlId:"formBasicEmail"},l.a.createElement(v.a.Control,{type:"text",placeholder:"First name",fname:"fname",onChange:this.handleChangefname}))),l.a.createElement(g.a,{xs:!0,lg:"2"},l.a.createElement(v.a.Group,{className:"mb-3",controlId:"formBasicPassword"},l.a.createElement(v.a.Control,{type:"text",placeholder:"Last name",lname:"lname",onChange:this.handleChangelname}))),l.a.createElement(g.a,{xs:!0,lg:"2"},l.a.createElement(v.a.Group,{className:"mb-3",controlId:"formBasicPassword"},l.a.createElement(v.a.Control,{type:"int",placeholder:"Age",age:"age",onChange:this.handleChangeage}))),l.a.createElement(g.a,{xs:!0,lg:"2"},l.a.createElement("div",{className:"d-grid gap-2"},l.a.createElement(f.a,{variant:"primary",type:"submit"},"Submit")))))}}]),t}(l.a.Component),y=(t(48),t(89)),C=t(88),j=t(90),k=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(y.a,{bg:"dark",variant:"dark"},l.a.createElement(C.a,null,l.a.createElement(y.a.Brand,{href:"#home"},"Navbar"),l.a.createElement(j.a,{className:"me-auto"},l.a.createElement(j.a.Link,{href:"#home"},"Home"))))}}]),t}(l.a.Component);var O=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(k,null),l.a.createElement(b,null),l.a.createElement(E,null))},N=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,92)).then(function(a){var t=a.getCLS,n=a.getFID,l=a.getFCP,r=a.getLCP,o=a.getTTFB;t(e),n(e),l(e),r(e),o(e)})};o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(O,null)),document.getElementById("root")),N()}},[[52,1,2]]]);
//# sourceMappingURL=main.cb88ef87.chunk.js.map