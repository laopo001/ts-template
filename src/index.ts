/**
 * File: c:\Users\35327\Githubs\ts-template\src\index.ts
 * Project: c:\Users\35327\Githubs\ts-template
 * Created Date: Friday, June 29th 2018, 12:01:19 am
 * @author: liaodh
 * @summary: short description for the file
 * -----
 * Last Modified: Monday, July 2nd 2018, 10:59:18 pm
 * Modified By: liaodh
 * -----
 * Copyright (c) 2018 jiguang
 */

import * as module from './assets/compiled.js';
console.log(module);
const Awesome = module.awesomepackage.AwesomeMessage;
console.log(Awesome);
var message = Awesome.create({ awesomeField: "hello" });

let buffer = Awesome.encode(message).finish();
console.log(buffer);
console.log(Awesome.decode(buffer));