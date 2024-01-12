import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App1';
// import AppExer from './AppExer';
import AppExer2 from './AppExer2';
import { createStore } from 'redux';
import counterReducer from './store/counterReducer';
import App1 from './App1';
import { Provider, createStoreHook } from 'react-redux';
import isVisible from './store/isVisibleReducer';
import './styles/Box.css'
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './store';
import { composeWithDevTools } from 'redux-devtools-extension';

const root = ReactDOM.createRoot(document.getElementById('root'));
// 여기서 store를 createStore를 만들어서 Provider로 가져왔기 때문에 App1.js에서 useSelector에서 인자에 state를 넣을 수 있다.

//  createStore를 통해 store를 만들어서 인자에 reducer를 넣고 provider에 store를 묶어준다.

// reducer를 작성한다. 자유롭게 작성하되 reducer에 export default를 해준다.
// const store = createStore(counterReducer);

// 이렇게 넘겨줌
const store = configureStore({ reducer: rootReducer }, composeWithDevTools());
// const store = createStore(isVisible);

root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App1 />
    </Provider>
  </React.StrictMode>
);

