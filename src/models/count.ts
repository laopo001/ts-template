/**
 * ProjectName: hypergl-demo
 * FilePath: \src\models\count.ts
 * Created Date: Thursday, October 11th 2018, 5:04:24 pm
 * @author: liaodh
 * @summary: short description for the file
 * -----
 * Last Modified: Thursday, October 11th 2018, 5:06:30 pm
 * Modified By: liaodh
 * -----
 * Copyright (c) 2018 jiguang
 */


export const count = {
    namespace: 'count',
    state: 0,
    reducers: {
        add(count) { return count + 1 },
        minus(count) { return count - 1 },
    },
}
