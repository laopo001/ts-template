/**
 * File: c:\Users\35327\Githubs\ts-template\src\index.ts
 * Project: c:\Users\35327\Githubs\ts-template
 * Created Date: Friday, June 29th 2018, 12:01:19 am
 * @author: liaodh
 * @summary: short description for the file
 * -----
 * Last Modified: Friday, June 29th 2018, 1:29:05 am
 * Modified By: liaodh
 * -----
 * Copyright (c) 2018 jiguang
 */
import * as capnp from 'capnp-ts';
import { Date } from './schema/date.capnp';

export function loadMessage(buffer: ArrayBuffer): Date {
    const message = new capnp.Message(buffer);
    return message.getRoot(Date);
}
const date = {
    year: 1992,
    month: 10,
    day: 25
}
capnp.Message.toArrayBuffer(new capnp.Message())
console.log(123)

