import axios from 'axios';

const urlSignup = 'https://outdoor-app-api.herokuapp.com/signup';
const urlLogin = 'https://outdoor-app-api.herokuapp.com/auth/login';

export const signupUser = (user, history) => dispatch => {
  axios.post(
    urlSignup,
    user,
  ).then(res => {
    dispatch({
      type: 'SIGNUP_SUCCESS',
      payload: {
        token: res.data.auth_token,
      },
    });
    history.push('/');
  });
};

export const loginUser = (user, history) => dispatch => {
  axios.post(
    urlLogin,
    user,
  ).then(res => {
    dispatch({
      type: 'LOGIN_SUCCESS',
      payload: {
        token: res.data.auth_token,
      },
    });
    history.push('/');
  });
};
