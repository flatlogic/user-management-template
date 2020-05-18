import axios from 'axios';
import Errors from 'components/FormItems/error/errors';
import { push } from 'connected-react-router';
import { doInit } from 'actions/auth';
import { toast } from 'react-toastify';

const actions = {
  doNew: () => {
    return {
      type: '((NAME))_FORM_RESET',
    };
  },

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: '((NAME))_FORM_FIND_STARTED',
      });

      axios.get(`/((name))/${id}`).then(res => {
        const record = res.data;

        dispatch({
          type: '((NAME))_FORM_FIND_SUCCESS',
          payload: record,
        });
      })
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: '((NAME))_FORM_FIND_ERROR',
      });

      dispatch(push('/admin/((name))'));
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: '((NAME))_FORM_CREATE_STARTED',
      });

      axios.post('/((name))', { data: values }).then(res => {
        dispatch({
          type: '((NAME))_FORM_CREATE_SUCCESS',
        });

        toast.success('((Name)) created');
        dispatch(push('/admin/((name))'));
      })
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: '((NAME))_FORM_CREATE_ERROR',
      });
    }
  },

  doUpdate: (id, values, isProfile) => async (
    dispatch,
    getState,
  ) => {
    try {
      dispatch({
        type: '((NAME))_FORM_UPDATE_STARTED',
      });

      await axios.put(`/((name))/${id}`, {id, data: values});

      dispatch(doInit());

      dispatch({
        type: '((NAME))_FORM_UPDATE_SUCCESS',
      });

      if (isProfile) {
        toast.success('Profile updated');
      } else {
        toast.success('((Name)) updated');
        dispatch(push('/admin/((name))'));
      }
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: '((NAME))_FORM_UPDATE_ERROR',
      });
    }
  },
};

export default actions;
