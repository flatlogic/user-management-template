import { routerMiddleware } from 'connected-react-router';
import { createHashHistory } from 'history';
import authActions from 'crud/modules/auth/authActions';
import createRootReducer from 'crud/modules/reducers';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunkMiddleware from 'redux-thunk';

const history = createHashHistory();

let store;

export function configureStore(preloadedState) {
  const middlewares = [
    thunkMiddleware,
    routerMiddleware(history),
  ].filter(Boolean);

  store = createStore(
    createRootReducer(history),
    preloadedState,
    composeWithDevTools(applyMiddleware(...middlewares)),
  );

  store.dispatch(authActions.doInit());
  return store;
}

export function getHistory() {
  return history;
}

export default function getStore() {
  return store;
}
