import { Toaster } from 'react-hot-toast';
import { useEffect, lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import AppBar from './AppBar';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';
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
          {/* <Route path="/register" element={<RegisterView />} /> */}
          {/* <Route path="/login" element={<LoginView />} /> */}
          {/* <Route path="/" element={<HomeView />} /> */}
          {/* <Route path="/contacts" element={<ContactsView />} /> */}

          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login">
                <ContactsView />
              </PrivateRoute>
            }
          />

          <Route
            path="/"
            element={
              <PublicRoute>
                <HomeView />
              </PublicRoute>
            }
          />

          <Route
            path="/register"
            element={
              <PublicRoute restricted>
                <RegisterView />
              </PublicRoute>
            }
          />

          <Route
            path="/login"
            element={
              <PublicRoute restricted redirectTo="/contacts">
                <LoginView />
              </PublicRoute>
            }
          />
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
// https://youtu.be/nve1tVdc2W0?t=2196
