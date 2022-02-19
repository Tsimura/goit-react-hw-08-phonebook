// import React from 'react';

// export default function ContactsPage() {
//   return (
//     <>
//       <h1>Phonebook</h1>
//       {/* <ContactForm /> */}
//       <h2>Contacts</h2>
//       <hr />
//       <p>Contacts will be here</p>
//       {/* <Filter /> */}
//       {/* <ContactList /> */}
//     </>
//   );
// }
// =======================
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ContactForm from '../../components/ContactForm';
import ContactList from '../../components/ContactList';
import { contactsOperations } from '../../redux/contacts';
// import Filter from 'components/Filter';

// import { authOperations } from '../redux/auth';

// import { AppWrapper, WorkingSpace } from './App.styled';

export default function ContactsPage() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);
  return (
    // <AppWrapper>
    // <WorkingSpace>
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {/* <Filter /> */}
      {/* <ContactList /> */}

      {/* </WorkingSpace> */}
    </>
    // </AppWrapper>
  );
}
