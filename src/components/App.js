import { Toaster } from 'react-hot-toast';
import { useEffect, lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import AppBar from './AppBar';
import { authOperations } from '../redux/auth';

const createChunk = componentName => {
  return lazy(() => import(`../views/${componentName}`));
};
const LoginView = createChunk('LoginView');
const RegisterView = createChunk('RegisterView');
const HomeView = createChunk('HomeView');
const ContactsView = createChunk('ContactsView');

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <AppBar />

      <Suspense fallback={<></>}>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/contacts" element={<ContactsView />} />
          <Route path="/register" element={<RegisterView />} />
          <Route path="/login" element={<LoginView />} />
        </Routes>
      </Suspense>

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
  );
}

// !!!! user28@mail.com
// https://youtu.be/ZvfcVZcZUEY?t=5238
