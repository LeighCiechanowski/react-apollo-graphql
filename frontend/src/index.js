/* eslint-disable import/default */

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './components/App';
//import './styles/styles.scss'; // Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.
require('./favicon.ico'); // Tell webpack to load favicon.ico

render(
    <AppContainer>
      <App/>
    </AppContainer>,
    document.getElementById('app')
  );
  
  if (module.hot) {
    module.hot.accept('./components/App', () => {
      const NewApp = require('./components/App').default;
      render(
        <AppContainer>
          <NewApp />
        </AppContainer>,
        document.getElementById('app')
      );
    });
  }
