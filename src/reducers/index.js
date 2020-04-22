import auth from 'reducers/auth';
import navigation from 'reducers/navigation';
import layout from 'reducers/layout';
import users from 'reducers/usersReducers';
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    layout,
    auth,
    navigation,
    users,
  });
