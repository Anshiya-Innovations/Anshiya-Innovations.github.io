const CACHE_NAME = "anshiya-assets-cache-v1";

self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const requestUrl = new URL(event.request.url);

  // Intercept and cache requests to the static assets folder (/assets/*)
  if (requestUrl.pathname.includes("/assets/")) {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }

        return fetch(event.request)
          .then((response) => {
            if (
              !response ||
              (response.status !== 200 && response.status !== 304)
            ) {
              return response;
            }

            const responseToCache = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseToCache);
            });

            // Construct a new response with overridden Cache-Control headers to optimize cache TTL on mobile
            try {
              const newHeaders = new Headers(response.headers);
              newHeaders.set(
                "Cache-Control",
                "public, max-age=31536000, immutable"
              );

              return new Response(response.body, {
                status: response.status,
                statusText: response.statusText,
                headers: newHeaders,
              });
            } catch (err) {
              // Fail-safe: fallback to the original network response if body constructor is not supported
              return response;
            }
          })
          .catch(() => {
            return new Response("Asset unavailable offline", {
              status: 503,
              statusText: "Service Unavailable",
              headers: { "Content-Type": "text/plain" },
            });
          });
      })
    );
  }
});
