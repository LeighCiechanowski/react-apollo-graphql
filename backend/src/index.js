import 'babel-polyfill';
import Koa from 'koa';
import KoaCors from '@koa/cors';
import KoaRouter from 'koa-router';
import koaBodyParser from 'koa-bodyparser';
import { graphqlKoa } from 'apollo-server-koa';

import config from './config';
import schema from './schema';

const app = new Koa();
const router = new KoaRouter();

app.use(KoaCors());

router.all(
  '/',
  koaBodyParser(),
  graphqlKoa(({ userObjectId }) => ({
    schema,
    context: {
      userObjectId,
    },
  }))
);

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(config.port, () => {
  console.log(`Listening on Port: ${config.port}`); /* eslint-disable-line */
});
