const version = '20221122101738';
const cacheName = `static::${version}`;

const buildContentBlob = () => {
  return ["/jekyll/update/2018/03/03/welcome-to-jekyll/","/404/","/assets/revealthemes/anu.css","/assets/revealthemes/reveal/black.css","/assets/revealthemes/crepre-dark.css","/assets/revealthemes/crepre.css","/imps/","/blog/","/","/assets/mdn/mdn-lecture/","/assets/revealthemes/reveal/moon.css","/assets/revealthemes/reveal-box-slides.css","/assets/revealthemes/reveal/solarized.css","/assets/styles.css","/assets/revealthemes/reveal/white.css","/workshop/","/manifest.json","/assets/search.json","/redirects.json","/sitemap.xml","/robots.txt","/feed.xml","/assets/revealthemes/anu.css.map","/assets/revealthemes/reveal/black.css.map","/assets/revealthemes/crepre-dark.css.map","/assets/revealthemes/crepre.css.map","/assets/revealthemes/reveal/moon.css.map","/assets/revealthemes/reveal-box-slides.css.map","/assets/revealthemes/reveal/solarized.css.map","/assets/styles.css.map","/assets/revealthemes/reveal/white.css.map","/assets/network_logo.svg", "/assets/default-offline-image.png", "/assets/scripts/fetch.js"
  ]
}

const updateStaticCache = () => {
  return caches.open(cacheName).then(cache => {
    return cache.addAll(buildContentBlob());
  });
};

const clearOldCache = () => {
  return caches.keys().then(keys => {
    // Remove caches whose name is no longer valid.
    return Promise.all(
      keys
        .filter(key => {
          return key !== cacheName;
        })
        .map(key => {
          console.log(`Service Worker: removing cache ${key}`);
          return caches.delete(key);
        })
    );
  });
};

self.addEventListener("install", event => {
  event.waitUntil(
    updateStaticCache().then(() => {
      console.log(`Service Worker: cache updated to version: ${cacheName}`);
    })
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(clearOldCache());
});

self.addEventListener("fetch", event => {
  let request = event.request;
  let url = new URL(request.url);

  // Only deal with requests from the same domain.
  if (url.origin !== location.origin) {
    return;
  }

  // Always fetch non-GET requests from the network.
  if (request.method !== "GET") {
    event.respondWith(fetch(request));
    return;
  }

  // Default url returned if page isn't cached
  let offlineAsset = "/offline/";

  if (request.url.match(/\.(jpe?g|png|gif|svg)$/)) {
    // If url requested is an image and isn't cached, return default offline image
    offlineAsset = "/assets/default-offline-image.png";
  }

  // For all urls request image from network, then fallback to cache, then fallback to offline page
  event.respondWith(
    fetch(request).catch(async () => {
      return (await caches.match(request)) || caches.match(offlineAsset);
    })
  );
  return;
});
