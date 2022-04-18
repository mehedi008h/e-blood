import React, { useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { useSelector } from "react-redux";
import Loader from "../../components/loader/Loader";
import Sidebar from "../../components/sidebar/Sidebar";

const EditProfile = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [psRegion, setPsRegion] = useState("");
    const [psCity, setPsCity] = useState("");
    const [psArea, setPsArea] = useState("");
    const [psAddress, setPsAddress] = useState("");
    const [paRegion, setPaRegion] = useState("");
    const [paCity, setPaCity] = useState("");
    const [paArea, setPaArea] = useState("");
    const [paAddress, setPaAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [work, setWork] = useState("");
    const [gender, setGender] = useState("");
    const [bod, setBod] = useState("");
    const [lastDonate, setLastDonate] = useState("");
    const [bio, setBio] = useState("");
    const [avatar, setAvatar] = useState("");
    const [avatarPreview, setAvatarPreview] = useState(
        "https://res.cloudinary.com/mehedi08h/image/upload/v1647280872/react-final/auth/logo_wyrs86.png"
    );
    const { loading } = useSelector((state) => state.auth);

    const genders = ["Male", "Female", "Other"];
    const bloods = ["O+", "A+", "B+", "AB+", "O-", "A-", "B-", "AB-"];
    return (
        <div className="min-h-full flex">
            {loading ? (
                <Loader />
            ) : (
                <>
                    <div className="w-4/5 mx-auto my-8">
                        <div className="flex gap-4">
                            <div>
                                <Sidebar />
                            </div>
                            <div className="w-full bg-white shadow rounded-xl border-2 border-white p-4">
                                <h3>Update Profile</h3>
                                <div className="p-4">
                                    <form>
                                        <div className="flex flex-row sm:flex-col gap-4">
                                            <div className="w-64 sm:w-full">
                                                <div className="flex flex-col items-center justify-center">
                                                    <img
                                                        src={avatarPreview}
                                                        alt="Avatar Preview"
                                                        style={{
                                                            width: "120px",
                                                            height: "120px",
                                                            borderRadius: "50%",
                                                        }}
                                                    />
                                                    <div className="image_file mt-5">
                                                        <input type="file" />
                                                        <AiOutlineCloudUpload
                                                            size={20}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-1 gap-4">
                                                <div className="grid grid-cols-2 gap-4">
                                                    {/* name section  */}
                                                    <div className="">
                                                        <label htmlFor="firstName_field">
                                                            First Name
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="w-full mt-3 h-8 border outline-none px-4 py-4 rounded-full"
                                                        />
                                                    </div>
                                                    {/* name section  */}
                                                    <div className="">
                                                        <label htmlFor="lastName_field">
                                                            Last Name
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="w-full mt-3 h-8 border outline-none px-4 py-4 rounded-full"
                                                        />
                                                    </div>
                                                    {/* phone section  */}
                                                    <div className="">
                                                        <label htmlFor="phone_field">
                                                            Phone
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="w-full mt-3 h-8 border outline-none px-4 py-4 rounded-full"
                                                        />
                                                    </div>
                                                    {/* work section  */}
                                                    <div className="">
                                                        <label htmlFor="work_field">
                                                            Work
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="w-full mt-3 h-8 border outline-none px-4 py-4 rounded-full"
                                                        />
                                                    </div>
                                                    {/* gender section  */}
                                                    <div className="">
                                                        <label htmlFor="gender_field">
                                                            Gender
                                                        </label>
                                                        <select
                                                            id="gender_field"
                                                            className="w-full mt-3 h-8 border outline-none px-4 py-4 rounded-full"
                                                        >
                                                            {genders.map(
                                                                (type) => (
                                                                    <option
                                                                        key={
                                                                            type
                                                                        }
                                                                        value={
                                                                            type
                                                                        }
                                                                    >
                                                                        {type}
                                                                    </option>
                                                                )
                                                            )}
                                                        </select>
                                                    </div>
                                                    {/* blood group section  */}
                                                    <div className="">
                                                        <label htmlFor="blood_field">
                                                            Blood Group
                                                        </label>
                                                        <select
                                                            id="blood_field"
                                                            className="w-full mt-3 h-8 border outline-none px-4 py-4 rounded-full"
                                                        >
                                                            {bloods.map(
                                                                (type) => (
                                                                    <option
                                                                        key={
                                                                            type
                                                                        }
                                                                        value={
                                                                            type
                                                                        }
                                                                    >
                                                                        {type}
                                                                    </option>
                                                                )
                                                            )}
                                                        </select>
                                                    </div>
                                                    {/* bod section  */}
                                                    <div className="">
                                                        <label htmlFor="bod_field">
                                                            Birth of Date
                                                        </label>
                                                        <input
                                                            type="date"
                                                            className="w-full mt-3 h-8 border outline-none px-4 py-4 rounded-full"
                                                        />
                                                    </div>
                                                    {/* last donate date section  */}
                                                    <div className="">
                                                        <label htmlFor="lbdd_field">
                                                            Last Blood Donate
                                                            Date
                                                        </label>
                                                        <input
                                                            type="date"
                                                            className="w-full mt-3 h-8 border outline-none px-4 py-4 rounded-full"
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <h3 className="font-semibold">
                                                        Parmanent Address
                                                    </h3>
                                                    <hr className="my-2" />
                                                    <div className="grid grid-cols-2 gap-4">
                                                        {/* region section  */}
                                                        <div className="">
                                                            <label htmlFor="region_field">
                                                                Region
                                                            </label>
                                                            <input
                                                                type="text"
                                                                className="w-full mt-3 h-8 border outline-none px-4 py-4 rounded-full"
                                                            />
                                                        </div>
                                                        {/* city section  */}
                                                        <div className="">
                                                            <label htmlFor="city_field">
                                                                City
                                                            </label>
                                                            <input
                                                                type="text"
                                                                className="w-full mt-3 h-8 border outline-none px-4 py-4 rounded-full"
                                                            />
                                                        </div>
                                                        {/* area section  */}
                                                        <div className="">
                                                            <label htmlFor="area_field">
                                                                Area
                                                            </label>
                                                            <input
                                                                type="text"
                                                                className="w-full mt-3 h-8 border outline-none px-4 py-4 rounded-full"
                                                            />
                                                        </div>
                                                        {/* address section  */}
                                                        <div className="">
                                                            <label htmlFor="address_field">
                                                                Address
                                                            </label>
                                                            <input
                                                                type="text"
                                                                className="w-full mt-3 h-8 border outline-none px-4 py-4 rounded-full"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* present address  */}
                                                <div>
                                                    <h3 className="font-semibold">
                                                        Present Address
                                                    </h3>
                                                    <hr className="my-2" />
                                                    <div className="grid grid-cols-2 gap-4">
                                                        {/* region section  */}
                                                        <div className="">
                                                            <label htmlFor="region_field">
                                                                Region
                                                            </label>
                                                            <input
                                                                type="text"
                                                                className="w-full mt-3 h-8 border outline-none px-4 py-4 rounded-full"
                                                            />
                                                        </div>
                                                        {/* city section  */}
                                                        <div className="">
                                                            <label htmlFor="city_field">
                                                                City
                                                            </label>
                                                            <input
                                                                type="text"
                                                                className="w-full mt-3 h-8 border outline-none px-4 py-4 rounded-full"
                                                            />
                                                        </div>
                                                        {/* area section  */}
                                                        <div className="">
                                                            <label htmlFor="area_field">
                                                                Area
                                                            </label>
                                                            <input
                                                                type="text"
                                                                className="w-full mt-3 h-8 border outline-none px-4 py-4 rounded-full"
                                                            />
                                                        </div>
                                                        {/* address section  */}
                                                        <div className="">
                                                            <label htmlFor="address_field">
                                                                Address
                                                            </label>
                                                            <input
                                                                type="text"
                                                                className="w-full mt-3 h-8 border outline-none px-4 py-4 rounded-full"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <h3 className="font-semibold">
                                                        Bio
                                                    </h3>
                                                    <hr className="my-2" />
                                                    <textarea
                                                        className="w-full mt-3 h-24 border outline-none px-4 py-4 rounded-md"
                                                        name=""
                                                        id=""
                                                    ></textarea>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-6 text-center">
                                            <button
                                                type="submit"
                                                className="bg-golden px-4 py-2 rounded-full w-2/5 hover:bg-opacity-90 text-center"
                                            >
                                                update
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default EditProfile;
