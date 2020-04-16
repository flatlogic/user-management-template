import axios from 'axios';
import { toast } from 'react-toastify';
import { getHistory } from 'crud/modules/store';

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

function requestRegister() {
    return {
        type: REGISTER_REQUEST,
    };
}

export function receiveRegister() {
    return {
        type: REGISTER_SUCCESS
    };
}

export function registerError(payload) {
    return {
        type: REGISTER_FAILURE,
        payload,
    };
}

export function registerUser(creds) {
    return (dispatch) => {
      dispatch(requestRegister());

      if (creds.email.length > 0 && creds.password.length > 0) {
        axios.post("/auth/signup", creds).then(res => {
          dispatch(receiveRegister());
          toast.success("You've been registered successfully. Please check your email for verification link");
          getHistory().push('/login');
        }).catch(err => {
          dispatch(registerError(err.response.data));
        })

      } else {
        dispatch(registerError('Something was wrong. Try again'));
      }
    };
}
