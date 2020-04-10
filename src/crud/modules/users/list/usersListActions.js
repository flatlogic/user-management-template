import UsersService from 'crud/modules/users/usersService';
import selectors from 'crud/modules/users/list/usersListSelectors';
import Errors from 'crud/modules/shared/error/errors';

const prefix = 'USERS_LIST';

const actions = {
  FETCH_STARTED: `${prefix}_FETCH_STARTED`,
  FETCH_SUCCESS: `${prefix}_FETCH_SUCCESS`,
  FETCH_ERROR: `${prefix}_FETCH_ERROR`,

  doFetch: (filter, keepPagination = false) => async (
    dispatch,
    getState,
  ) => {
    try {
      dispatch({
        type: actions.FETCH_STARTED,
        payload: { filter, keepPagination },
      });

      const response = await UsersService.list(
        filter,
        selectors.selectOrderBy(getState()),
        1000, 0
//        selectors.selectLimit(getState()),
//        selectors.selectOffset(getState()),
      );

      dispatch({
        type: actions.FETCH_SUCCESS,
        payload: {
          rows: response.rows,
          count: response.count,
        },
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: actions.FETCH_ERROR,
      });
    }
  },
};

export default actions;
