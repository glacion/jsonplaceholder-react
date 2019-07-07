import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import { store } from '../../state';
import Theme from './Theme';

export default () => {
  ReactDOM.render(
    <Provider store={store}>
      <Theme>
        <App />
      </Theme>
    </Provider>,
    document.getElementById('root'),
  );
};
