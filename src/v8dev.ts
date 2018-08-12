/**
 * File: c:\Users\35327\Projects\ts-template\src\v8.js
 * Project: c:\Users\35327\Projects\ts-template
 * Created Date: Monday, August 6th 2018, 12:23:14 pm
 * @author: liaodh
 * @summary: short description for the file
 * -----
 * Last Modified: Monday, August 6th 2018, 10:11:42 pm
 * Modified By: liaodh
 * -----
 * Copyright (c) 2018 jiguang
 */


import * as http from 'http';
import * as https from 'https';
import * as fs from 'fs';
import * as path from 'path';

var ProxyAgent = require('proxy-agent');

let tasks = [{
    'name': 'clang_format_win',
    'pattern': '.',
    'condition': 'host_os == "win"',
    'action': ['download_from_google_storage',
        '--no_resume',
        '--platform=win32',
        '--no_auth',
        '--bucket', 'chromium-clang-format',
        '-s', 'v8/buildtools/win/clang-format.exe.sha1',
    ],
},
{
    'name': 'clang_format_mac',
    'pattern': '.',
    'condition': 'host_os == "mac"',
    'action': ['download_from_google_storage',
        '--no_resume',
        '--platform=darwin',
        '--no_auth',
        '--bucket', 'chromium-clang-format',
        '-s', 'v8/buildtools/mac/clang-format.sha1',
    ],
},
{
    'name': 'clang_format_linux',
    'pattern': '.',
    'condition': 'host_os == "linux"',
    'action': ['download_from_google_storage',
        '--no_resume',
        '--platform=linux*',
        '--no_auth',
        '--bucket', 'chromium-clang-format',
        '-s', 'v8/buildtools/linux64/clang-format.sha1',
    ],
},
{
    'name': 'gcmole',
    'pattern': '.',
    'condition': 'download_gcmole',
    'action': ['download_from_google_storage',
        '--bucket', 'chrome-v8-gcmole',
        '-u', '--no_resume',
        '-s', 'v8/tools/gcmole/gcmole-tools.tar.gz.sha1',
        '--platform=linux*',
    ],
},
{
    'name': 'jsfunfuzz',
    'pattern': '.',
    'condition': 'download_jsfunfuzz',
    'action': ['download_from_google_storage',
        '--bucket', 'chrome-v8-jsfunfuzz',
        '-u', '--no_resume',
        '-s', 'v8/tools/jsfunfuzz/jsfunfuzz.tar.gz.sha1',
        '--platform=linux*',
    ],
},

{
    'name': 'luci-go_win',
    'pattern': '.',
    'condition': 'host_os == "win"',
    'action': ['download_from_google_storage',
        '--no_resume',
        '--platform=win32',
        '--no_auth',
        '--bucket', 'chromium-luci',
        '-d', 'v8/tools/luci-go/win64',
    ],
},
{
    'name': 'luci-go_mac',
    'pattern': '.',
    'condition': 'host_os == "mac"',
    'action': ['download_from_google_storage',
        '--no_resume',
        '--platform=darwin',
        '--no_auth',
        '--bucket', 'chromium-luci',
        '-d', 'v8/tools/luci-go/mac64',
    ],
},
{
    'name': 'luci-go_linux',
    'pattern': '.',
    'condition': 'host_os == "linux"',
    'action': ['download_from_google_storage',
        '--no_resume',
        '--platform=linux*',
        '--no_auth',
        '--bucket', 'chromium-luci',
        '-d', 'v8/tools/luci-go/linux64',
    ],
},

{
    'name': 'gn_win',
    'pattern': '.',
    'condition': 'host_os == "win"',
    'action': ['download_from_google_storage',
        '--no_resume',
        '--platform=win32',
        '--no_auth',
        '--bucket', 'chromium-gn',
        '-s', 'v8/buildtools/win/gn.exe.sha1',
    ],
},
{
    'name': 'gn_mac',
    'pattern': '.',
    'condition': 'host_os == "mac"',
    'action': ['download_from_google_storage',
        '--no_resume',
        '--platform=darwin',
        '--no_auth',
        '--bucket', 'chromium-gn',
        '-s', 'v8/buildtools/mac/gn.sha1',
    ],
},
{
    'name': 'gn_linux',
    'pattern': '.',
    'condition': 'host_os == "linux"',
    'action': ['download_from_google_storage',
        '--no_resume',
        '--platform=linux*',
        '--no_auth',
        '--bucket', 'chromium-gn',
        '-s', 'v8/buildtools/linux64/gn.sha1',
    ],
},
{
    'name': 'wasm_spec_tests',
    'pattern': '.',
    'action': ['download_from_google_storage',
        '--no_resume',
        '--no_auth',
        '-u',
        '--bucket', 'v8-wasm-spec-tests',
        '-s', 'v8/test/wasm-spec-tests/tests.tar.gz.sha1',
    ],
},
{
    'name': 'closure_compiler',
    'pattern': '.',
    'action': ['download_from_google_storage',
        '--no_resume',
        '--no_auth',
        '-u',
        '--bucket', 'chromium-v8-closure-compiler',
        '-s', 'v8/src/inspector/build/closure-compiler.tar.gz.sha1',
    ],
}]


