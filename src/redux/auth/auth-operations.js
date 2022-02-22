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
  async (_, thunkApI) => {
    const state = thunkApI.getState();
    const persistedToken = state.auth.token;
    // console.log('state:', state);
    // console.log('persistedToken:', persistedToken);

    if (persistedToken === null) {
      return thunkApI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      // console.log('data:', data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const operations = {
  register,
  logOut,
  logIn,
  fetchCurrentUser,
};
export default operations;
