import UsersService from 'crud/modules/users/usersService';
import Errors from 'crud/modules/shared/error/errors';
import { getHistory } from 'crud/modules/store';

const prefix = 'USERS_VIEW';

const actions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: actions.FIND_STARTED,
      });

      const record = await UsersService.find(id);

      dispatch({
        type: actions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: actions.FIND_ERROR,
      });

      getHistory().push('/users');
    }
  },
};

export default actions;
