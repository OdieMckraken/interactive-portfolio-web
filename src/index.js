import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import FoldersReducer from './reducers/FoldersReducer'
import HttpsRedirect from 'react-https-redirect';

const store = createStore(FoldersReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(  
  <HttpsRedirect>
    <Provider store={store}>
      <App /> 
    </Provider>
  </HttpsRedirect>,
  document.getElementById('root')
);

reportWebVitals();
