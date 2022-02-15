import { Toaster } from 'react-hot-toast';
import ContactForm from './ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import { AppWrapper, WorkingSpace } from './App.styled';
export default function App() {
  return (
    <AppWrapper>
      <WorkingSpace>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </WorkingSpace>
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
    </AppWrapper>
  );
}
