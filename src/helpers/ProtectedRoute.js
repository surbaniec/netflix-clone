import { useLocation, Navigate } from 'react-router-dom';

export function ProtectedRoute({ user, children }) {
  let location = useLocation();
  if (user) return children;

  if (!user) {
    return <Navigate to='/signin' state={{ from: location }} replace />;
  }

  return null;
}
