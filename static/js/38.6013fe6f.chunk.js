"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[38],{5866:function(e,n,i){i.d(n,{Z:function(){return P}});var l=i(1413),a=i(4925),r=i(9439),t=i(9886),s=i(4591),o=i(5597),d=i(6232),u=i(2996),c=i(4404),v=i(6992),p=i(2791),m=i(184),h=["id","isRequired","isInvalid","isDisabled","isReadOnly"],f=["getRootProps","htmlProps"],b=(0,t.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),x=(0,r.Z)(b,2),Z=x[0],g=x[1],y=(0,t.k)({strict:!1,name:"FormControlContext"}),I=(0,r.Z)(y,2),k=I[0],F=I[1];var R=(0,o.G)((function(e,n){var i=(0,d.jC)("Form",e),t=function(e){var n=e.id,i=e.isRequired,t=e.isInvalid,o=e.isDisabled,d=e.isReadOnly,u=(0,a.Z)(e,h),c=(0,p.useId)(),m=n||"field-".concat(c),f="".concat(m,"-label"),b="".concat(m,"-feedback"),x="".concat(m,"-helptext"),Z=(0,p.useState)(!1),g=(0,r.Z)(Z,2),y=g[0],I=g[1],k=(0,p.useState)(!1),F=(0,r.Z)(k,2),R=F[0],C=F[1],q=(0,p.useState)(!1),_=(0,r.Z)(q,2),j=_[0],T=_[1],P=(0,p.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,l.Z)((0,l.Z)({id:x},e),{},{ref:(0,s.lq)(n,(function(e){e&&C(!0)}))})}),[x]),w=(0,p.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,l.Z)((0,l.Z)({},e),{},{ref:n,"data-focus":(0,v.PB)(j),"data-disabled":(0,v.PB)(o),"data-invalid":(0,v.PB)(t),"data-readonly":(0,v.PB)(d),id:void 0!==e.id?e.id:f,htmlFor:void 0!==e.htmlFor?e.htmlFor:m})}),[m,o,j,t,d,f]),N=(0,p.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,l.Z)((0,l.Z)({id:b},e),{},{ref:(0,s.lq)(n,(function(e){e&&I(!0)})),"aria-live":"polite"})}),[b]),O=(0,p.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,l.Z)((0,l.Z)((0,l.Z)({},e),u),{},{ref:n,role:"group"})}),[u]),D=(0,p.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,l.Z)((0,l.Z)({},e),{},{ref:n,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]);return{isRequired:!!i,isInvalid:!!t,isReadOnly:!!d,isDisabled:!!o,isFocused:!!j,onFocus:function(){return T(!0)},onBlur:function(){return T(!1)},hasFeedbackText:y,setHasFeedbackText:I,hasHelpText:R,setHasHelpText:C,id:m,labelId:f,feedbackId:b,helpTextId:x,htmlProps:u,getHelpTextProps:P,getErrorMessageProps:N,getRootProps:O,getLabelProps:w,getRequiredIndicatorProps:D}}((0,u.Lr)(e)),o=t.getRootProps,b=(t.htmlProps,(0,a.Z)(t,f)),x=(0,v.cx)("chakra-form-control",e.className);return(0,m.jsx)(k,{value:b,children:(0,m.jsx)(Z,{value:i,children:(0,m.jsx)(c.m.div,(0,l.Z)((0,l.Z)({},o({},n)),{},{className:x,__css:i.container}))})})}));R.displayName="FormControl",(0,o.G)((function(e,n){var i=F(),a=g(),r=(0,v.cx)("chakra-form__helper-text",e.className);return(0,m.jsx)(c.m.div,(0,l.Z)((0,l.Z)({},null==i?void 0:i.getHelpTextProps(e,n)),{},{__css:a.helperText,className:r}))})).displayName="FormHelperText";var C=["isDisabled","isInvalid","isReadOnly","isRequired"],q=["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"];function _(e){var n=function(e){var n,i,r,t=F(),s=e.id,o=e.disabled,d=e.readOnly,u=e.required,c=e.isRequired,p=e.isInvalid,m=e.isReadOnly,h=e.isDisabled,f=e.onFocus,b=e.onBlur,x=(0,a.Z)(e,q),Z=e["aria-describedby"]?[e["aria-describedby"]]:[];(null==t?void 0:t.hasFeedbackText)&&(null==t?void 0:t.isInvalid)&&Z.push(t.feedbackId);(null==t?void 0:t.hasHelpText)&&Z.push(t.helpTextId);return(0,l.Z)((0,l.Z)({},x),{},{"aria-describedby":Z.join(" ")||void 0,id:null!=s?s:null==t?void 0:t.id,isDisabled:null!=(n=null!=o?o:h)?n:null==t?void 0:t.isDisabled,isReadOnly:null!=(i=null!=d?d:m)?i:null==t?void 0:t.isReadOnly,isRequired:null!=(r=null!=u?u:c)?r:null==t?void 0:t.isRequired,isInvalid:null!=p?p:null==t?void 0:t.isInvalid,onFocus:(0,v.v0)(null==t?void 0:t.onFocus,f),onBlur:(0,v.v0)(null==t?void 0:t.onBlur,b)})}(e),i=n.isDisabled,r=n.isInvalid,t=n.isReadOnly,s=n.isRequired,o=(0,a.Z)(n,C);return(0,l.Z)((0,l.Z)({},o),{},{disabled:i,readOnly:t,required:s,"aria-invalid":(0,v.Qm)(r),"aria-required":(0,v.Qm)(s),"aria-readonly":(0,v.Qm)(t)})}var j=["htmlSize"],T=(0,o.G)((function(e,n){var i=e.htmlSize,r=(0,a.Z)(e,j),t=(0,d.jC)("Input",r),s=_((0,u.Lr)(r)),o=(0,v.cx)("chakra-input",e.className);return(0,m.jsx)(c.m.input,(0,l.Z)((0,l.Z)({size:i},s),{},{__css:t.field,ref:n,className:o}))}));T.displayName="Input",T.id="Input";var P=function(e){var n=e.type,i=e.name,l=e.pattern,a=e.title,r=e.handleChange,t=e.LableText;return(0,m.jsxs)("label",{htmlFor:i,className:"ContactAnyInputLabel",children:[t,(0,m.jsx)(T,{type:n,name:i,pattern:l,title:a,required:!0,onChange:r})]})}},4038:function(e,n,i){i.r(n);var l=i(5866),a=i(9055),r=i(9273),t=i(1686),s=i(9434),o=i(184);n.default=function(){var e=(0,s.I0)();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h2",{children:"Login page"}),(0,o.jsxs)("form",{action:"",className:"MainForm",onSubmit:function(n){n.preventDefault();var i=n.currentTarget;e((0,r.Ib)({email:i.elements.email.value,password:i.elements.password.value})).unwrap().then((function(e){t.Notify.success("".concat(e.user.name," welcome back!"))})).catch((function(e){t.Notify.failure("Incorrect login or password"),console.log(e)})),i.reset()},children:[(0,o.jsx)(l.Z,{LableText:"email",type:"email",name:"email",pattern:"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$",title:"email"}),(0,o.jsx)(l.Z,{LableText:"password",type:"password",name:"password",title:"password"}),(0,o.jsx)(a.z,{type:"submit",children:"Login"})]})]})}}}]);
//# sourceMappingURL=38.6013fe6f.chunk.js.map