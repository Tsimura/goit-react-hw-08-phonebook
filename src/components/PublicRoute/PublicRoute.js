import { useSelector } from 'react-redux';
import { Navigate, Route } from 'react-router-dom';
import { authSelectors } from 'redux/auth';

export default function PublicRoute({
  children,
  restricted = false,
  ...routeProps
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const showRedirect = isLoggedIn && restricted;
  console.log('showRedirect:', showRedirect);
  return (
    <>
      {/* {...routeProps} */}
      {children}
    </>
  );
}
