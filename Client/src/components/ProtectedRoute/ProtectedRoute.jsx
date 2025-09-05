import { Navigate } from "react-router-dom";

function ProtectedRoute({ user, role, children }) {
  if (!user) {
    // if not logged in → redirect to login
    return <Navigate to="/login" replace />;
  }

  if (user !== role) {
    // if logged in but wrong role → redirect to correct dashboard
    return <Navigate to={user === "admin" ? "/admin" : "/employee"} replace />;
  }

  return children; // ✅ correct role → allow access
}

export default ProtectedRoute;
