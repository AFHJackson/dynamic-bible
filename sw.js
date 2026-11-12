// Generated from the published reader assets; sw.js itself is excluded from its hash.
const CACHE = 'dynamic-bible-eef3b362a7d8064b';
const PRECACHE = ["./.nojekyll", "./experiments/john21-str-01.html", "./genesis1.html", "./genesis10.html", "./genesis11.html", "./genesis12.html", "./genesis2.html", "./genesis3.html", "./genesis4.html", "./genesis5.html", "./genesis6.html", "./genesis7.html", "./genesis8.html", "./genesis9.html", "./hebrews11.html", "./icons/icon-192.png", "./icons/icon-512.png", "./icons/maskable-512.png", "./index.html", "./john21.html", "./manifest.webmanifest", "./nav.json", "./psalm81.html", "./psalm82.html", "./romans12.html"];
self.addEventListener('install', event => {event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(PRECACHE)).then(()=>self.skipWaiting()));});
self.addEventListener('activate', event => {event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith('dynamic-bible-') && key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch', event => {
  if(event.request.method!=='GET' || new URL(event.request.url).origin!==self.location.origin) return;
  event.respondWith(caches.open(CACHE).then(async cache=>{
    const saved=await cache.match(event.request);
    const update=fetch(event.request).then(response=>{if(response.ok) return cache.put(event.request,response.clone()).then(()=>response);return response;});
    if(saved){event.waitUntil(update.catch(()=>{}));return saved;}
    return update;
  }));
});
