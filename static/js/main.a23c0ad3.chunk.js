(this["webpackJsonpshawn-timeslot-challenge"]=this["webpackJsonpshawn-timeslot-challenge"]||[]).push([[0],{25:function(e,t,c){},32:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),a=c(18),s=c.n(a),r=(c(25),c(16)),j=c(7),l=c(9),d=c(0),o=function(){return Object(d.jsxs)("nav",{className:"navbar",children:[Object(d.jsx)("h1",{children:"Game & Beats"}),Object(d.jsxs)("div",{className:"links",children:[Object(d.jsx)(l.b,{to:"/",children:"Home"}),Object(d.jsx)(l.b,{id:"bookNow",to:"/book",onClick:function(e){console.log("booking time")},children:"Book Now"})]})]})},b=function(e){var t=e.activities,c=e.sortByDate;return Object(d.jsxs)("div",{className:"activityFeed",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{id:"activityFeedTitle",children:"Activity Feed"}),Object(d.jsx)("button",{id:"filterDateButton",onClick:function(){return function(e){c(e)}(t)},children:"Sort By Date"})]}),Object(d.jsxs)("table",{className:"table",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Activity"}),Object(d.jsx)("th",{children:"Start Time"}),Object(d.jsx)("th",{children:"End Time"}),Object(d.jsx)("th",{children:"Date"}),Object(d.jsx)("th",{children:"Guest(s)"})]})}),Object(d.jsx)("tbody",{children:t.map((function(e){return Object(d.jsxs)("tr",{className:"activityRow",children:[Object(d.jsx)("td",{className:"activityFeedItem",children:e.activityName}),Object(d.jsx)("td",{className:"activityFeedItem",children:e.startTime}),Object(d.jsx)("td",{className:"activityFeedItem",children:e.endTime}),Object(d.jsx)("td",{className:"activityFeedItem",children:e.date}),Object(d.jsx)("td",{className:"activityFeedItem",children:e.guests})]},e.id)}))})]})]})},u=function(){return Object(d.jsx)("div",{className:"activityFeed",children:Object(d.jsx)("h3",{children:"You currently do not have any activities scheduled"})})},h=function(e){return Object(d.jsx)("div",{className:"home",children:e.len>0?Object(d.jsx)(b,{activities:e.activities,sortByDate:e.sortByDate}):Object(d.jsx)(u,{})})},O=c(2),m=function(e){var t,c=Object(n.useState)("Drumming Lesson"),i=Object(j.a)(c,2),a=i[0],s=i[1],r=Object(n.useState)(""),l=Object(j.a)(r,2),o=l[0],b=l[1],u=Object(n.useState)(""),h=Object(j.a)(u,2),m=h[0],x=h[1],v=Object(n.useState)(""),y=Object(j.a)(v,2),p=y[0],f=y[1],N=Object(n.useState)(1),g=Object(j.a)(N,2),S=g[0],D=g[1],k=Object(O.f)(),B=e.len;null!==m&&(t=m);var F=new Date,w=String(F.getDate()).padStart(2,"0"),T=String(F.getMonth()+1).padStart(2,"0"),C=F.getFullYear(),A=F=C+"-"+T+"-"+w;return Object(d.jsxs)("div",{className:"book",children:[Object(d.jsx)("h2",{children:"Book A New Activity"}),Object(d.jsxs)("form",{onSubmit:function(t){t.preventDefault();var c={activityName:a,date:o,startTime:m,endTime:p,guests:S,id:B};e.addActivity(c),k.push("/")},children:[Object(d.jsx)("label",{htmlFor:"activities",children:"Choose an activity:"}),Object(d.jsxs)("select",{className:"inputs",value:a,onChange:function(e){return s(e.target.value)},children:[Object(d.jsx)("option",{value:"Drum Lesson",children:"Drum Lesson"}),Object(d.jsx)("option",{value:"Valorant Lesson",children:"Valorant Lesson"})]}),Object(d.jsx)("label",{children:"Date:"}),Object(d.jsx)("input",{className:"inputs",type:"date",min:A,placeholder:"yyyy-mm-dd",value:o,onChange:function(e){return b(e.target.value)},required:!0}),Object(d.jsx)("label",{children:"Start Time:"}),Object(d.jsx)("input",{className:"inputs",type:"time",value:m,onChange:function(e){return x(e.target.value)},required:!0}),Object(d.jsx)("label",{children:"End Time:"}),Object(d.jsx)("input",{className:"inputs",type:"time",min:t,max:"23:59",value:p,onChange:function(e){return f(e.target.value)},required:!0}),Object(d.jsx)("label",{children:"Guests:"}),Object(d.jsx)("input",{className:"inputs",type:"number",min:"1",max:"3",value:S,onChange:function(e){return D(e.target.value)},required:!0}),Object(d.jsx)("input",{type:"hidden",defaultValue:B}),Object(d.jsx)("button",{children:"Book Now"})]})]})};var x=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),c=t[0],i=t[1],a=c.length;return Object(n.useEffect)((function(){}),[c]),Object(d.jsx)(l.a,{children:Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(o,{}),Object(d.jsx)("div",{className:"content",children:Object(d.jsxs)(O.c,{children:[Object(d.jsx)(O.a,{exact:!0,path:"/",children:Object(d.jsx)(h,{activities:c,len:a,sortByDate:function(e){var t=e.sort((function(e,t){return e.date>t.date?1:e.date<t.date?-1:0}));i(Object(r.a)(t)),console.log(t)}})}),Object(d.jsx)(O.a,{path:"/book",children:Object(d.jsx)(m,{activities:c,addActivity:function(e){i([].concat(Object(r.a)(c),[e]))},len:a})})]})})]})})};s.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(x,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.a23c0ad3.chunk.js.map