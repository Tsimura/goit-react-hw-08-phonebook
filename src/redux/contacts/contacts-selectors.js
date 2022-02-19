import { createSelector } from '@reduxjs/toolkit';

// const getLoading = state => state.contacts.loading;

const getFilter = state => state.contacts.filter;

const getAllContacts = state => state.contacts.items;

const getVisibleContacts = createSelector(
  [getAllContacts, getFilter],
  (contacts, filter) => {
    console.log('Составляю новый массив видимых контактов');
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  }
);

const contactsSelectors = {
  // getLoading,
  getFilter,
  getAllContacts,
  getVisibleContacts,
};
export default contactsSelectors;
