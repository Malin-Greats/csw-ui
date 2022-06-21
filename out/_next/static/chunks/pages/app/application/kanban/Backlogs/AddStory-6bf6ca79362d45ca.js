(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6652],{53457:function(e,t,r){"use strict";r.d(t,{Z:function(){return g}});var n=r(63366),i=r(87462),o=r(67294),a=r(86010),s=r(94780),c=r(90948),l=r(71657),d=r(34867);function u(e){return(0,d.Z)("MuiFormGroup",e)}(0,r(1588).Z)("MuiFormGroup",["root","row","error"]);var p=r(74423),m=r(15704),h=r(85893);const x=["className","row"],f=(0,c.ZP)("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.row&&t.row]}})((({ownerState:e})=>(0,i.Z)({display:"flex",flexDirection:"column",flexWrap:"wrap"},e.row&&{flexDirection:"row"})));var g=o.forwardRef((function(e,t){const r=(0,l.Z)({props:e,name:"MuiFormGroup"}),{className:o,row:c=!1}=r,d=(0,n.Z)(r,x),g=(0,p.Z)(),v=(0,m.Z)({props:r,muiFormControl:g,states:["error"]}),Z=(0,i.Z)({},r,{row:c,error:v.error}),b=(e=>{const{classes:t,row:r,error:n}=e,i={root:["root",r&&"row",n&&"error"]};return(0,s.Z)(i,u,t)})(Z);return(0,h.jsx)(f,(0,i.Z)({className:(0,a.Z)(b.root,o),ownerState:Z,ref:t},d))}))},18972:function(e,t,r){"use strict";r.d(t,{Z:function(){return P}});var n=r(63366),i=r(87462),o=r(67294),a=r(86010),s=r(94780),c=r(41796),l=r(90948),d=r(71657),u=r(59773),p=r(49990),m=r(58974),h=r(51705),x=r(35097),f=r(84592),g=r(26336),v=r(34867);function Z(e){return(0,v.Z)("MuiMenuItem",e)}var b=(0,r(1588).Z)("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),j=r(85893);const y=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex"],w=(0,l.ZP)(p.Z,{shouldForwardProp:e=>(0,l.FO)(e)||"classes"===e,name:"MuiMenuItem",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.dense&&t.dense,r.divider&&t.divider,!r.disableGutters&&t.gutters]}})((({theme:e,ownerState:t})=>(0,i.Z)({},e.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${b.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,c.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${b.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:(0,c.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${b.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:(0,c.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,c.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${b.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${b.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${x.Z.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${x.Z.inset}`]:{marginLeft:52},[`& .${g.Z.root}`]:{marginTop:0,marginBottom:0},[`& .${g.Z.inset}`]:{paddingLeft:36},[`& .${f.Z.root}`]:{minWidth:36}},!t.dense&&{[e.breakpoints.up("sm")]:{minHeight:"auto"}},t.dense&&(0,i.Z)({minHeight:32,paddingTop:4,paddingBottom:4},e.typography.body2,{[`& .${f.Z.root} svg`]:{fontSize:"1.25rem"}}))));var P=o.forwardRef((function(e,t){const r=(0,d.Z)({props:e,name:"MuiMenuItem"}),{autoFocus:c=!1,component:l="li",dense:p=!1,divider:x=!1,disableGutters:f=!1,focusVisibleClassName:g,role:v="menuitem",tabIndex:b}=r,P=(0,n.Z)(r,y),O=o.useContext(u.Z),C={dense:p||O.dense||!1,disableGutters:f},S=o.useRef(null);(0,m.Z)((()=>{c&&S.current&&S.current.focus()}),[c]);const I=(0,i.Z)({},r,{dense:C.dense,divider:x,disableGutters:f}),k=(e=>{const{disabled:t,dense:r,divider:n,disableGutters:o,selected:a,classes:c}=e,l={root:["root",r&&"dense",t&&"disabled",!o&&"gutters",n&&"divider",a&&"selected"]},d=(0,s.Z)(l,Z,c);return(0,i.Z)({},c,d)})(r),D=(0,h.Z)(S,t);let $;return r.disabled||($=void 0!==b?b:-1),(0,j.jsx)(u.Z.Provider,{value:C,children:(0,j.jsx)(w,(0,i.Z)({ref:D,role:v,tabIndex:$,component:l,focusVisibleClassName:(0,a.Z)(k.focusVisible,g)},P,{ownerState:I,classes:k}))})}))},68061:function(e,t,r){"use strict";var n=r(87462),i=r(63366),o=r(67294),a=r(53457),s=r(51705),c=r(49299),l=r(80209),d=r(27909),u=r(85893);const p=["actions","children","defaultValue","name","onChange","value"],m=o.forwardRef((function(e,t){const{actions:r,children:m,defaultValue:h,name:x,onChange:f,value:g}=e,v=(0,i.Z)(e,p),Z=o.useRef(null),[b,j]=(0,c.Z)({controlled:g,default:h,name:"RadioGroup"});o.useImperativeHandle(r,(()=>({focus:()=>{let e=Z.current.querySelector("input:not(:disabled):checked");e||(e=Z.current.querySelector("input:not(:disabled)")),e&&e.focus()}})),[]);const y=(0,s.Z)(t,Z),w=(0,d.Z)(x);return(0,u.jsx)(l.Z.Provider,{value:{name:w,onChange:e=>{j(e.target.value),f&&f(e,e.target.value)},value:b},children:(0,u.jsx)(a.Z,(0,n.Z)({role:"radiogroup",ref:y},v,{children:m}))})}));t.Z=m},74769:function(e,t,r){"use strict";r.r(t);var n=r(59499),i=r(25675),o=r(58826),a=r(87357),s=r(86886),c=r(15861),l=r(50135),d=r(5306),u=r(94054),p=r(68061),m=r(50480),h=r(36872),x=r(18360),f=r(18972),g=r(11057),v=r(25613),Z=r(52359),b=r(87664),j=r(74231),y=r(20714),w=r(82175),P=r(74026),O=r(62055),C=r(12686),S=r(83633),I=r(38617),k=r(85893);function D(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function $(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?D(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):D(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var F=new y.Chance,R=j.Ry({title:j.Z_().required("User story title is required"),dueDate:j.hT()});t.default=function(e){var t=e.open,r=e.handleDrawerOpen,n=(0,S.I0)(),j=(0,S.v9)((function(e){return e.kanban})),y=j.profiles,D=j.columns,M=j.userStory,_=j.userStoryOrder,T=(0,w.TA)({initialValues:{id:"".concat(F.integer({min:1e3,max:9999})),title:"",assign:null,columnId:"",priority:"low",dueDate:new Date,acceptance:"",description:"",commentIds:"",image:!1,itemIds:[]},validationSchema:R,onSubmit:function(e){n((0,I.kh)(e,M,_)),n((0,C.ss)({open:!0,message:"Submit Success",variant:"alert",alert:{color:"success"},close:!1})),r()}});return(0,k.jsx)(o.ZP,{sx:{ml:t?3:0,flexShrink:0,zIndex:1200,overflowX:"hidden",width:{xs:320,md:450},"& .MuiDrawer-paper":{height:"100vh",width:{xs:320,md:450},position:"fixed",border:"none",borderRadius:"0px"}},variant:"temporary",anchor:"right",open:t,ModalProps:{keepMounted:!0},onClose:r,children:t&&(0,k.jsx)(a.Z,{sx:{p:3},children:(0,k.jsx)("form",{onSubmit:T.handleSubmit,children:(0,k.jsx)(Z._,{dateAdapter:v.Z,children:(0,k.jsxs)(s.ZP,{container:!0,spacing:3,children:[(0,k.jsx)(s.ZP,{item:!0,xs:12,children:(0,k.jsx)(c.Z,{variant:"h4",children:"Add Story"})}),(0,k.jsx)(s.ZP,{item:!0,xs:12,children:(0,k.jsx)(l.Z,{fullWidth:!0,id:"title",name:"title",label:"Title",value:T.values.title,onChange:T.handleChange,error:T.touched.title&&Boolean(T.errors.title),helperText:T.touched.title&&T.errors.title})}),(0,k.jsx)(s.ZP,{item:!0,xs:12,children:(0,k.jsxs)(s.ZP,{container:!0,alignItems:"center",spacing:2,children:[(0,k.jsx)(s.ZP,{item:!0,xs:12,sm:4,children:(0,k.jsx)(c.Z,{variant:"subtitle1",children:"Assign to:"})}),(0,k.jsx)(s.ZP,{item:!0,xs:12,sm:8,children:(0,k.jsx)(s.ZP,{container:!0,justifyContent:"flex-start",children:(0,k.jsx)(d.Z,{id:"assign",value:y.find((function(e){return e.id===T.values.assign}))||null,onChange:function(e,t){T.setFieldValue("assign",t.id)},options:y,fullWidth:!0,autoHighlight:!0,getOptionLabel:function(e){return e.name},isOptionEqualToValue:function(e){return e.id===T.values.assign},renderOption:function(e,t){return(0,k.jsxs)(a.Z,$($({component:"li",sx:{"& > img":{mr:2,flexShrink:0}}},e),{},{children:[(0,k.jsx)(i.default,{width:20,height:20,src:"".concat("/assets/images/users","/").concat(t.avatar),alt:""}),t.name]}))},renderInput:function(e){return(0,k.jsx)(l.Z,$($({},e),{},{label:"Choose a assignee",inputProps:$($({},e.inputProps),{},{autoComplete:"new-password"})}))}})})})]})}),(0,k.jsx)(s.ZP,{item:!0,xs:12,children:(0,k.jsxs)(s.ZP,{container:!0,alignItems:"center",spacing:2,children:[(0,k.jsx)(s.ZP,{item:!0,xs:12,sm:4,children:(0,k.jsx)(c.Z,{variant:"subtitle1",children:"Prioritize:"})}),(0,k.jsx)(s.ZP,{item:!0,xs:12,sm:8,children:(0,k.jsx)(u.Z,{children:(0,k.jsxs)(p.Z,{row:!0,"aria-label":"color",value:T.values.priority,onChange:T.handleChange,name:"priority",id:"priority",children:[(0,k.jsx)(m.Z,{value:"low",control:(0,k.jsx)(h.Z,{color:"primary",sx:{color:"primary.main"}}),label:"Low"}),(0,k.jsx)(m.Z,{value:"medium",control:(0,k.jsx)(h.Z,{color:"warning",sx:{color:"warning.main"}}),label:"Medium"}),(0,k.jsx)(m.Z,{value:"high",control:(0,k.jsx)(h.Z,{color:"error",sx:{color:"error.main"}}),label:"High"})]})})})]})}),(0,k.jsx)(s.ZP,{item:!0,xs:12,children:(0,k.jsxs)(s.ZP,{container:!0,alignItems:"center",spacing:2,children:[(0,k.jsx)(s.ZP,{item:!0,xs:12,sm:4,children:(0,k.jsx)(c.Z,{variant:"subtitle1",children:"Due date:"})}),(0,k.jsx)(s.ZP,{item:!0,xs:12,sm:8,children:(0,k.jsx)(b.$,{label:"Due Date",value:T.values.dueDate,inputFormat:"dd/MM/yyyy",onChange:function(e){T.setFieldValue("dueDate",e)},renderInput:function(e){return(0,k.jsx)(l.Z,$({fullWidth:!0},e))}})})]})}),(0,k.jsx)(s.ZP,{item:!0,xs:12,children:(0,k.jsxs)(s.ZP,{container:!0,alignItems:"center",spacing:2,children:[(0,k.jsx)(s.ZP,{item:!0,xs:12,sm:4,children:(0,k.jsx)(c.Z,{variant:"subtitle1",children:"Acceptance:"})}),(0,k.jsx)(s.ZP,{item:!0,xs:12,sm:8,children:(0,k.jsx)(l.Z,{fullWidth:!0,id:"acceptance",name:"acceptance",multiline:!0,rows:3,value:T.values.acceptance,onChange:T.handleChange,error:T.touched.acceptance&&Boolean(T.errors.acceptance),helperText:T.touched.acceptance&&T.errors.acceptance})})]})}),(0,k.jsx)(s.ZP,{item:!0,xs:12,children:(0,k.jsxs)(s.ZP,{container:!0,alignItems:"center",spacing:2,children:[(0,k.jsx)(s.ZP,{item:!0,xs:12,sm:4,children:(0,k.jsx)(c.Z,{variant:"subtitle1",children:"Description:"})}),(0,k.jsx)(s.ZP,{item:!0,xs:12,sm:8,children:(0,k.jsx)(l.Z,{fullWidth:!0,id:"description",name:"description",multiline:!0,rows:3,value:T.values.description,onChange:T.handleChange,error:T.touched.description&&Boolean(T.errors.description),helperText:T.touched.description&&T.errors.description})})]})}),(0,k.jsx)(s.ZP,{item:!0,xs:12,children:(0,k.jsxs)(s.ZP,{container:!0,alignItems:"center",spacing:2,children:[(0,k.jsx)(s.ZP,{item:!0,xs:12,sm:4,children:(0,k.jsx)(c.Z,{variant:"subtitle1",children:"State:"})}),(0,k.jsx)(s.ZP,{item:!0,xs:12,sm:8,children:(0,k.jsx)(u.Z,{fullWidth:!0,sx:{m:1},children:(0,k.jsx)(x.Z,{id:"columnId",name:"columnId",displayEmpty:!0,value:T.values.columnId,onChange:T.handleChange,inputProps:{"aria-label":"Without label"},children:D.map((function(e,t){return(0,k.jsx)(f.Z,{value:e.id,children:e.title},t)}))})})})]})}),(0,k.jsx)(s.ZP,{item:!0,xs:12,children:(0,k.jsxs)(s.ZP,{container:!0,alignItems:"center",spacing:2,children:[(0,k.jsx)(s.ZP,{item:!0,xs:12,sm:4,children:(0,k.jsx)(c.Z,{variant:"subtitle1",children:"Attachments:"})}),(0,k.jsx)(s.ZP,{item:!0,xs:12,sm:8,children:(0,k.jsx)(P.default,{attachments:[]})})]})}),(0,k.jsx)(s.ZP,{item:!0,xs:12,children:(0,k.jsx)(O.Z,{children:(0,k.jsx)(g.Z,{fullWidth:!0,variant:"contained",type:"submit",children:"Save"})})})]})})})})})}},74026:function(e,t,r){"use strict";r.r(t);var n=r(59499),i=r(67294),o=r(90948),a=r(41796),s=r(87357),c=r(55113),l=r(93946),d=r(11057),u=r(96486),p=r(32512),m=r(44510),h=r(6103),x=r(85893);function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var v=(0,o.ZP)("div")((function(e){var t=e.theme;return{width:64,height:64,fontSize:24,display:"flex",cursor:"pointer",alignItems:"center",justifyContent:"center",margin:t.spacing(.5),borderRadius:t.shape.borderRadius,"&:hover":{opacity:.72}}}));function Z(){var e=(0,i.useState)([]),t=e[0],r=e[1],n=(0,i.useCallback)((function(e){r(e.map((function(e){var t=new FileReader;return t.onabort=function(){return console.log("file reading was aborted")},t.onerror=function(){return console.log("file reading has failed")},t.onload=function(){return console.log("file reading result")},t.readAsArrayBuffer(e),Object.assign(e,{preview:URL.createObjectURL(e)})})))}),[r]),o=(0,p.uI)({onDrop:n}),f=o.getRootProps,Z=o.getInputProps,b=o.isDragActive;return(0,x.jsxs)(x.Fragment,{children:[t.map((function(e){var n=e.name,i=e.preview,o=(0,u.isString)(e)?e:n;return(0,x.jsxs)(s.Z,{sx:{p:0,m:.5,width:64,height:64,borderRadius:.25,overflow:"hidden",position:"relative"},children:[(0,x.jsx)(c.Z,{variant:"outlined",component:"img",src:(0,u.isString)(e)?e:i,sx:{width:"100%",height:"100%",objectFit:"cover",position:"absolute",borderRadius:1}}),(0,x.jsx)(s.Z,{sx:{top:6,right:6,position:"absolute"},children:(0,x.jsx)(l.Z,{size:"small",onClick:function(){return function(e){var n=t.filter((function(t){return t!==e}));r(n)}(e)},sx:{p:"1px",color:"common.white",bgcolor:function(e){return(0,a.Fq)(e.palette.grey[900],.72)},"&:hover":{bgcolor:function(e){return(0,a.Fq)(e.palette.grey[900],.48)}}},children:(0,x.jsx)(m.Z,{})})})]},o)})),(0,x.jsxs)(v,g(g({},f()),{},{sx:g({},b&&{opacity:.72}),children:[(0,x.jsx)("input",g({},Z())),(0,x.jsx)(d.Z,{variant:"outlined",size:"large",sx:{p:2.25},children:(0,x.jsx)(h.Z,{})})]}))]})}t.default=function(){return(0,x.jsx)(s.Z,{sx:{display:"flex"},children:(0,x.jsx)(Z,{})})}},80127:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/app/application/kanban/Backlogs/AddStory",function(){return r(74769)}])}},function(e){e.O(0,[3662,939,4231,2912,2175,8722,5306,4220,5675,4278,7664,9774,2888,179],(function(){return t=80127,e(e.s=t);var t}));var t=e.O();_N_E=t}]);