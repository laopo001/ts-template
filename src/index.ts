/**
 * File: c:\Users\35327\Githubs\ts-template\src\index.ts
 * Project: c:\Users\35327\Githubs\ts-template
 * Created Date: Friday, June 29th 2018, 12:01:19 am
 * @author: liaodh
 * @summary: short description for the file
 * -----
 * Last Modified: Friday, June 29th 2018, 7:39:43 pm
 * Modified By: liaodh
 * -----
 * Copyright (c) 2018 jiguang
 */
import * as capnp from 'capnp-ts';
import { Date, DateArr } from './date.capnp';


export function loadMessage(buffer: ArrayBuffer) {
    const message = new capnp.Message(buffer);
    return message.getRoot(Date);
}

let buffer = new ArrayBuffer(Date._capnp.size.dataByteLength);
let message = new capnp.Message(buffer, false, true)

let date = capnp.Message.initRoot(Date, message);


date.setYear(1992)
date.setMonth(10)
date.setDay(25)

// Date._capnp
// const q = new Date(buffer,0);
// q.segment.

//     capnp.Message.toArrayBuffer(new capnp.Message())
let q = loadMessage(date.segment.message.toPackedArrayBuffer())

console.log(q.getYear())

let buffer2 = new ArrayBuffer(1000);
let message2 = new capnp.Message(buffer2, false, true)
console.log('--------')
let arr = capnp.Message.initRoot(DateArr, message2);

arr.initValue(1);
arr.getValue().set(0, q)

console.log(arr.getValue().get(0).getYear());

let q2 = arr.segment.message.toPackedArrayBuffer()
const qq2 = new capnp.Message(q2);

// console.log(qq2.getRoot(DateArr).getValue().get(0).getYear());
