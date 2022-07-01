// Service Worker 注册成功后，浏览器访问的每个请求都会经过 fetch 事件拦截
// Service Worker 注册失败，请求不会进入 fetch 事件
// var request = window.indexedDB.open("MyTestDatabase");

/*
self.addEventListener('fetch', function (event) {
    
    // 打印请求资源网址
    console.info('url is', event.request.url)
    
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
                caches.open('offline-cache-v2').then(function (cache) {
                    cache.put(event.request, responseClone);
                });

                return httpRes;
            });
        })
    );
})
*/
 
/**/

var cacheName = 'js13kPWA-v2';
var contentToCache = [
    '/docs/01-左耳听风/html/08丨程序员练级攻略 (23讲)/69丨程序员练级攻略：开篇词.html',
    '/docs/01-左耳听风/html/08丨程序员练级攻略 (23讲)/70丨程序员练级攻略：零基础启蒙.html',
    '/docs/01-左耳听风/html/08丨程序员练级攻略 (23讲)/71丨程序员练级攻略：正式入门.html',
    '/docs/01-左耳听风/html/08丨程序员练级攻略 (23讲)/72丨程序员练级攻略：程序员修养.html',
    '/docs/01-左耳听风/html/08丨程序员练级攻略 (23讲)/73丨程序员练级攻略：编程语言.html',
    '/docs/01-左耳听风/html/08丨程序员练级攻略 (23讲)/74丨程序员练级攻略：理论学科.html',
    '/docs/01-左耳听风/html/08丨程序员练级攻略 (23讲)/75丨程序员练级攻略：系统知识.html',
    '/docs/01-左耳听风/html/08丨程序员练级攻略 (23讲)/76丨程序员练级攻略：软件设计.html',
    '/docs/01-左耳听风/html/08丨程序员练级攻略 (23讲)/77丨程序员练级攻略：Linux系统、内存和网络.html',
    '/docs/01-左耳听风/html/08丨程序员练级攻略 (23讲)/78丨程序员练级攻略：异步I-O模型和Lock-Free编程.html',
    '/docs/01-左耳听风/html/08丨程序员练级攻略 (23讲)/79丨程序员练级攻略：Java底层知识.html',
    '/docs/01-左耳听风/html/08丨程序员练级攻略 (23讲)/80丨程序员练级攻略：数据库.html',
    '/docs/01-左耳听风/html/08丨程序员练级攻略 (23讲)/81丨程序员练级攻略：分布式架构入门.html',
    '/docs/01-左耳听风/html/08丨程序员练级攻略 (23讲)/82丨程序员练级攻略：分布式架构经典图书和论文.html',
    '/docs/01-左耳听风/html/08丨程序员练级攻略 (23讲)/83丨程序员练级攻略：分布式架构工程设计.html',
    '/docs/01-左耳听风/html/08丨程序员练级攻略 (23讲)/84丨程序员练级攻略：微服务.html',
    '/docs/01-左耳听风/html/08丨程序员练级攻略 (23讲)/85丨程序员练级攻略：容器化和自动化运维.html',
    '/docs/01-左耳听风/html/08丨程序员练级攻略 (23讲)/86丨程序员练级攻略：机器学习和人工智能.html',
    '/docs/01-左耳听风/html/08丨程序员练级攻略 (23讲)/87丨程序员练级攻略：前端基础和底层原理.html',
    '/docs/01-左耳听风/html/08丨程序员练级攻略 (23讲)/88丨程序员练级攻略：前端性能优化和框架.html',
    '/docs/01-左耳听风/html/08丨程序员练级攻略 (23讲)/89丨程序员练级攻略：UI-UX设计.html',
    '/docs/01-左耳听风/html/08丨程序员练级攻略 (23讲)/90丨程序员练级攻略：技术资源集散地.html'
];



self.addEventListener('install', function(e) {
    console.log('[Service Worker] Install');
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            console.log('[Service Worker] Caching all: app shell and content');
            return cache.addAll(contentToCache);
        })
    );
});
