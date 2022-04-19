import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "../../components/loader/Loader";
import Sidebar from "../../components/sidebar/Sidebar";

import { BiUser } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";

const Profile = () => {
    const { loading, user } = useSelector((state) => state.auth);
    return (
        <div className="min-h-full">
            {loading ? (
                <Loader />
            ) : (
                <>
                    <div className="w-4/5 sm:w-full sm:p-2 mx-auto my-8">
                        <div className="flex flex-row sm:flex-col gap-4">
                            <div>
                                <Sidebar />
                            </div>
                            <div className="w-full bg-white shadow rounded-xl border-2 border-white">
                                <div className="flex justify-between items-center p-4">
                                    <h3>My Profile</h3>
                                    <Link to="/profile/update">Edit</Link>
                                </div>
                                <hr />
                                <div className="grid grid-cols-3 sm:grid-cols-1 gap-4 p-4">
                                    <div className="col-span-1">
                                        <div className="flex flex-col justify-center items-center">
                                            <img
                                                src={user?.avatar?.url}
                                                className="w-32 h-32 rounded-full"
                                                alt=""
                                            />
                                            <h3 className="mt-3 font-semibold">
                                                <span>
                                                    {user?.name?.firstName}
                                                </span>

                                                <span className="ml-1">
                                                    {user?.name?.lastName}
                                                </span>
                                            </h3>
                                            <p className="mt-3">{user?.bio}</p>
                                        </div>
                                    </div>
                                    <div className="col-span-2">
                                        <div className="grid grid-cols-4 gap-4 items-center">
                                            <div className="col-span-4 font-semibold">
                                                Personal Infirmation
                                                {/* <hr /> */}
                                            </div>
                                            <div className="col-span-1 sm:hidden">
                                                <ul>
                                                    <li className="m-2">
                                                        <BiUser size={20} />
                                                    </li>
                                                    <li className="m-2">
                                                        <BiUser size={20} />
                                                    </li>
                                                    <li className="m-2">
                                                        <AiOutlineMail
                                                            size={20}
                                                        />
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-span-1">
                                                <ul>
                                                    <li className="font-medium m-2">
                                                        Name
                                                    </li>
                                                    <li className="font-medium m-2">
                                                        Username
                                                    </li>
                                                    <li className="font-medium m-2">
                                                        Email
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-span-2">
                                                <ul>
                                                    <li className="m-2">
                                                        {`${user?.name?.firstName} ${user?.name?.lastName}`}
                                                    </li>
                                                    <li className="m-2">
                                                        {user?.username}
                                                    </li>
                                                    <li className="m-2">
                                                        {user?.email}
                                                    </li>
                                                </ul>
                                            </div>

                                            {/* present address  */}
                                            <div className="col-span-4 font-semibold">
                                                Prsent Address
                                                {/* <hr /> */}
                                            </div>
                                            <div className="col-span-1 sm:hidden">
                                                <ul>
                                                    <li className="m-2">
                                                        <BiUser size={20} />
                                                    </li>
                                                    <li className="m-2">
                                                        <BiUser size={20} />
                                                    </li>
                                                    <li className="m-2">
                                                        <AiOutlineMail
                                                            size={20}
                                                        />
                                                    </li>
                                                    <li className="m-2">
                                                        <AiOutlineMail
                                                            size={20}
                                                        />
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-span-1">
                                                <ul>
                                                    <li className="font-medium m-2">
                                                        Region
                                                    </li>
                                                    <li className="font-medium m-2">
                                                        City
                                                    </li>
                                                    <li className="font-medium m-2">
                                                        Area
                                                    </li>
                                                    <li className="font-medium m-2">
                                                        Address
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-span-2">
                                                <ul>
                                                    <li className="m-2">
                                                        {
                                                            user?.presentAddress
                                                                ?.region
                                                        }
                                                    </li>
                                                    <li className="m-2">
                                                        {
                                                            user?.presentAddress
                                                                ?.city
                                                        }
                                                    </li>
                                                    <li className="m-2">
                                                        {
                                                            user?.presentAddress
                                                                ?.area
                                                        }
                                                    </li>
                                                    <li className="m-2">
                                                        {
                                                            user?.presentAddress
                                                                ?.address
                                                        }
                                                    </li>
                                                </ul>
                                            </div>

                                            {/* permanent address  */}
                                            <div className="col-span-4 font-semibold">
                                                Permanent Address
                                                {/* <hr /> */}
                                            </div>
                                            <div className="col-span-1 sm:hidden">
                                                <ul>
                                                    <li className="m-2">
                                                        <BiUser size={20} />
                                                    </li>
                                                    <li className="m-2">
                                                        <BiUser size={20} />
                                                    </li>
                                                    <li className="m-2">
                                                        <AiOutlineMail
                                                            size={20}
                                                        />
                                                    </li>
                                                    <li className="m-2">
                                                        <AiOutlineMail
                                                            size={20}
                                                        />
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-span-1">
                                                <ul>
                                                    <li className="font-medium m-2">
                                                        Region
                                                    </li>
                                                    <li className="font-medium m-2">
                                                        City
                                                    </li>
                                                    <li className="font-medium m-2">
                                                        Area
                                                    </li>
                                                    <li className="font-medium m-2">
                                                        Address
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-span-2">
                                                <ul>
                                                    <li className="m-2">
                                                        {
                                                            user
                                                                ?.permanentAddress
                                                                ?.region
                                                        }
                                                    </li>
                                                    <li className="m-2">
                                                        {
                                                            user
                                                                ?.permanentAddress
                                                                ?.city
                                                        }
                                                    </li>
                                                    <li className="m-2">
                                                        {
                                                            user
                                                                ?.permanentAddress
                                                                ?.area
                                                        }
                                                    </li>
                                                    <li className="m-2 overflow-hidden">
                                                        {
                                                            user
                                                                ?.permanentAddress
                                                                ?.address
                                                        }
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Profile;
