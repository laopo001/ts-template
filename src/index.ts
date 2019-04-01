/**
 * File: c:\Users\35327\Githubs\ts-template\src\index.ts
 * Project: c:\Users\35327\Githubs\ts-template
 * Created Date: Friday, June 29th 2018, 12:01:19 am
 * @author: liaodh
 * @summary: short description for the file
 * -----
 * Last Modified: Monday, April 1st 2019, 7:17:23 pm
 * Modified By: liaodh
 * -----
 * Copyright (c) 2018 jiguang
 */


import { MacroTask } from "./macro_task";
MacroTask.run(function () {
    return 111;
}).then(x => {
})

let t = new MacroTask(function (resolve, reject) {
    resolve(456);
}).then((res) => {
    console.log(res);
})
console.log(123)