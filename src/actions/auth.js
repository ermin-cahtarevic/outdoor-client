import axios from 'axios';

const urlSignup = 'http://localhost:3001/signup';
const urlLogin = 'http://localhost:3001/auth/login';

export const signupUser = user => {
  axios.post(
    urlSignup,
    {
      name: user.name,
      email: user.email,
      password: user.password,
      password_confirmation: user.password_confirmation,
    },
  ).then(res => {
    console.log(res.data);
  });
};

export const loginUser = user => dispatch => {
  axios.post(
    urlLogin,
    {
      email: user.email,
      password: user.password,
    },
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
