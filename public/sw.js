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

  // Intercept and cache static assets (/assets/*, /fonts/*, /libs/*, and common static files)
  const isStaticAsset =
    requestUrl.pathname.includes("/assets/") ||
    requestUrl.pathname.includes("/fonts/") ||
    requestUrl.pathname.includes("/libs/") ||
    /\.(woff2?|ttf|otf|sfnt|css|js|webp|png|jpe?g|gif|svg|ico)$/i.test(requestUrl.pathname);

  const isHtmlRequest = event.request.mode === "navigate" || requestUrl.pathname.endsWith(".html");

  if (isStaticAsset && !isHtmlRequest) {
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

            // Construct a new response with overridden Cache-Control headers to optimize cache TTL on mobile
            try {
              const newHeaders = new Headers(response.headers);
              newHeaders.set(
                "Cache-Control",
                "public, max-age=31536000, immutable"
              );

              // Clone the response first to read its body safely
              const responseClone = response.clone();
              const modifiedResponse = new Response(responseClone.body, {
                status: response.status,
                statusText: response.statusText,
                headers: newHeaders,
              });

              // Cache the modified response (which includes the custom Cache-Control header)
              const responseToCache = modifiedResponse.clone();
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(event.request, responseToCache);
              });

              return modifiedResponse;
            } catch (err) {
              // Fail-safe: fallback to caching and returning the original network response
              const responseToCache = response.clone();
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(event.request, responseToCache);
              });
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
