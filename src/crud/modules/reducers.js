
import { connectRouter } from 'connected-react-router';
import auth from 'reducers/auth';
import navigation from 'reducers/navigation';
import layout from 'reducers/layout';
import register from 'reducers/register';
import users from 'reducers/usersReducers';

import { combineReducers } from 'redux';

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    layout,
    auth,
    navigation,
    register,
    users,
});
