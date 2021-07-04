import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import configStore from './store/store';
import './styles/app.css';
import './styles/tailwind.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={configStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
