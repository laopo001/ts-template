/**
 * File: c:\Users\35327\Githubs\ts-template\src\index.ts
 * Project: c:\Users\35327\Githubs\ts-template
 * Created Date: Friday, June 29th 2018, 12:01:19 am
 * @author: liaodh
 * @summary: short description for the file
 * -----
 * Last Modified: Wednesday, July 11th 2018, 8:26:40 pm
 * Modified By: liaodh
 * -----
 * Copyright (c) 2018 jiguang
 */


// Move the mouse across the screen as a sine wave.
// var robot = require("robotjs");
import * as robot from 'robotjs';

// Speed up the mouse.
robot.setMouseDelay(2);

var twoPI = Math.PI * 2.0;
var screenSize = robot.getScreenSize();
var height = (screenSize.height / 2) - 10;
var width = screenSize.width;

for (var x = 0; x < width; x++) {
    let y = height * Math.sin((twoPI * x) / width) + height;
    robot.moveMouse(x, y);
}

const img = robot.screen.capture(0, 0, screenSize.width, screenSize.height);
const color = img.colorAt(100, 100)
console.log(color)