(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1583],{69368:function(e,t,r){"use strict";r.d(t,{Z:function(){return w}});var n=r(63366),o=r(87462),c=r(67294),a=r(94780),i=r(41796),l=r(21964),s=r(82066),d=r(85893),p=(0,s.Z)((0,d.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),u=(0,s.Z)((0,d.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),h=(0,s.Z)((0,d.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),m=r(98216),b=r(71657),x=r(90948),f=r(34867);function Z(e){return(0,f.Z)("MuiCheckbox",e)}var g=(0,r(1588).Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]);const j=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size"],k=(0,x.ZP)(l.Z,{shouldForwardProp:e=>(0,x.FO)(e)||"classes"===e,name:"MuiCheckbox",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.indeterminate&&t.indeterminate,"default"!==r.color&&t[`color${(0,m.Z)(r.color)}`]]}})((({theme:e,ownerState:t})=>(0,o.Z)({color:e.palette.text.secondary},!t.disableRipple&&{"&:hover":{backgroundColor:(0,i.Fq)("default"===t.color?e.palette.action.active:e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==t.color&&{[`&.${g.checked}, &.${g.indeterminate}`]:{color:e.palette[t.color].main},[`&.${g.disabled}`]:{color:e.palette.action.disabled}}))),y=(0,d.jsx)(u,{}),P=(0,d.jsx)(p,{}),v=(0,d.jsx)(h,{});var w=c.forwardRef((function(e,t){var r,i;const l=(0,b.Z)({props:e,name:"MuiCheckbox"}),{checkedIcon:s=y,color:p="primary",icon:u=P,indeterminate:h=!1,indeterminateIcon:x=v,inputProps:f,size:g="medium"}=l,w=(0,n.Z)(l,j),C=h?x:u,O=h?x:s,S=(0,o.Z)({},l,{color:p,indeterminate:h,size:g}),L=(e=>{const{classes:t,indeterminate:r,color:n}=e,c={root:["root",r&&"indeterminate",`color${(0,m.Z)(n)}`]},i=(0,a.Z)(c,Z,t);return(0,o.Z)({},t,i)})(S);return(0,d.jsx)(k,(0,o.Z)({type:"checkbox",inputProps:(0,o.Z)({"data-indeterminate":h},f),icon:c.cloneElement(C,{fontSize:null!=(r=C.props.fontSize)?r:g}),checkedIcon:c.cloneElement(O,{fontSize:null!=(i=O.props.fontSize)?i:g}),ownerState:S,ref:t},w,{classes:L}))}))},50480:function(e,t,r){"use strict";r.d(t,{Z:function(){return j}});var n=r(63366),o=r(87462),c=r(67294),a=r(86010),i=r(94780),l=r(74423),s=r(15861),d=r(98216),p=r(90948),u=r(71657),h=r(34867);function m(e){return(0,h.Z)("MuiFormControlLabel",e)}var b=(0,r(1588).Z)("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error"]),x=r(15704),f=r(85893);const Z=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","value"],g=(0,p.ZP)("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[{[`& .${b.label}`]:t.label},t.root,t[`labelPlacement${(0,d.Z)(r.labelPlacement)}`]]}})((({theme:e,ownerState:t})=>(0,o.Z)({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${b.disabled}`]:{cursor:"default"}},"start"===t.labelPlacement&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},"top"===t.labelPlacement&&{flexDirection:"column-reverse",marginLeft:16},"bottom"===t.labelPlacement&&{flexDirection:"column",marginLeft:16},{[`& .${b.label}`]:{[`&.${b.disabled}`]:{color:(e.vars||e).palette.text.disabled}}})));var j=c.forwardRef((function(e,t){const r=(0,u.Z)({props:e,name:"MuiFormControlLabel"}),{className:p,componentsProps:h={},control:b,disabled:j,disableTypography:k,label:y,labelPlacement:P="end"}=r,v=(0,n.Z)(r,Z),w=(0,l.Z)();let C=j;"undefined"===typeof C&&"undefined"!==typeof b.props.disabled&&(C=b.props.disabled),"undefined"===typeof C&&w&&(C=w.disabled);const O={disabled:C};["checked","name","onChange","value","inputRef"].forEach((e=>{"undefined"===typeof b.props[e]&&"undefined"!==typeof r[e]&&(O[e]=r[e])}));const S=(0,x.Z)({props:r,muiFormControl:w,states:["error"]}),L=(0,o.Z)({},r,{disabled:C,labelPlacement:P,error:S.error}),R=(e=>{const{classes:t,disabled:r,labelPlacement:n,error:o}=e,c={root:["root",r&&"disabled",`labelPlacement${(0,d.Z)(n)}`,o&&"error"],label:["label",r&&"disabled"]};return(0,i.Z)(c,m,t)})(L);let z=y;return null==z||z.type===s.Z||k||(z=(0,f.jsx)(s.Z,(0,o.Z)({component:"span",className:R.label},h.typography,{children:z}))),(0,f.jsxs)(g,(0,o.Z)({className:(0,a.Z)(R.root,p),ownerState:L,ref:t},v,{children:[c.cloneElement(b,O),z]}))}))},21964:function(e,t,r){"use strict";r.d(t,{Z:function(){return g}});var n=r(63366),o=r(87462),c=r(67294),a=r(86010),i=r(94780),l=r(98216),s=r(90948),d=r(49299),p=r(74423),u=r(49990),h=r(34867);function m(e){return(0,h.Z)("PrivateSwitchBase",e)}(0,r(1588).Z)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var b=r(85893);const x=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],f=(0,s.ZP)(u.Z)((({ownerState:e})=>(0,o.Z)({padding:9,borderRadius:"50%"},"start"===e.edge&&{marginLeft:"small"===e.size?-3:-12},"end"===e.edge&&{marginRight:"small"===e.size?-3:-12}))),Z=(0,s.ZP)("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1});var g=c.forwardRef((function(e,t){const{autoFocus:r,checked:c,checkedIcon:s,className:u,defaultChecked:h,disabled:g,disableFocusRipple:j=!1,edge:k=!1,icon:y,id:P,inputProps:v,inputRef:w,name:C,onBlur:O,onChange:S,onFocus:L,readOnly:R,required:z,tabIndex:M,type:F,value:V}=e,B=(0,n.Z)(e,x),[I,E]=(0,d.Z)({controlled:c,default:Boolean(h),name:"SwitchBase",state:"checked"}),N=(0,p.Z)();let _=g;N&&"undefined"===typeof _&&(_=N.disabled);const $="checkbox"===F||"radio"===F,D=(0,o.Z)({},e,{checked:I,disabled:_,disableFocusRipple:j,edge:k}),T=(e=>{const{classes:t,checked:r,disabled:n,edge:o}=e,c={root:["root",r&&"checked",n&&"disabled",o&&`edge${(0,l.Z)(o)}`],input:["input"]};return(0,i.Z)(c,m,t)})(D);return(0,b.jsxs)(f,(0,o.Z)({component:"span",className:(0,a.Z)(T.root,u),centerRipple:!0,focusRipple:!j,disabled:_,tabIndex:null,role:void 0,onFocus:e=>{L&&L(e),N&&N.onFocus&&N.onFocus(e)},onBlur:e=>{O&&O(e),N&&N.onBlur&&N.onBlur(e)},ownerState:D,ref:t},B,{children:[(0,b.jsx)(Z,(0,o.Z)({autoFocus:r,checked:c,defaultChecked:h,className:T.input,disabled:_,id:$&&P,name:C,onChange:e=>{if(e.nativeEvent.defaultPrevented)return;const t=e.target.checked;E(t),S&&S(e,t)},readOnly:R,ref:w,required:z,ownerState:D,tabIndex:M,type:F},"checkbox"===F&&void 0===V?{}:{value:V},v)),I?s:y]}))}))},88148:function(e,t,r){"use strict";var n=r(2734),o=r(21023),c=r(49990),a=r(50122),i=r(74202),l=r(85893);t.Z=function(e){var t=e.title,r=e.link,s=e.icon,d=(0,n.Z)();return(0,l.jsx)(o.Z,{title:t||"Reference",placement:"left",children:(0,l.jsxs)(c.Z,{disableRipple:!0,children:[!s&&(0,l.jsx)(i.Z,{component:a.Z,href:r,target:"_blank",alt:"MUI Logo",size:"badge",color:"primary",outline:!0,children:(0,l.jsxs)("svg",{width:"500",height:"500",viewBox:"0 0 500 500",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,l.jsxs)("g",{clipPath:"url(#clip0)",children:[(0,l.jsx)("path",{d:"M100 260.9V131L212.5 195.95V239.25L137.5 195.95V282.55L100 260.9Z",fill:d.palette.primary[800]}),(0,l.jsx)("path",{d:"M212.5 195.95L325 131V260.9L250 304.2L212.5 282.55L287.5 239.25V195.95L212.5 239.25V195.95Z",fill:d.palette.primary.main}),(0,l.jsx)("path",{d:"M212.5 282.55V325.85L287.5 369.15V325.85L212.5 282.55Z",fill:d.palette.primary[800]}),(0,l.jsx)("path",{d:"M287.5 369.15L400 304.2V217.6L362.5 239.25V282.55L287.5 325.85V369.15ZM362.5 195.95V152.65L400 131V174.3L362.5 195.95Z",fill:d.palette.primary.main})]}),(0,l.jsx)("defs",{children:(0,l.jsx)("clipPath",{id:"clip0",children:(0,l.jsx)("rect",{width:"300",height:"238.3",fill:"white",transform:"translate(100 131)"})})})]})}),s&&(0,l.jsx)(i.Z,{component:a.Z,href:r,target:"_blank",size:"badge",color:"primary",outline:!0,children:s})]})})}},22278:function(e,t,r){"use strict";var n=r(59499),o=r(4730),c=r(67294),a=r(2734),i=r(66242),l=r(78445),s=r(15861),d=r(67720),p=r(44267),u=r(85893),h=["children","content","contentClass","darkTitle","secondary","sx","contentSX","title"];function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var x=c.forwardRef((function(e,t){var r=e.children,n=e.content,c=e.contentClass,m=e.darkTitle,x=e.secondary,f=e.sx,Z=void 0===f?{}:f,g=e.contentSX,j=void 0===g?{}:g,k=e.title,y=(0,o.Z)(e,h),P=(0,a.Z)();return(0,u.jsxs)(i.Z,b(b({ref:t,sx:b({border:"1px solid",borderColor:"dark"===P.palette.mode?P.palette.dark.light+15:P.palette.primary.light,":hover":{boxShadow:"dark"===P.palette.mode?"0 2px 14px 0 rgb(33 150 243 / 10%)":"0 2px 14px 0 rgb(32 40 45 / 8%)"}},Z)},y),{},{children:[!m&&k&&(0,u.jsx)(l.Z,{sx:{p:2.5},title:(0,u.jsx)(s.Z,{variant:"h5",children:k}),action:x}),m&&k&&(0,u.jsx)(l.Z,{sx:{p:2.5},title:(0,u.jsx)(s.Z,{variant:"h4",children:k}),action:x}),k&&(0,u.jsx)(d.Z,{sx:{opacity:1,borderColor:"dark"===P.palette.mode?P.palette.dark.light+15:P.palette.primary.light}}),n&&(0,u.jsx)(p.Z,{sx:b({p:2.5},j),className:c||"",children:r}),!n&&r]}))}));x.defaultProps={content:!0},t.Z=x},74202:function(e,t,r){"use strict";var n=r(59499),o=r(4730),c=r(2734),a=r(87952),i=r(85893),l=["color","outline","size","sx"];function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.Z=function(e){var t=e.color,r=e.outline,n=e.size,s=e.sx,p=(0,o.Z)(e,l),u=(0,c.Z)(),h=t&&!r&&{color:u.palette.background.paper,bgcolor:"".concat(t,".main")},m=r&&{color:t?"".concat(t,".main"):"primary.main",bgcolor:u.palette.background.paper,border:"2px solid",borderColor:t?"".concat(t,".main"):"primary.main"},b={};switch(n){case"badge":b={width:u.spacing(3.5),height:u.spacing(3.5)};break;case"xs":b={width:u.spacing(4.25),height:u.spacing(4.25)};break;case"sm":b={width:u.spacing(5),height:u.spacing(5)};break;case"lg":b={width:u.spacing(9),height:u.spacing(9)};break;case"xl":b={width:u.spacing(10.25),height:u.spacing(10.25)};break;case"md":b={width:u.spacing(7.5),height:u.spacing(7.5)};break;default:b={}}return(0,i.jsx)(a.Z,d({sx:d(d(d(d({},h),m),b),s)},p))}},76291:function(e,t,r){"use strict";r.r(t);var n=r(2734),o=r(86886),c=r(69368),a=r(50480),i=r(22278),l=r(32107),s=r(88148),d=r(49514),p=r(85893),u=function(){var e=(0,n.Z)();return(0,p.jsx)(l.Z,{title:"Checkbox",secondary:(0,p.jsx)(s.Z,{link:"https://next.material-ui.com/components/checkboxes/"}),children:(0,p.jsxs)(o.ZP,{container:!0,spacing:d.dv,children:[(0,p.jsx)(o.ZP,{item:!0,xs:12,md:4,children:(0,p.jsx)(i.Z,{title:"Basic checkboxes",children:(0,p.jsxs)(o.ZP,{container:!0,spacing:2,children:[(0,p.jsx)(o.ZP,{item:!0,children:(0,p.jsx)(c.Z,{color:"primary",sx:{color:e.palette.success.main,"&.Mui-checked":{color:e.palette.success.main}}})}),(0,p.jsx)(o.ZP,{item:!0,children:(0,p.jsx)(c.Z,{defaultChecked:!0,color:"primary"})}),(0,p.jsx)(o.ZP,{item:!0,children:(0,p.jsx)(c.Z,{color:"secondary"})}),(0,p.jsx)(o.ZP,{item:!0,children:(0,p.jsx)(c.Z,{defaultChecked:!0,color:"secondary"})})]})})}),(0,p.jsx)(o.ZP,{item:!0,xs:12,md:4,children:(0,p.jsx)(i.Z,{title:"With label",children:(0,p.jsxs)(o.ZP,{container:!0,spacing:2,children:[(0,p.jsx)(o.ZP,{item:!0,children:(0,p.jsx)(a.Z,{control:(0,p.jsx)(c.Z,{defaultChecked:!0}),label:"Checked"})}),(0,p.jsx)(o.ZP,{item:!0,children:(0,p.jsx)(a.Z,{disabled:!0,control:(0,p.jsx)(c.Z,{}),label:"Unchecked"})})]})})}),(0,p.jsx)(o.ZP,{item:!0,xs:12,md:4,children:(0,p.jsx)(i.Z,{title:"Size",children:(0,p.jsxs)(o.ZP,{container:!0,spacing:2,children:[(0,p.jsx)(o.ZP,{item:!0,children:(0,p.jsx)(c.Z,{defaultChecked:!0,color:"primary",size:"small"})}),(0,p.jsx)(o.ZP,{item:!0,children:(0,p.jsx)(c.Z,{defaultChecked:!0,color:"primary"})}),(0,p.jsx)(o.ZP,{item:!0,children:(0,p.jsx)(c.Z,{defaultChecked:!0,color:"primary",sx:{"& .MuiSvgIcon-root":{fontSize:28}}})})]})})}),(0,p.jsx)(o.ZP,{item:!0,xs:12,children:(0,p.jsx)(i.Z,{title:"With Color",children:(0,p.jsxs)(o.ZP,{container:!0,spacing:2,children:[(0,p.jsx)(o.ZP,{item:!0,children:(0,p.jsx)(c.Z,{defaultChecked:!0,color:"primary"})}),(0,p.jsx)(o.ZP,{item:!0,children:(0,p.jsx)(c.Z,{defaultChecked:!0,color:"secondary",sx:{color:e.palette.secondary.main}})}),(0,p.jsx)(o.ZP,{item:!0,children:(0,p.jsx)(c.Z,{defaultChecked:!0,sx:{color:e.palette.error.main,"&.Mui-checked":{color:e.palette.error.main}}})}),(0,p.jsx)(o.ZP,{item:!0,children:(0,p.jsx)(c.Z,{defaultChecked:!0,sx:{color:e.palette.warning.dark,"&.Mui-checked":{color:e.palette.warning.main}}})}),(0,p.jsx)(o.ZP,{item:!0,children:(0,p.jsx)(c.Z,{defaultChecked:!0,sx:{color:e.palette.success.dark,"&.Mui-checked":{color:e.palette.success.main}}})})]})})})]})})};u.Layout="authGuard",t.default=u},8168:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/forms/components/checkbox",function(){return r(76291)}])}},function(e){e.O(0,[1023,9774,2888,179],(function(){return t=8168,e(e.s=t);var t}));var t=e.O();_N_E=t}]);