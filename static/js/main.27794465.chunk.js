(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],[,function(e,t,n){e.exports={contact_list:"ContactList_contact_list__3Oc4x",contact_list_item:"ContactList_contact_list_item__-SX2V",btn_delete:"ContactList_btn_delete__rw0JX",contact_name:"ContactList_contact_name__16ElV",contact_number:"ContactList_contact_number__sx8Qx",total_contacts:"ContactList_total_contacts__1IrPn"}},function(e,t,n){e.exports={form:"Form_form__2TM1N",input_name:"Form_input_name__1ZOWf",input_num:"Form_input_num__2GmlK",btn_add:"Form_btn_add__A_Mxs"}},function(e,t,n){e.exports={phonebook:"PhoneBook_phonebook__2sJx_",phonebook_header:"PhoneBook_phonebook_header__2yB4I",section_header:"PhoneBook_section_header__1yS1d"}},,,,,,,,function(e,t,n){e.exports={find_contact:"FindContact_find_contact__1SlRi"}},,function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(9),r=n.n(o),l=(n(18),n(12)),i=n(4),s=n(5),m=n(7),u=n(6),_=n(10),d=n(2),h=n.n(d),b={name:"",number:""},p=function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={name:"",number:""},e.addContactHandler=function(t){t.preventDefault(),e.props.onSubmit(e.state),e.resetInputs()},e.changeHandler=function(t){var n=t.currentTarget,a=n.name,c=n.value;e.setState(Object(_.a)({},a,c))},e.resetInputs=function(){e.setState(b)},e}return Object(s.a)(n,[{key:"render",value:function(){return c.a.createElement("form",{className:h.a.form,onSubmit:this.addContactHandler},c.a.createElement("label",null,c.a.createElement("input",{className:h.a.input_name,name:"name",type:"text",placeholder:"Name",value:this.state.name,onChange:this.changeHandler})),c.a.createElement("label",null,c.a.createElement("input",{className:h.a.input_num,name:"number",type:"tel",placeholder:"Number",value:this.state.number,onChange:this.changeHandler})),c.a.createElement("button",{className:h.a.btn_add,type:"submit"},"Add contact"))}}]),n}(a.Component),f=n(11),C=n.n(f),E=function(e){var t=e.value,n=e.onChange;return c.a.createElement("label",null,c.a.createElement("input",{className:C.a.find_contact,type:"text",placeholder:"Find contact by name",value:t,onChange:n}))},v=n(1),g=n.n(v),k=function(e){var t=e.renderItems,n=e.totalItems,o=e.handler;return c.a.createElement(a.Fragment,null,c.a.createElement("ul",{className:g.a.contact_list},t.map((function(e){return c.a.createElement("li",{className:g.a.contact_list_item,key:e.id},c.a.createElement("span",{className:g.a.contact_name},e.name,": "),c.a.createElement("span",{className:g.a.contact_number},e.number),c.a.createElement("button",{className:g.a.btn_delete,title:"delete",onClick:function(){return o(e.id)}},"x"))}))),c.a.createElement("p",{className:g.a.total_contacts},"Total contacts: ",n.length))},N=n(3),y=n.n(N),S=n(21),x=function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},e.onSubmitHandler=function(t){var n=t.name.toLowerCase();if(e.state.contacts.find((function(e){return e.name.toLowerCase()===n})))alert("".concat(t.name," already in your contact list"));else{var a={id:Object(S.a)(),name:t.name,number:t.number};e.setState((function(e){return{contacts:[a].concat(Object(l.a)(e.contacts))}}))}},e.changeFilterHandler=function(t){e.setState({filter:t.currentTarget.value})},e.getFilteredContacts=function(){var t=e.state,n=t.filter,a=t.contacts,c=n.toLowerCase();return a.filter((function(e){return e.name.toLowerCase().includes(c)}))},e.deleteContactHandler=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.getFilteredContacts();return c.a.createElement("div",{className:y.a.phonebook},c.a.createElement("h1",{className:y.a.phonebook_header},"Phonebook"),c.a.createElement("h2",{className:y.a.section_header},"Create a new contact"),c.a.createElement(p,{onSubmit:this.onSubmitHandler}),c.a.createElement("h2",{className:y.a.section_header},"Contacts"),c.a.createElement(E,{value:this.state.filter,onChange:this.changeFilterHandler}),c.a.createElement(k,{renderItems:e,totalItems:this.state.contacts,handler:this.deleteContactHandler}))}}]),n}(a.Component);var O=function(){return c.a.createElement(a.Fragment,null,c.a.createElement(x,null))};r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(O,null)),document.getElementById("root"))}],[[13,1,2]]]);
//# sourceMappingURL=main.27794465.chunk.js.map