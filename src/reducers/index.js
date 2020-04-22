import auth from 'reducers/auth';
import navigation from 'reducers/navigation';
import layout from 'reducers/layout';
import users from 'reducers/usersReducers';
import { combineReducers } from 'redux';

export default combineReducers({
    layout,
    auth,
    navigation,
    users,
});
