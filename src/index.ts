/**
 * File: c:\Users\35327\Githubs\ts-template\src\index.ts
 * Project: c:\Users\35327\Githubs\ts-template
 * Created Date: Friday, June 29th 2018, 12:01:19 am
 * @author: liaodh
 * @summary: short description for the file
 * -----
 * Last Modified: Friday, August 3rd 2018, 7:30:16 pm
 * Modified By: liaodh
 * -----
 * Copyright (c) 2018 jiguang
 */
import * as fetch from 'isomorphic-fetch';
import { testFetch } from './test-fetch'
async function download(url) {
    function request(url, start, end: any = '') {
        return fetch(url, {
            'headers': {
                'Range': `bytes=${start}-${end}`,
            },
            'method': 'GET',
        })
    }
    let firstResponse = await request(url, 0, 0);
    if (firstResponse && firstResponse.status === 206) {
        let len = firstResponse.headers.get('Content-Range').split('/')[1];
        let type = firstResponse.headers.get('Content-Type');
        console.log(firstResponse.status, len);
        let byteOffset = 0;
        let arr = [];
        let q = 1000;
        while (byteOffset + q <= len) {
            arr.push(request(url, byteOffset, byteOffset + q - 1).then(x => x.arrayBuffer()))
            byteOffset += q;
        }
        arr.push(request(url, byteOffset).then(x => x.arrayBuffer()));
        let buffers = await Promise.all(arr);

        let i = 0;
        let result = new Uint8Array(len);
        new Uint8Array
        buffers.forEach(x => {
            new Uint8Array(x).forEach(y => {
                result[i] = y;
                i++;
            })
        })
        // let blob = new Blob([res], { type });
        // console.log(res, blob);
        return result;

    } else {
        console.error('不支持分段下载');
    }

}


// download('https://dadigua.oss-cn-shenzhen.aliyuncs.com/IMG_0485.JPG')




interface Option {
    byteLength?: number,
    limit?: number,
    format?: 'ArrayBuffer' | 'Blob';
}

function request(url, start, end: any = '') {
    return fetch(url, {
        'headers': {
            'Range': `bytes=${start}-${end}`,
        },
        'method': 'GET',
    })
}

class Download {
    // private threadPool = [];
    private activeThreadCount = 0;
    private tasks = {};
    constructor(private option: Option = {}) {
        this.option = Object.assign({}, { byteLength: 1024 * 80, limit: 8, format: 'Blob' }, this.option)
    }
    async download(url) {
        this.listen[url] = { done: false, callback: null, doneCallBack: null, child: [], result: null, resultType: null };
        let firstResponse = await request(url, 0, 0);
        if (firstResponse && firstResponse.status === 206) {
            let len = firstResponse.headers.get('Content-Range').split('/')[1] | 0;
            let type = firstResponse.headers.get('Content-Type');
            this.listen[url].result = new Uint8Array(len);
            this.listen[url].resultType = type;
            console.log('length:', len);
            let byteOffset = 0;
            let arr: any[] = this.tasks[url] || (this.tasks[url] = []);
            let q = this.option.byteLength;
            let i = 0;
            while (byteOffset + q <= len) {
                arr.push([url, byteOffset, byteOffset + q - 1, i])
                byteOffset += q;
                i++;
            }
            arr.push([url, byteOffset, , i]);

            this.runTasks();
            return { length: len, type, cout: i }

        } else {
            console.error('不支持分段下载');
        }
    }
    private runTasks() {
        for (let url in this.tasks) {
            let task;
            let i = 0;
            while ((task = this.tasks[url].shift()) && i < this.option.limit) {
                ((task) => {
                    i++;
                    this.activeThreadCount++;
                    request.apply(null, task).then(x => x.arrayBuffer()).then(x => {
                        this.data.call(this, task, x)
                    }).catch(this.error.bind(this, task));;
                })(task)
            }
        }
    }
    private done(url) {
        if (this.listen[url].done === true) { return };
        this.listen[url].done = true;
        let result
        if (this.option.format === 'ArrayBuffer') {
            result = this.listen[url].result;
        }
        if (this.option.format === 'Blob') {
            result = new Blob(this.listen[url].child, { type: this.listen[url].resultType });
        }
        this.listen[url].doneCallBack && this.listen[url].doneCallBack(result)
    }
    private data(t, buffer: ArrayBuffer) {
        try {
            this.activeThreadCount--;
            let start = t[1];
            let url = t[0];
            let index = t[3];
            this.listen[url].child[index] = buffer;
            this.listen[url].callback && this.listen[url].callback(t, buffer);
            let task = this.tasks[url].shift();
            if (task == null) {
                if (this.activeThreadCount === 0) {
                    this.done(url);
                }
                return;
            }
            if (this.isPause === true) { return; }
            this.activeThreadCount++;
            request.apply(null, task).then(x => x.arrayBuffer()).then(x => {
                this.data.call(this, t, x)
            }).catch(this.error.bind(this, task));
        }
        catch (e) {
            debugger;
        }
    }
    private errorCount = 1;
    private error(task, err) {
        let url = task[0];
        if (this.errorCount >= this.option.limit) {
            console.error(`重试超过${this.option.limit}次，暂停`);
            this.pause();
            this.onErrorCallback && this.onErrorCallback()
        } else {
            console.warn('重试');
        }
        this.tasks[url].push(task);
        this.activeThreadCount--;
        this.errorCount++;
    }
    isPause = false;
    pause() {
        this.isPause = true;
    }
    restart() {
        this.isPause = false;
        this.runTasks();
    }
    listen = {
    };
    private onErrorCallback;
    onError(cb) {
        this.onErrorCallback = cb;
    }
    onData(url, cb) {
        this.listen[url].callback = cb;
    }
    onDone(url, cb) {
        this.listen[url].doneCallBack = cb;
    }
    offline() {

    }
}

function test() {
    var nameStart = 'markStartplus';
    var nameEnd = 'markEndplus';
    window.performance.mark(nameStart);
    let url = 'https://dadigua.oss-cn-shenzhen.aliyuncs.com/dd_3.4.8.exe';
    let c = new Download({ format: 'Blob', byteLength: 5000000, limit: 2, });
    c.download(url);
    // setTimeout(() => {
    //     c.pause()
    //     setTimeout(() => {
    //         c.restart()
    //     }, 10000);
    // }, 3000);
    c.onError(() => {

        setTimeout(() => {
            c.restart()
        }, 5000);
    })
    c.onDone(url, function (res) {
        console.log(res);
        var a = document.createElement('a');
        var url = window.URL.createObjectURL(res);
        var filename = 'dd_3.4.8.exe';
        a.href = url;
        a.download = filename;
        a.click();
        window.URL.revokeObjectURL(url);
        window.performance.mark(nameEnd);
        window.performance.measure('plus', nameStart, nameEnd);
        var measure = window.performance.getEntriesByName('plus');
        console.log(measure);

        // testFetch();
    })
}

test()

// testFetch().then(() => {
// test()
// })



