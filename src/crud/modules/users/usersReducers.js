import list from 'crud/modules/users/list/usersListReducers';
import form from 'crud/modules/users/form/usersFormReducers';
import view from 'crud/modules/users/view/usersViewReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
});
