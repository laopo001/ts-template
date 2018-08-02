/**
 * File: c:\Users\35327\Githubs\ts-template\src\index.ts
 * Project: c:\Users\35327\Githubs\ts-template
 * Created Date: Friday, June 29th 2018, 12:01:19 am
 * @author: liaodh
 * @summary: short description for the file
 * -----
 * Last Modified: Friday, August 3rd 2018, 12:29:31 am
 * Modified By: liaodh
 * -----
 * Copyright (c) 2018 jiguang
 */
import * as fetch from 'isomorphic-fetch';

async function download(url) {
    function request(url, start, end: any = '') {
        return fetch(url, {
            'headers': {
                'Range': `bytes=${start}-${end}`,
            },
            'method': 'GET',
            // 'mode': 'cors'
        })
    }

    let firstResponse = await request(url, 0, 0).catch(err => { console.error(err); })
    if (firstResponse && firstResponse.status === 206) {
        let len = firstResponse.headers.get('Content-Range').split('/')[1];
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
        let blob = new Blob([res], { type });
        console.log(res, blob);
        // buffers = await Promise.all(buffers.map(x =>
        //     x.arrayBuffer()
        // ))

        // console.log(buffers)

    } else {
        console.error('不支持分段下载');
    }

}


// download('https://dadigua.oss-cn-shenzhen.aliyuncs.com/IMG_0485.JPG')


console.log(123)