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

importScripts("workbox-v3.5.0/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.5.0"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-bbc7719f29c90a70f242.js"
  },
  {
    "url": "app-d197bd271eb6e1f6d5fb.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-ddbafa6d363b8004af38.js"
  },
  {
    "url": "index.html",
    "revision": "a89b3df0818e4f21d1aa52dcfde32b0f"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "0f9b88ce9e3a41dbcef0cb5091649228"
  },
  {
    "url": "component---src-templates-index-js.76aebc30242309bffc44.css"
  },
  {
    "url": "component---src-templates-index-js-4487b253892796f8a3cb.js"
  },
  {
    "url": "0-2c6fc92108b97a1c999f.js"
  },
  {
    "url": "static/d/169/path---index-6a9-tp8tdAW6oSLAhOBJYqfdmy4K0Us.json",
    "revision": "4dc43a672ca95bb6393b86b11eb63d82"
  },
  {
    "url": "component---src-pages-404-js.76aebc30242309bffc44.css"
  },
  {
    "url": "component---src-pages-404-js-cfca080382d5aa6f6b0b.js"
  },
  {
    "url": "static/d/164/path---404-html-516-62a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "968ab82aa3f45624872f19e5a504aaa8"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});