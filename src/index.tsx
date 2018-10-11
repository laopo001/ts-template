
import dva from 'dva';
import { count } from './models'
import { routerConfig } from './router';
import './style'

const app = dva();

app.model(count);

app.router(routerConfig as any);

app.start('#root');
