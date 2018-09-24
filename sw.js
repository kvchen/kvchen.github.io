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
    "url": "webpack-runtime-6930a2f54cc5f9238ee7.js"
  },
  {
    "url": "app-a2d84c634ca844ef6572.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-ddbafa6d363b8004af38.js"
  },
  {
    "url": "index.html",
    "revision": "87833f477f37c57e27fb41124144d9da"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "cf825965e024ef384d511ab779676f73"
  },
  {
    "url": "component---src-templates-index-js.18d1f1de06ebbc30083c.css"
  },
  {
    "url": "component---src-templates-index-js-4487b253892796f8a3cb.js"
  },
  {
    "url": "0-2c6fc92108b97a1c999f.js"
  },
  {
    "url": "static/d/336/path---index-6a9-humB6Ak42k9YS8yMct2DpJM0cw.json",
    "revision": "4e607aaa13b7936f7b6734ddaec942b8"
  },
  {
    "url": "component---src-pages-404-js.18d1f1de06ebbc30083c.css"
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