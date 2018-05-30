/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "index.html",
    "revision": "e0108b11f9d9c69704ab67114f516d3f"
  },
  {
    "url": "public/dist/build/app.012b1a6ea56f359fc9c4.js",
    "revision": "c4b9d663f7045717cb0be05f77e558e8"
  },
  {
    "url": "public/dist/build/app.bb42f3ae0123afaf276a4f4586ed287c.css",
    "revision": "bb42f3ae0123afaf276a4f4586ed287c"
  },
  {
    "url": "public/dist/build/app.css",
    "revision": "fd1b08d2e8019f219f5b2380e5959910"
  },
  {
    "url": "public/dist/build/app.js",
    "revision": "7edfb85744bb8231e66a225f27399b8b"
  },
  {
    "url": "public/dist/favicon/favicon.ico",
    "revision": "5bd97c3537621cbe382f3dd16b472bc1"
  },
  {
    "url": "public/dist/favicon/logo-1024.png",
    "revision": "7fe55af7bc41035c46222196c1c83c10"
  },
  {
    "url": "public/dist/favicon/logo-128.png",
    "revision": "98b06b8a6109a08eafc648fec26c696f"
  },
  {
    "url": "public/dist/favicon/logo-168.png",
    "revision": "1eb3ce79e53e95c8497453ed292a3e0b"
  },
  {
    "url": "public/dist/favicon/logo-192.png",
    "revision": "83e9ded61610a9e83c871482ebb185a5"
  },
  {
    "url": "public/dist/favicon/logo-256.png",
    "revision": "252599975e44db9d3019f595323067b7"
  },
  {
    "url": "public/dist/favicon/logo-32.png",
    "revision": "61e3977aff5acc237bebc855a65995df"
  },
  {
    "url": "public/dist/favicon/logo-512.png",
    "revision": "5dc5dc26a0d5bebec4bb5f817f1a7dac"
  },
  {
    "url": "public/dist/favicon/logo-64.png",
    "revision": "ef707367f68763eb459840e8242d5931"
  },
  {
    "url": "public/dist/favicon/logo-96.png",
    "revision": "c3254efb23abc4b1b1114a9dd16221f3"
  },
  {
    "url": "site.js",
    "revision": "ff3ff025b2d0a5d3d9f0794996bc3d0b"
  },
  {
    "url": "timeship.webmanifest",
    "revision": "e31ed106fdaf7f4c857f125ec00431bc"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/https:\/\/fonts.googleapis.com\/css?family/, workbox.strategies.cacheFirst(), 'GET');
workbox.routing.registerRoute(/https:\/\/sid-man-timezones.firebaseapp.com\//, workbox.strategies.staleWhileRevalidate(), 'GET');
