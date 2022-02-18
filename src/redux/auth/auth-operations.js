import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import authActions from './auth-actions';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = '';
//   },
// };

// Создать нового пользователя
const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    return data;
    // token.set(response.data.token);
  } catch (error) {
    console.log(error);
  }
});

// Залогинить пользователя
// const logIn = credentials => async dispatch => {
//   dispatch(authActions.loginRequest());

//   try {
//     const response = await axios.post('/users/login', credentials);

//     token.set(response.data.token);
//     dispatch(authActions.loginSuccess(response.data));
//   } catch (error) {
//     dispatch(authActions.loginError(error.message));
//   }
// };

// Разлогинить пользователя
// const logOut = () => async dispatch => {
//   dispatch(authActions.logoutRequest());

//   try {
//     await axios.post('/users/logout');

//     token.unset();
//     dispatch(authActions.logoutSuccess());
//   } catch (error) {
//     dispatch(authActions.logoutError(error.message));
//   }
// };

// Получить информацию о текущем пользователе
// const getCurrentUser = () => async (dispatch, getState) => {
//   const {
//     auth: { token: persistedToken },
//   } = getState();

//   if (!persistedToken) {
//     return;
//   }

//   token.set(persistedToken);
//   dispatch(authActions.getCurrentUserRequest());

//   try {
//     const response = await axios.get('/users/current');

//     dispatch(authActions.getCurrentUserSuccess(response.data));
//   } catch (error) {
//     dispatch(authActions.getCurrentUserError(error.message));
//   }
// };

const operations = {
  register,
  // logOut,
  // logIn,
  // fetchCurrentUser,
};
export default operations;
