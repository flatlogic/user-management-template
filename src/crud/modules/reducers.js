
import { connectRouter } from 'connected-react-router';
import authCrud from 'crud/modules/auth/authReducers';
import auth from 'reducers/auth';
import navigation from 'reducers/navigation';
import alerts from 'reducers/alerts';
import layout from 'reducers/layout';
import register from 'reducers/register';
import users from 'reducers/usersReducers';

import { combineReducers } from 'redux';

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    layout,
    auth,
    authCrud,
    alerts,
    navigation,
    register,
    users,
});
