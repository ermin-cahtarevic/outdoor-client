const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
const LOGIN_FAIL = 'LOGIN_FAIL';
const SIGNUP_FAIL = 'SIGNUP_FAIL';

const initalState = {
  token: localStorage.getItem('token'),
  isAuth: false,
}

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
      localStorage.removeItem('token');
      return {
        token: null,
        isAuth: false,
      };
    default: return state;
  }
};

export default authReducer;
