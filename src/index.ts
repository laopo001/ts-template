/**
 * File: c:\Users\35327\Githubs\ts-template\src\index.ts
 * Project: c:\Users\35327\Githubs\ts-template
 * Created Date: Friday, June 29th 2018, 12:01:19 am
 * @author: liaodh
 * @summary: short description for the file
 * -----
 * Last Modified: Thursday, August 2nd 2018, 6:56:41 pm
 * Modified By: liaodh
 * -----
 * Copyright (c) 2018 jiguang
 */
// import * as fetch from 'isomorphic-fetch';

async function download(url) {
    let firstResponse = await fetch(url, {
        "headers": {
            "Range": "bytes=0-0",
        },
        "method": "GET",
    }).catch(err => { console.error(err); })
    if (firstResponse && firstResponse.status === 206) {
        let o = firstResponse.headers.keys()
        for (let x of o) {
            console.log(x);
        }
        console.log(firstResponse.status);
    } else {
        console.error('不支持分段下载');
    }

}

download("https://dadigua.oss-cn-shenzhen.aliyuncs.com/IMG_0485.JPG")
console.log(123)