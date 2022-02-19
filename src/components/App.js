// import { useEffect, lazy, Suspense } from 'react';
// import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
// import ContactForm from './ContactForm';
// import ContactList from 'components/ContactList';
// import Filter from 'components/Filter';
import AppBar from './AppBar';
// import { authOperations } from '../redux/auth';
import LoginView from '../views/LoginView';
import RegisterView from '../views/RegisterView';
import HomeView from '../views/HomeView';
import ContactsPage from '../views/ContactsPage';

// import { AppWrapper, WorkingSpace } from './App.styled';

export default function App() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(authOperations.fetchCurrentUser());
  // }, [dispatch]);

  return (
    // <AppWrapper>
    // <WorkingSpace>
    <>
      <AppBar />

      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/register" element={<RegisterView />} />
        <Route path="/login" element={<LoginView />} />
      </Routes>

      {/* <h1>Phonebook</h1> */}
      {/* <ContactForm /> */}
      {/* <h2>Contacts</h2> */}
      {/* <Filter /> */}
      {/* <ContactList /> */}

      {/* </WorkingSpace> */}
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: 1000,
          style: {
            background: '#363636',
            color: '#fff',
          },
        }}
      />
    </>
    // </AppWrapper>
  );
}

// !!!! user28@mail.com
// https://www.youtube.com/watch?v=ZvfcVZcZUEY&t=1201s