async function request(url) {
    let arr = url.split('/');
    let fileName = arr[arr.length - 1];
    let filePath = path.resolve(__dirname, fileName)
    console.log(fileName)
    let firstResponse = await fetch(url)
    let length = firstResponse.headers.get('content-length');
    let buffer = await (firstResponse as any).buffer();
    console.log(length)
    console.log(buffer)
    fs.writeFileSync(filePath, buffer);
}
var proxyUri = 'http://43.239.159.188:3456';
console.log(proxyUri)
async function main() {
    // let buffer = await request('https://storage.googleapis.com/v8-wasm-spec-tests/b10929c46078b42ededd7d589d35fa1219874068');

    // let condition = 'host_os == "linux"'

    // tasks = tasks.map(x => {
    //     if (x.condition === condition || x.condition == null) {
    //         return x;
    //     }
    // }).filter(x => x != null);
    // console.log(
    //     tasks.length
    // )
    // tasks.forEach(async x => {
    //     request(x.action[])

    // })

    var opts = {
        method: 'GET',
        host: 'dl.dadigua.com',
        path: '/123.js',
        // this is the important part!
        // agent: new ProxyAgent(proxyUri)
    };

    // the rest works just like any other normal HTTP request
    http.get(opts, onresponse).on('error', (e) => {
        console.error(`错误: ${e.message}`);
    });

    function onresponse(res) {
        const { statusCode } = res;
        const contentType = res.headers['content-type'];

        let error;
        if (statusCode !== 200) {
            error = new Error('请求失败。\n' +
                `状态码: ${statusCode}`);
        } else if (!/^application\/json/.test(contentType)) {
            error = new Error('无效的 content-type.\n' +
                `期望 application/json 但获取的是 ${contentType}`);
        }
        if (error) {
            console.error(error.message);
            // 消耗响应数据以释放内存
            res.resume();
            return;
        }

        res.setEncoding('utf8');
        let rawData = '';
        res.on('data', (chunk) => { rawData += chunk; });
        res.on('end', () => {
            try {
                const parsedData = JSON.parse(rawData);
                console.log(parsedData);
            } catch (e) {
                console.error(e.message);
            }
        });
    }

}

// main()



// HTTP, HTTPS, or SOCKS proxy to use
// var proxyUri = 'http://168.63.43.102:3128';

var opts = {
    method: 'GET',
    host: 'baidu.com',
    path: '/',
    // this is the important part!
    agent: new ProxyAgent(proxyUri)
};

// the rest works just like any other normal HTTP request
http.get(opts, onresponse);

function onresponse(res) {
    console.log(res.statusCode, res.headers);
    res.pipe(process.stdout);
}