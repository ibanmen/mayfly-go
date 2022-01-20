var J=Object.defineProperty,K=Object.defineProperties;var W=Object.getOwnPropertyDescriptors;var N=Object.getOwnPropertySymbols;var X=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;var I=(e,o,i)=>o in e?J(e,o,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[o]=i,F=(e,o)=>{for(var i in o||(o={}))X.call(o,i)&&I(e,i,o[i]);if(N)for(var i of N(o))Y.call(o,i)&&I(e,i,o[i]);return e},E=(e,o)=>K(e,W(o));import{b as v,a as Z}from"./api.2b4fbbc6.js";import{x as A,r as U,a as T,A as j,t as B,s as R,e as u,f as y,h as _,i as l,G as n,k as c,l as q,o as x,P as ee,Q as oe,w as V,D as z,j as L}from"./vendor.c08e96cf.js";import{e as le}from"./enums.a05a011e.js";import"./Api.ab367e46.js";import"./index.ef81b75e.js";import"./Enum.2b540114.js";var O=A({name:"RoleEdit",props:{visible:{type:Boolean},account:{type:[Boolean,Object]}},setup(e,{emit:o}){const i=U(null),s=T({visible:!1,btnLoading:!1,allRole:[],roles:[],query:{name:null,pageNum:1,pageSize:5},total:0});j(e,(t,p)=>{if(s.visible=t.visible,t.account&&t.account.id!=0)v.roleIds.request({id:e.account.id}).then(b=>{s.roles=b||[],m()});else return});const w=()=>{m()},C=t=>t.code.indexOf("COMMON")!=0,r=(t,p)=>{let b=s.roles;if(b.includes(p.id)){for(let k=0;k<b.length;k++)if(b[k]===p.id){b.splice(k,1);break}}else b.push(p.id)},g=()=>{setTimeout(()=>{i.value.clearSelection(),s.allRole.forEach(t=>{s.roles.includes(t.id)&&i.value.toggleRowSelection(t,!0)})},50)},f=async()=>{let t=s.roles.join(",");await v.saveRoles.request({id:e.account.id,roleIds:t}),R.success("\u4FDD\u5B58\u6210\u529F!"),d()},d=()=>{s.query.pageNum=1,s.query.name=null,o("update:visible",!1),o("cancel")},h=()=>{s.query.pageNum=1,s.query.name=null,m()},m=async()=>{let t=await Z.list.request(s.query);s.allRole=t.list,s.total=t.total,g()};return E(F({},B(s)),{roleTable:i,search:m,handlePageChange:w,selectable:C,select:r,btnOk:f,cancel:d,clear:h})}});const te={class:"account-dialog"},ae={class:"toolbar"},ne={style:{float:"left"}},se={class:"dialog-footer"},ie=c("\u53D6 \u6D88"),ue=c("\u786E \u5B9A");function re(e,o,i,s,w,C){const r=u("el-input"),g=u("el-button"),f=u("el-table-column"),d=u("el-table"),h=u("el-pagination"),m=u("el-dialog");return y(),_("div",te,[l(m,{title:e.account==null?"":"\u5206\u914D\u201C"+e.account.username+"\u201D\u7684\u89D2\u8272",modelValue:e.visible,"onUpdate:modelValue":o[5]||(o[5]=t=>e.visible=t),"before-close":e.cancel,"show-close":!1},{footer:n(()=>[l("div",se,[l(g,{onClick:o[4]||(o[4]=t=>e.cancel()),size:"small"},{default:n(()=>[ie]),_:1}),l(g,{type:"primary",loading:e.btnLoading,onClick:e.btnOk,size:"small"},{default:n(()=>[ue]),_:1},8,["loading","onClick"])])]),default:n(()=>[l("div",ae,[l("div",ne,[l(r,{placeholder:"\u8BF7\u8F93\u5165\u89D2\u8272\u540D",size:"small",style:{width:"150px"},modelValue:e.query.name,"onUpdate:modelValue":o[1]||(o[1]=t=>e.query.name=t),onClear:o[2]||(o[2]=t=>e.clear()),clearable:""},null,8,["modelValue"]),l(g,{onClick:e.search,type:"success",icon:"el-icon-search",size:"small"},null,8,["onClick"])])]),l(d,{data:e.allRole,border:"",ref:"roleTable",onSelect:e.select,style:{width:"100%"}},{default:n(()=>[l(f,{selectable:e.selectable,type:"selection",width:"40"},null,8,["selectable"]),l(f,{prop:"name",label:"\u89D2\u8272\u540D\u79F0"}),l(f,{prop:"code",label:"\u89D2\u8272code"}),l(f,{prop:"remark",label:"\u89D2\u8272\u63CF\u8FF0"},{default:n(t=>[c(q(t.row.remark?t.row.remark:"\u6682\u65E0\u63CF\u8FF0"),1)]),_:1})]),_:1},8,["data","onSelect"]),l(h,{onCurrentChange:e.handlePageChange,style:{"text-align":"center","margin-top":"20px"},background:"",layout:"prev, pager, next, total, jumper",total:e.total,"current-page":e.query.pageNum,"onUpdate:current-page":o[3]||(o[3]=t=>e.query.pageNum=t),"page-size":e.query.pageSize},null,8,["onCurrentChange","total","current-page","page-size"])]),_:1},8,["title","modelValue","before-close"])])}O.render=re;var P=A({name:"AccountEdit",props:{visible:{type:Boolean},account:{type:[Boolean,Object]},title:{type:String}},setup(e,{emit:o}){const i=U(null),s=T({dialogVisible:!1,edit:!1,form:{id:null,username:null,password:null,repassword:null},btnLoading:!1,rules:{username:[{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237\u540D",trigger:["change","blur"]}]}});j(e,r=>{r.account?s.form=F({},r.account):s.form={},s.dialogVisible=r.visible});const w=async()=>{let r=s.form.id?v.update:v.save;i.value.validate(g=>{if(g)r.request(s.form).then(()=>{R.success("\u64CD\u4F5C\u6210\u529F"),o("val-change",s.form),s.btnLoading=!0,setTimeout(()=>{s.btnLoading=!1},1e3),i.resetFields(),s.form={}});else return R.error("\u8868\u5355\u586B\u5199\u6709\u8BEF"),!1})},C=()=>{o("update:visible",!1),setTimeout(()=>{o("update:account",null)},800),o("cancel"),setTimeout(()=>{i.value.resetFields(),s.form={}},200)};return E(F({},B(s)),{accountForm:i,btnOk:w,cancel:C})}}),je="";const de={class:"account-dialog"},ce={class:"dialog-footer"},pe=c("\u53D6 \u6D88"),me=c("\u786E \u5B9A");function ge(e,o,i,s,w,C){const r=u("el-input"),g=u("el-form-item"),f=u("el-form"),d=u("el-button"),h=u("el-dialog");return y(),_("div",de,[l(h,{title:e.title,modelValue:e.dialogVisible,"onUpdate:modelValue":o[3]||(o[3]=m=>e.dialogVisible=m),"before-close":e.cancel,"show-close":!1,width:"35%"},{footer:n(()=>[l("div",ce,[l(d,{onClick:o[2]||(o[2]=m=>e.cancel()),size:"mini"},{default:n(()=>[pe]),_:1}),l(d,{type:"primary",loading:e.btnLoading,onClick:e.btnOk,size:"small"},{default:n(()=>[me]),_:1},8,["loading","onClick"])])]),default:n(()=>[l(f,{model:e.form,ref:"accountForm",rules:e.rules,"label-width":"85px",size:"small"},{default:n(()=>[l(g,{prop:"username",label:"\u7528\u6237\u540D:",required:""},{default:n(()=>[l(r,{disabled:e.edit,modelValue:e.form.username,"onUpdate:modelValue":o[1]||(o[1]=m=>e.form.username=m),modelModifiers:{trim:!0},placeholder:"\u8BF7\u8F93\u5165\u8D26\u53F7\u7528\u6237\u540D","auto-complete":"off"},null,8,["disabled","modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["title","modelValue","before-close"])])}P.render=ge;var M=A({name:"AccountList",components:{RoleEdit:O,AccountEdit:P},setup(){const e=T({chooseId:null,chooseData:null,query:{pageNum:1,pageSize:10},datas:[],total:0,showRoleDialog:{title:"",visible:!1,accountRoles:[]},showResourceDialog:{title:"",visible:!1,resources:[],defaultProps:{children:"children",label:"name"}},roleDialog:{visible:!1,account:null,roles:[]},accountDialog:{visible:!1,data:null}});x(()=>{i()});const o=t=>{!t||(e.chooseId=t.id,e.chooseData=t)},i=async()=>{let t=await v.list.request(e.query);e.datas=t.list,e.total=t.total},s=async t=>{let p=e.showResourceDialog;p.title='"'+t.username+'" \u7684\u83DC\u5355&\u6743\u9650',p.resources=[],p.resources=await v.resources.request({id:t.id}),p.visible=!0},w=async t=>{let p=e.showRoleDialog;p.title='"'+t.username+'" \u7684\u89D2\u8272\u4FE1\u606F',p.accountRoles=await v.roles.request({id:t.id}),p.visible=!0},C=async t=>{let p=t.id,b=t.status==-1?1:-1;await v.changeStatus.request({id:p,status:b}),R.success("\u64CD\u4F5C\u6210\u529F"),i()},r=t=>{e.query.pageNum=t,i()},g=()=>{e.chooseId||R.error("\u8BF7\u9009\u62E9\u8D26\u53F7"),e.roleDialog.visible=!0,e.roleDialog.account=e.chooseData},f=(t=!1)=>{t?e.accountDialog.data=null:e.accountDialog.data=e.chooseData,e.accountDialog.visible=!0},d=()=>{e.roleDialog.visible=!1,e.roleDialog.account=null,i()},h=()=>{e.accountDialog.visible=!1,i()},m=async()=>{try{await ee.confirm("\u786E\u5B9A\u5220\u9664\u8BE5\u8D26\u53F7?","\u63D0\u793A",{confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88",type:"warning"}),await v.del.request({id:e.chooseId}),R.success("\u5220\u9664\u6210\u529F"),e.chooseData=null,e.chooseId=null,i()}catch(t){}};return E(F({},B(e)),{enums:le,search:i,choose:o,showResources:s,showRoles:w,changeStatus:C,handlePageChange:r,roleEdit:g,editAccount:f,cancel:d,valChange:h,deleteAccount:m})}}),Le="";const fe={class:"role-list"},be=c("\u6DFB\u52A0"),he=c("\u7F16\u8F91"),ve=c("\u89D2\u8272\u5206\u914D"),ye=c("\u5220\u9664"),_e={style:{float:"right"}},we=l("i",null,null,-1),Ce=c("\u6B63\u5E38"),De=c("\u7981\u7528"),ke=c("\u89D2\u8272"),$e=c("\u83DC\u5355&\u6743\u9650"),Re=c("\u7981\u7528"),qe=c("\u542F\u7528"),Ve={class:"custom-tree-node"},ze={key:0},Fe={key:1,style:{color:"#67c23a"}};function Ee(e,o,i,s,w,C){const r=u("el-button"),g=u("el-input"),f=u("el-radio"),d=u("el-table-column"),h=u("el-tag"),m=u("el-link"),t=u("el-table"),p=u("el-pagination"),b=u("el-row"),k=u("el-card"),S=u("el-dialog"),G=u("el-tree"),Q=u("role-edit"),H=u("account-edit"),$=oe("auth");return y(),_("div",fe,[l(k,null,{default:n(()=>[V(l(r,{type:"primary",icon:"el-icon-plus",size:"mini",onClick:o[1]||(o[1]=a=>e.editAccount(!0))},{default:n(()=>[be]),_:1},512),[[$,"account:add"]]),V(l(r,{disabled:e.chooseId==null,onClick:o[2]||(o[2]=a=>e.editAccount(!1)),type:"primary",icon:"el-icon-edit",size:"mini"},{default:n(()=>[he]),_:1},8,["disabled"]),[[$,"account:update"]]),V(l(r,{disabled:e.chooseId==null,onClick:o[3]||(o[3]=a=>e.roleEdit()),type:"success",icon:"el-icon-setting",size:"mini"},{default:n(()=>[ve]),_:1},8,["disabled"]),[[$,"account:saveRoles"]]),V(l(r,{disabled:e.chooseId==null,onClick:o[4]||(o[4]=a=>e.deleteAccount()),type:"danger",icon:"el-icon-delete",size:"mini"},{default:n(()=>[ye]),_:1},8,["disabled"]),[[$,"account:del"]]),l("div",_e,[l(g,{class:"mr2",placeholder:"\u8BF7\u8F93\u5165\u8D26\u53F7\u540D",size:"small",style:{width:"300px"},modelValue:e.query.username,"onUpdate:modelValue":o[5]||(o[5]=a=>e.query.username=a),onClear:o[6]||(o[6]=a=>e.search()),clearable:""},null,8,["modelValue"]),l(r,{onClick:o[7]||(o[7]=a=>e.search()),type:"success",icon:"el-icon-search",size:"small"})]),l(t,{data:e.datas,ref:"table",onCurrentChange:e.choose,"show-overflow-tooltip":""},{default:n(()=>[l(d,{label:"\u9009\u62E9",width:"50px"},{default:n(a=>[l(f,{modelValue:e.chooseId,"onUpdate:modelValue":o[8]||(o[8]=D=>e.chooseId=D),label:a.row.id},{default:n(()=>[we]),_:2},1032,["modelValue","label"])]),_:1}),l(d,{prop:"username",label:"\u7528\u6237\u540D","min-width":"115"}),l(d,{align:"center",prop:"status",label:"\u72B6\u6001","min-width":"63"},{default:n(a=>[a.row.status==1?(y(),_(h,{key:0,type:"success",size:"mini"},{default:n(()=>[Ce]),_:1})):z("",!0),a.row.status==-1?(y(),_(h,{key:1,type:"danger",size:"mini"},{default:n(()=>[De]),_:1})):z("",!0)]),_:1}),l(d,{"min-width":"160",prop:"lastLoginTime",label:"\u6700\u540E\u767B\u5F55\u65F6\u95F4"},{default:n(a=>[c(q(e.$filters.dateFormat(a.row.lastLoginTime)),1)]),_:1}),l(d,{"min-width":"115",prop:"creator",label:"\u521B\u5EFA\u8D26\u53F7"}),l(d,{"min-width":"160",prop:"createTime",label:"\u521B\u5EFA\u65F6\u95F4"},{default:n(a=>[c(q(e.$filters.dateFormat(a.row.createTime)),1)]),_:1}),l(d,{label:"\u67E5\u770B\u66F4\u591A","min-width":"150"},{default:n(a=>[l(m,{onClick:L(D=>e.showRoles(a.row),["prevent"]),type:"success"},{default:n(()=>[ke]),_:2},1032,["onClick"]),l(m,{class:"ml5",onClick:L(D=>e.showResources(a.row),["prevent"]),type:"info"},{default:n(()=>[$e]),_:2},1032,["onClick"])]),_:1}),l(d,{label:"\u64CD\u4F5C","min-width":"200px"},{default:n(a=>[a.row.status==1?V((y(),_(r,{key:0,onClick:D=>e.changeStatus(a.row),type:"danger",icom:"el-icon-tickets",size:"mini",plain:""},{default:n(()=>[Re]),_:2},1032,["onClick"])),[[$,"account:changeStatus"]]):z("",!0),a.row.status==-1?V((y(),_(r,{key:1,type:"success",onClick:D=>e.changeStatus(a.row),size:"mini",plain:""},{default:n(()=>[qe]),_:2},1032,["onClick"])),[[$,"account:changeStatus"]]):z("",!0)]),_:1})]),_:1},8,["data","onCurrentChange"]),l(b,{style:{"margin-top":"20px"},type:"flex",justify:"end"},{default:n(()=>[l(p,{style:{"text-align":"right"},onCurrentChange:e.handlePageChange,total:e.total,layout:"prev, pager, next, total, jumper","current-page":e.query.pageNum,"onUpdate:current-page":o[9]||(o[9]=a=>e.query.pageNum=a),"page-size":e.query.pageSize},null,8,["onCurrentChange","total","current-page","page-size"])]),_:1})]),_:1}),l(S,{width:"500px",title:e.showRoleDialog.title,modelValue:e.showRoleDialog.visible,"onUpdate:modelValue":o[10]||(o[10]=a=>e.showRoleDialog.visible=a)},{default:n(()=>[l(t,{border:"",data:e.showRoleDialog.accountRoles},{default:n(()=>[l(d,{property:"name",label:"\u89D2\u8272\u540D",width:"125"}),l(d,{property:"creator",label:"\u5206\u914D\u8D26\u53F7",width:"125"}),l(d,{property:"createTime",label:"\u5206\u914D\u65F6\u95F4"},{default:n(a=>[c(q(e.$filters.dateFormat(a.row.createTime)),1)]),_:1})]),_:1},8,["data"])]),_:1},8,["title","modelValue"]),l(S,{title:e.showResourceDialog.title,modelValue:e.showResourceDialog.visible,"onUpdate:modelValue":o[11]||(o[11]=a=>e.showResourceDialog.visible=a),width:"400px"},{default:n(()=>[l(G,{style:{height:"50vh",overflow:"auto"},data:e.showResourceDialog.resources,"node-key":"id",props:e.showResourceDialog.defaultProps,"expand-on-click-node":!0},{default:n(({node:a,data:D})=>[l("span",Ve,[D.type==e.enums.ResourceTypeEnum.MENU.value?(y(),_("span",ze,q(a.label),1)):z("",!0),D.type==e.enums.ResourceTypeEnum.PERMISSION.value?(y(),_("span",Fe,q(a.label),1)):z("",!0)])]),_:1},8,["data","props"])]),_:1},8,["title","modelValue"]),l(Q,{visible:e.roleDialog.visible,"onUpdate:visible":o[12]||(o[12]=a=>e.roleDialog.visible=a),account:e.roleDialog.account,onCancel:o[13]||(o[13]=a=>e.cancel())},null,8,["visible","account"]),l(H,{visible:e.accountDialog.visible,"onUpdate:visible":o[14]||(o[14]=a=>e.accountDialog.visible=a),account:e.accountDialog.data,"onUpdate:account":o[15]||(o[15]=a=>e.accountDialog.data=a),onValChange:o[16]||(o[16]=a=>e.valChange())},null,8,["visible","account"])])}M.render=Ee;export default M;