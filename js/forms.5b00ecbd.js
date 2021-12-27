"use strict";(self["webpackChunkadmin_one_vue_tailwind"]=self["webpackChunkadmin_one_vue_tailwind"]||[]).push([[790],{4638:function(e,l,t){t.d(l,{Z:function(){return v}});var a=t(6252),o=t(2262),n=t(3577),u=t(2119),s=t(5317),r=t(7213),i=t(5157);const m={class:"flex items-center justify-center flex-col md:flex-row text-2xl text-gray-500 dark:text-gray-400 mb-12"},c=(0,a._)("span",{class:"md:mr-3"},"Please star this project on",-1),d={href:"https://github.com/justboil/admin-one-vue-tailwind",class:"inline-flex items-center justify-center text-blue-500",target:"_blank"},p=(0,a._)("span",null,"GitHub",-1),f={class:"text-2xl text-gray-500 dark:text-gray-400 mb-12"},b=(0,a.Uk)(" Check out other components and layouts at"),h=(0,a._)("br",null,null,-1),w=(0,a.Uk)(" , "),y=(0,a._)("br",null,null,-1),g=(0,a.Uk)(" screen samples "),x=(0,a._)("h1",{class:"text-2xl text-gray-500 dark:text-gray-400"},[(0,a.Uk)(" Get more with "),(0,a._)("a",{href:"https://justboil.me/tailwind-admin-templates/vue-dashboard/",target:"_blank",class:"text-blue-500"},"Premium version")],-1);var _={setup(e){const l=(0,u.tv)(),t=l.getRoutes(),_=[];for(const a in t){const e=t[a].path,l=t[a].meta&&t[a].meta.title?t[a].meta.title:null;l&&_.push({path:e,title:l})}return(e,l)=>{const t=(0,a.up)("router-link");return(0,a.wg)(),(0,a.j4)(r.Z,{last:""},{default:(0,a.w5)((()=>[(0,a._)("h1",m,[c,(0,a._)("a",d,[(0,a.Wm)(i.Z,{path:(0,o.SU)(s.LcO),size:"36",class:"mr-1"},null,8,["path"]),p])]),(0,a._)("h1",f,[b,h,((0,a.wg)(),(0,a.iD)(a.HY,null,(0,a.Ko)(_,((e,l)=>((0,a.wg)(),(0,a.iD)(a.HY,{key:e.path},[(0,a.Wm)(t,{to:e.path,class:"text-blue-500"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,n.zw)(e.title),1)])),_:2},1032,["to"]),l+1<_.length?((0,a.wg)(),(0,a.iD)(a.HY,{key:0},[w],64)):(0,a.kq)("",!0)],64)))),64)),y,g]),x])),_:1})}}};const k=_;var v=k},1472:function(e,l,t){t.d(l,{Z:function(){return d}});var a=t(6252),o=t(3577),n=t(2262),u=t(9963);const s=["type","name","value"],r=(0,a._)("span",{class:"check"},null,-1),i={class:"control-label"};var m={props:{options:{type:Object,default:()=>{}},name:{type:String,required:!0},type:{type:String,default:"checkbox"},column:Boolean,modelValue:{type:[Object,Array,String,Number],default:null}},emits:["update:modelValue"],setup(e,{emit:l}){const t=e,m=(0,n.Fl)({get:()=>t.modelValue,set:e=>{l("update:modelValue",e)}}),c=(0,n.Fl)((()=>"radio"===t.type?"radio":"checkbox"));return(l,t)=>((0,a.wg)(),(0,a.iD)("div",{class:(0,o.C_)(["flex justify-start flex-wrap -mb-3",{"flex-col":e.column}])},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.options,((l,d)=>((0,a.wg)(),(0,a.iD)("label",{key:d,class:(0,o.C_)([e.type,"mr-6 mb-3 last:mr-0"])},[(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>(0,n.dq)(m)?m.value=e:null),type:(0,n.SU)(c),name:e.name,value:d},null,8,s),[[u.YZ,(0,n.SU)(m)]]),r,(0,a._)("span",i,(0,o.zw)(l),1)],2)))),128))],2))}};const c=m;var d=c},4533:function(e,l,t){t.d(l,{Z:function(){return c}});var a=t(6252),o=t(3577),n=t(2262);const u={class:"mb-6 last:mb-0"},s={key:0,class:"block font-bold mb-2"},r={key:1,class:"text-xs text-gray-500 dark:text-gray-400 mt-1"};var i={props:{label:{type:String,default:null},help:{type:String,default:null}},setup(e){const l=(0,a.Rr)(),t=(0,n.Fl)((()=>{const e=[],t=l.default().length;return t>1&&e.push("grid grid-cols-1 gap-3"),2===t&&e.push("md:grid-cols-2"),e}));return(l,i)=>((0,a.wg)(),(0,a.iD)("div",u,[e.label?((0,a.wg)(),(0,a.iD)("label",s,(0,o.zw)(e.label),1)):(0,a.kq)("",!0),(0,a._)("div",{class:(0,o.C_)((0,n.SU)(t))},[(0,a.WI)(l.$slots,"default")],2),e.help?((0,a.wg)(),(0,a.iD)("div",r,(0,o.zw)(e.help),1)):(0,a.kq)("",!0)]))}};const m=i;var c=m},2429:function(e,l,t){t.d(l,{Z:function(){return b}});var a=t(6252),o=t(3577),n=t(5317),u=t(2262),s=t(6401);const r={class:"flex items-stretch justify-start relative"},i={class:"inline-flex"},m=["accept"],c={key:0},d={class:"inline-flex px-4 py-2 justify-center bg-gray-100 border-gray-200 border rounded-r"};var p={props:{modelValue:{type:[Object,File,Array],default:null},label:{type:String,default:"Upload"},icon:{type:String,default:n.xyB},accept:{type:String,default:null},color:{type:String,default:"info"}},emits:["update:modelValue"],setup(e,{emit:l}){const t=e,n=(0,u.iH)(null),p=(0,u.iH)(t.modelValue),f=(0,u.Fl)((()=>t.modelValue));(0,a.YP)(f,(e=>{p.value=e,e||(n.value.input.value=null)}));const b=e=>{const t=e.target.files||e.dataTransfer.files;p.value=t[0],l("update:modelValue",p.value)};return(l,t)=>((0,a.wg)(),(0,a.iD)("div",r,[(0,a._)("label",i,[(0,a.Wm)(s.Z,{as:"a",label:e.label,icon:e.icon,color:e.color,class:(0,o.C_)({"rounded-r-none":p.value})},null,8,["label","icon","color","class"]),(0,a._)("input",{ref_key:"root",ref:n,type:"file",class:"absolute top-0 left-0 w-full h-full opacity-0 outline-none cursor-pointer -z-1",accept:e.accept,onInput:b},null,40,m)]),p.value?((0,a.wg)(),(0,a.iD)("div",c,[(0,a._)("span",d,(0,o.zw)(p.value.name),1)])):(0,a.kq)("",!0)]))}};const f=p;var b=f},7213:function(e,l,t){t.d(l,{Z:function(){return r}});var a=t(6252),o=t(3577);const n={key:1,class:"text-2xl text-gray-500 dark:text-gray-400"};var u={props:{custom:Boolean,first:Boolean,last:Boolean},setup(e){return(l,t)=>((0,a.wg)(),(0,a.iD)("section",{class:(0,o.C_)(["py-24 px-6 lg:px-0 lg:max-w-2xl lg:mx-auto text-center",{"-mb-6":e.first,"-mt-6":e.last,"-my-6":!e.first&&!e.last}])},[e.custom?(0,a.WI)(l.$slots,"default",{key:0}):((0,a.wg)(),(0,a.iD)("h1",n,[(0,a.WI)(l.$slots,"default")]))],2))}};const s=u;var r=s},1635:function(e,l,t){t.r(l),t.d(l,{default:function(){return Z}});var a=t(6252),o=t(2262),n=t(9963),u=t(5317),s=t(229),r=t(7672),i=t(887),m=t(1472),c=t(2429),d=t(4650),p=t(4533),f=t(8864),b=t(859),h=t(6401),w=t(9275),y=t(4638),g=t(7213),x=t(7453);const _=(0,a.Uk)("Forms"),k=(0,a.Uk)(" Custom elements ");var v={setup(e){const l=(0,o.iH)(["Admin","Forms"]),t=[{id:1,label:"Business development"},{id:2,label:"Marketing"},{id:3,label:"Sales"}],v=(0,o.qj)({name:"John Doe",email:"john.doe@example.com",phone:"",department:t[0],subject:"",question:""}),U=(0,o.qj)({checkbox:["lorem"],radio:"one",switch:["one"],file:null}),Z=()=>{};return(e,W)=>((0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(r.Z,{"title-stack":l.value},null,8,["title-stack"]),(0,a.Wm)(d.Z,null,{default:(0,a.w5)((()=>[_])),_:1}),(0,a.Wm)(s.Z,null,{default:(0,a.w5)((()=>[(0,a.Wm)(x.Z,{icon:(0,o.SU)(u.fmz),title:"Forms example"},null,8,["icon"]),(0,a.Wm)(i.Z,{title:"Forms",icon:(0,o.SU)(u.hjO),form:"",onSubmit:(0,n.iM)(Z,["prevent"])},{default:(0,a.w5)((()=>[(0,a.Wm)(p.Z,{label:"Grouped with icons"},{default:(0,a.w5)((()=>[(0,a.Wm)(f.Z,{modelValue:(0,o.SU)(v).name,"onUpdate:modelValue":W[0]||(W[0]=e=>(0,o.SU)(v).name=e),icon:(0,o.SU)(u.rI3)},null,8,["modelValue","icon"]),(0,a.Wm)(f.Z,{modelValue:(0,o.SU)(v).email,"onUpdate:modelValue":W[1]||(W[1]=e=>(0,o.SU)(v).email=e),type:"email",icon:(0,o.SU)(u.xaU)},null,8,["modelValue","icon"])])),_:1}),(0,a.Wm)(p.Z,{label:"With help line",help:"Do not enter the leading zero"},{default:(0,a.w5)((()=>[(0,a.Wm)(f.Z,{modelValue:(0,o.SU)(v).phone,"onUpdate:modelValue":W[2]||(W[2]=e=>(0,o.SU)(v).phone=e),type:"tel",placeholder:"Your phone number"},null,8,["modelValue"])])),_:1}),(0,a.Wm)(p.Z,{label:"Dropdown"},{default:(0,a.w5)((()=>[(0,a.Wm)(f.Z,{modelValue:(0,o.SU)(v).department,"onUpdate:modelValue":W[3]||(W[3]=e=>(0,o.SU)(v).department=e),options:t},null,8,["modelValue"])])),_:1}),(0,a.Wm)(b.Z),(0,a.Wm)(p.Z,{label:"Question",help:"Your question. Max 255 characters"},{default:(0,a.w5)((()=>[(0,a.Wm)(f.Z,{type:"textarea",placeholder:"Explain how we can help you"})])),_:1}),(0,a.Wm)(b.Z),(0,a.Wm)(w.Z,null,{default:(0,a.w5)((()=>[(0,a.Wm)(h.Z,{type:"submit",color:"info",label:"Submit"}),(0,a.Wm)(h.Z,{type:"reset",color:"info",outline:"",label:"Reset"})])),_:1})])),_:1},8,["icon","onSubmit"])])),_:1}),(0,a.Wm)(g.Z,null,{default:(0,a.w5)((()=>[k])),_:1}),(0,a.Wm)(s.Z,null,{default:(0,a.w5)((()=>[(0,a.Wm)(i.Z,{title:"Custom elements",icon:(0,o.SU)(u.fmz)},{default:(0,a.w5)((()=>[(0,a.Wm)(p.Z,{label:"Checkbox","wrap-body":""},{default:(0,a.w5)((()=>[(0,a.Wm)(m.Z,{modelValue:(0,o.SU)(U).checkbox,"onUpdate:modelValue":W[4]||(W[4]=e=>(0,o.SU)(U).checkbox=e),name:"sample-checkbox",options:{lorem:"Lorem",ipsum:"Ipsum",dolore:"Dolore"}},null,8,["modelValue"])])),_:1}),(0,a.Wm)(b.Z),(0,a.Wm)(p.Z,{label:"Radio","wrap-body":""},{default:(0,a.w5)((()=>[(0,a.Wm)(m.Z,{modelValue:(0,o.SU)(U).radio,"onUpdate:modelValue":W[5]||(W[5]=e=>(0,o.SU)(U).radio=e),name:"sample-radio",type:"radio",options:{one:"One",two:"Two"}},null,8,["modelValue"])])),_:1}),(0,a.Wm)(b.Z),(0,a.Wm)(p.Z,{label:"Switch"},{default:(0,a.w5)((()=>[(0,a.Wm)(m.Z,{modelValue:(0,o.SU)(U).switch,"onUpdate:modelValue":W[6]||(W[6]=e=>(0,o.SU)(U).switch=e),name:"sample-switch",type:"switch",options:{one:"One",two:"Two"}},null,8,["modelValue"])])),_:1}),(0,a.Wm)(b.Z),(0,a.Wm)(c.Z,{modelValue:(0,o.SU)(U).file,"onUpdate:modelValue":W[7]||(W[7]=e=>(0,o.SU)(U).file=e)},null,8,["modelValue"])])),_:1},8,["icon"])])),_:1}),(0,a.Wm)(y.Z)],64))}};const U=v;var Z=U}}]);
//# sourceMappingURL=forms.5b00ecbd.js.map