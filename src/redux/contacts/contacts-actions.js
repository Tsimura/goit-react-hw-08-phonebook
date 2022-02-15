import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';
export const addContact = createAction('contacts/add', value => ({
  payload: {
    id: shortid.generate(),
    ...value,
  },
}));
export const deleteContact = createAction('contacts/delete');
export const changeFilter = createAction('contacts/filter');
