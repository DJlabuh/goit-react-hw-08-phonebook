"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[878],{878:function(e,n,t){t.r(n),t.d(n,{default:function(){return R}});var r,a,i,o=t(2791),c=t(5048),s=t(8989),d=function(e){return e.filter.query},l=t(9085),u=(t(5462),t(9229)),m=t(5861),x=t(9439),h=t(4687),p=t.n(h),f=t(5705),b=t(8007),g=t(2392),v=t(9140),j=t(4224),w=t(3329),y=RegExp(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/),C=(0,b.Ry)({name:(0,b.Z_)().min(6,"Name must be at least 6 digits!").required("Name is required!"),number:(0,b.Z_)().matches(y,"Invalid phone").required("Phone is required")}),S={name:"",number:""},z=function(){var e=(0,s.Jx)().data,n=void 0===e?[]:e,t=(0,s.F3)(),r=(0,x.Z)(t,2),a=r[0],i=r[1],o=i.isError,c=i.isFetching,d=i.isSuccess,h=function(){var e=(0,m.Z)(p().mark((function e(t,r){var i,o,c;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=r.resetForm,o=n.some((function(e){return e.name.toLowerCase()===t.name.toLowerCase()})),c=n.some((function(e){return e.number===t.number})),!o){e.next=6;break}return l.Am.error('Contact with this "'.concat(t.name,'" already exists!')),e.abrupt("return");case 6:if(!c){e.next=9;break}return l.Am.error('Contact with this "'.concat(t.number,'" already exists!')),e.abrupt("return");case 9:return e.prev=9,e.next=12,a(t).unwrap();case 12:l.Am.info("Contact added successfully!"),i(),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(9),l.Am.error("Failed to add contact. Please try again.");case 19:case"end":return e.stop()}}),e,null,[[9,16]])})));return function(n,t){return e.apply(this,arguments)}}();return(0,w.jsx)(f.J9,{initialValues:S,validationSchema:C,onSubmit:h,children:function(e){var n=e.isSubmitting;return(0,w.jsx)(f.l0,{autoComplete:"off",children:(0,w.jsxs)(g.NI,{width:"360px",p:"20px",mt:"14px",border:"1px",borderRadius:"15px",borderColor:"gray.200",boxShadow:"lg",bg:"white",children:[(0,w.jsx)(f.gN,{as:v.I,type:"text",name:"name",variant:"outline",placeholder:"Enter name",size:"md",title:"Please enter a name contact"}),(0,w.jsx)(f.Bc,{name:"name",component:function(e){var n=e.children;return(0,w.jsx)(u.x,{color:"red",fontSize:"sm",mt:"1",children:n})}}),(0,w.jsx)(f.gN,{as:v.I,type:"tel",name:"number",placeholder:"Enter phone",size:"md",mt:"12px",title:"Please enter a phone number in the format (123) 456-7890"}),(0,w.jsx)(u.x,{fontSize:"sm",color:"gray.500",mt:"2",children:"Example: (123) 456-7890"}),(0,w.jsx)(f.Bc,{name:"number",component:function(e){var n=e.children;return(0,w.jsx)(u.x,{color:"red",fontSize:"sm",mt:"1",children:n})}}),(0,w.jsx)(j.z,{type:"submit",colorScheme:"telegram",variant:"outline",mt:"20px",isLoading:n||c,loadingText:"Contact added",spinnerPlacement:"end",disabled:d||o,children:"Add contact"})]})})}})},k=t(6895),Z=t(8208),N=function(){var e=(0,c.v9)(d),n=(0,c.I0)();return(0,w.jsx)(g.NI,{width:"360px",p:"20px",mt:"14px",mb:"40px",border:"1px",borderRadius:"15px",borderColor:"gray.200",boxShadow:"lg",bg:"white",children:(0,w.jsxs)(Z.l,{children:["Find contacts by name",(0,w.jsx)(v.I,{type:"text",name:"filter",value:e,onChange:function(e){n((0,k.T)(e.currentTarget.value.trim()))},variant:"outline",size:"md"})]})})},I=t(7425),P=t(168),L=t(7691),q=L.ZP.ul(r||(r=(0,P.Z)(["\n  list-style: none;\n  padding: 0 20px 0 0px;\n"]))),A=L.ZP.li(a||(a=(0,P.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  padding: 10px;\n  margin-bottom: 6px;\n  border-bottom: 1px solid #ccc;\n  border-radius: 10px;\n  background-color: #f5f5f5;\n  width: 360px;\n\n  &:last-child {\n    border-bottom: none;\n    margin-bottom: 0;\n  }\n\n  &:nth-child(2n + 1) {\n    background-color: #e9e9e9;\n  }\n\n  @media (max-width: 410px) {\n    flex-direction: column;\n    align-items: flex-start;\n    width: 100%;\n  }\n"]))),E=L.ZP.p(i||(i=(0,P.Z)(["\n  margin: 0;\n  width: 120px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n\n  @media (max-width: 768px) {\n    width: 100%;\n    margin-bottom: 8px;\n  }\n"]))),F=function(e){var n=e.contacts,t=(0,s.zr)(),r=(0,x.Z)(t,2),a=r[0],i=r[1].isLoading;return(0,w.jsx)(q,{children:n.map((function(e,n){var t=e.name,r=e.number,o=e.id;return(0,w.jsxs)(A,{children:[(0,w.jsx)(E,{children:t}),(0,w.jsx)(E,{children:r}),(0,w.jsx)(j.z,{colorScheme:"telegram",size:"sm",onClick:function(){return a(o),void l.Am.info("Contact deleted successfully!")},disabled:i,children:(0,w.jsx)(I.qy0,{})})]},o)}))})},_=t(9649);var R=function(){var e=(0,s.Jx)(),n=e.refetch,t=e.data,r=void 0===t?[]:t,a=e.isFetching,i=e.isLoading;(0,o.useEffect)((function(){n()}),[n]);var m=function(e,n){var t=n.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(t)}))}(r,(0,c.v9)(d));return(0,w.jsxs)("div",{className:"container",children:[(0,w.jsxs)("div",{className:"section",children:[a&&(0,w.jsx)(_.a,{}),(0,w.jsx)(u.x,{fontSize:"18px",fontWeight:"700",color:"#007ab8",children:"Create Contact"}),(0,w.jsx)(z,{})]}),(0,w.jsxs)("div",{className:"section",children:[(0,w.jsx)(u.x,{fontSize:"18px",fontWeight:"700",color:"#007ab8",children:"Search \u0421ontact"}),(0,w.jsx)(N,{}),(0,w.jsx)(u.x,{fontSize:"18px",fontWeight:"700",color:"#007ab8",mb:"16px",children:"My \u0421ontacts"}),m.length&&!i?(0,w.jsx)(F,{contacts:m}):(0,w.jsx)(u.x,{color:"red",fontSize:"lg",mt:"1",children:"Contact not found!"}),(0,w.jsx)(l.Ix,{})]})]})}}}]);
//# sourceMappingURL=878.9fde7171.chunk.js.map