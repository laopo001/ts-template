/**
 * File: c:\Users\35327\Githubs\ts-template\src\index.ts
 * Project: c:\Users\35327\Githubs\ts-template
 * Created Date: Friday, June 29th 2018, 12:01:19 am
 * @author: liaodh
 * @summary: short description for the file
 * -----
 * Last Modified: Tuesday, August 28th 2018, 1:36:14 pm
 * Modified By: liaodh
 * -----
 * Copyright (c) 2018 jiguang
 */


// import * as Handlebars from 'handlebars';

import * as fs from 'fs';
import * as path from 'path';
const json = require('./assets/api-docs.json');
const tt = require('./hbsTemplates/t.ts.handlebars');
const typet = require('./hbsTemplates/type.ts.handlebars');
const src = 'out'

const typeMap = {
    integer: 'number'
}

let res = [];
json.tags.forEach(tag => {
    let temp: any = {};
    temp.desc = tag.description;
    temp.className = tag.name.split('-').map(x => x.slice(0, 1).toUpperCase() + x.slice(1)).join('')
    temp.fnList = [];
    temp.importList = new Set();
    for (const key in json.paths) {
        let obj = json.paths[key];
        for (const key2 in obj) {
            const element = obj[key2];
            if (element.tags.includes(tag.name)) {
                let parameters = [];
                element.parameters && element.parameters.forEach(item => {
                    if (item.in === 'query' || item.in === 'path') {
                        let type = typeMap[item.type] || item.type
                        if (type === 'array') {
                            type = item.items.type + '[]'
                        }
                        parameters.push({
                            parameterName: item.name,
                            parameterType: type,
                            parameterDesc: item.description,
                            required: item.required,
                        })
                    }
                })
                let responseType
                if (element.responses['200'].schema.$ref != null) {
                    let ref = element.responses['200'].schema.$ref.replace('#/definitions/', '');
                    responseType = ref.replace(/«|»/g, '');
                    temp.importList.add(responseType);
                } else {
                    responseType = 'any'
                }
                // let ref = element.responses['200'].schema.$ref.replace('#/definitions/', '');
                // let responseType = ref.replace(/«|»/g, '');
                // temp.importList.add(responseType);
                temp.fnList.push({
                    functonName: `${key2}${key.replace(/{(\w+)}/g, (x, a) => {

                        return 'By' + a.slice(0, 1).toUpperCase() + a.slice(1)
                    }).replace(/\/(\w)/g, (x, a) => { return a.slice(0, 1).toUpperCase() })}`,
                    functonDesc: element.summary,
                    parameterList: parameters,
                    responseType,
                    url: key.replace(/{(\w+)}/g, (x, a) => {
                        return '$' + '{data.' + a + '}';
                    }),
                    method: key2
                });

            }
        }
    }
    temp.importList = Array.from(temp.importList)
    res.push(temp)
})

console.log(
    process.cwd()
)





let typeList = [];

for (const key in json.definitions) {
    let obj = json.definitions[key];
    let temp: any = {};
    temp.title = obj.title.replace(/«|»/g, '')
    temp.objList = [];
    typeList.push(temp)

    for (const key2 in obj.properties) {
        const element = obj.properties[key2];
        if (element.$ref) {
            let ref = element.$ref
            temp.objList.push({
                keyName: key2,
                keyType: ref.split('/')[ref.split('/').length - 1],
                keyDesc: element.description,
            })
        } else {

            if (element.type === 'array') {
                let ref = element.items.$ref
                temp.objList.push({
                    keyName: key2,
                    keyType: ref.split('/')[ref.split('/').length - 1] + '[]',
                    keyDesc: element.description,
                })
            } else {
                temp.objList.push({
                    keyName: key2,
                    keyType: typeMap[element.type] || element.type,
                    keyDesc: element.description,
                })
            }
        }
    }
}



if (!fs.existsSync(path.resolve(process.cwd(), src))) {
    fs.mkdirSync(src);
}
res.forEach(x => {
    fs.writeFileSync(path.resolve(process.cwd(), src, x.className + '.ts'), tt(x), 'utf8')
})


fs.writeFileSync(path.resolve(process.cwd(), src, 'type.ts'), typet({
    typeList
}), 'utf8')