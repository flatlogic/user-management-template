import Errors from 'components/FormItems/error/errors';
import axios from 'axios';

async function list() {
  const response = await axios.get(`/((name))`);
  return response.data;
}

const actions = {

  doFetch: (filter, keepPagination = false) => async (
    dispatch,
    getState,
  ) => {
    try {
      dispatch({
        type: '((NAME))_LIST_FETCH_STARTED',
        payload: { filter, keepPagination },
      });

      const response = await list();

      dispatch({
        type: '((NAME))_LIST_FETCH_SUCCESS',
        payload: {
          rows: response.rows,
          count: response.count,
        },
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: '((NAME))_LIST_FETCH_ERROR',
      });
    }
  },

  doDelete: (id) => async (dispatch) => {
    try {
      dispatch({
        type: '((NAME))_LIST_DELETE_STARTED',
      });

      await axios.delete(`/((name))/${id}`)

      dispatch({
        type: '((NAME))_LIST_DELETE_SUCCESS',
      });

      const response = await list();
      dispatch({
        type: '((NAME))_LIST_FETCH_SUCCESS',
        payload: {
          rows: response.rows,
          count: response.count,
        },
      });

    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: '((NAME))_LIST_DELETE_ERROR',
      });
    }
  },
  doOpenConfirm: (id) => async (dispatch) => {
      dispatch({
        type: '((NAME))_LIST_OPEN_CONFIRM',
        payload: {
          id: id
        },
      });
  },
  doCloseConfirm: () => async (dispatch) => {
      dispatch({
        type: '((NAME))_LIST_CLOSE_CONFIRM',
      });
  },
};


export default actions;
