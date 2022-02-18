// import toast from 'react-hot-toast';
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
// import { addContact, deleteContact, changeFilter } from './contacts-actions';
import {
  changeFilter,
  // addContactRequest,
  addContactSuccess,
  // addContactError,
  // deleteContactRequest,
  deleteContactSuccess,
  // deleteContactError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
} from './contacts-actions';

const items = createReducer([], {
  [fetchContactsSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const loading = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,
});
const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});
const error = createReducer(null, {});
export default combineReducers({
  items,
  loading,
  filter,
  error,
});

// =============================================
// const items = createReducer([], {
//   [addContact]: (state, { payload }) => {
//     if (
//       state.find(
//         contact => contact.name.toLowerCase() === payload.name.toLowerCase()
//       )
//     ) {
//       toast.error(`${payload.name} is already in contacts.`);
//       return;
//     }
//     return [...state, payload];
//   },
//   [deleteContact]: (state, { payload }) =>
//     state.filter(({ id }) => id !== payload),
// });
// =============================================
