(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(7),a=n.n(c),o=n(2),i=n(3),r=n(5),l=n(4),s=n(1),u=n.n(s),d=n(0),h=function(t){Object(r.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={date:new Date},t.timerId=void 0,t.tick=function(){t.setState({date:new Date})},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.timerId=setInterval(this.tick,1e3)}},{key:"componentDidUpdate",value:function(t){t.name!==this.props.name&&console.log("The Clock was renamed from ".concat(t.name," to ").concat(this.props.name))}},{key:"componentWillUnmount",value:function(){this.timerId&&clearInterval(this.timerId)}},{key:"render",value:function(){return Object(d.jsx)("p",{children:this.state.date.toLocaleTimeString()})}}]),n}(u.a.Component),k=(n(13),function(t){Object(r.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={isClockVisible:!0,clockName:0},t}return Object(i.a)(n,[{key:"setRandomNameHandler",value:function(){this.setState({clockName:Math.random()})}},{key:"showClockHandler",value:function(){this.setState({isClockVisible:!0})}},{key:"hideClockHandler",value:function(){this.setState({isClockVisible:!1})}},{key:"render",value:function(){var t=this;return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"React clock"}),Object(d.jsx)("button",{type:"button",onClick:function(){t.showClockHandler()},children:"Show clock"}),Object(d.jsx)("button",{type:"button",onClick:function(){t.hideClockHandler()},children:"Hide clock"}),Object(d.jsx)("button",{type:"button",onClick:function(){t.setRandomNameHandler()},children:"Set random name"}),this.state.isClockVisible&&Object(d.jsx)(h,{name:this.state.clockName})]})}}]),n}(u.a.Component)),m=k;a.a.render(Object(d.jsx)(m,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.9eb4c6a3.chunk.js.map