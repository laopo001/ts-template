/**
 * File: c:\Users\35327\Githubs\ts-template\src\index.ts
 * Project: c:\Users\35327\Githubs\ts-template
 * Created Date: Friday, June 29th 2018, 12:01:19 am
 * @author: liaodh
 * @summary: short description for the file
 * -----
 * Last Modified: Wednesday, July 11th 2018, 12:03:37 pm
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

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let max = 0;
    let left = 0;
    let right = height.length - 1;
    while (left < right) {

        if (height[left] > height[right]) {
            max = Math.max(max, height[right] * (right - left));
            right = right - 1;

        } else {
            max = Math.max(max, height[left] * (right - left));
            left = left + 1;
        }

    }
    return max;
};
let a = maxArea([1, 2, 1]);
console.log(a);


/**
* Definition for binary tree with next pointer.
* function TreeLinkNode(val) {
*     this.val = val;
*     this.left = this.right = this.next = null;
* }
*/

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */


class TreeNode {
    constructor(public val?: number, public left?: TreeNode, public right?: TreeNode) {
    }
}
let root = new TreeNode(
    1,
    new TreeNode(
        2,
        new TreeNode(4),
        new TreeNode(5)
    ),
    new TreeNode(
        3,
        new TreeNode(6),
        new TreeNode(7)
    )
);



var connect = function (root) {
    if (root == null) return;
    let arr = [];
    arr.push(root);
    run(arr, arr);
    // console.log(arr)
    let t = 1;
    tag1:
    for (let i = 0; i < arr.length; i++) {
        // let t = 1;
        // while (2 ** t <= i + 2) {
        //     if (2 ** t === i + 2) {
        //         continue tag1;
        //     }
        //     t++;
        // }
        if (2 ** t === i + 2) {
            t++;
            continue tag1;
        }
        arr[i] && (arr[i].next = arr[i + 1]);
    }
    console.log(root)
    function run(children, arr?) {
        let newChildren = [];
        for (let i = 0; i < children.length; i++) {
            if (children[i] == null) { continue; }
            newChildren.push(children[i].left)
            newChildren.push(children[i].right)
        }
        arr.push(...newChildren);
        newChildren.length && run(newChildren, arr);
    }
}


console.log(connect(root));