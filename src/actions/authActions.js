import Errors from 'crud/modules/shared/error/errors';
import Message from 'crud/view/shared/message';
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
      let currentUser = null;
      currentUser = await findMe();
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
