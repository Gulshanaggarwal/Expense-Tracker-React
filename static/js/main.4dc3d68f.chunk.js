(this.webpackJsonpreact_practice=this.webpackJsonpreact_practice||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(7),a=n.n(s),o=n(6),i=n(2),l=n(0);var j=function(){return console.log("header loaded"),Object(l.jsx)("h2",{children:"Expense Tracker"})},u=r.a.createContext();var d=function(e){var t=Object(c.useState)(""),n=Object(i.a)(t,2),r=n[0],s=n[1],a=Object(c.useState)(0),o=Object(i.a)(a,2),j=o[0],u=o[1],d=Object(c.useState)(0),b=Object(i.a)(d,2),m=(b[0],b[1]);function h(){return Math.floor(1e4*Math.random()+1)}return console.log("form loaded"),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h3",{children:"Add new transaction"}),Object(l.jsxs)("form",{id:"form",onSubmit:function(t){if(t.preventDefault(),""==r.trim()||""==j.trim())alert("Either Item or Amount invalid!");else{m(h());var n={id:h(),text:r,amount:parseInt(j)};e.addTask(n)}},children:[Object(l.jsxs)("div",{className:"form-control",children:[Object(l.jsx)("label",{htmlFor:"text",children:"Text"}),Object(l.jsx)("input",{type:"text",id:"text",value:r,placeholder:"Enter text...",onChange:function(e){return s(e.target.value)}})]}),Object(l.jsxs)("div",{className:"form-control",children:[Object(l.jsxs)("label",{htmlFor:"amount",children:["Amount ",Object(l.jsx)("br",{}),"(negative - expense, positive - income)"]}),Object(l.jsx)("input",{type:"number",value:j,id:"amount",placeholder:"Enter amount...",onChange:function(e){return u(e.target.value)}})]}),Object(l.jsx)("button",{className:"btn",children:"Add transaction"})]})]})};var b=function(){return console.log("balance loaded"),Object(l.jsx)(u.Consumer,{children:function(e){var t=0;return e.forEach((function(e){return t+=e.amount})),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h4",{children:"Your Balance"}),Object(l.jsxs)("h1",{id:"balance",children:[t,"$"]})]})}})};var m=function(){return console.log("component loaded incom"),Object(l.jsxs)("div",{className:"inc-exp-container",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("h4",{children:"Income"}),Object(l.jsx)(u.Consumer,{children:function(e){e=e.filter((function(e){return e.amount>0}));var t=0;return e.forEach((function(e){return t+=e.amount})),Object(l.jsxs)("p",{id:"money-plus",className:"money plus",children:[t,"$"]})}})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h4",{children:"Expense"}),Object(l.jsx)(u.Consumer,{children:function(e){e=e.filter((function(e){return e.amount<0}));var t=0;return e.forEach((function(e){return t+=e.amount})),Object(l.jsxs)("p",{id:"money-minus",className:"money minus",children:[t,"$"]})}})]})]})};var h=function(e){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h3",{children:"History"}),Object(l.jsx)("ul",{id:"list",className:"list",children:Object(l.jsx)(u.Consumer,{children:function(t){return t.map((function(t){return t.amount>0?Object(l.jsx)("li",{children:Object(l.jsxs)("div",{className:"plus",children:[Object(l.jsx)("h2",{className:"text",children:t.text}),Object(l.jsxs)("h2",{className:"amount",children:[t.amount,"$"]}),Object(l.jsx)("button",{type:"button",className:"del-button",onClick:function(){return e.removeTrans(t.id)},children:"X"})]})},t.id):Object(l.jsx)("li",{children:Object(l.jsxs)("div",{className:"minus",children:[Object(l.jsx)("h2",{className:"text",children:t.text}),Object(l.jsxs)("h2",{className:"amount",children:[t.amount,"$"]}),Object(l.jsx)("button",{type:"button",className:"del-button",onClick:function(){return e.removeTrans(t.id)},children:"X"})]})},t.id)}))}})})]})};n(13);var x=function(){console.log("app loaded");var e=Object(c.useState)(null!=JSON.parse(localStorage.getItem("key"))?JSON.parse(localStorage.getItem("key")):[]),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)(j,{}),Object(l.jsxs)("div",{className:"container",children:[Object(l.jsxs)(u.Provider,{value:n,children:[Object(l.jsx)(b,{}),Object(l.jsx)(m,{}),Object(l.jsx)(h,{removeTrans:function(e){r(n.filter((function(t){return t.id!=e}))),localStorage.setItem("key",JSON.stringify(n.filter((function(t){return t.id!=e}))))}})]}),Object(l.jsx)(d,{addTask:function(e){r([].concat(Object(o.a)(n),[e])),localStorage.setItem("key",JSON.stringify([].concat(Object(o.a)(n),[e])))}})]})]})};a.a.render(Object(l.jsx)(x,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.4dc3d68f.chunk.js.map