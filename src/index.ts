/**
 * File: c:\Users\35327\Githubs\ts-template\src\index.ts
 * Project: c:\Users\35327\Githubs\ts-template
 * Created Date: Friday, June 29th 2018, 12:01:19 am
 * @author: liaodh
 * @summary: short description for the file
 * -----
 * Last Modified: Monday, September 10th 2018, 10:11:37 am
 * Modified By: liaodh
 * -----
 * Copyright (c) 2018 jiguang
 */


function OBJ(jsobj) {
    var p = new Proxy(jsobj, {
        get: function (target, prop, receiver) {
            return target[prop];
        },
        set: function (target, property, value, receiver) {
            console.log('set')
            return true;
        }
    });
    return p;
}

let a = { name: 1 };
let b = OBJ(a);
let c = b.Clone();
b.name = 7;

console.log(c)