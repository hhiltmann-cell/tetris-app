javascript

const CACHE_NAME = 'tetris-v2';
const urlsToCache = ['./', './index.html'];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache)));
});

self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request).then(response => response || fetch(event.request)));
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(cacheNames.map(cacheName => {
        if (cacheName !== CACHE_NAME) return caches.delete(cacheName);
      }));
    })
  );
});
```

**Ändere `CACHE_NAME` von `'tetris-v1'` zu `'tetris-v2'`** - das zwingt einen neuen Cache!

---

## 🎯 **SCHNELLSTE LÖSUNG:**

**Mach das:**

1. **Deinstalliere die App vom Handy** (Icon lange drücken → Deinstallieren)

2. **Ändere den Cache-Namen in sw.js:**
   - Gehe zu: https://github.com/hhiltmann-cell/tetris-app/blob/main/sw.js
   - Klicke ✏️ Edit
   - Ändere Zeile 1: `const CACHE_NAME = 'tetris-v2';`
   - Commit

3. **Warte 1 Minute**

4. **Öffne frisch im Chrome:**
```
   https://hhiltmann-cell.github.io/tetris-app/