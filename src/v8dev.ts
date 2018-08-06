/**
 * File: c:\Users\35327\Projects\ts-template\src\v8.js
 * Project: c:\Users\35327\Projects\ts-template
 * Created Date: Monday, August 6th 2018, 12:23:14 pm
 * @author: liaodh
 * @summary: short description for the file
 * -----
 * Last Modified: Monday, August 6th 2018, 7:00:46 pm
 * Modified By: liaodh
 * -----
 * Copyright (c) 2018 jiguang
 */

import '123.vert'
import * as fetch from 'isomorphic-fetch';
import * as fs from 'fs';
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

let condition = 'host_os == "linux"'

tasks = tasks.map(x => {
    if (x.condition === condition || x.condition == null) {
        return x;
    }
}).filter(x => x != null);
console.log(
    tasks.length
)
tasks.forEach(async x => {
    let buffer = await fetch('http://dl.dadigua.win/Chrome_320208401.apk').then(x => x.arrayBuffer())

})