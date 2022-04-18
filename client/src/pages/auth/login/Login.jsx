import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { clearErrors, login } from "../../../actions/authActions";
import ButtonLoader from "../../../components/buttonLoader/ButtonLoader";

const Login = () => {
    const [emailOrUsername, setEmailOrUsername] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { isAuthenticated, error, loading } = useSelector(
        (state) => state.auth
    );

    // const redirect = location.search ? location.search.split("=")[1] : "/";

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/");
        }

        if (error) {
            toast.error(error);
            dispatch(clearErrors());
        }
    }, [dispatch, isAuthenticated, error, navigate]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(login(emailOrUsername, password));
    };
    return (
        <div className="min-h-full flex justify-center items-center">
            <div className="w-4/5 mx-auto">
                <div className="bg-white shadow-md p-10 rounded-lg w-2/5 sm:w-full mx-auto">
                    <h1 className="text-center font-bold text-xl">Login</h1>
                    <form onSubmit={submitHandler}>
                        <div className="mt-6">
                            <label htmlFor="username_field">Username</label>
                            <input
                                type="text"
                                value={emailOrUsername}
                                onChange={(e) =>
                                    setEmailOrUsername(e.target.value)
                                }
                                className="w-full mt-3 h-8 border outline-none px-4 py-4 rounded-full"
                            />
                        </div>
                        <div className="mt-6">
                            <label htmlFor="password_field">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full mt-3 h-8 border outline-none px-4 py-4 rounded-full"
                            />
                        </div>
                        <div className="mt-6 text-center">
                            <button
                                type="submit"
                                className="bg-golden px-4 py-2 rounded-full w-2/5 hover:bg-opacity-90 text-center"
                            >
                                {loading ? <ButtonLoader /> : "Login"}
                            </button>
                        </div>
                    </form>
                    <p className="text-center mt-4">
                        Don't have account? <Link to="/register">Sign Up</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
