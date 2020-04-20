import list from 'reducers/usersListReducers';
import form from 'reducers/usersFormReducers';
import view from 'reducers/usersViewReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
});
