// Service Worker 注册成功后，浏览器访问的每个请求都会经过 fetch 事件拦截
// Service Worker 注册失败，请求不会进入 fetch 事件
self.addEventListener('fetch', function (event) {
    
    // 打印请求资源网址
    console.log('url is', event.request.url)

    event.respondWith(
        // caches 是全局变量，它就是缓存对象
        // 这一步是判断缓存中是否有该资源
        caches.match(event.request).then(function (cacheRes) {
            // cacheRes 不为空，缓存中有该资源，直接返回给浏览器
            // 省去一次 http 请求
            if (cacheRes) {
                return cacheRes;
            }

            // cacheRes 为空，表示缓存中没有该请求
            // 把原始请求拷过来
            var request = event.request.clone(); 

            // fetch 是浏览器自带的请求库，往服务端发送请求
            return fetch(request).then(function (httpRes) {
                // 请求失败了，直接返回失败的结果就好了。。
                if (!httpRes || httpRes.status !== 200) {
                    return httpRes;
                }

                // 请求成功的话，将响应添加到缓存中
                // 下一次请求相同资源时直接从缓存中拿资源，就不用再发请求了
                var responseClone = httpRes.clone();
                caches.open('offline-cache-v1').then(function (cache) {
                    cache.put(event.request, responseClone);
                });

                return httpRes;
            });
        })
    );
})