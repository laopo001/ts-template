/**
 * File: c:\Users\35327\Githubs\ts-template\src\index.ts
 * Project: c:\Users\35327\Githubs\ts-template
 * Created Date: Friday, June 29th 2018, 12:01:19 am
 * @author: liaodh
 * @summary: short description for the file
 * -----
 * Last Modified: Tuesday, July 10th 2018, 1:09:56 am
 * Modified By: liaodh
 * -----
 * Copyright (c) 2018 jiguang
 */


console.log(123)

var lengthOfLongestSubstring = function (s) {
    let len = s.length;
    let arr = [];
    let max = 0;
    for (let i = 0; i < len; i++) {
        let character = s[i];
        if (arr.includes(character)) {
            let t;
            while (t = arr.shift()) {
                if (t === character) {
                    break;
                }
            }
            arr.push(character);
        } else {
            arr.push(character);
        }
        max = Math.max(max, arr.length);
    }
    console.log(max)
    return max;
};

lengthOfLongestSubstring("abcabcbb");

var maxArea = function (height) {
    let arr = new Array(height.length - 1)
    for (let i = 0; i < height.length - 1; i++) {
        arr[i] = Math.min(height[i], height[i + 1]) ** 2;
    }
    return Math.max.apply(null, arr);
};