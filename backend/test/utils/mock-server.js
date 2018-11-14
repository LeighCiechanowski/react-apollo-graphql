import 'babel-polyfill';
import { Imposter, startMbServer } from 'mountebank-helper';

import imposters from './imposters/index';

(async () => {
  const imposter = new Imposter({ imposterPort: 5001 });

  imposters.forEach(imposterRoutes => {
    imposterRoutes.forEach(route => imposter.addRoute(route));
  });

  await startMbServer(2525);

  await imposter.postToMountebank();

  console.log('Mountebank server started on localhost:2525, mocks on localhost:5001...'); /* eslint-disable-line */
})();
