import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { clearErrors } from "../../actions/userActions";
import ButtonLoader from "../buttonLoader/ButtonLoader";

import { IoMdArrowDropdown } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const { error, user, loading } = useSelector((state) => state.auth);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch(clearErrors());
        }
    }, [dispatch, error, navigate]);
    return (
        <nav className="bg-black py-4">
            <div className="flex flex-row justify-between items-center w-4/5 mx-auto">
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
                                            <button
                                                onClick={() =>
                                                    setOpen(open ? false : true)
                                                }
                                                className="border-2 border-golden rounded-full px-4 py-1 flex items-center relative"
                                            >
                                                {user?.name?.firstName}
                                                <IoMdArrowDropdown className="ml-2" />
                                            </button>
                                            {open && (
                                                <>
                                                    <div className="bg-black p-4 absolute top-20 w-max z-10 rounded-lg">
                                                        <ul>
                                                            <li className="text-white">
                                                                <Link
                                                                    to="/me"
                                                                    className="flex items-center"
                                                                    onClick={() =>
                                                                        setOpen(
                                                                            false
                                                                        )
                                                                    }
                                                                >
                                                                    <AiOutlineUser className="mr-3" />
                                                                    My Profile
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </>
                                            )}
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
