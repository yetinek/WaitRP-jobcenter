(function(){var e={5771:function(e,t,n){"use strict";var r=n(9242),s=n(3396),o=n(7139),i=n(8491),c=n(5860);const u={key:0,class:"jcenterContainer"},a={class:"navContainer"},l=(0,s._)("div",{class:"title"},"Wybierz prace",-1),d={class:"jobsSelector"},p=["onClick"],b={class:"title"},f=["src"],g={class:"desc"},v={key:0,class:"groupJob"},h=(0,s._)("img",{src:i,alt:""},null,-1),m={class:"desc"},J={class:"jobInformations"},_=(0,s._)("img",{src:c},null,-1),w=(0,s._)("div",{class:"desc"},"Zamknij",-1),k=[_,w];function y(e,t,i,c,_,w){const y=(0,s.up)("JobContainer");return _.Jobs&&_.Jobs.length>0?(0,s.wy)(((0,s.wg)(),(0,s.iD)("div",u,[(0,s._)("div",a,[l,(0,s._)("div",d,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(_.Jobs,((e,t)=>((0,s.wg)(),(0,s.iD)("div",{class:(0,o.C_)(["job",{selected:t===_.selectedIndex}]),key:t,onClick:e=>w.selectJob(t)},[(0,s._)("div",b,[(0,s._)("img",{src:n(968)(`./${e.JobId}.svg`),alt:""},null,8,f),(0,s._)("div",g,(0,o.zw)(e.JobName),1)]),e.GroupJob?((0,s.wg)(),(0,s.iD)("div",v,[h,(0,s._)("div",m,(0,o.zw)(e.GroupUsers),1)])):(0,s.kq)("",!0)],10,p)))),128))])]),(0,s._)("div",J,[(0,s._)("div",{class:"closeBtn",onClick:t[0]||(t[0]=e=>w.closeUi())},k),(0,s.Wm)(y,{closeUi:w.closeUi,currentJob:_.currentJob},null,8,["closeUi","currentJob"])])],512)),[[r.F8,_.uiOpen]]):(0,s.kq)("",!0)}var O=n(5730),j=n(611),x=n(6428);const C=e=>((0,s.dD)("data-v-6994d6fb"),e=e(),(0,s.Cn)(),e),U={class:"content"},D={class:"container"},z={class:"jobInfo"},T={key:0,class:"item"},I=C((()=>(0,s._)("img",{src:O,alt:""},null,-1))),N={class:"desc"},F={class:"item"},M=C((()=>(0,s._)("img",{src:j,alt:""},null,-1))),E={class:"desc"},S={class:"item"},$=C((()=>(0,s._)("img",{src:x,alt:""},null,-1))),G={class:"desc"},P={class:"jobTitle"},q={class:"jobDescription"};function H(e,t,r,i,c,u){return(0,s.wg)(),(0,s.iD)("div",U,[(0,s._)("div",{class:"jobImage",style:(0,o.j5)({background:"url("+n(2715)(`./${r.currentJob.JobId}.png`)+")","background-size":"cover","background-repeat":"no-repeat","background-position":"center"})},null,4),(0,s._)("div",D,[(0,s._)("div",z,[r.currentJob.GroupJob?((0,s.wg)(),(0,s.iD)("div",T,[I,(0,s._)("div",N,(0,o.zw)(r.currentJob.GroupUsers)+" osoby",1)])):(0,s.kq)("",!0),(0,s._)("div",F,[M,(0,s._)("div",E,(0,o.zw)(r.currentJob.JobSalary)+" $",1)]),(0,s._)("div",S,[$,(0,s._)("div",G,(0,o.zw)(r.currentJob.JobTime)+" minut",1)])]),(0,s._)("div",P,(0,o.zw)(r.currentJob.JobName),1),(0,s._)("div",q,(0,o.zw)(r.currentJob.JobDesc),1),(0,s._)("div",{class:"jobBtn",onClick:t[0]||(t[0]=e=>u.setJob(r.currentJob.JobId))},"Dołącz do pracy")])])}var L={name:"JobContainer",props:{currentJob:Object,closeUi:Function},methods:{postMessage(e,t){fetch(`http://w_jobcenter/${e}`,{method:"POST",headers:{"Content-Type":"application/json; charset=UTF-8"},body:JSON.stringify(t)})},setJob(e){this.postMessage("setJob",{job:e}),this.closeUi()}}},Z=n(89);const B=(0,Z.Z)(L,[["render",H],["__scopeId","data-v-6994d6fb"]]);var W=B,A={name:"App",components:{JobContainer:W},data(){return{Jobs:!1,uiOpen:!1,currentJob:[],selectedIndex:0}},created(){this.currentJob=this.Jobs[0]},methods:{selectJob(e){this.currentJob=this.Jobs[e],this.selectedIndex=e},closeUi(){this.uiOpen=!1,this.postMessage("close",{})},eventHandler(e){"open"==e.data.action&&(this.uiOpen=!0,this.Jobs=e.data.jobs,this.selectedIndex=0,this.currentJob=this.Jobs[0])},postMessage(e,t){fetch(`http://w_jobcenter/${e}`,{method:"POST",headers:{"Content-Type":"application/json; charset=UTF-8"},body:JSON.stringify(t)})}},mounted(){window.addEventListener("message",this.eventHandler)}};const K=(0,Z.Z)(A,[["render",y]]);var Y=K;(0,r.ri)(Y).mount("#app")},2715:function(e,t,n){var r={"./fisher.png":8025,"./garbage.png":763,"./grower.png":4170,"./luckyplucker.png":153};function s(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}s.keys=function(){return Object.keys(r)},s.resolve=o,e.exports=s,s.id=2715},968:function(e,t,n){var r={"./close.svg":5860,"./dolar.svg":611,"./fisher.svg":4133,"./garbage.svg":7706,"./grower.svg":5453,"./luckyplucker.svg":5502,"./time.svg":6428,"./user.svg":5730,"./users.svg":8491};function s(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}s.keys=function(){return Object.keys(r)},s.resolve=o,e.exports=s,s.id=968},5860:function(e,t,n){"use strict";e.exports=n.p+"img/close.b1aac776.svg"},611:function(e,t,n){"use strict";e.exports=n.p+"img/dolar.f770e204.svg"},4133:function(e,t,n){"use strict";e.exports=n.p+"img/fisher.0eae087d.svg"},7706:function(e,t,n){"use strict";e.exports=n.p+"img/garbage.4849d126.svg"},5453:function(e,t,n){"use strict";e.exports=n.p+"img/grower.f13d5ae1.svg"},5502:function(e,t,n){"use strict";e.exports=n.p+"img/luckyplucker.fcbc29ec.svg"},6428:function(e,t,n){"use strict";e.exports=n.p+"img/time.2e4119a2.svg"},5730:function(e,t,n){"use strict";e.exports=n.p+"img/user.afaf38e4.svg"},8491:function(e,t,n){"use strict";e.exports=n.p+"img/users.937ba705.svg"},8025:function(e,t,n){"use strict";e.exports=n.p+"img/fisher.040bd4df.png"},763:function(e,t,n){"use strict";e.exports=n.p+"img/garbage.040bd4df.png"},4170:function(e,t,n){"use strict";e.exports=n.p+"img/grower.040bd4df.png"},153:function(e,t,n){"use strict";e.exports=n.p+"img/luckyplucker.040bd4df.png"}},t={};function n(r){var s=t[r];if(void 0!==s)return s.exports;var o=t[r]={exports:{}};return e[r].call(o.exports,o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,r,s,o){if(!r){var i=1/0;for(l=0;l<e.length;l++){r=e[l][0],s=e[l][1],o=e[l][2];for(var c=!0,u=0;u<r.length;u++)(!1&o||i>=o)&&Object.keys(n.O).every((function(e){return n.O[e](r[u])}))?r.splice(u--,1):(c=!1,o<i&&(i=o));if(c){e.splice(l--,1);var a=s();void 0!==a&&(t=a)}}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[r,s,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.p=""}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var s,o,i=r[0],c=r[1],u=r[2],a=0;if(i.some((function(t){return 0!==e[t]}))){for(s in c)n.o(c,s)&&(n.m[s]=c[s]);if(u)var l=u(n)}for(t&&t(r);a<i.length;a++)o=i[a],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(l)},r=self["webpackChunkw_urzaad"]=self["webpackChunkw_urzaad"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(5771)}));r=n.O(r)})();
//# sourceMappingURL=app.303886a4.js.map