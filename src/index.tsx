// import * as React from 'react';
import dva from 'dva';
import { count } from './models'
import { RouterConfig } from './router';

// 1. Initialize
const app = dva();


// 2. Model
app.model(count);



// 4. Router
app.router(RouterConfig as any);

// 5. Start
app.start('#root');
