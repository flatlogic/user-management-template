import actions from 'crud/modules/users/view/usersViewActions';

const initialData = {
  loading: false,
  record: null,
};

export default (state = initialData, { type, payload }) => {
  if (type === 'USERS_VIEW_FIND_STARTED') {
    return {
      ...state,
      record: null,
      loading: true,
    };
  }

  if (type === 'USERS_VIEW_FIND_SUCCESS') {
    return {
      ...state,
      record: payload,
      loading: false,
    };
  }

  if (type === 'USERS_VIEW_FIND_ERROR') {
    return {
      ...state,
      record: null,
      loading: false,
    };
  }

  return state;
};
