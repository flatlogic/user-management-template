import axios from 'axios';
import config from '../config';
import jwt from "jsonwebtoken";
import { toast } from 'react-toastify';
import { getHistory } from 'crud/modules/store';
import authActions from 'actions/authActions';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const VERIFY_REQUEST = 'VERIFY_REQUEST';
export const VERIFY_SUCCESS = 'VERIFY_SUCCESS';
export const VERIFY_FAILURE = 'VERIFY_FAILURE';

function requestLogin() {
    return {
        type: LOGIN_REQUEST,
    };
}

export function receiveLogin() {
    return {
        type: LOGIN_SUCCESS
    };
}

function loginError(payload) {
    return {
        type: LOGIN_FAILURE,
        payload,
    };
}

function requestLogout() {
    return {
        type: LOGOUT_REQUEST,
    };
}

export function receiveLogout() {
    return {
        type: LOGOUT_SUCCESS,
    };
}

// Logs the user out
export function logoutUser() {
    return (dispatch) => {
        dispatch(requestLogout());
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        document.cookie = 'token=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        axios.defaults.headers.common['Authorization'] = "";
        dispatch(receiveLogout());
    };
}

export function receiveToken(token) {
    return (dispatch) => {
        let user = jwt.decode(token);

        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        axios.defaults.headers.common['Authorization'] = "Bearer " + token;
        dispatch(receiveLogin());
    }
}

export function loginUser(creds) {
    return (dispatch) => {
      dispatch(requestLogin());
      if (creds.social) {
        window.location.href = config.baseURLApi + "/auth/signin/" + creds.social + (process.env.NODE_ENV === "production" ? "?app=sing-app-react" : "");
      } else if (creds.email.length > 0 && creds.password.length > 0) {
        axios.post("/auth/signin/local", creds).then(res => {
          const token = res.data;
          dispatch(receiveToken(token));
          dispatch(authActions.doInit());
        }).catch(err => {
          dispatch(loginError(err.response.data));
        })
      } else {
        dispatch(loginError('Something was wrong. Try again'));
      }
    };
}

export function verifyEmail(token) {
  return(dispatch) => {
    axios.put("/auth/verify-email", {token}).then(verified => {
      if (verified) {
        toast.success("Your email was verified");
      }
    }).catch(err => {
      toast.error(err.response.data);
    }).finally(() => {
      getHistory().push('/login');
    })
  }
}
