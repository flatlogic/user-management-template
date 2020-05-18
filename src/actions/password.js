import axios from 'axios';
import Errors from 'components/FormItems/error/errors';
import { push } from 'connected-react-router';
import { toast } from 'react-toastify';

const actions = {
  doChangePassword: ({newPassword, currentPassword}) => async (dispatch) => {
    try {
      dispatch({
        type: 'USERS_FORM_CREATE_STARTED',
      });
      await axios.put('/auth/password-update', {newPassword, currentPassword})
      dispatch({
        type: 'USERS_FORM_UPDATE_SUCCESS',
      });

      toast.success('Password has been updated');
      dispatch(push('/app/dashboard'));

    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'USERS_FORM_CREATE_ERROR',
      });
    }
  },
};

export default actions;
