
import dva from 'dva';
import { count, user } from './models';
import { routerConfig } from './router';
import './style';

const app = dva();

app.model(count);
app.model(user);

app.router(routerConfig as any);

app.start('#root');
