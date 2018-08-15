/**
 * File: c:\Users\35327\Githubs\ts-template\src\index.ts
 * Project: c:\Users\35327\Githubs\ts-template
 * Created Date: Friday, June 29th 2018, 12:01:19 am
 * @author: liaodh
 * @summary: short description for the file
 * -----
 * Last Modified: Wednesday, August 15th 2018, 10:42:38 am
 * Modified By: liaodh
 * -----
 * Copyright (c) 2018 jiguang
 */

import { add } from "./a";

fetch('../out/main.wasm').then(response =>
    response.arrayBuffer()
).then(bytes => WebAssembly.instantiate(bytes)).then(results => {
    instance = results.instance;
    document.getElementById("container").innerText = instance.exports.add_one(41);
}).catch(console.error);
type Fn<T=void> = (...args) => T
type NullAble<T> = null | T;

console.log(123)

let a: null | Fn
// a = function (a) { console.log(123) }
let b: NullAble<string>

a = null;

function q(z: string) { }

add(1, 2)
