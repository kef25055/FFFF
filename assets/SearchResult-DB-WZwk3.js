import{u as I,e as te,f as le,g as U,h as se,P as ae,t as re,i as oe,j as q,k as H,l as ue,w as V,m as l,n as ie,R as j,p as ne,q as ce,s as ve,C as pe,v as he,x as ye,y as de,z as ge,A as Ee,B as R,D as me,E as Ae,F as be,G as T,H as Y,I as Ce}from"./app-D2whEWhN.js";const Be=["/","/portfolio.html","/blog/","/blog/learning/","/blog/note/","/blog/project/","/blog/problem/","/blog/learning/C__/","/blog/learning/C__/%E6%99%BA%E8%83%BD%E6%8C%87%E9%92%88.html","/blog/note/VuePress/vuepress_npm.html","/blog/project/YOLO11/environment.html","/blog/project/YOLO11/use.html","/blog/problem/SCPC/CPCS.html","/blog/problem/SCPC/","/blog/problem/SCPC/SCPC.html","/blog/problem/SCPC/%E5%B0%8F%E9%B8%A1%E8%AE%A1%E7%AE%97%E5%99%A8.html","/blog/problem/SCPC/%E6%88%91%E4%B8%8D%E6%83%B3%E5%BD%93%E7%BB%84%E9%95%BF.html","/blog/problem/SCPC/%E6%9C%80%E5%90%8E%E7%9A%84%E6%89%8D%E6%98%AF%E6%9C%80%E5%A5%BD%E7%9A%84.html","/blog/problem/written_examination/20250322%E7%BD%91%E6%98%93%E4%BA%92%E5%A8%B1%E6%B8%B8%E6%88%8F%E7%A0%94%E5%8F%91.html","/blog/problem/written_examination/","/404.html","/blog/note/VuePress/","/blog/project/YOLO11/","/category/","/category/c__/","/category/%E6%99%BA%E8%83%BD%E6%8C%87%E9%92%88/","/category/vuepress/","/category/yolo11/","/category/%E9%A2%98%E7%9B%AE/","/category/%E7%AC%94%E8%AF%95/","/tag/","/tag/auto-ptr/","/tag/unique-ptr/","/tag/shared-ptr/","/tag/weak-ptr/","/tag/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92/","/tag/%E6%A8%A1%E6%8B%9F/","/tag/%E6%A0%88/","/tag/%E5%B9%B6%E6%9F%A5%E9%9B%86/","/tag/%E6%90%9C%E7%B4%A2/","/tag/%E5%8D%9A%E5%BC%88%E8%AE%BA/","/tag/%E8%B4%AA%E5%BF%83/","/tag/%E5%89%AA%E6%9E%9D/","/article/","/star/","/timeline/"],fe="SEARCH_PRO_QUERY_HISTORY",E=I(fe,[]),He=()=>{const{queryHistoryCount:s}=R,a=s>0;return{enabled:a,queryHistory:E,addQueryHistory:r=>{a&&(E.value=Array.from(new Set([r,...E.value.slice(0,s-1)])))},removeQueryHistory:r=>{E.value=[...E.value.slice(0,r),...E.value.slice(r+1)]}}},F=s=>Be[s.id]+("anchor"in s?`#${s.anchor}`:""),Re="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:$}=R,m=I(Re,[]),Se=()=>{const s=$>0;return{enabled:s,resultHistory:m,addResultHistory:a=>{if(s){const r={link:F(a),display:a.display};"header"in a&&(r.header=a.header),m.value=[r,...m.value.slice(0,$-1)]}},removeResultHistory:a=>{m.value=[...m.value.slice(0,a),...m.value.slice(a+1)]}}},ke=s=>{const a=pe(),r=U(),S=he(),u=q(0),C=H(()=>u.value>0),y=ye([]);return de(()=>{const{search:d,terminate:k}=ge(),A=Ee(c=>{const b=c.join(" "),{searchFilter:w=h=>h,splitWord:D,suggestionsFilter:_,...g}=a.value;b?(u.value+=1,d(c.join(" "),r.value,g).then(h=>w(h,b,r.value,S.value)).then(h=>{u.value-=1,y.value=h}).catch(h=>{console.warn(h),u.value-=1,u.value||(y.value=[])})):y.value=[]},R.searchDelay-R.suggestDelay);V([s,r],([c])=>A(c),{immediate:!0}),me(()=>{k()})}),{isSearching:C,results:y}};var De=te({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(s,{emit:a}){const r=le(),S=U(),u=se(ae),{enabled:C,addQueryHistory:y,queryHistory:d,removeQueryHistory:k}=He(),{enabled:A,resultHistory:c,addResultHistory:b,removeResultHistory:w}=Se(),D=C||A,_=re(s,"queries"),{results:g,isSearching:h}=ke(_),o=oe({isQuery:!0,index:0}),v=q(0),p=q(0),L=H(()=>D&&(d.value.length>0||c.value.length>0)),x=H(()=>g.value.length>0),P=H(()=>g.value[v.value]||null),M=()=>{const{isQuery:e,index:t}=o;t===0?(o.isQuery=!e,o.index=e?c.value.length-1:d.value.length-1):o.index=t-1},z=()=>{const{isQuery:e,index:t}=o;t===(e?d.value.length-1:c.value.length-1)?(o.isQuery=!e,o.index=0):o.index=t+1},G=()=>{v.value=v.value>0?v.value-1:g.value.length-1,p.value=P.value.contents.length-1},J=()=>{v.value=v.value<g.value.length-1?v.value+1:0,p.value=0},K=()=>{p.value<P.value.contents.length-1?p.value+=1:J()},N=()=>{p.value>0?p.value-=1:G()},Q=e=>e.map(t=>Ce(t)?t:l(t[0],t[1])),W=e=>{if(e.type==="customField"){const t=Ae[e.index]||"$content",[i,f=""]=be(t)?t[S.value].split("$content"):t.split("$content");return e.display.map(n=>l("div",Q([i,...n,f])))}return e.display.map(t=>l("div",Q(t)))},B=()=>{v.value=0,p.value=0,a("updateQuery",""),a("close")},X=()=>C?l("ul",{class:"search-pro-result-list"},l("li",{class:"search-pro-result-list-item"},[l("div",{class:"search-pro-result-title"},u.value.queryHistory),d.value.map((e,t)=>l("div",{class:["search-pro-result-item",{active:o.isQuery&&o.index===t}],onClick:()=>{a("updateQuery",e)}},[l(T,{class:"search-pro-result-type"}),l("div",{class:"search-pro-result-content"},e),l("button",{class:"search-pro-remove-icon",innerHTML:Y,onClick:i=>{i.preventDefault(),i.stopPropagation(),k(t)}})]))])):null,Z=()=>A?l("ul",{class:"search-pro-result-list"},l("li",{class:"search-pro-result-list-item"},[l("div",{class:"search-pro-result-title"},u.value.resultHistory),c.value.map((e,t)=>l(j,{to:e.link,class:["search-pro-result-item",{active:!o.isQuery&&o.index===t}],onClick:()=>{B()}},()=>[l(T,{class:"search-pro-result-type"}),l("div",{class:"search-pro-result-content"},[e.header?l("div",{class:"content-header"},e.header):null,l("div",e.display.map(i=>Q(i)).flat())]),l("button",{class:"search-pro-remove-icon",innerHTML:Y,onClick:i=>{i.preventDefault(),i.stopPropagation(),w(t)}})]))])):null;return ue("keydown",e=>{if(s.isFocusing){if(x.value){if(e.key==="ArrowUp")N();else if(e.key==="ArrowDown")K();else if(e.key==="Enter"){const t=P.value.contents[p.value];y(s.queries.join(" ")),b(t),r.push(F(t)),B()}}else if(A){if(e.key==="ArrowUp")M();else if(e.key==="ArrowDown")z();else if(e.key==="Enter"){const{index:t}=o;o.isQuery?(a("updateQuery",d.value[t]),e.preventDefault()):(r.push(c.value[t].link),B())}}}}),V([v,p],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>l("div",{class:["search-pro-result-wrapper",{empty:s.queries.length?!x.value:!L.value}],id:"search-pro-results"},s.queries.length?h.value?l(ie,{hint:u.value.searching}):x.value?l("ul",{class:"search-pro-result-list"},g.value.map(({title:e,contents:t},i)=>{const f=v.value===i;return l("li",{class:["search-pro-result-list-item",{active:f}]},[l("div",{class:"search-pro-result-title"},e||u.value.defaultTitle),t.map((n,ee)=>{const O=f&&p.value===ee;return l(j,{to:F(n),class:["search-pro-result-item",{active:O,"aria-selected":O}],onClick:()=>{y(s.queries.join(" ")),b(n),B()}},()=>[n.type==="text"?null:l(n.type==="title"?ne:n.type==="heading"?ce:ve,{class:"search-pro-result-type"}),l("div",{class:"search-pro-result-content"},[n.type==="text"&&n.header?l("div",{class:"content-header"},n.header):null,l("div",W(n))])])})])})):u.value.emptyResult:D?L.value?[X(),Z()]:u.value.emptyHistory:u.value.emptyResult)}});export{De as default};
