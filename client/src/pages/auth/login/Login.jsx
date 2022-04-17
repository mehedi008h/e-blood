import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="min-h-full flex justify-center items-center">
            <div className="w-4/5 mx-auto">
                <div className="bg-white shadow-md p-10 rounded-lg w-2/5 sm:w-full mx-auto">
                    <h1 className="text-center font-bold text-xl">Login</h1>
                    <form>
                        <div className="mt-6">
                            <label htmlFor="username_field">Username</label>
                            <input
                                type="text"
                                className="w-full mt-3 h-8 border outline-none px-4 py-4 rounded-full"
                            />
                        </div>
                        <div className="mt-6">
                            <label htmlFor="password_field">Password</label>
                            <input
                                type="password"
                                className="w-full mt-3 h-8 border outline-none px-4 py-4 rounded-full"
                            />
                        </div>
                        <div className="mt-6 text-center">
                            <button className="bg-golden px-4 py-2 rounded-full w-2/5 hover:bg-opacity-90 text-center">
                                Login
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
