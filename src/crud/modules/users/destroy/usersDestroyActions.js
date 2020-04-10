import listActions from 'crud/modules/users/list/usersListActions';
import UsersService from 'crud/modules/users/usersService';
import Errors from 'crud/modules/shared/error/errors';
import { i18n } from 'crud/i18n';
import { getHistory } from 'crud/modules/store';
import Message from 'crud/view/shared/message';

const prefix =
  'USERS_DESTROY';

const actions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: actions.DESTROY_STARTED,
      });

      await UsersService.destroyAll([id]);

      dispatch({
        type: actions.DESTROY_SUCCESS,
      });

      Message.success(i18n('entities.users.destroy.success'));

      getHistory().push('/users');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: actions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: actions.DESTROY_ALL_STARTED,
      });

      await UsersService.destroyAll(ids);

      dispatch({
        type: actions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
      }

      Message.success(
        i18n('entities.users.destroyAll.success'),
      );

      getHistory().push('/users');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: actions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default actions;
