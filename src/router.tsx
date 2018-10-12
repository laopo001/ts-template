/**
 * ProjectName: hypergl-demo
 * FilePath: \src\router.ts
 * Created Date: Thursday, October 11th 2018, 4:53:48 pm
 * @author: liaodh
 * @summary: short description for the file
 * -----
 * Last Modified: Thursday, October 11th 2018, 4:59:32 pm
 * Modified By: liaodh
 * -----
 * Copyright (c) 2018 jiguang
 */

import * as React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
import { App } from './pages/index';

export function routerConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={App} />
        {/* <Redirect path="/" to={{ pathname: '/UserManagement' }} /> */}
      </Switch>
    </Router>
  );
}

