import actions from 'crud/modules/users/list/usersListActions';

const initialData = {
  rows: [],
  loading: false,
};

export default (state = initialData, { type, payload }) => {

  if (type === 'USERS_LIST_FETCH_STARTED') {
    return {
      ...state,
      loading: true,
    };
  }

  if (type === 'USERS_LIST_FETCH_SUCCESS') {
    return {
      ...state,
      loading: false,
      rows: payload.rows,
    };
  }

  if (type === 'USERS_LIST_FETCH_ERROR') {
    return {
      ...state,
      loading: false,
      rows: [],
    };
  }

  return state;
};
