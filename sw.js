if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let d={};const t=e=>n(e,o),a={module:{uri:o},exports:d,require:t};i[o]=Promise.all(s.map((e=>a[e]||t(e)))).then((e=>(r(...e),d)))}}define(["./workbox-b7e829be"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index.37d0f684.css",revision:null},{url:"assets/index.a3e503fe.js",revision:null},{url:"assets/vendor.3a2625a8.js",revision:null},{url:"google573023f379f7259c.html",revision:"9aa04358bda9e51f756f1627aa9fa869"},{url:"index.html",revision:"f2735f3c79dde0ff9e87107bbf49e566"},{url:"favicon.ico",revision:"6ae5f30bbfdc7ab7a940c1230b6df169"},{url:"robots.txt",revision:"5e0bd1c281a62a380d7a948085bfe2d1"},{url:"apple-touch-icon.png",revision:"9dbbd9e42a46862d0eec7094003dc543"},{url:"data.json",revision:"089a0393d612e3768981961b2b434c49"},{url:"android-chrome-192x192.png",revision:"e65fd02b644a0b2b23279a0668b5afb9"},{url:"android-chrome-512x512.png",revision:"8dad7fb67cddaf77c7aeb7b8706ba64b"},{url:"manifest.webmanifest",revision:"e01b44d751d60a02976d6eec8cc66bce"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
