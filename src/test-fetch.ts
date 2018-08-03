/**
 * File: c:\Users\35327\Projects\ts-template\src\test-fetch.ts
 * Project: c:\Users\35327\Projects\ts-template
 * Created Date: Friday, August 3rd 2018, 2:37:56 pm
 * @author: liaodh
 * @summary: short description for the file
 * -----
 * Last Modified: Friday, August 3rd 2018, 2:46:44 pm
 * Modified By: liaodh
 * -----
 * Copyright (c) 2018 jiguang
 */

export function testFetch() {
    var nameStart = 'markStart';
    var nameEnd = 'markEnd';
    let url = 'https://dadigua.oss-cn-shenzhen.aliyuncs.com/dd_3.4.8.exe';
    window.performance.mark(nameStart);
    return fetch(url).then(x => x.blob()).then((res) => {
        console.log(res);
        var a = document.createElement('a');
        var url = window.URL.createObjectURL(res);
        var filename = 'dd_3.4.8.exe';
        a.href = url;
        a.download = filename;
        a.click();
        window.URL.revokeObjectURL(url);
        window.performance.mark(nameEnd);
        window.performance.measure('fetch', nameStart, nameEnd);
        var measure = window.performance.getEntriesByName('fetch');
        console.log(measure);
        return res;
    })
}

