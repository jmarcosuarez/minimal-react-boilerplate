/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import configureStore from './redux/stores/configureStore';
import DevTools from './DevTools';
import routes from './routes/index';

/* eslint-disable no-unused-vars */
import styles from '../static/stylesheets/main.css';

const store = configureStore();

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} onUpdate={() => window.scrollTo(0, 0)} routes={routes(store)} />
  </Provider>,
  document.getElementById('app'),
);

if (__DEVTOOLS__ && !global.devToolsExtension) {
  ReactDOM.render(
    <Provider store={store}>
      <div>
        <Router history={history} routes={routes(store)} />
        <DevTools />
      </div>
    </Provider>,
    document.getElementById('app'),
  );
}

if (module.hot) {
  module.hot.accept();
}
