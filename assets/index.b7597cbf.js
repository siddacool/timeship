import{v as xe,n as Se,s as Te,c as X,a as k,b as R,d as x,t as c,m as L,e as ee,f as te,i as a,g as m,h as S,j as i,k as ne,S as N,M as D,l as re,o as E,p as B,q as U,V as z,r as oe,u as Le}from"./vendor.3a2625a8.js";const Be=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=t(o);fetch(o.href,s)}};Be();function Ae(e={}){const{immediate:n=!1,onNeedRefresh:t,onOfflineReady:r,onRegistered:o,onRegisterError:s}=e;let l,u;const d=async(v=!0)=>{v&&(l==null||l.addEventListener("controlling",_=>{_.isUpdate&&window.location.reload()})),u&&u.waiting&&await Se(u.waiting,{type:"SKIP_WAITING"})};if("serviceWorker"in navigator){l=new xe("/sw.js",{scope:"/",type:"classic"}),l.addEventListener("activated",v=>{v.isUpdate||r==null||r()});{const v=()=>{t==null||t()};l.addEventListener("waiting",v),l.addEventListener("externalwaiting",v)}l.register({immediate:n}).then(v=>{u=v,o==null||o(v)}).catch(v=>{s==null||s(v)})}return d}const be="_App_uvle0_1",Me="_blur_uvle0_5";var le={App:be,blur:Me};const Oe="_AddModal_1xoov_1",De="_screen_1xoov_4",Pe="_dialog_1xoov_15",Ie="_Search_1xoov_32",je="_SearchIcon_1xoov_67",Re="_Control_1xoov_83",Ee="_Order_1xoov_90",Ue="_OrderPill_1xoov_99",ze="_OrderPillSelected_1xoov_125",He="_svgHolder_1xoov_129",qe="_arrowsGroup_1xoov_133";var g={AddModal:Oe,screen:De,dialog:Pe,Search:Ie,SearchIcon:je,Control:Re,Order:Ee,OrderPill:Ue,OrderPillSelected:ze,svgHolder:He,arrowsGroup:qe},A={"elevation-1":"_elevation-1_18xyv_3","elevation-2":"_elevation-2_18xyv_9","elevation-3":"_elevation-3_18xyv_15","elevation-4":"_elevation-4_18xyv_21","elevation-5":"_elevation-5_18xyv_27","elevation-6":"_elevation-6_18xyv_33","elevation-7":"_elevation-7_18xyv_39","elevation-8":"_elevation-8_18xyv_45","elevation-9":"_elevation-9_18xyv_51","elevation-10":"_elevation-10_18xyv_57","elevation-11":"_elevation-11_18xyv_63","elevation-12":"_elevation-12_18xyv_69","elevation-13":"_elevation-13_18xyv_75","elevation-14":"_elevation-14_18xyv_81","elevation-15":"_elevation-15_18xyv_87","elevation-16":"_elevation-16_18xyv_93","elevation-17":"_elevation-17_18xyv_99","elevation-18":"_elevation-18_18xyv_105","elevation-19":"_elevation-19_18xyv_111","elevation-20":"_elevation-20_18xyv_117","elevation-21":"_elevation-21_18xyv_123","elevation-22":"_elevation-22_18xyv_129","elevation-23":"_elevation-23_18xyv_135","elevation-24":"_elevation-24_18xyv_141"};const We=["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"],ie=(e,n)=>{const[t="",r=""]=`${e.toLocaleString("en-US",{timeZone:n})}`.split(", ")||[],o=e.toLocaleString("en-US",{timeZone:n,weekday:"long"})||"",[s="1",l="1"]=t.split("/")||[],u=r.includes("PM")?"PM":"AM",[d="",v=""]=r.replace(" PM","").replace(" AM","").split(":")||[],_=u==="PM"?parseInt(d,10)+12:parseInt(d,10);let h="night";return _>=20&&_<=24?h="night":_>=1&&_<=4?h="earlyMorning":_>=5&&_<=6?h="sunrise":_>=7&&_<=11?h="morning":_>=12&&_<=16?h="noon":_>=16&&_<=18?h="sunset":_>=18&&_<=19&&(h="lateEvening"),{month:s,day:l,am:u,hour:d,minute:v,hour24:_,timeOfDay:h,weekday:o}},Ve=()=>{const e=new Date;return new Date(Date.UTC(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate(),e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds()))},Fe=({am:e,hour:n,minute:t})=>`${n}:${t} ${e}`,Ge=({month:e="1",day:n,weekday:t=""})=>{const r=Number(e)-1,o=We[r];return`${t}, ${o} ${n}`};Te("timeship-store-1");const se=X("preview-list",[]),ae=X("dark-theme",!1),ce=document.querySelector("body"),de=document.querySelector('meta[name="theme-color"]'),[$,H]=k({data:[],filters:{search:"",sortBy:"",sortOrder:"ASC"}}),Je=async()=>{if($.data.length)return;const n=await(await fetch("./data.json")).json()||[];H("data",()=>[...n])},P=(e="")=>{H("filters",n=>Object.assign({},{...n,search:e}))},Ze=(e="")=>{let n=e,t="ASC";$.filters.sortBy===e&&($.filters.sortOrder==="ASC"?(n=e,t="DSC"):(n="",t="ASC")),H("filters",r=>Object.assign({},{...r,sortBy:n,sortOrder:t}))},Ke={data:se.get()},[y,Ye]=k(Ke),ue=(e=[])=>{Ye("data",()=>[...e]),se.set(()=>e)},Qe={data:[],active:!1},[p,b]=k(Qe),Xe=()=>{b("data",()=>[...y.data])},I=()=>{b("active",e=>!e)},ve=(e="",n="up")=>{b("data",t=>{const r=t.findIndex(u=>u._id===e),o=t.length;if(!o)return[...t];if(r===0&&n==="up")return[...t];if(r===o-1&&n==="down")return[...t];const s=n==="up"?r-1:r+1,l=t[r];return t.splice(r,1),t.splice(s,0,l),[...t]})},et=(e="")=>{b("data",n=>[...n.filter(r=>r._id!==e)||[]])},_e=()=>{ue(p.data),I()},tt=()=>{b("data",()=>[]),I()},nt={data:""},[me,rt]=k(nt),ot=()=>{const e=Ve();rt("data",()=>e)},[$e,lt]=R(!1),q=()=>{lt(!$e())},[he,it]=k({active:!1}),M=()=>{it("active",e=>!e)},[O,j]=k({data:[]}),fe=()=>{j("data",()=>[...y.data.map(e=>e._id)])},st=(e="")=>{j("data",n=>{if(n.includes(e)){const t=n.indexOf(e);t>-1&&n.splice(t,1)}else n.push(e);return[...n]})},at=()=>{const e=$.data.filter(r=>{if(O.data.includes(r._id))return r})||[],n=y.data.filter(r=>e.map(o=>o._id).includes(r._id))||[],t=e.filter(r=>!y.data.map(o=>o._id).includes(r._id))||[];ue([...n,...t]),j("data",()=>[])},ct=x(()=>{const e=$.filters.search.toLocaleLowerCase().trim();let t=$.data.filter(r=>{if(e){if(r.countryName.toLocaleLowerCase().trim().includes(e)||r.name.toLocaleLowerCase().trim().includes(e))return r}else return r})||[];if($.filters.sortBy){if($.filters.sortBy==="Name")t=t.sort((r,o)=>r.name.localeCompare(o.name)),$.filters.sortOrder==="DSC"&&(t=t.reverse());else if($.filters.sortBy==="CountryName")t=t.sort((r,o)=>r.countryName.localeCompare(o.countryName)),$.filters.sortOrder==="DSC"&&(t=t.reverse());else if($.filters.sortBy==="CountryCode")t=t.sort((r,o)=>r.countryName.localeCompare(o.countryName)),$.filters.sortOrder==="DSC"&&(t=t.reverse());else if($.filters.sortBy==="selected"){const r=t.filter(o=>{if(O.data.includes(o._id))return o})||[];if(r&&r.length){const o=t.filter(s=>{if(!O.data.includes(s._id))return s})||[];t=[...r,...o],$.filters.sortOrder==="DSC"&&(t=t.reverse())}}}return t}),[W,dt]=k({active:ae.get()}),ut=()=>{const e=!W.active;ae.set(()=>e),dt("active",()=>e),e?(ce?.classList.add("dark"),de.content="#0a214d"):(ce?.classList.remove("dark"),de.content="#e9e9e9")},vt=c("<button></button>"),w=e=>{const n=L({color:"default",rounded:!1,sqaure:!1,elevation:0,class:"",outline:!1,iconPrefix:!1,iconPostfix:!1},e),[t,r]=ee(n,["children","color","sqaure","rounded","elevation","class","outline","iconPrefix","iconPostfix"]);return(()=>{const o=vt.cloneNode(!0);return te(o,r,!1,!0),a(o,()=>t.children),m(()=>o.className=`ui-button
        ${t.elevation?A[`elevation-${t.elevation}`]:""}
        ${t.color!=="default"?`ui-button__${t.color}`:""}
        ${t.rounded?"ui-button__rounded":""}
        ${t.sqaure?"ui-button__sqaure":""}
        ${t.outline?"ui-button__outline":""}
        ${t.iconPrefix?"ui-button__iconPrefix":""}
        ${t.iconPostfix?"ui-button__iconPostfix":""}
        ${t.class}
      `),o})()},_t=c('<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>'),mt=c('<div><div><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></div><input type="search" placeholder="Search"></div>'),[V,ge]=R(""),$t=e=>{P(e.target.value),ge(`${e.target.value}`)},ht=()=>{ge(""),P("")},ft=()=>(()=>{const e=mt.cloneNode(!0),n=e.firstChild,t=n.nextSibling;return t.$$input=$t,a(e,i(N,{get when(){return ne(()=>!!V(),!0)()&&V().trim()!==""},get children(){return i(w,{rounded:!0,onClick:ht,get children(){return _t.cloneNode(!0)}})}}),null),m(r=>{const o=g.Search,s=g.SearchIcon,l=V();return o!==r._v$&&(e.className=r._v$=o),s!==r._v$2&&(n.className=r._v$2=s),l!==r._v$3&&(t.value=r._v$3=l),r},{_v$:void 0,_v$2:void 0,_v$3:void 0}),e})();S(["input"]);const gt="_AcceptDualButton_18rh2_1";var F={AcceptDualButton:gt};const wt=c("<div></div>"),we=e=>(()=>{const n=wt.cloneNode(!0);return a(n,i(w,{get class(){return F.accept},get onClick(){return e.actionAccept},color:"primary",get children(){return i(N,{get when(){return e.acceptContent},get fallback(){return"Accept"},get children(){return e.acceptContent}})}}),null),a(n,i(w,{get class(){return F.cancel},get onClick(){return e.actionCancel},color:"white",outline:!0,get children(){return i(N,{get when(){return e.cancelContent},get fallback(){return"Cancel"},get children(){return e.cancelContent}})}}),null),m(()=>n.className=F.AcceptDualButton),n})(),yt=c("<div></div>"),Ct=()=>{at(),P(""),M()},Nt=()=>{j("data",()=>[]),P(""),M()},kt=()=>(()=>{const e=yt.cloneNode(!0);return a(e,i(we,{actionAccept:Ct,actionCancel:Nt})),m(()=>e.className=g.Control),e})(),pt=c('<div><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7l4-4m0 0l4 4m-4-4v18"></path></svg><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 17l-4 4m0 0l-4-4m4 4V3"></path></svg></div>'),xt=c('<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7l4-4m0 0l4 4m-4-4v18"></path></svg>'),St=c('<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 17l-4 4m0 0l-4-4m4 4V3"></path></svg>'),Tt=c("<div><div></div><div></div></div>"),Lt=()=>(()=>{const e=pt.cloneNode(!0);return m(()=>e.className=g.arrowsGroup),e})(),G=e=>{const[n,t]=ee(e,["children","sortBy"]);return(()=>{const r=Tt.cloneNode(!0),o=r.firstChild,s=o.nextSibling;return r.$$click=()=>Ze(n.sortBy),te(r,t,!1,!0),a(o,i(re,{get fallback(){return i(Lt,{})},get children(){return[i(D,{get when(){return $.filters.sortBy===n.sortBy&&$.filters.sortOrder==="ASC"},get children(){return xt.cloneNode(!0)}}),i(D,{get when(){return $.filters.sortBy===n.sortBy&&$.filters.sortOrder==="DSC"},get children(){return St.cloneNode(!0)}})]}})),a(s,()=>n.children),m(l=>{const u=`${g.OrderPill} ${$.filters.sortBy===n.sortBy?g.OrderPillSelected:""}`,d=g.svgHolder;return u!==l._v$&&(r.className=l._v$=u),d!==l._v$2&&(o.className=l._v$2=d),l},{_v$:void 0,_v$2:void 0}),r})()};S(["click"]);const Bt=c("<div></div>"),At=()=>(()=>{const e=Bt.cloneNode(!0);return a(e,i(G,{sortBy:"selected",get children(){return["Selected (",ne(()=>O.data.length),")"]}}),null),a(e,i(G,{sortBy:"Name",children:"Name"}),null),a(e,i(G,{sortBy:"CountryName",children:"Country"}),null),m(()=>e.className=g.Order),e})(),bt="_TimeSelectableList_nx3fj_1",Mt="_ListItem_nx3fj_8",Ot="_Name_nx3fj_26",Dt="_CountryName_nx3fj_32",Pt="_Selected_nx3fj_36";var T={TimeSelectableList:bt,ListItem:Mt,Name:Ot,CountryName:Dt,Selected:Pt};const It=c('<article><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></article>'),jt=e=>i(N,{get when(){return e.isSelected},get children(){const n=It.cloneNode(!0);return m(()=>n.className=T.Selected),n}}),Rt=c('<div role="listitem"><div><div></div><div> (<!>)</div></div></div>'),Et=e=>{const n=x(()=>!!O.data.filter(t=>t===e.item._id).length);return(()=>{const t=Rt.cloneNode(!0),r=t.firstChild,o=r.firstChild,s=o.nextSibling,l=s.firstChild,u=l.nextSibling;return u.nextSibling,t.$$click=()=>st(e.item._id),a(t,i(jt,{get isSelected(){return n()}}),r),a(o,()=>e.item.name),a(s,()=>e.item.countryName,l),a(s,()=>e.item.timestamp,u),m(d=>{const v=T.ListItem,_=e.style,h=e.tabIndex,C=n(),K=T.InternalContainer,Y=T.Name,Q=T.CountryName;return v!==d._v$&&(t.className=d._v$=v),d._v$2=E(t,_,d._v$2),h!==d._v$3&&B(t,"tabindex",d._v$3=h),C!==d._v$4&&B(t,"data-isselected",d._v$4=C),K!==d._v$5&&(r.className=d._v$5=K),Y!==d._v$6&&(o.className=d._v$6=Y),Q!==d._v$7&&(s.className=d._v$7=Q),d},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0}),t})()};S(["click"]);const Ut=c("<div></div>"),zt=[];R(zt);const Ht=()=>{U(()=>{Je()});let e;return(()=>{const n=Ut.cloneNode(!0),t=e;return typeof t=="function"?t(n):e=n,n.style.setProperty("overflow","auto"),a(n,i(z,{get items(){return ct()},scrollTarget:e,itemSize:{height:60},children:Et})),m(()=>n.className=T.TimeSelectableList),n})()},qt=c("<div><div></div><div></div></div>"),Wt=()=>(()=>{const e=qt.cloneNode(!0),n=e.firstChild,t=n.nextSibling;return n.$$click=()=>M(),a(t,i(ft,{}),null),a(t,i(At,{}),null),a(t,i(Ht,{}),null),a(t,i(kt,{}),null),m(r=>{const o=g.AddModal,s=g.screen,l=`${g.dialog} ${A["elevation-6"]}`;return o!==r._v$&&(e.className=r._v$=o),s!==r._v$2&&(n.className=r._v$2=s),l!==r._v$3&&(t.className=r._v$3=l),r},{_v$:void 0,_v$2:void 0,_v$3:void 0}),e})();S(["click"]);const Vt="_Menu_zr8yt_1",Ft="_MenuButton_zr8yt_9",Gt="_AddButton_zr8yt_10";var J={Menu:Vt,MenuButton:Ft,AddButton:Gt};const Jt="_DropDown_ewmwb_1",Zt="_screen_ewmwb_42";var ye={DropDown:Jt,screen:Zt};const Kt=c('<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>'),Yt=c('<div><ul><li><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"></path></svg>Reorder (click hold)</li><li>Dark theme</li></ul></div>'),Qt=c("<div></div>"),Xt=()=>{p.active||!y.data.length||(q(),I())},en=()=>i(N,{get when(){return $e()},get children(){return[(()=>{const e=Yt.cloneNode(!0),n=e.firstChild,t=n.firstChild,r=t.nextSibling,o=r.firstChild;return t.$$click=Xt,oe(r,"click",ut,!0),a(r,i(N,{get when(){return W.active},get children(){return Kt.cloneNode(!0)}}),o),m(s=>{const l=`${ye.DropDown} ${A["elevation-4"]}`,u=p.active||!y.data.length;return l!==s._v$&&(e.className=s._v$=l),u!==s._v$2&&B(t,"data-disable",s._v$2=u),s},{_v$:void 0,_v$2:void 0}),e})(),(()=>{const e=Qt.cloneNode(!0);return oe(e,"click",q,!0),m(()=>e.className=ye.screen),e})()]}});S(["click"]);const tn=c('<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>'),nn=c('<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7"></path></svg>'),rn=c("<div></div>"),on=()=>{M(),fe()},ln=()=>[(()=>{const e=rn.cloneNode(!0);return a(e,i(w,{get class(){return J.AddButton},color:"primary",elevation:3,rounded:!0,onClick:on,get children(){return tn.cloneNode(!0)}}),null),a(e,i(w,{get class(){return J.MenuButton},color:"white",elevation:3,onClick:q,rounded:!0,get children(){return nn.cloneNode(!0)}}),null),m(()=>e.className=J.Menu),e})(),i(en,{})],sn="_NoEntriesPlaceholder_1jpyr_1";var an={NoEntriesPlaceholder:sn};const cn=c('<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>'),dn=c('<div><h1>Timeship</h1><img src="android-chrome-192x192.png" alt="timeship logo"><p>A world clock at your fingertips. <br> Timeship displays time from cities all around the globe.</p></div>'),un=()=>{M(),fe()},vn=()=>(()=>{const e=dn.cloneNode(!0);return e.firstChild.nextSibling.nextSibling,a(e,i(w,{elevation:3,onClick:un,color:"white-primary",iconPrefix:!0,get children(){return[cn.cloneNode(!0),"Click here to add a city"]}}),null),m(()=>e.className=an.NoEntriesPlaceholder),e})(),_n="_TimeCard_1f7to_1",mn="_InternalContainer_1f7to_5",$n="_DayTime_1f7to_18",hn="_NameHolder_1f7to_24",fn="_Name_1f7to_24",gn="_CountryName_1f7to_36",wn="_Time_1f7to_1",yn="_Day_1f7to_18",Cn="_TimeCardOrder_1f7to_47",Nn="_ReorderArrows_1f7to_56",kn="_RemoveButton_1f7to_71",pn="_AcceptButton_1f7to_83",xn="_BackgroundWave_1f7to_96";var f={TimeCard:_n,InternalContainer:mn,DayTime:$n,NameHolder:hn,Name:fn,CountryName:gn,Time:wn,Day:yn,TimeCardOrder:Cn,ReorderArrows:Nn,RemoveButton:kn,AcceptButton:pn,BackgroundWave:xn};const Sn=c("<div><div></div><div></div></div>"),Ce=e=>{const n=x(()=>Fe(e.d)),t=x(()=>Ge(e.d));return(()=>{const r=Sn.cloneNode(!0),o=r.firstChild,s=o.nextSibling;return a(o,n),a(s,t),m(l=>{const u=f.DayTime,d=f.Time,v=f.Day;return u!==l._v$&&(r.className=l._v$=u),d!==l._v$2&&(o.className=l._v$2=d),v!==l._v$3&&(s.className=l._v$3=v),l},{_v$:void 0,_v$2:void 0,_v$3:void 0}),r})()},Tn=c('<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7l4-4m0 0l4 4m-4-4v18"></path></svg>'),Ln=c('<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 17l-4 4m0 0l-4-4m4 4V3"></path></svg>'),Bn=c("<div><div></div></div>"),An=e=>{ve(e,"up")},bn=e=>{ve(e,"down")},Mn=e=>(()=>{const n=Bn.cloneNode(!0),t=n.firstChild;return a(t,i(w,{onClick:()=>An(e.id),color:"white",get children(){return Tn.cloneNode(!0)}}),null),a(t,i(w,{onClick:()=>bn(e.id),color:"white",get children(){return Ln.cloneNode(!0)}}),null),m(()=>n.className=f.ReorderArrows),n})(),On=c('<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>'),Dn=e=>{et(e)},Pn=e=>i(w,{get class(){return f.RemoveButton},onClick:()=>Dn(e.id),rounded:!0,get children(){return On.cloneNode(!0)}}),In=c("<div>, </div>"),Ne=e=>(()=>{const n=In.cloneNode(!0);return n.firstChild,a(n,()=>e.countryName,null),m(()=>n.className=f.CountryName),n})(),jn=c('<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>'),Rn=()=>i(w,{get class(){return f.AcceptButton},onClick:_e,rounded:!0,get children(){return jn.cloneNode(!0)}}),En=c('<div role="listitem"><article><div><div></div></div></article></div>'),Un=e=>{const n=x(()=>ie(me.data,e.item.timezone));return(()=>{const t=En.cloneNode(!0),r=t.firstChild,o=r.firstChild,s=o.firstChild;return a(r,i(Mn,{get id(){return e.item._id}}),o),a(r,i(Pn,{get id(){return e.item._id}}),o),a(r,i(Rn,{}),o),a(r,i(Ce,L({get d(){return n()}},()=>e.item)),o),a(s,()=>e.item.name),a(o,i(Ne,L(()=>e.item)),null),m(l=>{const u=`${f.TimeCard} ${f.TimeCardOrder}`,d=e.style,v=e.tabIndex,_=`${f.InternalContainer} ${A["elevation-2"]} time-of-day__${e.item.timeOfDay?e.item.timeOfDay:n().timeOfDay}`,h=f.NameHolder,C=f.Name;return u!==l._v$&&(t.className=l._v$=u),l._v$2=E(t,d,l._v$2),v!==l._v$3&&B(t,"tabindex",l._v$3=v),_!==l._v$4&&(r.className=l._v$4=_),h!==l._v$5&&(o.className=l._v$5=h),C!==l._v$6&&(s.className=l._v$6=C),l},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0}),t})()},zn="_OrderList_1isde_1";var Hn={OrderList:zn};const qn=c("<div></div>"),Wn=()=>{let e;return U(()=>{Xe()}),(()=>{const n=qn.cloneNode(!0),t=e;return typeof t=="function"?t(n):e=n,n.style.setProperty("overflow","auto"),a(n,i(z,{get items(){return p.data},scrollTarget:e,itemSize:{height:106},children:Un})),m(()=>n.className=Hn.OrderList),n})()},Vn=c("<div></div>"),Fn=()=>(()=>{const e=Vn.cloneNode(!0);return m(()=>e.className=`${f.BackgroundWave} wave-image`),e})(),Gn=c('<div role="listitem"><div><div><article></article></div></div></div>');let ke;const Jn=()=>{I()},pe=()=>{ke=setTimeout(()=>{Jn()},600)},Z=()=>{clearTimeout(ke)},Zn=e=>{const n=x(()=>ie(me.data,e.item.timezone));return(()=>{const t=Gn.cloneNode(!0),r=t.firstChild,o=r.firstChild,s=o.firstChild;return r.addEventListener("mouseleave",Z),r.$$mouseup=Z,r.$$mousedown=pe,r.$$touchend=Z,r.$$touchstart=pe,a(r,i(Fn,{}),o),a(r,i(Ce,L({get d(){return n()}},()=>e.item)),o),a(s,()=>e.item.name),a(o,i(Ne,L(()=>e.item)),null),m(l=>{const u=`${f.TimeCard}`,d=e.style,v=e.tabIndex,_=`${f.InternalContainer} ${A["elevation-2"]} time-of-day__${e.item.timeOfDay?e.item.timeOfDay:n().timeOfDay}`,h=f.NameHolder,C=f.Name;return u!==l._v$&&(t.className=l._v$=u),l._v$2=E(t,d,l._v$2),v!==l._v$3&&B(t,"tabindex",l._v$3=v),_!==l._v$4&&(r.className=l._v$4=_),h!==l._v$5&&(o.className=l._v$5=h),C!==l._v$6&&(s.className=l._v$6=C),l},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0}),t})()};S(["touchstart","touchend","mousedown","mouseup"]);const Kn="_PreviewList_1a1pf_1";var Yn={PreviewList:Kn};const Qn=c("<div></div>"),Xn=()=>{let e;return(()=>{const n=Qn.cloneNode(!0),t=e;return typeof t=="function"?t(n):e=n,n.style.setProperty("overflow","auto"),a(n,i(z,{get items(){return y.data},scrollTarget:e,itemSize:{height:106},children:Zn})),m(()=>n.className=Yn.PreviewList),n})()},er="_ReorderActions_vjwi6_1";var tr={ReorderActions:er};const nr=c("<div></div>"),rr=()=>(()=>{const e=nr.cloneNode(!0);return a(e,i(we,{actionAccept:()=>_e(),actionCancel:()=>tt()})),m(()=>e.className=tr.ReorderActions),e})(),or=c("<div></div>");function lr(){function e(){ot(),requestAnimationFrame(e)}requestAnimationFrame(e)}const ir=()=>(U(()=>{const e=document.querySelector("body"),n=document.querySelector('meta[name="theme-color"]');W.active&&(e?.classList.add("dark"),n.content="#0a214d"),lr()}),[(()=>{const e=or.cloneNode(!0);return a(e,i(N,{get when(){return!p.active},get children(){return i(ln,{})}}),null),a(e,i(re,{get fallback(){return i(vn,{})},get children(){return[i(D,{get when(){return y.data.length&&p.active},get children(){return[i(Wn,{}),i(rr,{})]}}),i(D,{get when(){return y.data.length&&!p.active},get children(){return i(Xn,{})}})]}}),null),m(()=>e.className=`${le.App} ${he.active?le.blur:""}`),e})(),i(N,{get when(){return he.active},get children(){return i(Wt,{})}})]);"serviceWorker"in navigator&&Ae({onNeedRefresh(){},onOfflineReady(){}});Le(()=>i(ir,{}),document.getElementById("root"));