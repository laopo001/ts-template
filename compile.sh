#!/bin/bash
echo $1
npx pbjs -t static-module --es6 -o compiled.js $1
npx pbts -o compiled.d.ts compiled.js
mv compiled** src/assets
