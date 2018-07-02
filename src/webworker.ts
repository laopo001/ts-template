/**
 * File: c:\Users\35327\Githubs\ts-template\src\webworker.ts
 * Project: c:\Users\35327\Githubs\ts-template
 * Created Date: Tuesday, July 3rd 2018, 12:36:22 am
 * @author: liaodh
 * @summary: short description for the file
 * -----
 * Last Modified: Tuesday, July 3rd 2018, 1:14:48 am
 * Modified By: liaodh
 * -----
 * Copyright (c) 2018 jiguang
 */

import { awesomepackage } from './assets/compiled.js';

const Awesome = awesomepackage.AwesomeMessage;

self.onmessage = function (message) {

    let { data } = message;
    if (data.type === 'move') {
        let Uint8Arr = new Uint8Array(data.buffer, data.byteOffset, data.length);
        console.log('receive move:', message, data, Uint8Arr);
        console.log('receive move result:', Awesome.decode(Uint8Arr));
    } else {
        console.log('receive copy:', message, data);
        console.log('receive copy result:', Awesome.decode(data.Uint8Arr));
    }

}
