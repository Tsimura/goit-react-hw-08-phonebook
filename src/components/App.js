import { useEffect, lazy, Suspense } from 'react';
// import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import AppBar from './AppBar';
// import { authOperations } from '../redux/auth';

// Написати функці.-шаблон для lazy!!!
const LoginView = lazy(() => import('../views/LoginView/LoginView.jsx'));
const RegisterView = lazy(() =>
  import('../views/RegisterView/RegisterView.jsx')
);
const HomeView = lazy(() => import('../views/HomeView/HomeView.jsx'));
const ContactsPage = lazy(() =>
  import('../views/ContactsView/ContactsPage.jsx')
);

export default function App() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(authOperations.fetchCurrentUser());
  // }, [dispatch]);

  return (
    <>
      <AppBar />

      <Suspense fallback={<></>}>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/contacts" element={<ContactsPage />} />
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
// https://www.youtube.com/watch?v=ZvfcVZcZUEY&t=1201s
