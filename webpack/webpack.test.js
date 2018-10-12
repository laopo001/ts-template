/**
 * ProjectName: hypergl-demo
 * FilePath: \webpack\webpack.dev.js
 * Created Date: Friday, October 12th 2018, 2:52:39 pm
 * @author: liaodh
 * @summary: short description for the file
 * -----
 * Last Modified: Friday, October 12th 2018, 3:12:41 pm
 * Modified By: liaodh
 * -----
 * Copyright (c) 2018 jiguang
 */

var path = require('path')

module.exports = function (env, webpackConfig) {
    let res = {
        resolve: {
            alias: {
                'environments/environment$': path.resolve(__dirname, 'src/environments/environment'),
            }
        }
    };
    return res;
}