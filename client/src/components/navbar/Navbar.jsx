import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { clearErrors } from "../../actions/userActions";
import ButtonLoader from "../buttonLoader/ButtonLoader";

const Navbar = () => {
    const { isAuthenticated, error, user, loading } = useSelector(
        (state) => state.loadUser
    );

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/");
        }

        if (error) {
            toast.error(error);
            dispatch(clearErrors());
        }
    }, [dispatch, isAuthenticated, error, navigate]);
    return (
        <nav className="bg-black py-4">
            <div className="flex flex-row justify-between items-center w-4/5 mx-auto py-1">
                <div>
                    <h1 className="text-white font-roboto text-lg font-bold tracking-wider">
                        E-Blood
                    </h1>
                </div>
                <div className="sm:hidden">
                    <ul className="flex flex-row justify-between items-center gap-5">
                        <li className="text-white">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="text-white">
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    {loading ? (
                        <>
                            <ButtonLoader />
                        </>
                    ) : (
                        <>
                            <ul className="flex flex-row justify-between items-center gap-5">
                                {user ? (
                                    <>
                                        <li className="text-white">
                                            <Link to="/login">
                                                {user?.name?.firstName}
                                            </Link>
                                        </li>
                                    </>
                                ) : (
                                    <>
                                        <li className="text-white">
                                            <Link to="/login">Login</Link>
                                        </li>
                                    </>
                                )}
                            </ul>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
