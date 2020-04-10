import axios from 'axios';
import UsersService from 'crud/modules/users/usersService';
import Errors from 'crud/modules/shared/error/errors';
import Message from 'crud/view/shared/message';
import { getHistory } from 'crud/modules/store';
import { i18n } from 'crud/i18n';

const actions = {
  doNew: () => {
    return {
      type: 'USERS_FORM_RESET',
    };
  },

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: 'USERS_FORM_FIND_STARTED',
      });

      axios.get(`/users/${id}`).then(res => {
        const record = res.data;
        dispatch({
          type: 'USERS_FORM_FIND_SUCCESS',
          payload: record,
        });
      })
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'USERS_FORM_FIND_ERROR',
      });

      getHistory().push('/users');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: 'USERS_FORM_CREATE_STARTED',
      });

      axios.post('/users', { data: values }).then(res => {
        dispatch({
          type: 'USERS_FORM_CREATE_SUCCESS',
        });

        Message.success(i18n('entities.users.create.success'));
        getHistory().push('/users');
      })
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'USERS_FORM_CREATE_ERROR',
      });
    }
  },

  doUpdate: (id, values) => async (
    dispatch,
    getState,
  ) => {
    try {
      dispatch({
        type: 'USERS_FORM_UPDATE_STARTED',
      });

      axios.put(`/users/${id}`, {id, data: values}).then(res => {
        dispatch({
          type: 'USERS_FORM_UPDATE_SUCCESS',
        });

        Message.success(i18n('entities.users.update.success'));
        getHistory().push('/app/users');
      })
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'USERS_FORM_UPDATE_ERROR',
      });
    }
  },
};

export default actions;
