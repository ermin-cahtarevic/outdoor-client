const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
const LOGIN_FAIL = 'LOGIN_FAIL';
const SIGNUP_FAIL = 'SIGNUP_FAIL';
const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

const token = localStorage.getItem('token');
let isAuth = false;

if (token) isAuth = true;

const initalState = {
  token,
  isAuth,
};

const authReducer = (state = initalState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
    case SIGNUP_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      return {
        token: action.payload.token,
        isAuth: true,
      };
    case LOGIN_FAIL:
    case SIGNUP_FAIL:
    case LOGOUT_SUCCESS:
      localStorage.removeItem('token');
      return {
        token: null,
        isAuth: false,
      };
    default: return state;
  }
};

export default authReducer;
