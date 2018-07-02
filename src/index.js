import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './store/reducer';

const rootStore = createStore(reducer);

ReactDOM.render(<Provider  store={rootStore} ><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
