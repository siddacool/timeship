if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let d={};const t=e=>n(e,o),c={module:{uri:o},exports:d,require:t};i[o]=Promise.all(s.map((e=>c[e]||t(e)))).then((e=>(r(...e),d)))}}define(["./workbox-b7e829be"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index.a7724391.js",revision:null},{url:"assets/index.fdb72ef0.css",revision:null},{url:"assets/vendor.3a2625a8.js",revision:null},{url:"index.html",revision:"b5d7cbf714f4c79c718a7847b9ed2b93"},{url:"favicon.ico",revision:"6ae5f30bbfdc7ab7a940c1230b6df169"},{url:"robots.txt",revision:"5e0bd1c281a62a380d7a948085bfe2d1"},{url:"apple-touch-icon.png",revision:"9dbbd9e42a46862d0eec7094003dc543"},{url:"data.json",revision:"089a0393d612e3768981961b2b434c49"},{url:"android-chrome-192x192.png",revision:"e65fd02b644a0b2b23279a0668b5afb9"},{url:"android-chrome-512x512.png",revision:"8dad7fb67cddaf77c7aeb7b8706ba64b"},{url:"manifest.webmanifest",revision:"e01b44d751d60a02976d6eec8cc66bce"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
