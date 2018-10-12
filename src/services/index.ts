/**
 * ProjectName: hypergl-demo
 * FilePath: \src\services\index.ts
 * Created Date: Friday, October 12th 2018, 3:18:30 pm
 * @author: liaodh
 * @summary: short description for the file
 * -----
 * Last Modified: Friday, October 12th 2018, 3:22:25 pm
 * Modified By: liaodh
 * -----
 * Copyright (c) 2018 jiguang
 */


import request from '../util/request';

export class Service {
    static async getUserInfo() {
        return request('/userInfo', {
            method: 'GET'
        });
    }
}