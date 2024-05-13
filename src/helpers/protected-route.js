import PropTypes from 'prop-types';
import { Navigate, useLocation } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

export default function ProtectedRoute({ user, children }) {
  const location = useLocation();

  if (!user) {
    return <Navigate to={ROUTES.LOG_IN} state={{ from: location }} replace />;
  }

  return children;
}

ProtectedRoute.propTypes = {
  user: PropTypes.object,
  children: PropTypes.node.isRequired,
};
