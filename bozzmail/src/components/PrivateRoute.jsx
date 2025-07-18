import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
    // Get token from cookies
    const token = localStorage.getItem("token");

    // If token exists, render the protected content
    if (token) {
        return children;
    }

    // If no token, redirect to login
    return <Navigate to="/" replace />;
};

export default PrivateRoute;