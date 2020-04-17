import selectors from 'crud/modules/users/list/usersListSelectors';
import Errors from 'crud/modules/shared/error/errors';
import axios from 'axios';

async function list() {
  const response = await axios.get(`/users`);
  return response.data;
}

const actions = {

  doFetch: (filter, keepPagination = false) => async (
    dispatch,
    getState,
  ) => {
    try {
      dispatch({
        type: 'USERS_LIST_FETCH_STARTED',
        payload: { filter, keepPagination },
      });

      const response = await list();

      dispatch({
        type: 'USERS_LIST_FETCH_SUCCESS',
        payload: {
          rows: response.rows,
          count: response.count,
        },
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'USERS_LIST_FETCH_ERROR',
      });
    }
  },
};

export default actions;
