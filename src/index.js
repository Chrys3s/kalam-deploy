import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

import { Provider } from 'react-redux';
import store from './AppStore';

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
