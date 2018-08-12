/**
 * File: c:\Users\35327\Githubs\ts-template\src\ex.js
 * Project: c:\Users\35327\Githubs\ts-template
 * Created Date: Monday, August 6th 2018, 10:12:03 pm
 * @author: liaodh
 * @summary: short description for the file
 * -----
 * Last Modified: Monday, August 6th 2018, 10:27:10 pm
 * Modified By: liaodh
 * -----
 * Copyright (c) 2018 jiguang
 */


var http = require('http');
var https = require('https');
var ProxyAgent = require('proxy-agent');
var fs = require('fs');

// HTTP, HTTPS, or SOCKS proxy to use
var proxyUri = process.env.http_proxy;

var opts = {
    method: 'GET',
    host: 'www.dadigua.win',
    path: '/',
    // this is the important part!
    agent: new ProxyAgent(proxyUri)
};


// the rest works just like any other normal HTTP request

function download() {
    var file = fs.createWriteStream("123.js");

    https.get(opts, onresponse);

    function onresponse(res) {
        const { statusCode } = res;
        const contentType = res.headers['content-type'];

        let error;
        if (statusCode !== 200) {
            error = new Error('请求失败。\n' +
                `状态码: ${statusCode}`);
        }
        if (error) {
            console.error(error.message);
            // 消耗响应数据以释放内存
            res.resume();
            return;
        }
        res.pipe(file);
    }

}

download()