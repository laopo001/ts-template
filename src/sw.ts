/**
 * File: c:\Users\35327\Projects\ts-template\src\sw.js
 * Project: c:\Users\35327\Projects\ts-template
 * Created Date: Wednesday, August 1st 2018, 3:55:31 pm
 * @author: liaodh
 * @summary: short description for the file
 * -----
 * Last Modified: Friday, August 3rd 2018, 1:09:47 am
 * Modified By: liaodh
 * -----
 * Copyright (c) 2018 jiguang
 */



var VERSION = 'v0';

var cacheFiles = [
    '/'
];

var hostReg = /localhost|aliyuncs/;

self.addEventListener('install', function (evt) {
    console.log('installing…');
    evt.waitUntil(
        caches.open(VERSION).then(function (cache) {
            return cache.addAll(cacheFiles);
        })
    );
});

self.addEventListener('activate', function (event) {
    console.log('activating…');
    event.waitUntil(
        Promise.all([
            clients.claim(),
            caches.keys().then(function (cacheNames) {
                return Promise.all(
                    cacheNames.map(function (cacheName) {
                        if (cacheName !== VERSION) {
                            return caches.delete(cacheName);
                        }
                    })
                );
            })
        ])
    );
});


self.addEventListener('fetch', function (evt) {
    // console.log(evt.request.url);
    evt.respondWith(
        caches.match(evt.request).then(function (response) {
            if (response) {
                return response;
            }
            var request = evt.request.clone();

            return download(request)


            return fetch(request).then(function (response) {
                if (response && response.status === 200 && response.url.match(hostReg)) {
                    var responseClone = response.clone();

                    return responseClone.clone().arrayBuffer().then(buffer => {
                        console.log(buffer)
                        return new Response(buffer)
                    })


                    // caches.open(VERSION).then(function (cache) {
                    //     if (evt.request.method !== "POST") {
                    //         cache.put(evt.request, responseClone);
                    //     }
                    //     // cache.put(evt.request, responseClone);
                    // });
                } else {
                    return response;
                }
                // return response;
            });
        })
    )
});



async function download(req) {
    let url = req.url;
    var reqClone = req.clone();
    function request(url, start, end: any = '') {
        return fetch(url, {
            'headers': {
                'Range': `bytes=${start}-${end}`,
            },
            'method': 'GET',
            // 'mode': 'cors'
        })
    }

    let firstResponse = await request(url, 0, 0).catch();
    if (firstResponse && firstResponse.status === 206) {
        let len = parseInt(firstResponse.headers.get('Content-Range').split('/')[1]);
        let type = firstResponse.headers.get('Content-Type');
        console.log(firstResponse.status, len);
        let byteOffset = 0;
        let arr = [];
        let q = 1000;
        while (byteOffset + q <= len) {
            arr.push(request(url, byteOffset, byteOffset + q - 1).then(x => x.arrayBuffer()))
            byteOffset += q;
        }
        arr.push(request(url, byteOffset).then(x => x.arrayBuffer()));
        let buffers = await Promise.all(arr);

        let i = 0;
        let res = new Uint8Array(len);
        new Uint8Array
        buffers.forEach(x => {
            new Uint8Array(x).forEach(y => {
                res[i] = y;
                i++;
            })
        })

        // let blob = new Blob([res], { type });
        // console.log(res, blob);
        // buffers = await Promise.all(buffers.map(x =>
        //     x.arrayBuffer()
        // ))

        // console.log(buffers)
        return new Response(res);
    } else {
        return fetch(reqClone);
    }

}