(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,,function(t,e,n){t.exports={warning:"Notification_warning__3bXHt",message:"Notification_message__d_mA5"}},,,,,function(t,e,n){t.exports={container:"Container_container__1UkCR"}},function(t,e,n){t.exports={section:"Section_section__1Ffi0"}},function(t,e,n){t.exports={list:"Statistics_list__3caVy"}},function(t,e,n){t.exports={btn:"FeedbackOptions_btn__yho1C"}},,,,,,,,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var c=n(0),a=n(1),i=n.n(a),r=n(4),s=n.n(r),o=(n(19),n(5)),l=n(6),d=n(7),b=n(13),u=n(12),j=n(8),h=n.n(j),f=function(t){var e=t.children;return Object(c.jsx)("div",{className:h.a.container,children:e})},O=n(9),x=n.n(O),p=function(t){var e=t.title,n=t.children;return Object(c.jsxs)("section",{className:x.a.section,children:[e,n]})},g=n(10),m=n.n(g),v=function(t){var e=t.good,n=t.neutral,a=t.bad,i=t.total,r=t.percent;return Object(c.jsxs)("ul",{className:m.a.list,children:[Object(c.jsxs)("li",{children:["Good: ",e]}),Object(c.jsxs)("li",{children:["Neutral: ",n]}),Object(c.jsxs)("li",{children:["Bad: ",a]}),Object(c.jsxs)("li",{children:["Total: ",i]}),Object(c.jsxs)("li",{children:["Positive precentage: ",r,"%"]})]})},_=n(3),k=n.n(_),N=function(t){var e=t.message;return Object(c.jsx)("div",{className:k.a.warning,children:Object(c.jsx)("span",{className:k.a.message,children:e})})},w=n(11),y=n.n(w),F=function(t){return Object(c.jsx)("div",{children:t.options.map((function(e){return Object(c.jsx)("button",{"data-action":e,type:"button",className:y.a.btn,onClick:function(){return t.onIncrement(e)},children:e},e)}))})},C=function(t){Object(b.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(l.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={good:0,neutral:0,bad:0},t.handleIncrement=function(e){t.setState(Object(o.a)({},e,t.state[e]+1))},t.totalFeedback=function(){var e=t.state;return e.good+e.neutral+e.bad},t.positivePercentage=function(){return Math.round(t.state.good/t.totalFeedback()*100)},t}return Object(d.a)(n,[{key:"render",value:function(){var t=this.state,e=t.good,n=t.neutral,a=t.bad;return Object(c.jsxs)(f,{children:[Object(c.jsx)(p,{title:"Please leave feedback",children:Object(c.jsx)(F,{options:["good","neutral","bad"],onIncrement:this.handleIncrement})}),Object(c.jsx)(p,{title:"Statistic",children:0!==this.totalFeedback()?Object(c.jsx)(v,{good:e,neutral:n,bad:a,total:this.totalFeedback(),percent:this.positivePercentage()}):Object(c.jsx)(N,{message:"No feedback given"})})]})}}]),n}(i.a.Component);s.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(C,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.3c0c52a9.chunk.js.map