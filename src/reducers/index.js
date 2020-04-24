import auth from 'reducers/auth';
import navigation from 'reducers/navigation';
import users from 'reducers/usersReducers';
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    auth,
    navigation,
    users,
  });
