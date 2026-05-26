import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  // Check if user is logged in
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  
  if (!isLoggedIn) {
    // Redirect to sign-in if not logged in
    return <Navigate to="/sign-in" replace />;
  }

  // Check if payment is completed for dashboard access
  const paymentCompleted = localStorage.getItem("paymentCompleted") === "true";
  const currentPath = window.location.pathname;
  
  if (currentPath.includes("/dashboard") && !paymentCompleted) {
    // Redirect to payment if trying to access dashboard without payment
    return <Navigate to="/payment" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
