import axios from 'axios';

const urlSignup = 'http://localhost:3001/signup';
const urlLogin = 'http://localhost:3001/auth/login';

export const signupUser = user => dispatch => {
  console.log(user)
  axios.post(
    urlSignup,
    user,
  ).then(res => {
    console.log(res.data);
    dispatch({
      type: 'SIGNUP_SUCCESS',
      payload: {
        token: res.data.auth_token,
      }
    })
  });
};

export const loginUser = user => dispatch => {
  axios.post(
    urlLogin,
    user,
  ).then(res => {
    console.log(res.data);
    dispatch({
      type: 'LOGIN_SUCCESS',
      payload: {
        token: res.data.auth_token,
      }
    })
  });
};
