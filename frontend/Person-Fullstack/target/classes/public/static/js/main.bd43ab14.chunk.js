(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{42:function(e,t,a){e.exports=a(70)},47:function(e,t,a){},48:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(15),o=a.n(r),c=(a(47),a(48),a(27),a(9)),s=a(10),u=a(14),m=a(12),i=a(75),h=a(72),d=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement(i.a,{bg:"dark",variant:"dark"},l.a.createElement(h.a,null,l.a.createElement(i.a.Brand,{href:""},"Miika Lahti")))}}]),a}(l.a.Component),p=a(19),f=a.n(p),g=a(76),E=a(73),b=a(40),v=a(77),y=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e,n){var l,r=e.persons,o=n.number;return Object(c.a)(this,a),(l=t.call(this,r,o)).handleChangefname=function(e){l.setState({fname:e.target.value})},l.handleChangelname=function(e){l.setState({lname:e.target.value})},l.handleChangeage=function(e){l.setState({age:e.target.value})},l.handleSubmit=function(e){e.preventDefault(),f.a.post("http://localhost:8080/person",{fname:l.state.fname,lname:l.state.lname,age:l.state.age}).then(function(e){console.log(e),console.log(e.data)}),l.updateList()},l.state={id:null,fname:"",lname:"",age:0},l}return Object(s.a)(a,[{key:"updateList",value:function(){console.log("henkil\xf6 lis\xe4tty, hakee dataa"),f.a.get("http://localhost:8080/persons").then(function(e){var t=e.data;console.log(t),window.location.reload(!1)})}},{key:"render",value:function(){return l.a.createElement(g.a,{onSubmit:this.handleSubmit},l.a.createElement("br",null),l.a.createElement(E.a,{className:"justify-content-md-center"},l.a.createElement(b.a,{xs:!0,lg:"2"},l.a.createElement("h3",null,"Add Person")),l.a.createElement(b.a,{xs:!0,lg:"2"},l.a.createElement(g.a.Group,{className:"mb-3",controlId:"formBasicEmail"},l.a.createElement(g.a.Control,{type:"text",placeholder:"First name",fname:"fname",onChange:this.handleChangefname}))),l.a.createElement(b.a,{xs:!0,lg:"2"},l.a.createElement(g.a.Group,{className:"mb-3",controlId:"formBasicPassword"},l.a.createElement(g.a.Control,{type:"text",placeholder:"Last name",lname:"lname",onChange:this.handleChangelname}))),l.a.createElement(b.a,{xs:!0,lg:"2"},l.a.createElement(g.a.Group,{className:"mb-3",controlId:"formBasicPassword"},l.a.createElement(g.a.Control,{type:"int",placeholder:"Age",age:"age",onChange:this.handleChangeage}))),l.a.createElement(b.a,{xs:!0,lg:"2"},l.a.createElement("div",{className:"d-grid gap-2"},l.a.createElement(v.a,{variant:"primary",type:"submit"},"Submit")))))}}]),a}(l.a.Component),C=a(74),j=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={persons:[],number:0},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;f.a.get("http://localhost:8080/persons").then(function(t){console.log(t.data),e.setState({persons:t.data})})}},{key:"updateList",value:function(){var e=this;f.a.get("http://localhost:8080/persons").then(function(t){console.log(t.data);var a=t.data;e.setState({persons:a})})}},{key:"removePerson",value:function(e){var t=this;f.a.delete("http://localhost:8080/persons/"+e,{data:{id:e}}).then(function(e){console.log(e.data),t.updateList()})}},{key:"render",value:function(){var e=this;return l.a.createElement(E.a,null,l.a.createElement(b.a,null,l.a.createElement(C.a,{className:"striped bordered hover"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"#"),l.a.createElement("th",null,"First Name"),l.a.createElement("th",null,"Last Name"),l.a.createElement("th",null,"age"),l.a.createElement("th",null,"  "))),l.a.createElement("tbody",null,this.state.persons.map(function(t){return l.a.createElement("tr",{key:t.id},l.a.createElement("td",null,++e.state.number),l.a.createElement("td",null,t.fname),l.a.createElement("td",null,t.lname),l.a.createElement("td",null,t.age),l.a.createElement("td",null,l.a.createElement(v.a,{variant:"danger",type:"submit",onClick:e.removePerson.bind(t.id)},"Delete person")))})))))}}]),a}(n.Component),k=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={persons:[],number:0},e}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(y,{persons:this.state.persons,number:this.state.number}),l.a.createElement(j,{persons:this.state.persons,number:this.state.number}))}}]),a}(n.Component);var O=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(d,null),l.a.createElement(k,null))},w=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,78)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,r=t.getLCP,o=t.getTTFB;a(e),n(e),l(e),r(e),o(e)})};o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(O,null)),document.getElementById("root")),w()}},[[42,1,2]]]);
//# sourceMappingURL=main.bd43ab14.chunk.js.map