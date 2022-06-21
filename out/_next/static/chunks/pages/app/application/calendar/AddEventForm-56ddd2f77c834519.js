(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8126],{21075:function(e,t,r){"use strict";var o=r(95318);t.Z=void 0;var a=o(r(64938)),n=r(85893),l=(0,a.default)((0,n.jsx)("path",{d:"M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"}),"DateRange");t.Z=l},41733:function(e,t,r){"use strict";var o=r(95318);t.Z=void 0;var a=o(r(64938)),n=r(85893),l=(0,a.default)((0,n.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.Z=l},37645:function(e,t,r){"use strict";var o=r(87462),a=r(63366),n=r(67294),l=r(86010),i=r(94780),c=r(15861),s=r(90948),d=r(71657),u=r(4472),h=r(34182),p=r(85893);const m=["className","id"],Z=(0,s.ZP)(c.Z,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(e,t)=>t.root})({padding:"16px 24px",flex:"0 0 auto"}),g=n.forwardRef((function(e,t){const r=(0,d.Z)({props:e,name:"MuiDialogTitle"}),{className:c,id:s}=r,g=(0,a.Z)(r,m),x=r,v=(e=>{const{classes:t}=e;return(0,i.Z)({root:["root"]},u.a,t)})(x),{titleId:f=s}=n.useContext(h.Z);return(0,p.jsx)(Z,(0,o.Z)({component:"h2",className:(0,l.Z)(v.root,c),ownerState:x,ref:t,variant:"h6",id:f},g))}));t.Z=g},53457:function(e,t,r){"use strict";r.d(t,{Z:function(){return x}});var o=r(63366),a=r(87462),n=r(67294),l=r(86010),i=r(94780),c=r(90948),s=r(71657),d=r(34867);function u(e){return(0,d.Z)("MuiFormGroup",e)}(0,r(1588).Z)("MuiFormGroup",["root","row","error"]);var h=r(74423),p=r(15704),m=r(85893);const Z=["className","row"],g=(0,c.ZP)("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.row&&t.row]}})((({ownerState:e})=>(0,a.Z)({display:"flex",flexDirection:"column",flexWrap:"wrap"},e.row&&{flexDirection:"row"})));var x=n.forwardRef((function(e,t){const r=(0,s.Z)({props:e,name:"MuiFormGroup"}),{className:n,row:c=!1}=r,d=(0,o.Z)(r,Z),x=(0,h.Z)(),v=(0,p.Z)({props:r,muiFormControl:x,states:["error"]}),f=(0,a.Z)({},r,{row:c,error:v.error}),b=(e=>{const{classes:t,row:r,error:o}=e,a={root:["root",r&&"row",o&&"error"]};return(0,i.Z)(a,u,t)})(f);return(0,m.jsx)(g,(0,a.Z)({className:(0,l.Z)(b.root,n),ownerState:f,ref:t},d))}))},68061:function(e,t,r){"use strict";var o=r(87462),a=r(63366),n=r(67294),l=r(53457),i=r(51705),c=r(49299),s=r(80209),d=r(27909),u=r(85893);const h=["actions","children","defaultValue","name","onChange","value"],p=n.forwardRef((function(e,t){const{actions:r,children:p,defaultValue:m,name:Z,onChange:g,value:x}=e,v=(0,a.Z)(e,h),f=n.useRef(null),[b,w]=(0,c.Z)({controlled:x,default:m,name:"RadioGroup"});n.useImperativeHandle(r,(()=>({focus:()=>{let e=f.current.querySelector("input:not(:disabled):checked");e||(e=f.current.querySelector("input:not(:disabled)")),e&&e.focus()}})),[]);const j=(0,i.Z)(t,f),y=(0,d.Z)(Z);return(0,u.jsx)(s.Z.Provider,{value:{name:y,onChange:e=>{w(e.target.value),g&&g(e,e.target.value)},value:b},children:(0,u.jsx)(l.Z,(0,o.Z)({role:"radiogroup",ref:j},v,{children:p}))})}));t.Z=p},72852:function(e,t,r){"use strict";var o=r(63366),a=r(87462),n=r(67294),l=r(86010),i=r(94780),c=r(41796),s=r(98216),d=r(21964),u=r(71657),h=r(90948),p=r(29632),m=r(85893);const Z=["className","color","edge","size","sx"],g=(0,h.ZP)("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.edge&&t[`edge${(0,s.Z)(r.edge)}`],t[`size${(0,s.Z)(r.size)}`]]}})((({ownerState:e})=>(0,a.Z)({display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},"start"===e.edge&&{marginLeft:-8},"end"===e.edge&&{marginRight:-8},"small"===e.size&&{width:40,height:24,padding:7,[`& .${p.Z.thumb}`]:{width:16,height:16},[`& .${p.Z.switchBase}`]:{padding:4,[`&.${p.Z.checked}`]:{transform:"translateX(16px)"}}}))),x=(0,h.ZP)(d.Z,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.switchBase,{[`& .${p.Z.input}`]:t.input},"default"!==r.color&&t[`color${(0,s.Z)(r.color)}`]]}})((({theme:e})=>({position:"absolute",top:0,left:0,zIndex:1,color:"light"===e.palette.mode?e.palette.common.white:e.palette.grey[300],transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),[`&.${p.Z.checked}`]:{transform:"translateX(20px)"},[`&.${p.Z.disabled}`]:{color:"light"===e.palette.mode?e.palette.grey[100]:e.palette.grey[600]},[`&.${p.Z.checked} + .${p.Z.track}`]:{opacity:.5},[`&.${p.Z.disabled} + .${p.Z.track}`]:{opacity:"light"===e.palette.mode?.12:.2},[`& .${p.Z.input}`]:{left:"-100%",width:"300%"}})),(({theme:e,ownerState:t})=>(0,a.Z)({"&:hover":{backgroundColor:(0,c.Fq)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==t.color&&{[`&.${p.Z.checked}`]:{color:e.palette[t.color].main,"&:hover":{backgroundColor:(0,c.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${p.Z.disabled}`]:{color:"light"===e.palette.mode?(0,c.$n)(e.palette[t.color].main,.62):(0,c._j)(e.palette[t.color].main,.55)}},[`&.${p.Z.checked} + .${p.Z.track}`]:{backgroundColor:e.palette[t.color].main}}))),v=(0,h.ZP)("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(e,t)=>t.track})((({theme:e})=>({height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:"light"===e.palette.mode?e.palette.common.black:e.palette.common.white,opacity:"light"===e.palette.mode?.38:.3}))),f=(0,h.ZP)("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(e,t)=>t.thumb})((({theme:e})=>({boxShadow:e.shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"}))),b=n.forwardRef((function(e,t){const r=(0,u.Z)({props:e,name:"MuiSwitch"}),{className:n,color:c="primary",edge:d=!1,size:h="medium",sx:b}=r,w=(0,o.Z)(r,Z),j=(0,a.Z)({},r,{color:c,edge:d,size:h}),y=(e=>{const{classes:t,edge:r,size:o,color:n,checked:l,disabled:c}=e,d={root:["root",r&&`edge${(0,s.Z)(r)}`,`size${(0,s.Z)(o)}`],switchBase:["switchBase",`color${(0,s.Z)(n)}`,l&&"checked",c&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},u=(0,i.Z)(d,p.H,t);return(0,a.Z)({},t,u)})(j),k=(0,m.jsx)(f,{className:y.thumb,ownerState:j});return(0,m.jsxs)(g,{className:(0,l.Z)(y.root,n),sx:b,ownerState:j,children:[(0,m.jsx)(x,(0,a.Z)({type:"checkbox",icon:k,checkedIcon:k,ref:t,ownerState:j},w,{classes:(0,a.Z)({},y,{root:y.switchBase})})),(0,m.jsx)(v,{className:y.track,ownerState:j})]})}));t.Z=b},29632:function(e,t,r){"use strict";r.d(t,{H:function(){return a}});var o=r(34867);function a(e){return(0,o.Z)("MuiSwitch",e)}const n=(0,r(1588).Z)("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]);t.Z=n},23425:function(e,t,r){"use strict";r.r(t);var o=r(59499),a=r(50029),n=r(87794),l=r.n(n),i=r(52359),c=r(24511),s=r(25613),d=r(2734),u=r(37645),h=r(67720),p=r(6514),m=r(86886),Z=r(50135),g=r(50480),x=r(72852),v=r(87109),f=r(15861),b=r(94054),w=r(68061),j=r(36872),y=r(31425),k=r(21023),P=r(93946),C=r(26447),S=r(11057),D=r(96486),M=r.n(D),z=r(74231),$=r(82175),O=r(5420),R=r(49514),_=r(21075),E=r(41733),N=r(85893);function F(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function T(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?F(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):F(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var I=function(e,t){var r={title:"",description:"",color:"#2196f3",textColor:"",allDay:!1,start:t?new Date(t.start):new Date,end:t?new Date(t.end):new Date};return e||t?M().merge({},r,e):r};t.default=function(e){var t=e.event,r=e.range,o=e.handleDelete,n=e.handleCreate,D=e.handleUpdate,M=e.onCancel,F=(0,d.Z)(),B=!t,H=[{value:F.palette.primary.main,color:"primary.main",label:"Default"},{value:F.palette.error.main,color:"error.main"},{value:F.palette.success.dark,color:"success.dark"},{value:F.palette.secondary.main,color:"secondary.main"},{value:F.palette.warning.dark,color:"warning.dark"},{value:F.palette.orange.dark,color:"orange.dark"},{value:F.palette.grey[500],color:"grey.500"},{value:F.palette.primary.light,color:"primary.light"},{value:F.palette.error.light,color:"error.light"},{value:F.palette.success.light,color:"success.light"},{value:F.palette.secondary.light,color:"secondary.light"},{value:F.palette.warning.light,color:"warning.light"},{value:F.palette.orange.light,color:"orange.light"}],V=[{value:F.palette.error.light,color:"error.light",label:""},{value:F.palette.success.light,color:"success.light",label:""},{value:F.palette.secondary.light,color:"secondary.light",label:""},{value:F.palette.warning.light,color:"warning.light",label:""},{value:F.palette.orange.light,color:"orange.light",label:""},{value:F.palette.primary.light,color:"primary.light",label:""},{value:F.palette.primary.main,color:"primary.main",label:""},{value:F.palette.error.main,color:"error.main",label:""},{value:F.palette.success.dark,color:"success.dark",label:""},{value:F.palette.secondary.main,color:"secondary.main",label:""},{value:F.palette.warning.dark,color:"warning.dark",label:""},{value:F.palette.orange.dark,color:"orange.dark",label:""},{value:F.palette.grey[500],color:"grey.500",label:""}],A=z.Ry().shape({title:z.Z_().max(255).required("Title is required"),description:z.Z_().max(5e3),end:z.hT().when("start",(function(e,t){return e&&t.min(e,"End date must be later than start date")})),start:z.hT(),color:z.Z_().max(255),textColor:z.Z_().max(255)}),W=(0,$.TA)({initialValues:I(t,r),validationSchema:A,onSubmit:function(){var e=(0,a.Z)(l().mark((function e(r,o){var a,i,c;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=o.resetForm,i=o.setSubmitting;try{c={title:r.title,description:r.description,color:r.color,textColor:r.textColor,allDay:r.allDay,start:r.start,end:r.end},t?D(t.id,c):n(c),a(),M(),i(!1)}catch(l){console.error(l)}case 2:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()}),q=W.values,G=W.errors,L=W.touched,X=W.handleSubmit,U=W.isSubmitting,J=W.getFieldProps,K=W.setFieldValue;return(0,N.jsx)($.Hy,{value:W,children:(0,N.jsx)(i._,{dateAdapter:s.Z,children:(0,N.jsxs)($.l0,{autoComplete:"off",noValidate:!0,onSubmit:X,children:[(0,N.jsx)(u.Z,{children:t?"Edit Event":"Add Event"}),(0,N.jsx)(h.Z,{}),(0,N.jsx)(p.Z,{sx:{p:3},children:(0,N.jsxs)(m.ZP,{container:!0,spacing:R.dv,children:[(0,N.jsx)(m.ZP,{item:!0,xs:12,children:(0,N.jsx)(Z.Z,T(T({fullWidth:!0,label:"Title"},J("title")),{},{error:Boolean(L.title&&G.title),helperText:L.title&&G.title}))}),(0,N.jsx)(m.ZP,{item:!0,xs:12,children:(0,N.jsx)(Z.Z,T(T({fullWidth:!0,multiline:!0,rows:3,label:"Description"},J("description")),{},{error:Boolean(L.description&&G.description),helperText:L.description&&G.description}))}),(0,N.jsx)(m.ZP,{item:!0,xs:12,children:(0,N.jsx)(g.Z,{control:(0,N.jsx)(x.Z,T({checked:q.allDay},J("allDay"))),label:"All day"})}),(0,N.jsx)(m.ZP,{item:!0,xs:12,md:6,children:(0,N.jsx)(c.W,{label:"Start date",value:q.start,inputFormat:"dd/MM/yyyy hh:mm a",onChange:function(e){return K("start",e)},renderInput:function(e){return(0,N.jsx)(Z.Z,T(T({},e),{},{fullWidth:!0,InputProps:{endAdornment:(0,N.jsx)(v.Z,{position:"end",children:(0,N.jsx)(_.Z,{})})}}))}})}),(0,N.jsx)(m.ZP,{item:!0,xs:12,md:6,children:(0,N.jsx)(c.W,{label:"End date",value:q.end,inputFormat:"dd/MM/yyyy hh:mm a",onChange:function(e){return K("end",e)},renderInput:function(e){return(0,N.jsx)(Z.Z,T(T({},e),{},{fullWidth:!0,error:Boolean(L.end&&G.end),helperText:L.end&&G.end,InputProps:{endAdornment:(0,N.jsx)(v.Z,{position:"end",children:(0,N.jsx)(_.Z,{})})}}))}})}),(0,N.jsx)(m.ZP,{item:!0,xs:12,children:(0,N.jsxs)(m.ZP,{container:!0,spacing:2,children:[(0,N.jsx)(m.ZP,{item:!0,xs:12,children:(0,N.jsx)(f.Z,{variant:"subtitle1",children:"Background Color"})}),(0,N.jsx)(m.ZP,{item:!0,xs:12,children:(0,N.jsx)(b.Z,{children:(0,N.jsx)(w.Z,T(T({row:!0,"aria-label":"color"},J("color")),{},{onChange:function(e){return K("color",e.target.value)},name:"color-radio-buttons-group",sx:{"& .MuiFormControlLabel-root":{mr:0}},children:H.map((function(e,t){return(0,N.jsx)(O.default,{value:e.value,color:e.color,label:e.label},t)}))}))})})]})}),(0,N.jsx)(m.ZP,{item:!0,xs:12,children:(0,N.jsxs)(m.ZP,{container:!0,spacing:2,children:[(0,N.jsx)(m.ZP,{item:!0,xs:12,children:(0,N.jsx)(f.Z,{variant:"subtitle1",children:"Text Color"})}),(0,N.jsx)(m.ZP,{item:!0,xs:12,children:(0,N.jsx)(b.Z,{component:"fieldset",children:(0,N.jsxs)(w.Z,T(T({row:!0,"aria-label":"textColor"},J("textColor")),{},{onChange:function(e){return K("textColor",e.target.value)},name:"text-color-radio-buttons-group",sx:{"& .MuiFormControlLabel-root":{mr:0}},children:[(0,N.jsx)(g.Z,{value:"",control:(0,N.jsx)(j.Z,{color:"default"}),label:"Default",sx:{pr:1}}),V.map((function(e,t){return(0,N.jsx)(O.default,{value:e.value,color:e.color,label:e.label},t)}))]}))})})]})})]})}),(0,N.jsx)(y.Z,{sx:{p:3},children:(0,N.jsxs)(m.ZP,{container:!0,justifyContent:"space-between",alignItems:"center",children:[(0,N.jsx)(m.ZP,{item:!0,children:!B&&(0,N.jsx)(k.Z,{title:"Delete Event",children:(0,N.jsx)(P.Z,{onClick:function(){return o(t.id)},size:"large",children:(0,N.jsx)(E.Z,{color:"error"})})})}),(0,N.jsx)(m.ZP,{item:!0,children:(0,N.jsxs)(C.Z,{direction:"row",spacing:2,alignItems:"center",children:[(0,N.jsx)(S.Z,{type:"button",variant:"outlined",onClick:M,children:"Cancel"}),(0,N.jsx)(S.Z,{type:"submit",variant:"contained",disabled:U,children:t?"Edit":"Add"})]})})]})})]})})})}},5420:function(e,t,r){"use strict";r.r(t);var o=r(50480),a=r(36872),n=r(85893);t.default=function(e){var t=e.color,r=e.label,l=e.value;return(0,n.jsx)(o.Z,{value:l,control:(0,n.jsx)(a.Z,{sx:{color:t,"&.Mui-checked":{color:t}}}),label:r||"",sx:{pr:r?1:0}})}},75110:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/app/application/calendar/AddEventForm",function(){return r(23425)}])}},function(e){e.O(0,[3662,1023,939,4231,2912,2175,8722,4220,285,4511,9774,2888,179],(function(){return t=75110,e(e.s=t);var t}));var t=e.O();_N_E=t}]);