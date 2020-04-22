import axios from 'axios';
import Errors from 'crud/modules/shared/error/errors';
import Message from 'crud/view/shared/message';
import { getHistory } from 'crud/modules/store';
import { doInit } from 'actions/auth';

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

      getHistory().push('/admin/users');
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

        Message.success('User created');
        getHistory().push('/admin/users');
      })
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'USERS_FORM_CREATE_ERROR',
      });
    }
  },

  doUpdate: (id, values, isProfile) => async (
    dispatch,
    getState,
  ) => {
    try {
      dispatch({
        type: 'USERS_FORM_UPDATE_STARTED',
      });

      axios.put(`/users/${id}`, {id, data: values}).then(res => {
        dispatch(doInit());

        dispatch({
          type: 'USERS_FORM_UPDATE_SUCCESS',
        });

        if (isProfile) {
          Message.success('Profile updated');
        }
        else {
          Message.success('User updated');
          getHistory().push('/admin/users');
        }
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
