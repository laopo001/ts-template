const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonPartial = require('./webpack/webpack.common');
var path = require('path');

module.exports = function (options, webpackOptions) {
    options = options || {};
    let commonConfig = commonPartial(options, webpackOptions);
    let str = 'dev';
    if (options.stg || options.prod || options.qa || options.test) {
        if (options.stg) { str = 'stg'; }
        if (options.prod) { str = 'prod'; }
        if (options.qa) { str = 'qa'; }
        if (options.test) { str = 'test'; }
    }
    console.warn(`environment: ${str}`);
    if (str !== 'dev') {
        commonConfig = webpackMerge({}, commonConfig, {
            plugins: [
                new webpack.DefinePlugin({
                    'process.env.environment': JSON.stringify(str),
                })
            ],
            resolve: {
                alias: {
                    'environment': path.resolve(__dirname, `src/environments/environment.${str}`),
                }
            }
        });
    } else {
        commonConfig = webpackMerge({}, commonConfig, {
            plugins: [
                new webpack.DefinePlugin({
                    'process.env.environment': JSON.stringify(str),
                })
            ],
            resolve: {
                alias: {
                    'environment': path.resolve(__dirname, `src/environments/environment`),
                }
            }
        });
    }
    return commonConfig;
}