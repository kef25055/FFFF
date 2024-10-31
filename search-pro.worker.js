const{entries:V}=Object,{fromEntries:et}=Object,st="ENTRIES",L="KEYS",T="VALUES",_="";class D{set;_type;_path;constructor(t,s){const n=t._tree,o=Array.from(n.keys());this.set=t,this._type=s,this._path=o.length>0?[{node:n,keys:o}]:[]}next(){const t=this.dive();return this.backtrack(),t}dive(){if(this._path.length===0)return{done:!0,value:void 0};const{node:t,keys:s}=E(this._path);if(E(s)===_)return{done:!1,value:this.result()};const n=t.get(E(s));return this._path.push({node:n,keys:Array.from(n.keys())}),this.dive()}backtrack(){if(this._path.length===0)return;const t=E(this._path).keys;t.pop(),!(t.length>0)&&(this._path.pop(),this.backtrack())}key(){return this.set._prefix+this._path.map(({keys:t})=>E(t)).filter(t=>t!==_).join("")}value(){return E(this._path).node.get(_)}result(){switch(this._type){case T:return this.value();case L:return this.key();default:return[this.key(),this.value()]}}[Symbol.iterator](){return this}}const E=e=>e[e.length-1],nt=(e,t,s)=>{const n=new Map;if(t===void 0)return n;const o=t.length+1,u=o+s,i=new Uint8Array(u*o).fill(s+1);for(let r=0;r<o;++r)i[r]=r;for(let r=1;r<u;++r)i[r*o]=r;return R(e,t,s,n,i,1,o,""),n},R=(e,t,s,n,o,u,i,r)=>{const d=u*i;t:for(const c of e.keys())if(c===_){const a=o[d-1];a<=s&&n.set(r,[e.get(c),a])}else{let a=u;for(let h=0;h<c.length;++h,++a){const g=c[h],m=i*a,p=m-i;let l=o[m];const f=Math.max(0,a-s-1),y=Math.min(i-1,a+s);for(let F=f;F<y;++F){const v=g!==t[F],z=o[p+F]+ +v,A=o[p+F+1]+1,w=o[m+F]+1,j=o[m+F+1]=Math.min(z,A,w);j<l&&(l=j)}if(l>s)continue t}R(e.get(c),t,s,n,o,a,i,r+c)}};class C{_tree;_prefix;_size=void 0;constructor(t=new Map,s=""){this._tree=t,this._prefix=s}atPrefix(t){if(!t.startsWith(this._prefix))throw new Error("Mismatched prefix");const[s,n]=x(this._tree,t.slice(this._prefix.length));if(s===void 0){const[o,u]=O(n);for(const i of o.keys())if(i!==_&&i.startsWith(u)){const r=new Map;return r.set(i.slice(u.length),o.get(i)),new C(r,t)}}return new C(s,t)}clear(){this._size=void 0,this._tree.clear()}delete(t){return this._size=void 0,ot(this._tree,t)}entries(){return new D(this,st)}forEach(t){for(const[s,n]of this)t(s,n,this)}fuzzyGet(t,s){return nt(this._tree,t,s)}get(t){const s=k(this._tree,t);return s!==void 0?s.get(_):void 0}has(t){const s=k(this._tree,t);return s!==void 0&&s.has(_)}keys(){return new D(this,L)}set(t,s){if(typeof t!="string")throw new Error("key must be a string");return this._size=void 0,I(this._tree,t).set(_,s),this}get size(){if(this._size)return this._size;this._size=0;const t=this.entries();for(;!t.next().done;)this._size+=1;return this._size}update(t,s){if(typeof t!="string")throw new Error("key must be a string");this._size=void 0;const n=I(this._tree,t);return n.set(_,s(n.get(_))),this}fetch(t,s){if(typeof t!="string")throw new Error("key must be a string");this._size=void 0;const n=I(this._tree,t);let o=n.get(_);return o===void 0&&n.set(_,o=s()),o}values(){return new D(this,T)}[Symbol.iterator](){return this.entries()}static from(t){const s=new C;for(const[n,o]of t)s.set(n,o);return s}static fromObject(t){return C.from(Object.entries(t))}}const x=(e,t,s=[])=>{if(t.length===0||e==null)return[e,s];for(const n of e.keys())if(n!==_&&t.startsWith(n))return s.push([e,n]),x(e.get(n),t.slice(n.length),s);return s.push([e,t]),x(void 0,"",s)},k=(e,t)=>{if(t.length===0||e==null)return e;for(const s of e.keys())if(s!==_&&t.startsWith(s))return k(e.get(s),t.slice(s.length))},I=(e,t)=>{const s=t.length;t:for(let n=0;e&&n<s;){for(const u of e.keys())if(u!==_&&t[n]===u[0]){const i=Math.min(s-n,u.length);let r=1;for(;r<i&&t[n+r]===u[r];)++r;const d=e.get(u);if(r===u.length)e=d;else{const c=new Map;c.set(u.slice(r),d),e.set(t.slice(n,n+r),c),e.delete(u),e=c}n+=r;continue t}const o=new Map;return e.set(t.slice(n),o),o}return e},ot=(e,t)=>{const[s,n]=x(e,t);if(s!==void 0){if(s.delete(_),s.size===0)W(n);else if(s.size===1){const[o,u]=s.entries().next().value;q(n,o,u)}}},W=e=>{if(e.length===0)return;const[t,s]=O(e);if(t.delete(s),t.size===0)W(e.slice(0,-1));else if(t.size===1){const[n,o]=t.entries().next().value;n!==_&&q(e.slice(0,-1),n,o)}},q=(e,t,s)=>{if(e.length===0)return;const[n,o]=O(e);n.set(o+t,s),n.delete(o)},O=e=>e[e.length-1],ut=(e,t)=>{const s=e._idToShortId.get(t);if(s!=null)return e._storedFields.get(s)},it=/[\n\r -#%-*,-/:;?@[-\]_{}\u00A0\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u1680\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2000-\u200A\u2010-\u2029\u202F-\u2043\u2045-\u2051\u2053-\u205F\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u3000-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]+/u,M="or",$="and",rt="and_not",ct=(e,t)=>{e.includes(t)||e.push(t)},N=(e,t)=>{for(const s of t)e.includes(s)||e.push(s)},P=({score:e},{score:t})=>t-e,lt=()=>new Map,b=e=>{const t=new Map;for(const s of Object.keys(e))t.set(parseInt(s,10),e[s]);return t},G=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0,ht={[M]:(e,t)=>{for(const s of t.keys()){const n=e.get(s);if(n==null)e.set(s,t.get(s));else{const{score:o,terms:u,match:i}=t.get(s);n.score=n.score+o,n.match=Object.assign(n.match,i),N(n.terms,u)}}return e},[$]:(e,t)=>{const s=new Map;for(const n of t.keys()){const o=e.get(n);if(o==null)continue;const{score:u,terms:i,match:r}=t.get(n);N(o.terms,i),s.set(n,{score:o.score+u,terms:o.terms,match:Object.assign(o.match,r)})}return s},[rt]:(e,t)=>{for(const s of t.keys())e.delete(s);return e}},dt=(e,t,s,n,o,u)=>{const{k:i,b:r,d}=u;return Math.log(1+(s-t+.5)/(t+.5))*(d+e*(i+1)/(e+i*(1-r+r*n/o)))},at=e=>(t,s,n)=>{const o=typeof e.fuzzy=="function"?e.fuzzy(t,s,n):e.fuzzy||!1,u=typeof e.prefix=="function"?e.prefix(t,s,n):e.prefix===!0;return{term:t,fuzzy:o,prefix:u}},H=(e,t,s,n)=>{for(const o of Object.keys(e._fieldIds))if(e._fieldIds[o]===s){e._options.logger("warn",`SlimSearch: document with ID ${e._documentIds.get(t)} has changed before removal: term "${n}" was not present in field "${o}". Removing a document after it has changed can corrupt the index!`,"version_conflict");return}},ft=(e,t,s,n)=>{if(!e._index.has(n)){H(e,s,t,n);return}const o=e._index.fetch(n,lt),u=o.get(t);u==null||u.get(s)==null?H(e,s,t,n):u.get(s)<=1?u.size<=1?o.delete(t):u.delete(s):u.set(s,u.get(s)-1),e._index.get(n).size===0&&e._index.delete(n)},gt={k:1.2,b:.7,d:.5},mt={idField:"id",extractField:(e,t)=>e[t],tokenize:e=>e.split(it),processTerm:e=>e.toLowerCase(),fields:void 0,searchOptions:void 0,storeFields:[],logger:(e,t)=>{typeof console?.[e]=="function"&&console[e](t)},autoVacuum:!0},J={combineWith:M,prefix:!1,fuzzy:!1,maxFuzzy:6,boost:{},weights:{fuzzy:.45,prefix:.375},bm25:gt},pt={combineWith:$,prefix:(e,t,s)=>t===s.length-1},Ft={batchSize:1e3,batchWait:10},U={minDirtFactor:.1,minDirtCount:20},_t={...Ft,...U},K=Symbol("*"),yt=(e,t)=>{const s=new Map,n={...e._options.searchOptions,...t};for(const[o,u]of e._documentIds){const i=n.boostDocument?n.boostDocument(u,"",e._storedFields.get(o)):1;s.set(o,{score:i,terms:[],match:{}})}return s},X=(e,t=M)=>{if(e.length===0)return new Map;const s=t.toLowerCase(),n=ht[s];if(!n)throw new Error(`Invalid combination operator: ${t}`);return e.reduce(n)||new Map},S=(e,t,s,n,o,u,i,r,d=new Map)=>{if(o==null)return d;for(const c of Object.keys(u)){const a=u[c],h=e._fieldIds[c],g=o.get(h);if(g==null)continue;let m=g.size;const p=e._avgFieldLength[h];for(const l of g.keys()){if(!e._documentIds.has(l)){ft(e,h,l,s),m-=1;continue}const f=i?i(e._documentIds.get(l),s,e._storedFields.get(l)):1;if(!f)continue;const y=g.get(l),F=e._fieldLength.get(l)[h],v=dt(y,m,e._documentCount,F,p,r),z=n*a*f*v,A=d.get(l);if(A){A.score+=z,ct(A.terms,t);const w=G(A.match,s);w?w.push(c):A.match[s]=[c]}else d.set(l,{score:z,terms:[t],match:{[s]:[c]}})}}return d},At=(e,t,s)=>{const n={...e._options.searchOptions,...s},o=(n.fields||e._options.fields).reduce((l,f)=>({...l,[f]:G(n.boost,f)||1}),{}),{boostDocument:u,weights:i,maxFuzzy:r,bm25:d}=n,{fuzzy:c,prefix:a}={...J.weights,...i},h=e._index.get(t.term),g=S(e,t.term,t.term,1,h,o,u,d);let m,p;if(t.prefix&&(m=e._index.atPrefix(t.term)),t.fuzzy){const l=t.fuzzy===!0?.2:t.fuzzy,f=l<1?Math.min(r,Math.round(t.term.length*l)):l;f&&(p=e._index.fuzzyGet(t.term,f))}if(m)for(const[l,f]of m){const y=l.length-t.term.length;if(!y)continue;p?.delete(l);const F=a*l.length/(l.length+.3*y);S(e,t.term,l,F,f,o,u,d,g)}if(p)for(const l of p.keys()){const[f,y]=p.get(l);if(!y)continue;const F=c*l.length/(l.length+y);S(e,t.term,l,F,f,o,u,d,g)}return g},Y=(e,t,s={})=>{if(t===K)return yt(e,s);if(typeof t!="string"){const a={...s,...t,queries:void 0},h=t.queries.map(g=>Y(e,g,a));return X(h,a.combineWith)}const{tokenize:n,processTerm:o,searchOptions:u}=e._options,i={tokenize:n,processTerm:o,...u,...s},{tokenize:r,processTerm:d}=i,c=r(t).flatMap(a=>d(a)).filter(a=>!!a).map(at(i)).map(a=>At(e,a,i));return X(c,i.combineWith)},Q=(e,t,s={})=>{const n=Y(e,t,s),o=[];for(const[u,{score:i,terms:r,match:d}]of n){const c=r.length||1,a={id:e._documentIds.get(u),score:i*c,terms:Object.keys(d),queryTerms:r,match:d};Object.assign(a,e._storedFields.get(u)),(s.filter==null||s.filter(a))&&o.push(a)}return t===K&&s.boostDocument==null&&e._options.searchOptions.boostDocument==null||o.sort(P),o},Ct=(e,t,s={})=>{s={...e._options.autoSuggestOptions,...s};const n=new Map;for(const{score:u,terms:i}of Q(e,t,s)){const r=i.join(" "),d=n.get(r);d!=null?(d.score+=u,d.count+=1):n.set(r,{score:u,terms:i,count:1})}const o=[];for(const[u,{score:i,terms:r,count:d}]of n)o.push({suggestion:u,terms:r,score:i/d});return o.sort(P),o};class Et{_options;_index;_documentCount;_documentIds;_idToShortId;_fieldIds;_fieldLength;_avgFieldLength;_nextId;_storedFields;_dirtCount;_currentVacuum;_enqueuedVacuum;_enqueuedVacuumConditions;constructor(t){if(t?.fields==null)throw new Error('SlimSearch: option "fields" must be provided');const s=t.autoVacuum==null||t.autoVacuum===!0?_t:t.autoVacuum;this._options={...mt,...t,autoVacuum:s,searchOptions:{...J,...t.searchOptions||{}},autoSuggestOptions:{...pt,...t.autoSuggestOptions||{}}},this._index=new C,this._documentCount=0,this._documentIds=new Map,this._idToShortId=new Map,this._fieldIds={},this._fieldLength=new Map,this._avgFieldLength=[],this._nextId=0,this._storedFields=new Map,this._dirtCount=0,this._currentVacuum=null,this._enqueuedVacuum=null,this._enqueuedVacuumConditions=U,this.addFields(this._options.fields)}get isVacuuming(){return this._currentVacuum!=null}get dirtCount(){return this._dirtCount}get dirtFactor(){return this._dirtCount/(1+this._documentCount+this._dirtCount)}get documentCount(){return this._documentCount}get termCount(){return this._index.size}toJSON(){const t=[];for(const[s,n]of this._index){const o={};for(const[u,i]of n)o[u]=Object.fromEntries(i);t.push([s,o])}return{documentCount:this._documentCount,nextId:this._nextId,documentIds:Object.fromEntries(this._documentIds),fieldIds:this._fieldIds,fieldLength:Object.fromEntries(this._fieldLength),averageFieldLength:this._avgFieldLength,storedFields:Object.fromEntries(this._storedFields),dirtCount:this._dirtCount,index:t,serializationVersion:2}}addFields(t){for(let s=0;s<t.length;s++)this._fieldIds[t[s]]=s}}const zt=({index:e,documentCount:t,nextId:s,documentIds:n,fieldIds:o,fieldLength:u,averageFieldLength:i,storedFields:r,dirtCount:d,serializationVersion:c},a)=>{if(c!==1&&c!==2)throw new Error("SlimSearch: cannot deserialize an index created with an incompatible version");const h=new Et(a);h._documentCount=t,h._nextId=s,h._documentIds=b(n),h._idToShortId=new Map,h._fieldIds=o,h._fieldLength=b(u),h._avgFieldLength=i,h._storedFields=b(r),h._dirtCount=d||0,h._index=new C;for(const[g,m]of h._documentIds)h._idToShortId.set(m,g);for(const[g,m]of e){const p=new Map;for(const l of Object.keys(m)){let f=m[l];c===1&&(f=f.ds),p.set(parseInt(l,10),b(f))}h._index.set(g,p)}return h},B=(e,t)=>{const s=e.toLowerCase(),n=t.toLowerCase(),o=[];let u=0,i=0;const r=(c,a=!1)=>{let h="";i===0?h=c.length>20?`… ${c.slice(-20)}`:c:a?h=c.length+i>100?`${c.slice(0,100-i)}… `:c:h=c.length>20?`${c.slice(0,20)} … ${c.slice(-20)}`:c,h&&o.push(h),i+=h.length,a||(o.push(["mark",t]),i+=t.length,i>=100&&o.push(" …"))};let d=s.indexOf(n,u);if(d===-1)return null;for(;d>=0;){const c=d+n.length;if(r(e.slice(u,d)),u=c,i>100)break;d=s.indexOf(n,u)}return i<100&&r(e.slice(u),!0),o},wt=(e,t)=>t.contents.reduce((s,[,n])=>s+n,0)-e.contents.reduce((s,[,n])=>s+n,0),xt=(e,t)=>Math.max(...t.contents.map(([,s])=>s))-Math.max(...e.contents.map(([,s])=>s)),Z=(e,t,s={})=>{const n={};return Q(t,e,{boost:{h:2,t:1,c:4},prefix:!0,...s}).forEach(o=>{const{id:u,terms:i,score:r}=o,d=u.includes("@"),c=u.includes("#"),[a,h]=u.split(/[#@]/),g=Number(a),m=i.sort((l,f)=>l.length-f.length).filter((l,f)=>i.slice(f+1).every(y=>!y.includes(l))),{contents:p}=n[g]??={title:"",contents:[]};if(d)p.push([{type:"customField",id:g,index:h,display:m.map(l=>o.c.map(f=>B(f,l))).flat().filter(l=>l!==null)},r]);else{const l=m.map(f=>B(o.h,f)).filter(f=>f!==null);if(l.length&&p.push([{type:c?"heading":"title",id:g,...c&&{anchor:h},display:l},r]),"t"in o)for(const f of o.t){const y=m.map(F=>B(f,F)).filter(F=>F!==null);y.length&&p.push([{type:"text",id:g,...c&&{anchor:h},display:y},r])}}}),V(n).sort(([,o],[,u])=>"max"==="total"?wt(o,u):xt(o,u)).map(([o,{title:u,contents:i}])=>{if(!u){const r=ut(t,o);r&&(u=r.h)}return{title:u,contents:i.map(([r])=>r)}})},tt=(e,t,s={})=>{const n=Ct(t,e,{fuzzy:.2,maxFuzzy:3,...s}).map(({suggestion:o})=>o);return e.includes(" ")?n:n.filter(o=>!o.includes(" "))},bt=et(V(JSON.parse("{\"/\":{\"documentCount\":19,\"nextId\":19,\"documentIds\":{\"0\":\"3\",\"1\":\"4\",\"2\":\"5\",\"3\":\"6\",\"4\":\"7\",\"5\":\"7#准备工作\",\"6\":\"7#_1-下载node-js\",\"7\":\"7#_2-添加两个文件夹\",\"8\":\"7#_3-环境变量\",\"9\":\"7#_4-修改缓存目录和全局目录\",\"10\":\"7#搭建项目\",\"11\":\"7#_1-初始化项目\",\"12\":\"7#_2-安装依赖\",\"13\":\"7#部署到github\",\"14\":\"7#_1-新建仓库\",\"15\":\"7#_2-推送代码到github\",\"16\":\"7#_3-使用-github-pages-发布站点\",\"17\":\"8\",\"18\":\"9\"},\"fieldIds\":{\"h\":0,\"t\":1,\"c\":2},\"fieldLength\":{\"0\":[1,1],\"1\":[1,1],\"2\":[1,1],\"3\":[1,1],\"4\":[1],\"5\":[1],\"6\":[3,3],\"7\":[2,6],\"8\":[2,28],\"9\":[2,16],\"10\":[1],\"11\":[2,41],\"12\":[2,111],\"13\":[1],\"14\":[2,14],\"15\":[2,44],\"16\":[5,13],\"17\":[1,3],\"18\":[2]},\"averageFieldLength\":[1.736842105263158,17.08803418803419],\"storedFields\":{\"0\":{\"h\":\"笔记\",\"t\":[\"欢迎来到小鸡的学习笔记✨\"]},\"1\":{\"h\":\"题解\",\"t\":[\"欢迎来到小鸡的题解专题✨\"]},\"2\":{\"h\":\"文档\",\"t\":[\"欢迎来到小鸡的个人文档✨\"]},\"3\":{\"h\":\"项目\",\"t\":[\"欢迎来到小鸡的项目笔记✨\"]},\"4\":{\"h\":\"使用VuePress搭建个人博客\"},\"5\":{\"h\":\"准备工作\"},\"6\":{\"h\":\"1.下载Node.js\",\"t\":[\"下载地址：node.js\"]},\"7\":{\"h\":\"2.添加两个文件夹\",\"t\":[\"在安装路径的根目录下新建 node_cache 和 node_global 文件夹\"]},\"8\":{\"h\":\"3.环境变量\",\"t\":[\"在系统变量里新建 NODE_HOME ,变量值为刚刚的安装路径 D:\\\\Nodejs\",\"在系统变量的 path 中添加:\",\"%NODE_HOME%\",\"%NODE_HOME%node_cache\",\"%NODE_HOME%node_global\",\"将用户变量的 path 中默认的 C:\\\\User\\\\35025\\\\AppDate\\\\Roaming\\\\npm 改为 node_global 的路径 D:\\\\Nodejs\\\\node_global\",\"在 cmd 窗口输入 node -v 和 npm -v ,能够正确显示版本号说明安装成功\"]},\"9\":{\"h\":\"4.修改缓存目录和全局目录\",\"t\":[\"用管理员模式打开 cmd 窗口执行以下指令\",\"设置缓存到 node_cache 文件夹：\",\"npm config set cache \\\"D:\\\\Nodejs\\\\node_cache\\\"\",\"设置全局模块的安装路径到 node_global 文件夹：\",\"npm config set prefix \\\"D:\\\\Nodejs\\\\node_global\\\"\"]},\"10\":{\"h\":\"搭建项目\"},\"11\":{\"h\":\"1.初始化项目\",\"t\":[\"使用 vuepress-theme-hope 主题提供的脚手架工具创建项目\",\"用管理员模式打开 cmd 窗口\",\"切换到想要放置项目的路径\",\"例如要切换到 E:\\\\Project ，执行 e: 切换到 E 盘，执行 cd Project 进入 Project 目录\",\"执行以下命令：\",\"npm init vuepress-theme-hope blogs\",\"这里的 blogs 是你项目所在的文件夹名称，可以换\",\"选择一些默认的配置：\",\"选择包管理器 npm\",\"设置协议 MIT\",\"项目需要用到多语言么 NO\",\"你想要创建什么类型的项目 docs\",\"是否需要一个自动部署文档到 GitHub Pages 的工作流 YES\",\"选择你想使用的源 当前源\"]},\"12\":{\"h\":\"2.安装依赖\",\"t\":[\"由于一个个安装容易导致依赖冲突，所以直接一步到位\",\"打开刚刚下载下来的 blogs 文件夹，修改 src 目录下的 package.json 文件为以下内容\",\"{ \\\"name\\\": \\\"vuepress-theme-hope-template\\\", \\\"description\\\": \\\"A project of vuepress-theme-hope\\\", \\\"version\\\": \\\"2.0.0\\\", \\\"license\\\": \\\"MIT\\\", \\\"type\\\": \\\"module\\\", \\\"scripts\\\": { \\\"docs:build\\\": \\\"vuepress-vite build src\\\", \\\"docs:clean-dev\\\": \\\"vuepress-vite dev src --clean-cache\\\", \\\"docs:dev\\\": \\\"vuepress-vite dev src\\\", \\\"docs:update-package\\\": \\\"npx vp-update\\\" }, \\\"devDependencies\\\": { \\\"@types/katex\\\": \\\"0.16.7\\\", \\\"@vue/repl\\\": \\\"4.4.2\\\", \\\"@vuepress/bundler-vite\\\": \\\"2.0.0-rc.15\\\", \\\"@vuepress/bundler-webpack\\\": \\\"2.0.0-rc.15\\\", \\\"@vuepress/helper\\\": \\\"2.0.0-rc.47\\\", \\\"@vuepress/plugin-feed\\\": \\\"2.0.0-rc.47\\\", \\\"@vuepress/plugin-revealjs\\\": \\\"2.0.0-rc.48\\\", \\\"@vueuse/core\\\": \\\"11.1.0\\\", \\\"@waline/client\\\": \\\"^3.3.2\\\", \\\"artplayer\\\": \\\"5.1.7\\\", \\\"echarts-wordcloud\\\": \\\"2.1.0\\\", \\\"flowchart.ts\\\": \\\"3.0.1\\\", \\\"katex\\\": \\\"0.16.11\\\", \\\"kotlin-playground\\\": \\\"1.30.0\\\", \\\"markmap-lib\\\": \\\"0.17.0\\\", \\\"markmap-toolbar\\\": \\\"0.17.0\\\", \\\"markmap-view\\\": \\\"0.17.0\\\", \\\"mermaid\\\": \\\"11.2.1\\\", \\\"sandpack-vue3\\\": \\\"3.1.11\\\", \\\"sass-embedded\\\": \\\"1.79.3\\\", \\\"sass-loader\\\": \\\"16.0.2\\\", \\\"vue\\\": \\\"3.5.8\\\", \\\"vuepress\\\": \\\"2.0.0-rc.15\\\", \\\"vuepress-plugin-components\\\": \\\"2.0.0-rc.54\\\", \\\"vuepress-plugin-md-enhance\\\": \\\"2.0.0-rc.54\\\", \\\"vuepress-plugin-search-pro\\\": \\\"^2.0.0-rc.54\\\", \\\"vuepress-shared\\\": \\\"2.0.0-rc.54\\\", \\\"vuepress-theme-hope\\\": \\\"2.0.0-rc.56\\\" } }\",\"\\\"devDependencies\\\" 里面的内容不要改，直接复制粘贴就好\",\"用管理员模式在项目根目录执行以下命令，等待自动下载：\",\"npm install\",\"下载完成后执行以下命令即可在本地打开博客：\",\"npm run docs:dev\",\"执行过程中出现 vuepress-theme-hope: ✖ @vuepress/plugin-redirect is not installed! 的报错是正常的，不需要管，也不要下载这个插件\"]},\"13\":{\"h\":\"部署到Github\"},\"14\":{\"h\":\"1.新建仓库\",\"t\":[\"如果使用的仓库名与用户名不相同，需要修改 src 目录下 config.ts 文件中的 base 路径信息为：\",\"base: \\\"/你的仓库名/\\\",\",\"新建仓库的时候不要创建 README.md 文件\"]},\"15\":{\"h\":\"2.推送代码到Github\",\"t\":[\"首先测试一下，当前能不能正确的静态部署\",\"npm run docs:build\",\"初始化 Git 仓库\",\"git init\",\"连接到远程仓库\",\"git remote add origin 你的仓库地址\",\"将当前目录下的所有更改（包括新增、修改或删除的文件）添加到暂存区，准备进行下一次提交\",\"git add .\",\"如果出现有关CRLF、LF之类换行符的报错，执行以下命令之一：\",\"git config --global core.autocrlf true\",\"git add --renormalize .\",\"将当前暂存区中的更改提交到本地 Git 仓库\",\"git commit -m \\\"提交信息\\\"\",\"将本地 Git 仓库中的更改推送到远程仓库\",\"git push origin main\",\"这里的 main 是本地分支名称，如果本地分支不是 main 自行修改，本地分支名称可以在这里查看：\"]},\"16\":{\"h\":\"3.使用 Github Pages 发布站点\",\"t\":[\"上一步完成推送后，应该会自动生成 gh-pages 分支，前往 GitHub 仓库的设置页面，选择 gh-pages 作为 GitHub Pages 的源。\",\"等待自动部署完成后在当前页面即可访问站点\"]},\"17\":{\"h\":\"\",\"t\":[\"404 Not Found\"]},\"18\":{\"h\":\"Vue Press\"}},\"dirtCount\":0,\"index\":[[\"等待自动部署完成后在当前页面即可访问站点\",{\"1\":{\"16\":1}}],[\"等待自动下载\",{\"1\":{\"12\":1}}],[\"作为\",{\"1\":{\"16\":1}}],[\"前往\",{\"1\":{\"16\":1}}],[\"分支\",{\"1\":{\"16\":1}}],[\"应该会自动生成\",{\"1\":{\"16\":1}}],[\"上一步完成推送后\",{\"1\":{\"16\":1}}],[\"发布站点\",{\"0\":{\"16\":1}}],[\"本地分支名称可以在这里查看\",{\"1\":{\"15\":1}}],[\"自行修改\",{\"1\":{\"15\":1}}],[\"提交信息\",{\"1\":{\"15\":1}}],[\"如果本地分支不是\",{\"1\":{\"15\":1}}],[\"如果出现有关crlf\",{\"1\":{\"15\":1}}],[\"如果使用的仓库名与用户名不相同\",{\"1\":{\"14\":1}}],[\"准备进行下一次提交\",{\"1\":{\"15\":1}}],[\"准备工作\",{\"0\":{\"5\":1}}],[\"添加到暂存区\",{\"1\":{\"15\":1}}],[\"添加两个文件夹\",{\"0\":{\"7\":1}}],[\"包括新增\",{\"1\":{\"15\":1}}],[\"将本地\",{\"1\":{\"15\":1}}],[\"将当前暂存区中的更改提交到本地\",{\"1\":{\"15\":1}}],[\"将当前目录下的所有更改\",{\"1\":{\"15\":1}}],[\"将用户变量的\",{\"1\":{\"8\":1}}],[\"origin\",{\"1\":{\"15\":2}}],[\"of\",{\"1\":{\"12\":1}}],[\"连接到远程仓库\",{\"1\":{\"15\":1}}],[\"仓库的设置页面\",{\"1\":{\"16\":1}}],[\"仓库中的更改推送到远程仓库\",{\"1\":{\"15\":1}}],[\"仓库\",{\"1\":{\"15\":2}}],[\"初始化\",{\"1\":{\"15\":1}}],[\"初始化项目\",{\"0\":{\"11\":1}}],[\"当前能不能正确的静态部署\",{\"1\":{\"15\":1}}],[\"当前源\",{\"1\":{\"11\":1}}],[\"首先测试一下\",{\"1\":{\"15\":1}}],[\"推送代码到github\",{\"0\":{\"15\":1}}],[\"你的仓库地址\",{\"1\":{\"15\":1}}],[\"你的仓库名\",{\"1\":{\"14\":1}}],[\"你想要创建什么类型的项目\",{\"1\":{\"11\":1}}],[\"路径信息为\",{\"1\":{\"14\":1}}],[\"需要修改\",{\"1\":{\"14\":1}}],[\"新建仓库的时候不要创建\",{\"1\":{\"14\":1}}],[\"新建仓库\",{\"0\":{\"14\":1}}],[\"部署到github\",{\"0\":{\"13\":1}}],[\"也不要下载这个插件\",{\"1\":{\"12\":1}}],[\"不需要管\",{\"1\":{\"12\":1}}],[\"is\",{\"1\":{\"12\":1}}],[\"installed\",{\"1\":{\"12\":1}}],[\"install\",{\"1\":{\"12\":1}}],[\"init\",{\"1\":{\"11\":1,\"15\":1}}],[\"✖\",{\"1\":{\"12\":1}}],[\"用管理员模式在项目根目录执行以下命令\",{\"1\":{\"12\":1}}],[\"用管理员模式打开\",{\"1\":{\"9\":1,\"11\":1}}],[\"直接复制粘贴就好\",{\"1\":{\"12\":1}}],[\"里面的内容不要改\",{\"1\":{\"12\":1}}],[\"^2\",{\"1\":{\"12\":1}}],[\"^3\",{\"1\":{\"12\":1}}],[\"8\",{\"1\":{\"12\":1}}],[\"lf之类换行符的报错\",{\"1\":{\"15\":1}}],[\"loader\",{\"1\":{\"12\":1}}],[\"lib\",{\"1\":{\"12\":1}}],[\"license\",{\"1\":{\"12\":1}}],[\"kotlin\",{\"1\":{\"12\":1}}],[\"katex\",{\"1\":{\"12\":2}}],[\"found\",{\"1\":{\"17\":1}}],[\"flowchart\",{\"1\":{\"12\":1}}],[\"feed\",{\"1\":{\"12\":1}}],[\"56\",{\"1\":{\"12\":1}}],[\"54\",{\"1\":{\"12\":4}}],[\"5\",{\"1\":{\"12\":2}}],[\"wordcloud\",{\"1\":{\"12\":1}}],[\"waline\",{\"1\":{\"12\":1}}],[\"webpack\",{\"1\":{\"12\":1}}],[\"helper\",{\"1\":{\"12\":1}}],[\"hope\",{\"1\":{\"11\":2,\"12\":4}}],[\"home\",{\"1\":{\"8\":4}}],[\"run\",{\"1\":{\"12\":1,\"15\":1}}],[\"renormalize\",{\"1\":{\"15\":1}}],[\"remote\",{\"1\":{\"15\":1}}],[\"readme\",{\"1\":{\"14\":1}}],[\"redirect\",{\"1\":{\"12\":1}}],[\"revealjs\",{\"1\":{\"12\":1}}],[\"repl\",{\"1\":{\"12\":1}}],[\"rc\",{\"1\":{\"12\":11}}],[\"roaming\",{\"1\":{\"8\":1}}],[\"79\",{\"1\":{\"12\":1}}],[\"7\",{\"1\":{\"12\":2}}],[\"update\",{\"1\":{\"12\":2}}],[\"user\",{\"1\":{\"8\":1}}],[\"base\",{\"1\":{\"14\":2}}],[\"bundler\",{\"1\":{\"12\":2}}],[\"build\",{\"1\":{\"12\":2,\"15\":1}}],[\"blogs\",{\"1\":{\"11\":2,\"12\":1}}],[\"main\",{\"1\":{\"15\":3}}],[\"markmap\",{\"1\":{\"12\":3}}],[\"m\",{\"1\":{\"15\":1}}],[\"md\",{\"1\":{\"12\":1,\"14\":1}}],[\"mermaid\",{\"1\":{\"12\":1}}],[\"module\",{\"1\":{\"12\":1}}],[\"mit\",{\"1\":{\"11\":1,\"12\":1}}],[\"0\",{\"1\":{\"12\":37}}],[\"autocrlf\",{\"1\":{\"15\":1}}],[\"add\",{\"1\":{\"15\":3}}],[\"artplayer\",{\"1\":{\"12\":1}}],[\"a\",{\"1\":{\"12\":1}}],[\"appdate\",{\"1\":{\"8\":1}}],[\"true\",{\"1\":{\"15\":1}}],[\"toolbar\",{\"1\":{\"12\":1}}],[\"ts\",{\"1\":{\"12\":1,\"14\":1}}],[\"types\",{\"1\":{\"12\":1}}],[\"type\",{\"1\":{\"12\":1}}],[\"template\",{\"1\":{\"12\":1}}],[\"theme\",{\"1\":{\"11\":2,\"12\":4}}],[\"shared\",{\"1\":{\"12\":1}}],[\"search\",{\"1\":{\"12\":1}}],[\"set\",{\"1\":{\"9\":2}}],[\"sass\",{\"1\":{\"12\":2}}],[\"sandpack\",{\"1\":{\"12\":1}}],[\"scripts\",{\"1\":{\"12\":1}}],[\"src\",{\"1\":{\"12\":4,\"14\":1}}],[\"修改或删除的文件\",{\"1\":{\"15\":1}}],[\"修改\",{\"1\":{\"12\":1}}],[\"修改缓存目录和全局目录\",{\"0\":{\"9\":1}}],[\"打开刚刚下载下来的\",{\"1\":{\"12\":1}}],[\"所以直接一步到位\",{\"1\":{\"12\":1}}],[\"由于一个个安装容易导致依赖冲突\",{\"1\":{\"12\":1}}],[\"安装依赖\",{\"0\":{\"12\":1}}],[\"yes\",{\"1\":{\"11\":1}}],[\"的源\",{\"1\":{\"16\":1}}],[\"的报错是正常的\",{\"1\":{\"12\":1}}],[\"的工作流\",{\"1\":{\"11\":1}}],[\"的路径\",{\"1\":{\"8\":1}}],[\"gh\",{\"1\":{\"16\":2}}],[\"git\",{\"1\":{\"15\":10}}],[\"github\",{\"0\":{\"16\":1},\"1\":{\"11\":1,\"16\":2}}],[\"global\",{\"1\":{\"7\":1,\"8\":3,\"9\":2,\"15\":1}}],[\"是本地分支名称\",{\"1\":{\"15\":1}}],[\"是否需要一个自动部署文档到\",{\"1\":{\"11\":1}}],[\"是你项目所在的文件夹名称\",{\"1\":{\"11\":1}}],[\"选择\",{\"1\":{\"16\":1}}],[\"选择你想使用的源\",{\"1\":{\"11\":1}}],[\"选择包管理器\",{\"1\":{\"11\":1}}],[\"选择一些默认的配置\",{\"1\":{\"11\":1}}],[\"可以换\",{\"1\":{\"11\":1}}],[\"这里的\",{\"1\":{\"11\":1,\"15\":1}}],[\"目录下\",{\"1\":{\"14\":1}}],[\"目录下的\",{\"1\":{\"12\":1}}],[\"目录\",{\"1\":{\"11\":1}}],[\"进入\",{\"1\":{\"11\":1}}],[\"盘\",{\"1\":{\"11\":1}}],[\"切换到\",{\"1\":{\"11\":1}}],[\"切换到想要放置项目的路径\",{\"1\":{\"11\":1}}],[\"执行过程中出现\",{\"1\":{\"12\":1}}],[\"执行以下命令之一\",{\"1\":{\"15\":1}}],[\"执行以下命令\",{\"1\":{\"11\":1}}],[\"执行\",{\"1\":{\"11\":2}}],[\"enhance\",{\"1\":{\"12\":1}}],[\"embedded\",{\"1\":{\"12\":1}}],[\"echarts\",{\"1\":{\"12\":1}}],[\"e\",{\"1\":{\"11\":3}}],[\"例如要切换到\",{\"1\":{\"11\":1}}],[\"主题提供的脚手架工具创建项目\",{\"1\":{\"11\":1}}],[\"使用\",{\"0\":{\"16\":1},\"1\":{\"11\":1}}],[\"使用vuepress搭建个人博客\",{\"0\":{\"4\":1}}],[\"搭建项目\",{\"0\":{\"10\":1}}],[\"push\",{\"1\":{\"15\":1}}],[\"playground\",{\"1\":{\"12\":1}}],[\"plugin\",{\"1\":{\"12\":6}}],[\"package\",{\"1\":{\"12\":2}}],[\"pages\",{\"0\":{\"16\":1},\"1\":{\"11\":1,\"16\":3}}],[\"path\",{\"1\":{\"8\":2}}],[\"press\",{\"0\":{\"18\":1}}],[\"prefix\",{\"1\":{\"9\":1}}],[\"pro\",{\"1\":{\"12\":1}}],[\"project\",{\"1\":{\"11\":3,\"12\":1}}],[\"设置协议\",{\"1\":{\"11\":1}}],[\"设置全局模块的安装路径到\",{\"1\":{\"9\":1}}],[\"设置缓存到\",{\"1\":{\"9\":1}}],[\"窗口\",{\"1\":{\"11\":1}}],[\"窗口执行以下指令\",{\"1\":{\"9\":1}}],[\"窗口输入\",{\"1\":{\"8\":1}}],[\"404\",{\"1\":{\"17\":1}}],[\"48\",{\"1\":{\"12\":1}}],[\"47\",{\"1\":{\"12\":2}}],[\"4\",{\"0\":{\"9\":1},\"1\":{\"12\":2}}],[\"能够正确显示版本号说明安装成功\",{\"1\":{\"8\":1}}],[\"view\",{\"1\":{\"12\":1}}],[\"vite\",{\"1\":{\"12\":4}}],[\"vue3\",{\"1\":{\"12\":1}}],[\"vueuse\",{\"1\":{\"12\":1}}],[\"vue\",{\"0\":{\"18\":1},\"1\":{\"12\":2}}],[\"vuepress\",{\"1\":{\"11\":2,\"12\":18}}],[\"vp\",{\"1\":{\"12\":1}}],[\"version\",{\"1\":{\"12\":1}}],[\"v\",{\"1\":{\"8\":2}}],[\"改为\",{\"1\":{\"8\":1}}],[\"npx\",{\"1\":{\"12\":1}}],[\"npm\",{\"1\":{\"8\":2,\"9\":2,\"11\":2,\"12\":2,\"15\":1}}],[\"name\",{\"1\":{\"12\":1}}],[\"not\",{\"1\":{\"12\":1,\"17\":1}}],[\"no\",{\"1\":{\"11\":1}}],[\"nodejs\",{\"1\":{\"8\":2,\"9\":2}}],[\"node\",{\"1\":{\"6\":1,\"7\":2,\"8\":9,\"9\":4}}],[\"client\",{\"1\":{\"12\":1}}],[\"clean\",{\"1\":{\"12\":2}}],[\"commit\",{\"1\":{\"15\":1}}],[\"components\",{\"1\":{\"12\":1}}],[\"core\",{\"1\":{\"12\":1,\"15\":1}}],[\"config\",{\"1\":{\"9\":2,\"14\":1,\"15\":1}}],[\"cd\",{\"1\":{\"11\":1}}],[\"cmd\",{\"1\":{\"8\":1,\"9\":1,\"11\":1}}],[\"c\",{\"1\":{\"8\":1}}],[\"cache\",{\"1\":{\"7\":1,\"8\":1,\"9\":3,\"12\":1}}],[\"中默认的\",{\"1\":{\"8\":1}}],[\"中添加\",{\"1\":{\"8\":1}}],[\"devdependencies\",{\"1\":{\"12\":2}}],[\"dev\",{\"1\":{\"12\":5}}],[\"description\",{\"1\":{\"12\":1}}],[\"docs\",{\"1\":{\"11\":1,\"12\":5,\"15\":1}}],[\"d\",{\"1\":{\"8\":2,\"9\":2}}],[\"变量值为刚刚的安装路径\",{\"1\":{\"8\":1}}],[\"在\",{\"1\":{\"8\":1}}],[\"在系统变量的\",{\"1\":{\"8\":1}}],[\"在系统变量里新建\",{\"1\":{\"8\":1}}],[\"在安装路径的根目录下新建\",{\"1\":{\"7\":1}}],[\"环境变量\",{\"0\":{\"8\":1}}],[\"30\",{\"1\":{\"12\":1}}],[\"35025\",{\"1\":{\"8\":1}}],[\"3\",{\"0\":{\"8\":1,\"16\":1},\"1\":{\"12\":5}}],[\"文件\",{\"1\":{\"14\":1}}],[\"文件中的\",{\"1\":{\"14\":1}}],[\"文件为以下内容\",{\"1\":{\"12\":1}}],[\"文件夹\",{\"1\":{\"7\":1,\"9\":2,\"12\":1}}],[\"文档\",{\"0\":{\"2\":1}}],[\"和\",{\"1\":{\"7\":1,\"8\":1}}],[\"2\",{\"0\":{\"7\":1,\"12\":1,\"15\":1},\"1\":{\"12\":16}}],[\"下载完成后执行以下命令即可在本地打开博客\",{\"1\":{\"12\":1}}],[\"下载地址\",{\"1\":{\"6\":1}}],[\"下载node\",{\"0\":{\"6\":1}}],[\"json\",{\"1\":{\"12\":1}}],[\"js\",{\"0\":{\"6\":1},\"1\":{\"6\":1}}],[\"17\",{\"1\":{\"12\":3}}],[\"11\",{\"1\":{\"12\":4}}],[\"15\",{\"1\":{\"12\":3}}],[\"16\",{\"1\":{\"12\":3}}],[\"1\",{\"0\":{\"6\":1,\"11\":1,\"14\":1},\"1\":{\"12\":8}}],[\"项目需要用到多语言么\",{\"1\":{\"11\":1}}],[\"项目\",{\"0\":{\"3\":1}}],[\"欢迎来到小鸡的项目笔记✨\",{\"1\":{\"3\":1}}],[\"欢迎来到小鸡的个人文档✨\",{\"1\":{\"2\":1}}],[\"欢迎来到小鸡的题解专题✨\",{\"1\":{\"1\":1}}],[\"欢迎来到小鸡的学习笔记✨\",{\"1\":{\"0\":1}}],[\"题解\",{\"0\":{\"1\":1}}],[\"笔记\",{\"0\":{\"0\":1}}]],\"serializationVersion\":2}}")).map(([e,t])=>[e,zt(t,{fields:["h","t","c"],storeFields:["h","t","c"]})]));self.onmessage=({data:{type:e="all",query:t,locale:s,options:n,id:o}})=>{const u=bt[s];e==="suggest"?self.postMessage([e,o,tt(t,u,n)]):e==="search"?self.postMessage([e,o,Z(t,u,n)]):self.postMessage({suggestions:[e,o,tt(t,u,n)],results:[e,o,Z(t,u,n)]})};
//# sourceMappingURL=index.js.map
