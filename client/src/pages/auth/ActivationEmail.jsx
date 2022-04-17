import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { activeEmail, clearErrors } from "../../actions/authActions";

const ActivationEmail = () => {
    const { token } = useParams();

    const { isAuthenticated, error, success } = useSelector(
        (state) => state.auth
    );

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/");
        }

        if (success) {
            toast.success("Email Active Successfuly");
            navigate("/");
        }

        if (error) {
            toast.error(error);
            dispatch(clearErrors());
        }
    }, [dispatch, error, navigate, isAuthenticated, success]);

    const activeHandler = () => {
        if (token) {
            dispatch(activeEmail(token));
        }
    };
    return (
        <div className="min-h-full">
            <button className="bg-golden px-4 py-2" onClick={activeHandler}>
                Active
            </button>
        </div>
    );
};

export default ActivationEmail;
