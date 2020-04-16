
import { connectRouter } from 'connected-react-router';
//import layout from 'crud/modules/layout/layoutReducers';
import authCrud from 'crud/modules/auth/authReducers';
import iam from 'crud/modules/iam/iamReducers';
import auditLog from 'crud/modules/auditLog/auditLogReducers';
import settings from 'crud/modules/settings/settingsReducers';
import reducers from 'reducers';
import auth from 'reducers/auth';
import navigation from 'reducers/navigation';
import alerts from 'reducers/alerts';
import layout from 'reducers/layout';
import register from 'reducers/register';


import users from 'crud/modules/users/usersReducers';

import { combineReducers } from 'redux';

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    layout,
    auth,
    authCrud,
    iam,
    auditLog,
    settings,
    alerts,
    navigation,
    register,
users,

});
