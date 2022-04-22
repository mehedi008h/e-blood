import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "../../components/loader/Loader";
import Sidebar from "../../components/sidebar/Sidebar";
import moment from "moment";

import { BiUser } from "react-icons/bi";
import { MdOutlineBloodtype } from "react-icons/md";
import { BsCalendar2Date, BsGenderAmbiguous } from "react-icons/bs";
import { FaBirthdayCake } from "react-icons/fa";
import { CgWorkAlt } from "react-icons/cg";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

const Profile = () => {
    const { loading, user } = useSelector((state) => state.auth);
    return (
        <div className="min-h-full flex">
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
                                            <p className="mt-3">
                                                {user?.remaning}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-span-2">
                                        <div className="grid grid-cols-4 gap-4 items-center">
                                            <div className="col-span-4 font-semibold">
                                                Personal Infirmation
                                                {/* <hr /> */}
                                            </div>
                                            <div className="col-span-2">
                                                <li className="m-2 list-none flex flex-row gap-4 font-medium">
                                                    <BiUser size={20} /> Name
                                                </li>
                                                <li className="m-2 list-none flex flex-row gap-4 font-medium">
                                                    <BiUser size={20} />{" "}
                                                    Username
                                                </li>
                                                <li className="m-2 list-none flex flex-row gap-4 font-medium">
                                                    <AiOutlineMail size={20} />{" "}
                                                    Email
                                                </li>
                                                <li className="m-2 list-none flex flex-row gap-4 font-medium">
                                                    <AiOutlinePhone size={20} />{" "}
                                                    Phone
                                                </li>
                                                <li className="m-2 list-none flex flex-row gap-4 font-medium">
                                                    <CgWorkAlt size={20} /> Work
                                                </li>
                                                <li className="m-2 list-none flex flex-row gap-4 font-medium">
                                                    <FaBirthdayCake size={20} />{" "}
                                                    Birth Date
                                                </li>
                                                <li className="m-2 list-none flex flex-row gap-4 font-medium">
                                                    <BsCalendar2Date
                                                        size={20}
                                                    />{" "}
                                                    Last Donate Date
                                                </li>
                                                <li className="m-2 list-none flex flex-row gap-4 font-medium">
                                                    <MdOutlineBloodtype
                                                        size={20}
                                                    />{" "}
                                                    Blood Group
                                                </li>
                                                <li className="m-2 list-none flex flex-row gap-4 font-medium">
                                                    <BsGenderAmbiguous
                                                        size={20}
                                                    />
                                                    Gender
                                                </li>
                                            </div>
                                            <div className="col-span-2">
                                                <li className="m-2 list-none">
                                                    {`${user?.name?.firstName} ${user?.name?.lastName}`}
                                                </li>
                                                <li className="m-2 list-none">
                                                    {user?.username}
                                                </li>
                                                <li className="m-2 list-none">
                                                    {user?.email}
                                                </li>
                                                <li className="m-2 list-none">
                                                    {user?.phone}
                                                </li>
                                                <li className="m-2 list-none">
                                                    {user?.work}
                                                </li>
                                                <li className="m-2 list-none">
                                                    {moment(user?.bod).format(
                                                        "MMMM d, YYYY"
                                                    )}
                                                </li>
                                                <li className="m-2 list-none">
                                                    {moment(
                                                        user?.lastDonateDate
                                                    ).format("MMMM d, YYYY")}
                                                </li>
                                                <li className="m-2 list-none">
                                                    {user?.bloodGroup}
                                                </li>
                                                <li className="m-2 list-none">
                                                    {user?.gender}
                                                </li>
                                            </div>

                                            {/* present address  */}
                                            <div className="col-span-4 font-semibold">
                                                Prsent Address
                                                {/* <hr /> */}
                                            </div>
                                            <div className="col-span-2">
                                                <ul>
                                                    <li className="m-2 list-none flex flex-row gap-4 font-medium">
                                                        <BiUser size={20} />{" "}
                                                        Region
                                                    </li>
                                                    <li className="m-2 list-none flex flex-row gap-4 font-medium">
                                                        <BiUser size={20} />{" "}
                                                        City
                                                    </li>
                                                    <li className="m-2 list-none flex flex-row gap-4 font-medium">
                                                        <AiOutlineMail
                                                            size={20}
                                                        />{" "}
                                                        Area
                                                    </li>
                                                    <li className="m-2 list-none flex flex-row gap-4 font-medium">
                                                        <AiOutlineMail
                                                            size={20}
                                                        />{" "}
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
                                            <div className="col-span-2">
                                                <ul>
                                                    <li className="m-2 list-none flex flex-row gap-4 font-medium">
                                                        <BiUser size={20} />
                                                        Region
                                                    </li>
                                                    <li className="m-2 list-none flex flex-row gap-4 font-medium">
                                                        <BiUser size={20} />
                                                        City
                                                    </li>
                                                    <li className="m-2 list-none flex flex-row gap-4 font-medium">
                                                        <AiOutlineMail
                                                            size={20}
                                                        />
                                                        Area
                                                    </li>
                                                    <li className="m-2 list-none flex flex-row gap-4 font-medium">
                                                        <AiOutlineMail
                                                            size={20}
                                                        />
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
