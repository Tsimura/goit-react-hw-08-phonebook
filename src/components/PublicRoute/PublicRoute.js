import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { authSelectors } from 'redux/auth';

export default function PublicRoute({
  children,
  restricted = false,
  redirectTo = '/',
  ...routeProps
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const showRedirect = isLoggedIn && restricted;
  // console.log('restricted:', restricted);
  // console.log('routeProps:', routeProps);
  return (
    <>
      {/* {children} */}
      {showRedirect ? <Navigate to={redirectTo} /> : children}
    </>
  );
}
