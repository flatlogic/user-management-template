import Errors from 'crud/modules/shared/error/errors';
import Message from 'crud/view/shared/message';
import { getHistory } from 'crud/modules/store';
import { AuthToken } from 'crud/modules/auth/authToken';
import axios from 'axios';

async function findMe() {
  const response = await axios.get('/auth/me');
  return response.data;
}

const prefix = 'AUTH';

const actions = {
  AUTH_INIT_SUCCESS: `${prefix}_INIT_SUCCESS`,
  AUTH_INIT_ERROR: `${prefix}_INIT_ERROR`,

  doInit: () => async (dispatch) => {
    try {
      const token = await AuthToken.get();
      let currentUser = null;

      if (token) {
        currentUser = await findMe();
      }

      dispatch({
        type: actions.AUTH_INIT_SUCCESS,
        payload: {
          currentUser,
        },
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: actions.AUTH_INIT_ERROR,
        payload: error,
      });
    }
  },
};

export default actions;
