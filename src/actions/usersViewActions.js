import axios from 'axios';
import Errors from 'crud/modules/shared/error/errors';
import { push } from 'connected-react-router';

const actions = {
  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: 'USERS_VIEW_FIND_STARTED',
      });

      axios.get(`/users/${id}`).then(res => {
        const record = res.data;
        dispatch({
          type: 'USERS_VIEW_FIND_SUCCESS',
          payload: record,
        });
      })
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'USERS_VIEW_FIND_ERROR',
      });
    }
  }
};

export default actions;
