import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="min-h-full flex justify-center items-center">
            <div className="w-4/5 mx-auto">
                <div className="bg-white shadow-md p-10 rounded-lg w-3/5 sm:w-full my-6 mx-auto">
                    <h1 className="text-center  text-xl">Sign up to E-Blood</h1>
                    <div className="flex flex-row sm:flex-col justify-between items-center gap-8 mt-3">
                        <div className="w-2/4 sm:w-full">
                            <form>
                                <div className="flex gap-4 flex-row sm:flex-col">
                                    <div className="mt-6">
                                        <label htmlFor="firstName_field">
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full mt-1 h-8 border outline-none px-4 py-4 rounded-full"
                                        />
                                    </div>
                                    <div className="mt-6">
                                        <label htmlFor="lastName_field">
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full mt-1 h-8 border outline-none px-4 py-4 rounded-full"
                                        />
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <label htmlFor="username_field">
                                        Username
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full mt-1 h-8 border outline-none px-4 py-4 rounded-full"
                                    />
                                </div>
                                <div className="mt-6">
                                    <label htmlFor="username_field">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        className="w-full mt-1 h-8 border outline-none px-4 py-4 rounded-full"
                                    />
                                </div>
                                <div className="mt-6">
                                    <label htmlFor="password_field">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        className="w-full mt-1 h-8 border outline-none px-4 py-4 rounded-full"
                                    />
                                </div>

                                <div className="mt-6 text-center">
                                    <button className="bg-golden px-4 py-2 rounded-full w-2/5 hover:bg-opacity-90 text-center">
                                        Sign Up
                                    </button>
                                </div>
                            </form>
                            <p className="text-center mt-4">
                                Already have an account?{" "}
                                <Link to="/login">Login</Link>
                            </p>
                        </div>
                        <div className="flex flex-col sm:hidden items-center gap-4">
                            <div
                                style={{ height: "150px" }}
                                className="w-0.5 bg-golden rounded-full"
                            ></div>
                            <div>OR</div>
                            <div
                                style={{ height: "150px" }}
                                className="w-0.5 bg-golden rounded-full"
                            ></div>
                        </div>

                        <div className="w-2/5 sm:w-full">
                            <div>
                                <button className="bg-golden px-4 py-2 w-full rounded-md">
                                    Sign in with Google
                                </button>
                                <button className="bg-golden mt-8 px-4 py-2 w-full rounded-md">
                                    Sign in with Facebook
                                </button>
                                <button className="bg-golden mt-8 px-4 py-2 w-full rounded-md">
                                    Sign in with Twitter
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
