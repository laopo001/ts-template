/**
 * File: c:\Users\35327\Githubs\ts-template\src\index.ts
 * Project: c:\Users\35327\Githubs\ts-template
 * Created Date: Friday, June 29th 2018, 12:01:19 am
 * @author: liaodh
 * @summary: short description for the file
 * -----
 * Last Modified: Friday, June 29th 2018, 12:07:33 pm
 * Modified By: liaodh
 * -----
 * Copyright (c) 2018 jiguang
 */
import * as capnp from 'capnp-ts';
import { Date } from './date.capnp';

export function loadMessage(buffer: ArrayBuffer): Date {
    const message = new capnp.Message(buffer);
    return message.getRoot(Date);
}
// const date = {
//     year: 1992,
//     month: 10,
//     day: 25
// }
let buffer = new ArrayBuffer(Date._capnp.size.dataByteLength);
let message = new capnp.Message(buffer, false, true)
console.log(1)
let date = capnp.Message.initRoot(Date, message);
console.log(2)
date.setYear(1992)
date.setMonth(10)
date.setDay(25)

// Date._capnp
// const q = new Date(buffer,0);
// q.segment.

//     capnp.Message.toArrayBuffer(new capnp.Message())
let q = loadMessage(date.segment.message.toPackedArrayBuffer())

console.log(q.getYear())

