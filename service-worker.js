if(!self.define){let e,c={};const s=(s,i)=>(s=new URL(s+".js",i).href,c[s]||new Promise((c=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=c,document.head.appendChild(e)}else e=s,importScripts(s),c()})).then((()=>{let e=c[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,a)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(c[n])return;let r={};const o=e=>s(e,n),p={module:{uri:n},exports:r,require:o};c[n]=Promise.all(i.map((e=>p[e]||o(e)))).then((e=>(a(...e),r)))}}define(["./workbox-3e98e12a"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/pc-pwa/css/app.492a787e.css",revision:null},{url:"/pc-pwa/css/app.492a787e.css.gz",revision:"4a1594092700554c430043b6e3bba7f0"},{url:"/pc-pwa/css/chunk-07a554d1.b8137bde.css",revision:null},{url:"/pc-pwa/css/chunk-09e0c16d.b8137bde.css",revision:null},{url:"/pc-pwa/css/chunk-eb67f20c.b8137bde.css",revision:null},{url:"/pc-pwa/css/chunk-vendors.1e73e159.css",revision:null},{url:"/pc-pwa/css/chunk-vendors.1e73e159.css.gz",revision:"b6ddd0063064f52b949a636787110329"},{url:"/pc-pwa/css/login.8cec4273.css",revision:null},{url:"/pc-pwa/favicon.ico",revision:"1ba2ae710d927f13d483fd5d1e548c9b"},{url:"/pc-pwa/fonts/ionicons.143146fa.woff2",revision:"143146fa24554ae2c5ac0a3982abb952"},{url:"/pc-pwa/fonts/ionicons.99ac3308.woff",revision:"99ac3308dd8ee14f749f51538d0d5b9e"},{url:"/pc-pwa/fonts/ionicons.d535a25a.ttf",revision:"d535a25a79fb1365ae814b61e88fae71"},{url:"/pc-pwa/img/empty-image-default.0bc9958e.png",revision:"0bc9958ed5c89df9e4e55f8518f46ab8"},{url:"/pc-pwa/img/empty-image-search.75774dd6.png",revision:"75774dd6a2f0c76fd1b8ca8ba028f6e0"},{url:"/pc-pwa/img/error-401.98bba5b1.svg",revision:"98bba5b14000a95bfc780ac7777a9b4b"},{url:"/pc-pwa/img/error-404.94756dcf.svg",revision:"94756dcfa05f39d9ff47762c7a69cf21"},{url:"/pc-pwa/img/error-500.a371eabc.svg",revision:"a371eabc3fa6188743bd211712005c04"},{url:"/pc-pwa/img/iconfont.28f25a95.svg",revision:"28f25a952837b4421547f8cee43b762b"},{url:"/pc-pwa/img/ionicons.a2c4a261.svg",revision:"a2c4a261a239aa84463dc70e4bac9b9a"},{url:"/pc-pwa/js/app.781bf77f.js",revision:null},{url:"/pc-pwa/js/app.781bf77f.js.gz",revision:"8eaf0f11c477724fd2972f38deddec0c"},{url:"/pc-pwa/js/chunk-07a554d1.542c06b4.js",revision:null},{url:"/pc-pwa/js/chunk-09e0c16d.ba727b9d.js",revision:null},{url:"/pc-pwa/js/chunk-2d0e19c3.569466d3.js",revision:null},{url:"/pc-pwa/js/chunk-eb67f20c.50e292f7.js",revision:null},{url:"/pc-pwa/js/chunk-vendors.b01cae03.js",revision:null},{url:"/pc-pwa/js/chunk-vendors.b01cae03.js.gz",revision:"60dd7b1f389636893574e2a114eed0ec"},{url:"/pc-pwa/js/login.dca2f153.js",revision:null}],{})}));
