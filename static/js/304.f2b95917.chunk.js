(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[304],{3304:function(t,e,n){"use strict";n.r(e),n.d(e,{ContactsPage:function(){return q},default:function(){return L}});var r,a,i,o,u,s,c,l,f=n(2791),d=n(5048),h=n(168),p=n(225),x=(p.Z.div(r||(r=(0,h.Z)(["\n    margin-left :15px;\n    margin-right :15px;\n    width:1200px"]))),p.Z.h1(a||(a=(0,h.Z)([""])))),m=n(9439),g=n(6429),v=n.n(g),Z=n(6151),b=p.Z.form(i||(i=(0,h.Z)(["\n    display: flex;\n    flex-direction: column;\n    gap:15px;\n    "]))),w=(0,p.Z)(Z.Z)(o||(o=(0,h.Z)(["\n    width:100px;    \n    text-align:center"]))),j=(p.Z.input(u||(u=(0,h.Z)(["\n    display: flex;\n    flex-direction: column;\n    width: 200px;"]))),p.Z.label(s||(s=(0,h.Z)([""])))),y=n(8157),C=n(9497),k=n(3329),A=function(){var t=(0,f.useState)(""),e=(0,m.Z)(t,2),n=e[0],r=e[1],a=(0,f.useState)(""),i=(0,m.Z)(a,2),o=i[0],u=i[1],s=(0,y.Jx)().data,c=(0,y.O5)(),l=(0,m.Z)(c,1)[0],d=function(t,e){!function(t,e){return void 0!==(null===t||void 0===t?void 0:t.find((function(t){return t.name===e})))}(s,t)?l({id:v().generate(),name:t,number:e}):alert("".concat(t," is already in contacts"))};return(0,k.jsxs)(b,{autoComplete:"off",onSubmit:function(t){t.preventDefault();var e={name:n,number:o};d(e),console.log("contact: ",e),u(""),r(""),t.target.reset()},children:[(0,k.jsx)(j,{children:(0,k.jsx)(C.Z,{type:"text",name:"name",onChange:function(t){r(t.currentTarget.value)},pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",value:n,id:"filled-basic",label:"Name",variant:"filled",required:!0})}),(0,k.jsx)(j,{children:(0,k.jsx)(C.Z,{type:"text",name:"telephone",onChange:function(t){u(t.currentTarget.value)},pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",value:o,id:"filled-basic",label:"Phone",variant:"filled",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"})}),(0,k.jsx)(w,{variant:"contained",type:"submit",children:"Submit"})]})},z=n(7883),M=n(6165),V=(p.Z.input(c||(c=(0,h.Z)(["\n    display: flex;\n    flex-direction: column;\n    width: 200px;"]))),p.Z.label(l||(l=(0,h.Z)([""])))),S=function(){var t=(0,d.v9)(z.m),e=(0,d.I0)();return(0,k.jsx)(V,{children:(0,k.jsx)(C.Z,{variant:"filled",label:"Find contacts by name",onInput:function(t){var n=t.target;e((0,M.V)(n.value))},pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",value:t})})},I=(0,f.lazy)((function(){return n.e(360).then(n.bind(n,8360))})),q=function(){var t=(0,d.I0)(),e=(0,y.Jx)(),n=e.isLoading,r=e.isSuccess,a=(0,d.v9)(z.m);return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(A,{}),(0,k.jsx)(x,{children:"Contacts"}),(0,k.jsx)(S,{onInput:function(e){t((0,M.V)(e))},value:a}),n&&(0,k.jsx)(x,{children:"Loading..."}),r&&(0,k.jsx)(f.Suspense,{fallback:(0,k.jsx)("div",{children:"Loading..."}),children:(0,k.jsx)(I,{})})]})},L=q},7883:function(t,e,n){"use strict";n.d(e,{m:function(){return r}});var r=function(t){return t.filter.search}},6429:function(t,e,n){"use strict";t.exports=n(5274)},8857:function(t,e,n){"use strict";var r,a,i,o=n(5408),u="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";function s(){i=!1}function c(t){if(t){if(t!==r){if(t.length!==u.length)throw new Error("Custom alphabet for shortid must be "+u.length+" unique characters. You submitted "+t.length+" characters: "+t);var e=t.split("").filter((function(t,e,n){return e!==n.lastIndexOf(t)}));if(e.length)throw new Error("Custom alphabet for shortid must be "+u.length+" unique characters. These characters were not unique: "+e.join(", "));r=t,s()}}else r!==u&&(r=u,s())}function l(){return i||(i=function(){r||c(u);for(var t,e=r.split(""),n=[],a=o.nextValue();e.length>0;)a=o.nextValue(),t=Math.floor(a*e.length),n.push(e.splice(t,1)[0]);return n.join("")}())}t.exports={get:function(){return r||u},characters:function(t){return c(t),r},seed:function(t){o.seed(t),a!==t&&(s(),a=t)},lookup:function(t){return l()[t]},shuffled:l}},7098:function(t,e,n){"use strict";var r,a,i=n(2226);n(8857);t.exports=function(t){var e="",n=Math.floor(.001*(Date.now()-1567752802062));return n===a?r++:(r=0,a=n),e+=i(7),e+=i(t),r>0&&(e+=i(r)),e+=i(n)}},2226:function(t,e,n){"use strict";var r=n(8857),a=n(9139),i=n(2483);t.exports=function(t){for(var e,n=0,o="";!e;)o+=i(a,r.get(),1),e=t<Math.pow(16,n+1),n++;return o}},5274:function(t,e,n){"use strict";var r=n(8857),a=n(7098),i=n(6046),o=n(5347)||0;function u(){return a(o)}t.exports=u,t.exports.generate=u,t.exports.seed=function(e){return r.seed(e),t.exports},t.exports.worker=function(e){return o=e,t.exports},t.exports.characters=function(t){return void 0!==t&&r.characters(t),r.shuffled()},t.exports.isValid=i},6046:function(t,e,n){"use strict";var r=n(8857);t.exports=function(t){return!(!t||"string"!==typeof t||t.length<6)&&!new RegExp("[^"+r.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]").test(t)}},9139:function(t){"use strict";var e,n="object"===typeof window&&(window.crypto||window.msCrypto);e=n&&n.getRandomValues?function(t){return n.getRandomValues(new Uint8Array(t))}:function(t){for(var e=[],n=0;n<t;n++)e.push(Math.floor(256*Math.random()));return e},t.exports=e},5408:function(t){"use strict";var e=1;t.exports={nextValue:function(){return(e=(9301*e+49297)%233280)/233280},seed:function(t){e=t}}},5347:function(t){"use strict";t.exports=0},2483:function(t){t.exports=function(t,e,n){for(var r=(2<<Math.log(e.length-1)/Math.LN2)-1,a=-~(1.6*r*n/e.length),i="";;)for(var o=t(a),u=a;u--;)if((i+=e[o[u]&r]||"").length===+n)return i}}}]);
//# sourceMappingURL=304.f2b95917.chunk.js.map