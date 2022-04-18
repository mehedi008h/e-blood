import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ isAdmin, redirectPath = "/", children }) => {
    const { isAuthenticated, user } = useSelector((state) => state.auth);

    if (isAuthenticated === false) {
        return <Navigate to={redirectPath} replace />;
    }

    if (isAdmin === true && user.role !== "admin") {
        return <Navigate to={redirectPath} replace />;
    }

    return children;
};

export default ProtectedRoute;
