import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { AiOutlineUser, AiOutlineEdit } from "react-icons/ai";

const Sidebar = () => {
    const { user } = useSelector((state) => state.auth);
    return (
        <div className="w-64 bg-white shadow rounded-xl border-2 border-white">
            <div className="flex flex-col items-center justify-center p-4">
                {user && user.avatar ? (
                    <>
                        <img className="w-16 h-16 rounded-full" src="" alt="" />
                    </>
                ) : (
                    <>
                        <div className="w-16 h-16 rounded-full bg-golden flex justify-center items-center font-semibold gap-1">
                            <span> {user?.name?.firstName.charAt(0)}</span>
                            <span>{user?.name?.lastName.charAt(0)}</span>
                        </div>
                    </>
                )}

                <h3 className="mt-4">
                    <span>{user?.name?.firstName}</span>
                    <span> {user?.name?.lastName}</span>
                </h3>
            </div>
            <hr />
            <div className="p-4">
                <ul className="flex flex-col">
                    <li className="px-6 py-2 my-2 rounded-md hover:bg-glass">
                        <Link
                            className="text-grey flex items-center  font-semibold tracking-wide"
                            to="/me"
                        >
                            <AiOutlineUser
                                className="mr-4"
                                size={20}
                                color="#383838"
                            />
                            My Profile
                        </Link>
                    </li>
                    <li className="px-6 py-2 my-2 rounded-md hover:bg-glass">
                        <Link
                            className="text-grey flex items-center font-semibold tracking-wide"
                            to="/me"
                        >
                            <AiOutlineEdit
                                className="mr-4"
                                color="#383838"
                                size={20}
                            />
                            Update Profile
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
