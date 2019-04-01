/**
 * File: c:\Users\35327\Githubs\ts-template\src\index.ts
 * Project: c:\Users\35327\Githubs\ts-template
 * Created Date: Friday, June 29th 2018, 12:01:19 am
 * @author: liaodh
 * @summary: short description for the file
 * -----
 * Last Modified: Monday, April 1st 2019, 9:30:21 pm
 * Modified By: liaodh
 * -----
 * Copyright (c) 2018 jiguang
 */


import { MacroTask } from "./macro_task";
MacroTask.run(function () {
    return 111;
}).then(x => {
})

let t = new MacroTask(function () {
    return 456
}).then((res) => {
    console.log(res);
})
function macro() {
    return MacroTask.run(x => MacroTask.run(x => 'zxxx'));
}

async function main() {
    let res = await MacroTask.resolve(Promise.resolve('asdfasdf')).then(x => {
        return x;
    });
    // res = await macro();
    console.log(res);
}
main()

console.log(123)