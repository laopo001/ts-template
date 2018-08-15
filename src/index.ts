/**
 * File: c:\Users\35327\Githubs\ts-template\src\index.ts
 * Project: c:\Users\35327\Githubs\ts-template
 * Created Date: Friday, June 29th 2018, 12:01:19 am
 * @author: liaodh
 * @summary: short description for the file
 * -----
 * Last Modified: Tuesday, August 14th 2018, 11:10:52 am
 * Modified By: liaodh
 * -----
 * Copyright (c) 2018 jiguang
 */

type Fn<T=void> = (...args) => T
type NullAble<T> = null | T;

console.log(123)

let a: null | Fn
// a = function (a) { console.log(123) }
let b: NullAble<string>

a=null;

function q(z: string) { }
