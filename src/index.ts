/**
 * File: c:\Users\35327\Githubs\ts-template\src\index.ts
 * Project: c:\Users\35327\Githubs\ts-template
 * Created Date: Friday, June 29th 2018, 12:01:19 am
 * @author: liaodh
 * @summary: short description for the file
 * -----
 * Last Modified: Tuesday, July 3rd 2018, 1:15:20 am
 * Modified By: liaodh
 * -----
 * Copyright (c) 2018 jiguang
 */

import { awesomepackage } from './assets/compiled.js';

const Awesome = awesomepackage.AwesomeMessage;

var message = Awesome.create({ awesomeField: "hello" });

let Uint8Arr = Awesome.encode(message).finish();

let worker = new Worker('./webworker.js');

//////////////////////////////////////////


console.log('postMessage copy start:', Uint8Arr, Uint8Arr.buffer);
let m: any = {
    type: 'copy',
    Uint8Arr
}
worker.postMessage(m);
console.log('postMessage copy end:', Uint8Arr, Uint8Arr.buffer);



console.log('postMessage move start:', Uint8Arr, Uint8Arr.buffer);
m = {
    type: 'move',
    byteOffset: 0,
    length: Uint8Arr.length,
    buffer: Uint8Arr.buffer
}
worker.postMessage(m, [Uint8Arr.buffer]);
console.log('postMessage move end:', Uint8Arr, Uint8Arr.buffer);




