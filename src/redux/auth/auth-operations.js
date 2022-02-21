import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import authActions from './auth-actions';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

// Создать нового пользователя
// POST ​/users​/signup
const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
});

// Залогинить пользователя
// POST ​/users​/login
const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
});

// Разлогинить пользователя
// POST ​/users​/logout
const logOut = createAsyncThunk('/users/logout', async () => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {
    console.log(error);
  }
});

// ===============================================
// Получить информацию о текущем пользователе
// GET ​/users​/current

const fetchCurrentUser = createAsyncThunk(
  '/users/current',
  async (_, thunkApI) => {}
);
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
  logOut,
  logIn,
  fetchCurrentUser,
};
export default operations;
