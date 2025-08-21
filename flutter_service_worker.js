'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "06e6b703fec0a4708755cc47cda9176f",
"version.json": "a0f41d25fd1719b8612fe88466739202",
"index.html": "9727f1cd2d30275d17f7f6492daed5d9",
"/": "9727f1cd2d30275d17f7f6492daed5d9",
"main.dart.js": "bdd3035cdefb42ecf5944b32462b1744",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/apple-touch-icon.png": "da4b7ac304581c0427295167c1e93813",
"icons/Icon-192.png": "342b2bbcd434a8c745a0eb567d483b5e",
"icons/Icon-512.png": "5a635b7178f10a862f33eea079fc9309",
"manifest.json": "f6ba128fdcbbaba2e0509a3d2bc8034a",
"app_logo.png": "789f3be46ef478f19da61b4b9d8c42ff",
"assets/AssetManifest.json": "9dc4227d4cfdb0559e48ef2ccf127140",
"assets/NOTICES": "b2a30bcaf162a547dec0335ffc06f58a",
"assets/FontManifest.json": "1447c78a57d5070944c8e596b6a3b035",
"assets/AssetManifest.bin.json": "3d7bb3b5f659643bedd3595ee7b0cdb2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "bc49149040a5df70634f938c198332a4",
"assets/fonts/MaterialIcons-Regular.otf": "49677da3e6bda5e1ea50daada0c7cb71",
"assets/assets/images/svg/medium.svg": "0dbda7fac205dd8e6c8c3a160d0753d0",
"assets/assets/images/svg/app_logo_icon_shadow.svg": "c25b3d407a23aa4aeb23c67257e9c26d",
"assets/assets/images/svg/send_icon.svg": "8106e429ba3cb6e8f5868e1f36fde52f",
"assets/assets/images/svg/github.svg": "4ef1c11fdb4812f37a54c2456828beb4",
"assets/assets/images/svg/app_logo_icon.svg": "842dd1d540aa1e7c7f7b7c50ea3c78d8",
"assets/assets/images/svg/file.svg": "f4ee44acccca432506362c8b70e675de",
"assets/assets/images/svg/instagram.svg": "8a3a795ce46055a39ec643e57a8b0c7b",
"assets/assets/images/svg/star.svg": "410473a379b3bc059be327fb27351325",
"assets/assets/images/svg/share.svg": "0b20a26109b7fe325b40f1bbf0770433",
"assets/assets/images/svg/linkedin.svg": "cc8e384cd7284942847991479908298a",
"assets/assets/images/svg/twitter.svg": "f5f1fe99a518f44750c414d2709941a8",
"assets/assets/images/svg/x_twitter.svg": "374108fbfe168f4a1b967b368cdad15c",
"assets/assets/images/svg/menu.svg": "09f6807defeb98d3f8a72a017e674966",
"assets/assets/images/download.png": "891a55516d728a9a6913e7e7d07d4075",
"assets/assets/images/social_media/github-sign.png": "a29dc3691124638b000809a7696281d5",
"assets/assets/images/social_media/medium.png": "52264341b4bef005a2d835562d2ddea9",
"assets/assets/images/social_media/twitter.png": "a8f692e1d74ae65793b6d212794bc0c2",
"assets/assets/images/social_media/linkedin.png": "dbce0cfd7ae44f852e206c24bb8c4318",
"assets/assets/images/aurum/aurum1.webp": "b25e6e9bb014b485b92084653ce871db",
"assets/assets/images/aurum/aurum5.webp": "78d255dea7f3a4d54759a3a985b26966",
"assets/assets/images/aurum/aurum4.webp": "fe44e1a78cc88007dadf553e4cb94d79",
"assets/assets/images/aurum/aurum3.webp": "514e1466382c333d17f218bfa289f72e",
"assets/assets/images/aurum/aurum2.webp": "d0dfded610d1c6e4d7ee3dc6ff7e619a",
"assets/assets/images/satish.jpeg": "eb20576eabce4abf566e01dc78689a24",
"assets/assets/images/mob/mob's1.webp": "cf22e15f24f7b4273e196449317d4da2",
"assets/assets/images/mob/mob's4.webp": "b56bb9c2a0f8a9242a639d2c93864234",
"assets/assets/images/mob/mob's2.webp": "d7d12d997f68287b0984a1f7858d2c9c",
"assets/assets/images/mob/mob's3.webp": "7e82f5edb3a3b5f671dfaea932a416df",
"assets/assets/images/hereIsWhat/like4.webp": "e7d61a130b07520b5529cfd75e7a1271",
"assets/assets/images/hereIsWhat/like5.webp": "2bdd3e4de58315759d6bfa7e766a9fca",
"assets/assets/images/hereIsWhat/like2.webp": "862c4a8f212d5edda70073509fdfc0b6",
"assets/assets/images/hereIsWhat/like3.webp": "69d0a87d931d4021bde3b487300ff617",
"assets/assets/images/hereIsWhat/like1.webp": "2f357705cb6410df67e6fdad770c98f2",
"assets/assets/images/astro_swamig/image1.jpeg": "fe1a5dcea037a788f20523ddd54c47ef",
"assets/assets/images/astro_swamig/image4.jpeg": "cca022bacf298ba87aaed69250663bd4",
"assets/assets/images/astro_swamig/image5.jpeg": "145ec71f4e21adfb6d1236315cac3887",
"assets/assets/images/astro_swamig/image2.jpeg": "4b9086d4ab61405dd002877dc83a35d9",
"assets/assets/images/astro_swamig/image3.jpeg": "95e71f02527ffaeeddcad49c288b1517",
"assets/assets/fonts/calibre/CalibreRegular.otf": "93957dd48040dc5deb1cd40b4385de45",
"assets/assets/fonts/PlusJakartaSans-Medium.ttf": "17380874f87d6fa63ab3c09a14e6b217",
"assets/assets/fonts/PlusJakartaSans-Regular.ttf": "086a38d660fc107d0a20aa9a91979237",
"assets/assets/fonts/sf-mono/FontsFree-Net-SFMono-Medium.ttf": "d5f1699ec7ecd300a74dee1c77e36573",
"assets/assets/fonts/sf-mono/FontsFree-Net-SFMono-Semibold.ttf": "deee76cb966b8afecc5b548fdbfd403d",
"assets/assets/fonts/sf-mono/FontsFree-Net-SFMono-Regular.ttf": "a949ae614efecb27156e46a195bc8b44",
"assets/assets/fonts/sanFrancisco/pro/SF-Pro-Text-Heavy.otf": "d7829d9b3a4514b125d758dcace0613b",
"assets/assets/fonts/sanFrancisco/pro/SF-Pro-Text-MediumItalic.otf": "9f5c9e1ad763571b8513bb88cd4fa23b",
"assets/assets/fonts/sanFrancisco/pro/SFUIText-Regular.otf": "888e0f3f1d925d57beaf9cc4a7b80dbc",
"assets/assets/fonts/sanFrancisco/pro/SF-Pro-Text-Regular.otf": "404e4373cba1344d28a4a257152ac8b8",
"assets/assets/fonts/sanFrancisco/pro/SF-Pro-Text-Bold.otf": "5b6c7cdfe0acd0fcc93cef7984a08740",
"assets/assets/fonts/sanFrancisco/pro/SF-Pro-Text-Medium.otf": "9491854a8b6ec3a0c915668083f18fde",
"assets/assets/fonts/PlusJakartaSans-Bold.ttf": "1c51d1fb8daa95760a726496b2c5efd7",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
