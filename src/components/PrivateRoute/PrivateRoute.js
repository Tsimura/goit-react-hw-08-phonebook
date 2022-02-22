import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { authSelectors } from 'redux/auth';

export default function PrivateRoute({ children, ...routeProps }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <>
      {/* {...routeProps} */}
      {isLoggedIn ? children : <Navigate to="/login" />}
    </>
  );
}
