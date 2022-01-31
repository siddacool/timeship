import{v as re,n as oe,s as ie,c as le,a as k,b as j,d as M,t as c,m as I,e as se,f as ae,i as a,g as u,h as S,j as l,k as ce,S as f,l as V,M as D,o as R,p as T,q as E,V as U,r as de,u as ue}from"./vendor.3a2625a8.js";const ve=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}};ve();function _e(e={}){const{immediate:n=!1,onNeedRefresh:t,onOfflineReady:o,onRegistered:i,onRegisterError:r}=e;let s,v;const $=async(d=!0)=>{d&&(s==null||s.addEventListener("controlling",h=>{h.isUpdate&&window.location.reload()})),v&&v.waiting&&await oe(v.waiting,{type:"SKIP_WAITING"})};if("serviceWorker"in navigator){s=new re("/sw.js",{scope:"/",type:"classic"}),s.addEventListener("activated",d=>{d.isUpdate||o==null||o()});{const d=()=>{t==null||t()};s.addEventListener("waiting",d),s.addEventListener("externalwaiting",d)}s.register({immediate:n}).then(d=>{v=d,i==null||i(d)}).catch(d=>{r==null||r(d)})}return $}const me="_App_1j6j7_1";var $e={App:me};const he="_AddModal_1k3sj_1",fe="_screen_1k3sj_4",ge="_dialog_1k3sj_15",we="_Search_1k3sj_32",ye="_SearchIcon_1k3sj_64",Ne="_Control_1k3sj_80",Ce="_Order_1k3sj_87",ke="_svgHolder_1k3sj_96",pe="_arrowsGroup_1k3sj_100";var g={AddModal:he,screen:fe,dialog:ge,Search:we,SearchIcon:ye,Control:Ne,Order:Ce,svgHolder:ke,arrowsGroup:pe},L={"elevation-1":"_elevation-1_18xyv_3","elevation-2":"_elevation-2_18xyv_9","elevation-3":"_elevation-3_18xyv_15","elevation-4":"_elevation-4_18xyv_21","elevation-5":"_elevation-5_18xyv_27","elevation-6":"_elevation-6_18xyv_33","elevation-7":"_elevation-7_18xyv_39","elevation-8":"_elevation-8_18xyv_45","elevation-9":"_elevation-9_18xyv_51","elevation-10":"_elevation-10_18xyv_57","elevation-11":"_elevation-11_18xyv_63","elevation-12":"_elevation-12_18xyv_69","elevation-13":"_elevation-13_18xyv_75","elevation-14":"_elevation-14_18xyv_81","elevation-15":"_elevation-15_18xyv_87","elevation-16":"_elevation-16_18xyv_93","elevation-17":"_elevation-17_18xyv_99","elevation-18":"_elevation-18_18xyv_105","elevation-19":"_elevation-19_18xyv_111","elevation-20":"_elevation-20_18xyv_117","elevation-21":"_elevation-21_18xyv_123","elevation-22":"_elevation-22_18xyv_129","elevation-23":"_elevation-23_18xyv_135","elevation-24":"_elevation-24_18xyv_141"};const xe=["January","February","March","April","May","June","July","August","September","October","November","December"],G=(e,n)=>{const[t="",o=""]=`${e.toLocaleString("en-US",{timeZone:n})}`.split(", ")||[],[i="1",r="1",s=""]=t.split("/")||[],v=o.includes("PM")?"PM":"AM",[$="",d="",h=""]=o.replace(" PM","").replace(" AM","").split(":")||[];return{month:i,day:r,year:s,am:v,hour:$,minute:d,second:h}},Se=()=>{const e=new Date;return new Date(Date.UTC(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate(),e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds()))},Te=(e,n)=>{const{hour:t,minute:o,am:i}=G(e,n);return`${t}:${o} ${i}`},Le=(e,n)=>{const{month:t="1",day:o}=G(e,n),i=Number(t)-1,r=xe[i];return`${o}, ${r}`};ie("timeship-store-1");const W=le("preview-list",[]),[_,H]=k({data:[],filters:{search:"",sortBy:"",sortOrder:"ASC"}}),Ae=async()=>{const n=await(await fetch("./data.json")).json()||[];H("data",()=>[...n])},O=(e="")=>{H("filters",n=>Object.assign({},{...n,search:e}))},be=(e="")=>{let n=e,t="ASC";_.filters.sortBy===e&&(_.filters.sortOrder==="ASC"?(n=e,t="DSC"):(n="",t="ASC")),H("filters",o=>Object.assign({},{...o,sortBy:n,sortOrder:t}))},Me={data:W.get()},[N,De]=k(Me),J=(e=[])=>{De("data",()=>[...e]),W.set(()=>e)},Oe={data:[],active:!1},[C,A]=k(Oe),Be=()=>{A("data",()=>[...N.data])},z=()=>{A("active",e=>!e)},K=(e="",n="up")=>{A("data",t=>{const o=t.findIndex(v=>v._id===e),i=t.length;if(!i)return[...t];if(o===0&&n==="up")return[...t];if(o===i-1&&n==="down")return[...t];const r=n==="up"?o-1:o+1,s=t[o];return t.splice(o,1),t.splice(r,0,s),[...t]})},Pe=(e="")=>{A("data",n=>[...n.filter(o=>o._id!==e)||[]])},je=()=>{J(C.data),z()},Ie=()=>{A("data",()=>[]),z()},Re={data:""},[Z,Ee]=k(Re),Ue=()=>{const e=Se();Ee("data",()=>e)},[Y,He]=j(!1),B=()=>{He(!Y())},[ze,Fe]=k({active:!1}),b=()=>{Fe("active",e=>!e)},[p,P]=k({data:[]}),Q=()=>{P("data",()=>[...N.data.map(e=>e._id)])},qe=(e="")=>{P("data",n=>{if(n.includes(e)){const t=n.indexOf(e);t>-1&&n.splice(t,1)}else n.push(e);return[...n]})},Ve=()=>{const e=_.data.filter(n=>{if(p.data.includes(n._id))return n})||[];J(e),P("data",()=>[])},Ge=M(()=>{const e=_.filters.search.toLocaleLowerCase().trim();let t=_.data.filter(o=>{if(e){if(o.countryName.toLocaleLowerCase().trim().includes(e)||o.name.toLocaleLowerCase().trim().includes(e))return o}else return o})||[];if(_.filters.sortBy){if(_.filters.sortBy==="Name")t=t.sort((o,i)=>o.name.localeCompare(i.name)),_.filters.sortOrder==="DSC"&&(t=t.reverse());else if(_.filters.sortBy==="CountryName")t=t.sort((o,i)=>o.countryName.localeCompare(i.countryName)),_.filters.sortOrder==="DSC"&&(t=t.reverse());else if(_.filters.sortBy==="CountryCode")t=t.sort((o,i)=>o.countryName.localeCompare(i.countryName)),_.filters.sortOrder==="DSC"&&(t=t.reverse());else if(_.filters.sortBy==="selected"){const o=t.filter(i=>{if(p.data.includes(i._id))return i})||[];if(o&&o.length){const i=t.filter(r=>{if(!p.data.includes(r._id))return r})||[];t=[...o,...i],_.filters.sortOrder==="DSC"&&(t=t.reverse())}}}return t}),We=c("<button></button>"),y=e=>{const n=I({color:"default",rounded:!1,sqaure:!1,elevation:0,class:"",outline:!1,iconPrefix:!1,iconPostfix:!1},e),[t,o]=se(n,["children","color","sqaure","rounded","elevation","class","outline","iconPrefix","iconPostfix"]);return(()=>{const i=We.cloneNode(!0);return ae(i,o,!1,!0),a(i,()=>t.children),u(()=>i.className=`ui-button
        ${t.elevation?L[`elevation-${t.elevation}`]:""}
        ${t.color!=="default"?`ui-button__${t.color}`:""}
        ${t.rounded?"ui-button__rounded":""}
        ${t.sqaure?"ui-button__sqaure":""}
        ${t.outline?"ui-button__outline":""}
        ${t.iconPrefix?"ui-button__iconPrefix":""}
        ${t.iconPostfix?"ui-button__iconPostfix":""}
        ${t.class}
      `),i})()},Je=c('<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>'),Ke=c('<div><div><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></div><input type="search" placeholder="Search"></div>'),[F,X]=j(""),Ze=e=>{O(e.target.value),X(`${e.target.value}`)},Ye=()=>{X(""),O("")},Qe=()=>(()=>{const e=Ke.cloneNode(!0),n=e.firstChild,t=n.nextSibling;return t.$$input=Ze,a(e,l(f,{get when(){return ce(()=>!!F(),!0)()&&F().trim()!==""},get children(){return l(y,{rounded:!0,onClick:Ye,get children(){return Je.cloneNode(!0)}})}}),null),u(o=>{const i=g.Search,r=g.SearchIcon,s=F();return i!==o._v$&&(e.className=o._v$=i),r!==o._v$2&&(n.className=o._v$2=r),s!==o._v$3&&(t.value=o._v$3=s),o},{_v$:void 0,_v$2:void 0,_v$3:void 0}),e})();S(["input"]);const Xe="_AcceptDualButton_18rh2_1";var q={AcceptDualButton:Xe};const et=c("<div></div>"),ee=e=>(()=>{const n=et.cloneNode(!0);return a(n,l(y,{get class(){return q.accept},get onClick(){return e.actionAccept},color:"primary",get children(){return l(f,{get when(){return e.acceptContent},get fallback(){return"Accept"},get children(){return e.acceptContent}})}}),null),a(n,l(y,{get class(){return q.cancel},get onClick(){return e.actionCancel},color:"white",outline:!0,get children(){return l(f,{get when(){return e.cancelContent},get fallback(){return"Cancel"},get children(){return e.cancelContent}})}}),null),u(()=>n.className=q.AcceptDualButton),n})(),tt=c("<div></div>"),nt=()=>{Ve(),O(""),b()},rt=()=>{P("data",()=>[]),O(""),b()},ot=()=>(()=>{const e=tt.cloneNode(!0);return a(e,l(ee,{actionAccept:nt,actionCancel:rt})),u(()=>e.className=g.Control),e})(),it=c('<div><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7l4-4m0 0l4 4m-4-4v18"></path></svg><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 17l-4 4m0 0l-4-4m4 4V3"></path></svg></div>'),lt=c('<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7l4-4m0 0l4 4m-4-4v18"></path></svg>'),st=c('<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 17l-4 4m0 0l-4-4m4 4V3"></path></svg>'),at=c("<div><div></div><div>Selected (<!>)</div></div>"),ct=()=>(()=>{const e=it.cloneNode(!0);return u(()=>e.className=g.arrowsGroup),e})(),dt=()=>l(f,{get when(){return p.data.length},get children(){const e=at.cloneNode(!0),n=e.firstChild,t=n.nextSibling,o=t.firstChild,i=o.nextSibling;return i.nextSibling,e.$$click=()=>be("selected"),a(n,l(V,{get fallback(){return l(ct,{})},get children(){return[l(D,{get when(){return _.filters.sortBy==="selected"&&_.filters.sortOrder==="ASC"},get children(){return lt.cloneNode(!0)}}),l(D,{get when(){return _.filters.sortBy==="selected"&&_.filters.sortOrder==="DSC"},get children(){return st.cloneNode(!0)}})]}})),a(t,()=>p.data.length,i),u(r=>{const s=g.Order,v=g.svgHolder;return s!==r._v$&&(e.className=r._v$=s),v!==r._v$2&&(n.className=r._v$2=v),r},{_v$:void 0,_v$2:void 0}),e}});S(["click"]);const ut="_TimeSelectableList_1wnt9_1",vt="_ListItem_1wnt9_8",_t="_Name_1wnt9_26",mt="_Selected_1wnt9_32";var x={TimeSelectableList:ut,ListItem:vt,Name:_t,Selected:mt};const $t=c('<article><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></article>'),ht=e=>l(f,{get when(){return e.isSelected},get children(){const n=$t.cloneNode(!0);return u(()=>n.className=x.Selected),n}}),ft=c("<div></div>"),gt=c('<div role="listitem"><div><div></div></div></div>'),wt=e=>{const n=M(()=>!!p.data.filter(t=>t===e.item._id).length);return(()=>{const t=gt.cloneNode(!0),o=t.firstChild,i=o.firstChild;return t.$$click=()=>qe(e.item._id),a(t,l(ht,{get isSelected(){return n()}}),o),a(i,()=>e.item.name),a(o,l(f,{get when(){return!e.item.noCities},get children(){const r=ft.cloneNode(!0);return a(r,()=>e.item.countryName),u(()=>r.className=x.CountryName),r}}),null),u(r=>{const s=x.ListItem,v=e.style,$=e.tabIndex,d=n(),h=x.InternalContainer,w=x.Name;return s!==r._v$&&(t.className=r._v$=s),r._v$2=R(t,v,r._v$2),$!==r._v$3&&T(t,"tabindex",r._v$3=$),d!==r._v$4&&T(t,"data-isselected",r._v$4=d),h!==r._v$5&&(o.className=r._v$5=h),w!==r._v$6&&(i.className=r._v$6=w),r},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0}),t})()};S(["click"]);const yt=c("<div></div>"),Nt=[];j(Nt);const Ct=()=>{E(()=>{Ae()});let e;return(()=>{const n=yt.cloneNode(!0),t=e;return typeof t=="function"?t(n):e=n,n.style.setProperty("overflow","auto"),a(n,l(U,{get items(){return Ge()},scrollTarget:e,itemSize:{height:60},children:wt})),u(()=>n.className=x.TimeSelectableList),n})()},kt=c("<div><div></div><div></div></div>"),pt=()=>(()=>{const e=kt.cloneNode(!0),n=e.firstChild,t=n.nextSibling;return n.$$click=()=>b(),a(t,l(Qe,{}),null),a(t,l(dt,{}),null),a(t,l(Ct,{}),null),a(t,l(ot,{}),null),u(o=>{const i=g.AddModal,r=g.screen,s=`${g.dialog} ${L["elevation-3"]}`;return i!==o._v$&&(e.className=o._v$=i),r!==o._v$2&&(n.className=o._v$2=r),s!==o._v$3&&(t.className=o._v$3=s),o},{_v$:void 0,_v$2:void 0,_v$3:void 0}),e})();S(["click"]);const xt="_MenuButton_wrbou_1";var St={MenuButton:xt};const Tt="_DropDown_gy5cm_1",Lt="_screen_gy5cm_34";var te={DropDown:Tt,screen:Lt};const At=c("<div><ul><li>Add city</li><li>Reorder</li></ul></div>"),bt=c("<div></div>"),Mt=()=>{b(),Q(),B()},Dt=()=>{C.active||!N.data.length||(B(),z())},Ot=()=>l(f,{get when(){return Y()},get children(){return[(()=>{const e=At.cloneNode(!0),n=e.firstChild,t=n.firstChild,o=t.nextSibling;return t.$$click=Mt,o.$$click=Dt,u(i=>{const r=`${te.DropDown} ${L["elevation-4"]}`,s=C.active||!N.data.length;return r!==i._v$&&(e.className=i._v$=r),s!==i._v$2&&T(o,"data-disable",i._v$2=s),i},{_v$:void 0,_v$2:void 0}),e})(),(()=>{const e=bt.cloneNode(!0);return de(e,"click",B,!0),u(()=>e.className=te.screen),e})()]}});S(["click"]);const Bt=c('<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7"></path></svg>'),Pt=()=>[l(y,{get class(){return St.MenuButton},color:"white",elevation:3,onClick:B,rounded:!0,get children(){return Bt.cloneNode(!0)}}),l(Ot,{})],jt="_NoEntriesPlaceholder_3a364_1";var It={NoEntriesPlaceholder:jt};const Rt=c('<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>'),Et=c('<div><h1>Timeship</h1><img src="android-chrome-192x192.png" alt="timeship logo"><p>A world clock at your fingertips. <br> Timeship displays time from cities all around the globe.</p></div>'),Ut=()=>{b(),Q()},Ht=()=>(()=>{const e=Et.cloneNode(!0);return e.firstChild.nextSibling.nextSibling,a(e,l(y,{elevation:3,onClick:Ut,color:"white-primary",iconPrefix:!0,get children(){return[Rt.cloneNode(!0),"Click here to add a city"]}}),null),u(()=>e.className=It.NoEntriesPlaceholder),e})(),zt="_TimeCard_494t1_1",Ft="_InternalContainer_494t1_5",qt="_DayTime_494t1_16",Vt="_NameHolder_494t1_21",Gt="_Name_494t1_21",Wt="_CountryName_494t1_30",Jt="_Time_494t1_1",Kt="_Day_494t1_16",Zt="_TimeCardOrder_494t1_45",Yt="_ReorderArrows_494t1_53",Qt="_RemoveButton_494t1_67";var m={TimeCard:zt,InternalContainer:Ft,DayTime:qt,NameHolder:Vt,Name:Gt,CountryName:Wt,Time:Jt,Day:Kt,TimeCardOrder:Zt,ReorderArrows:Yt,RemoveButton:Qt};const Xt=c("<div><div></div><div></div></div>"),ne=e=>{const n=M(()=>Te(Z.data,e.timezone)),t=M(()=>Le(Z.data,e.timezone));return(()=>{const o=Xt.cloneNode(!0),i=o.firstChild,r=i.nextSibling;return a(i,n),a(r,t),u(s=>{const v=m.DayTime,$=m.Time,d=m.Day;return v!==s._v$&&(o.className=s._v$=v),$!==s._v$2&&(i.className=s._v$2=$),d!==s._v$3&&(r.className=s._v$3=d),s},{_v$:void 0,_v$2:void 0,_v$3:void 0}),o})()},en=c('<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7l4-4m0 0l4 4m-4-4v18"></path></svg>'),tn=c('<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 17l-4 4m0 0l-4-4m4 4V3"></path></svg>'),nn=c("<div><div></div></div>"),rn=e=>{K(e,"up")},on=e=>{K(e,"down")},ln=e=>(()=>{const n=nn.cloneNode(!0),t=n.firstChild;return a(t,l(y,{onClick:()=>rn(e.id),color:"white",get children(){return en.cloneNode(!0)}}),null),a(t,l(y,{onClick:()=>on(e.id),color:"white",get children(){return tn.cloneNode(!0)}}),null),u(()=>n.className=m.ReorderArrows),n})(),sn=c('<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>'),an=e=>{Pe(e)},cn=e=>l(y,{get class(){return m.RemoveButton},onClick:()=>an(e.id),rounded:!0,get children(){return sn.cloneNode(!0)}}),dn=c("<div></div>"),un=c('<div role="listitem"><article><div><div></div></div></article></div>'),vn=e=>(()=>{const n=un.cloneNode(!0),t=n.firstChild,o=t.firstChild,i=o.firstChild;return a(t,l(ln,{get id(){return e.item._id}}),o),a(t,l(cn,{get id(){return e.item._id}}),o),a(i,()=>e.item.name),a(o,l(f,{get when(){return!e.item.noCities},get children(){const r=dn.cloneNode(!0);return a(r,()=>e.item.countryName),u(()=>r.className=m.CountryName),r}}),null),a(t,l(ne,I(()=>e.item)),null),u(r=>{const s=`${m.TimeCard} ${m.TimeCardOrder}`,v=e.style,$=e.tabIndex,d=`${m.InternalContainer} ${L["elevation-2"]}`,h=m.NameHolder,w=m.Name;return s!==r._v$&&(n.className=r._v$=s),r._v$2=R(n,v,r._v$2),$!==r._v$3&&T(n,"tabindex",r._v$3=$),d!==r._v$4&&(t.className=r._v$4=d),h!==r._v$5&&(o.className=r._v$5=h),w!==r._v$6&&(i.className=r._v$6=w),r},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0}),n})(),_n="_OrderList_1isde_1";var mn={OrderList:_n};const $n=c("<div></div>"),hn=()=>{let e;return E(()=>{Be()}),(()=>{const n=$n.cloneNode(!0),t=e;return typeof t=="function"?t(n):e=n,n.style.setProperty("overflow","auto"),a(n,l(U,{get items(){return C.data},scrollTarget:e,itemSize:{height:120},children:vn})),u(()=>n.className=mn.OrderList),n})()},fn=c("<div></div>"),gn=c('<div role="listitem"><div><div><div></div></div></div></div>'),wn=e=>(()=>{const n=gn.cloneNode(!0),t=n.firstChild,o=t.firstChild,i=o.firstChild;return a(i,()=>e.item.name),a(o,l(f,{get when(){return!e.item.noCities},get children(){const r=fn.cloneNode(!0);return a(r,()=>e.item.countryName),u(()=>r.className=m.CountryName),r}}),null),a(t,l(ne,I(()=>e.item)),null),u(r=>{const s=`${m.TimeCard}`,v=e.style,$=e.tabIndex,d=`${m.InternalContainer} ${L["elevation-2"]}`,h=m.NameHolder,w=m.Name;return s!==r._v$&&(n.className=r._v$=s),r._v$2=R(n,v,r._v$2),$!==r._v$3&&T(n,"tabindex",r._v$3=$),d!==r._v$4&&(t.className=r._v$4=d),h!==r._v$5&&(o.className=r._v$5=h),w!==r._v$6&&(i.className=r._v$6=w),r},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0}),n})(),yn="_PreviewList_1a1pf_1";var Nn={PreviewList:yn};const Cn=c("<div></div>"),kn=()=>{let e;return(()=>{const n=Cn.cloneNode(!0),t=e;return typeof t=="function"?t(n):e=n,n.style.setProperty("overflow","auto"),a(n,l(U,{get items(){return N.data},scrollTarget:e,itemSize:{height:120},children:wn})),u(()=>n.className=Nn.PreviewList),n})()},pn="_ReorderActions_vjwi6_1";var xn={ReorderActions:pn};const Sn=c("<div></div>"),Tn=()=>(()=>{const e=Sn.cloneNode(!0);return a(e,l(ee,{actionAccept:()=>je(),actionCancel:()=>Ie()})),u(()=>e.className=xn.ReorderActions),e})(),Ln=c("<div></div>");function An(){function e(){Ue(),requestAnimationFrame(e)}requestAnimationFrame(e)}const bn=()=>(E(()=>{An()}),(()=>{const e=Ln.cloneNode(!0);return a(e,l(f,{get when(){return!C.active},get children(){return l(Pt,{})}}),null),a(e,l(V,{get fallback(){return l(Ht,{})},get children(){return[l(D,{get when(){return N.data.length&&C.active},get children(){return[l(hn,{}),l(Tn,{})]}}),l(D,{get when(){return N.data.length&&!C.active},get children(){return l(kn,{})}})]}}),null),a(e,l(f,{get when(){return ze.active},get children(){return l(pt,{})}}),null),u(()=>e.className=$e.App),e})());"serviceWorker"in navigator&&_e({onNeedRefresh(){},onOfflineReady(){}});ue(()=>l(bn,{}),document.getElementById("root"));