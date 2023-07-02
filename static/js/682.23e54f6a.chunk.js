"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[682],{4682:function(n,e,t){t.r(e),t.d(e,{default:function(){return M}});var r,a,o,i,c,d,s,x,l,p,u=t(2791),h=t(5048),m=t(8989),f=function(n){return n.contacts.array},b=function(n){return n.filter.query},g=t(9085),v=(t(5462),t(9229)),w=t(9439),j=t(168),Z=t(7691),y=Z.ZP.form(r||(r=(0,j.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n  border: 1px solid #ccc;\n  border-radius: 15px;\n  box-shadow: 0px 10px 13px -7px #000000;\n  max-width: 300px;\n  margin-top: 10px;\n"]))),C=Z.ZP.label(a||(a=(0,j.Z)(["\n  margin-bottom: 10px;\n"]))),k=Z.ZP.input(o||(o=(0,j.Z)(["\n  padding: 5px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  width: 100%;\n"]))),P=Z.ZP.button(i||(i=(0,j.Z)(["\n  padding: 10px;\n  background-color: #0088cc;\n  color: #fff;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  width: 100%;\n\n  &:hover {\n    background-color: #007ab8;\n  }\n"]))),z=t(3329),A=function(){var n=(0,m.Jx)().data,e=void 0===n?[]:n,t=(0,m.F3)(),r=(0,w.Z)(t,1)[0],a=(0,u.useState)(""),o=(0,w.Z)(a,2),i=o[0],c=o[1],d=(0,u.useState)(""),s=(0,w.Z)(d,2),x=s[0],l=s[1];return(0,z.jsxs)(y,{onSubmit:function(n){n.preventDefault();var t=e.some((function(n){return n.name.toLowerCase()===i.toLowerCase()})),a=e.some((function(n){return n.phone===x}));t?g.Am.error("Contact with this ".concat(i," already exists!")):a?g.Am.error("Contact with this ".concat(x," already exists!")):r({name:i,phone:x}).then((function(){c(""),l("")})).catch((function(){g.Am.error("Failed to add contact.")}))},children:[(0,z.jsxs)(C,{children:["Name",(0,z.jsx)(k,{type:"text",name:"name",value:i,onChange:function(n){return c(n.target.value)},pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,z.jsxs)(C,{children:["Telephone",(0,z.jsx)(k,{type:"tel",name:"phone",value:x,onChange:function(n){return l(n.target.value)},pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,z.jsx)(P,{type:"submit",children:"Add contact"})]})},q=t(6895),S=Z.ZP.div(c||(c=(0,j.Z)(["\n  padding: 20px;\n  border: 1px solid #ccc;\n  border-radius: 15px;\n  box-shadow: 0px 10px 13px -7px #000000;\n  margin-top: 10px;\n  margin-bottom: 40px;\n  max-width: 300px;\n"]))),F=Z.ZP.label(d||(d=(0,j.Z)(["\n  margin-bottom: 10px;\n"]))),L=Z.ZP.input(s||(s=(0,j.Z)(["\n  padding: 5px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  width: 100%;\n"]))),N=function(){var n=(0,h.v9)(b),e=(0,h.I0)();return(0,z.jsx)(S,{children:(0,z.jsxs)(F,{children:["Find contacts by name",(0,z.jsx)(L,{type:"text",name:"filter",value:n.query,onChange:function(n){e((0,q.T)(n.currentTarget.value))}})]})})},_=t(7425),I=t(4224),J=Z.ZP.ul(x||(x=(0,j.Z)(["\n  list-style: none;\n  padding: 0 20px 0 0px;\n"]))),T=Z.ZP.li(l||(l=(0,j.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px;\n  margin-bottom: 6px;\n  border-bottom: 1px solid #ccc;\n  border-radius: 10px;\n  background-color: #f5f5f5;\n  width: 380px;\n\n  &:last-child {\n    border-bottom: none;\n    margin-bottom: 0;\n  }\n\n  @media (max-width: 410px) {\n    flex-direction: column;\n    align-items: flex-start;\n    width: 100%;\n  }\n"]))),W=Z.ZP.p(p||(p=(0,j.Z)(["\n  margin: 0;\n  width: 120px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n\n  @media (max-width: 768px) {\n    width: 100%;\n    margin-bottom: 8px;\n  }\n"]))),B=function(n,e){var t=e&&e.query?e.query.toLowerCase():"";return n.filter((function(n){return n.name.toLowerCase().includes(t)}))},D=function(){var n=(0,m.zr)(),e=(0,w.Z)(n,1)[0],t=(0,h.I0)(),r=(0,h.v9)(f),a=(0,h.v9)(b),o=B(r,a);return(0,z.jsx)(J,{children:o.map((function(n,r){var a=n.name,o=n.phone,i=n.id;return(0,z.jsxs)(T,{dark:r%2===0,children:[(0,z.jsx)(W,{children:a}),(0,z.jsx)(W,{children:o}),(0,z.jsx)(I.z,{colorScheme:"telegram",size:"sm",onClick:function(){t(e(i))},children:(0,z.jsx)(_.qy0,{})})]},i)}))})},E=t(9649);var M=function(){var n=(0,m.Jx)(),e=n.refetch,t=n.data,r=void 0===t?[]:t,a=n.isFetching,o=n.isLoading;(0,u.useEffect)((function(){e()}),[e]);var i=(0,h.v9)(b),c=B(r,i);return(0,z.jsxs)("div",{className:"container",children:[(0,z.jsxs)("div",{className:"section",children:[(0,z.jsx)(v.x,{fontSize:"18px",fontWeight:"700",color:"#007ab8",children:"Create Contact"}),(0,z.jsx)(A,{})]}),(0,z.jsxs)("div",{className:"section",children:[(0,z.jsx)(v.x,{fontSize:"18px",fontWeight:"700",color:"#007ab8",children:"Search \u0421ontact"}),(0,z.jsx)(N,{}),a?(0,z.jsx)(E.a,{}):c.length&&!o?(0,z.jsx)(D,{}):(0,z.jsx)("p",{children:"Contact not found!"}),(0,z.jsx)(g.Ix,{})]})]})}}}]);
//# sourceMappingURL=682.23e54f6a.chunk.js.map