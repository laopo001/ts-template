/**
 * ProjectName: hypergl-demo
 * FilePath: \src\models\user.ts
 * Created Date: Friday, October 12th 2018, 2:34:06 pm
 * @author: liaodh
 * @summary: short description for the file
 * -----
 * Last Modified: Friday, October 12th 2018, 3:30:44 pm
 * Modified By: liaodh
 * -----
 * Copyright (c) 2018 jiguang
 */


import { Service } from '../services';
export interface UserProps {
    user: {
        userID: number
    }
}

export const user = {
    namespace: 'user',
    state: {
        userID: 0
    },
    reducers: {
        add(count) {
            return count + 1;
        },
        minus(count) {
            return count - 1;
        },
    },
    effects: {
        *getUserInfo(action, { call, put }) {
            yield Service.getUserInfo();
            yield put({ type: 'add' });
        },
    },
};
