"use strict";(self.webpackChunkreact_complete_guide=self.webpackChunkreact_complete_guide||[]).push([[335],{335:function(e,n,s){s.r(n),s.d(n,{default:function(){return j}});var t=s(791),o=s(880),r=s(152),i="Card_card__9h8Dh",a=s(184),u=function(e){return(0,a.jsx)("div",{className:i,children:e.children})},c=s(556),l="QuoteForm_form__ogBoi",d="QuoteForm_loading__gyIuQ",h="QuoteForm_control__8SqBM",f="QuoteForm_actions__I8AC6",m=function(e){var n=(0,t.useState)(!1),s=(0,r.Z)(n,2),i=s[0],m=s[1],x=(0,t.useRef)(),_=(0,t.useRef)();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.NL,{when:i,message:function(e){return'Are you sure you want to go to "'.concat(e.pathname,'" without saving? Your data will be lost.')}}),(0,a.jsx)(u,{children:(0,a.jsxs)("form",{onFocus:function(){console.log("Focus!"),m(!0)},className:l,onSubmit:function(n){n.preventDefault();var s=x.current.value,t=_.current.value;s.split(" ").join("")&&t.split(" ").join("")&&e.onAddQuote({esp:s,eng:t})},children:[e.isLoading&&(0,a.jsx)("div",{className:d,children:(0,a.jsx)(c.Z,{})}),(0,a.jsxs)("div",{className:h,children:[(0,a.jsxs)("div",{className:h,children:[(0,a.jsx)("label",{htmlFor:"spanish",children:"Quote in Spanish"}),(0,a.jsx)("textarea",{id:"spanish",rows:"5",ref:x})]}),(0,a.jsx)("label",{htmlFor:"english",children:"Translation in English"}),(0,a.jsx)("textarea",{type:"text",id:"english",rows:"5",ref:_})]}),(0,a.jsx)("div",{className:f,children:(0,a.jsx)("button",{onClick:function(){return m(!1)},className:"btn",children:"Add Quote"})})]})})]})},x=s(995),_=s(853);var j=function(){var e=(0,x.Z)(_.KP),n=e.sendRequest,s=e.status,r=(0,o.k6)();return(0,t.useEffect)((function(){"completed"===s&&r.push("/quotes")}),[s,r]),(0,a.jsx)(m,{isLoading:"pending"===s,onAddQuote:function(e){n(e)}})}}}]);
//# sourceMappingURL=335.da9878d6.chunk.js.map