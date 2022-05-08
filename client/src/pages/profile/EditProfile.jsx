import React, { useEffect, useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
    clearErrors,
    loadUser,
    updateProfile,
} from "../../actions/userActions";
import Sidebar from "../../components/sidebar/Sidebar";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { UPDATE_PROFILE_RESET } from "../../constants/userConstants";
import ButtonLoader from "../../components/buttonLoader/ButtonLoader";

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
    const [blood, setBlood] = useState("");
    const [avatar, setAvatar] = useState("");
    const [avatarPreview, setAvatarPreview] = useState(
        "https://res.cloudinary.com/mehedi08h/image/upload/v1647280872/react-final/auth/logo_wyrs86.png"
    );

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { user } = useSelector((state) => state.auth);
    const { error, isUpdated, loading } = useSelector((state) => state.user);

    useEffect(() => {
        if (user) {
            setFirstName(user.name?.firstName);
            setLastName(user.name?.lastName);
            setPhone(user.phone);
            //permanent address
            setPaRegion(user.permanentAddress?.region);
            setPaCity(user.permanentAddress?.city);
            setPaArea(user.permanentAddress?.area);
            setPaAddress(user.permanentAddress?.address);
            // present address
            setPsRegion(user.presentAddress?.region);
            setPsCity(user.presentAddress?.city);
            setPsArea(user.presentAddress?.area);
            setPsAddress(user.presentAddress?.address);

            setBio(user.bio);
            setBod(moment(user.bod).format("MM-DD-YYYY"));
            setGender(user.gender);
            setLastDonate(user.lastDonateDate);
            setWork(user.work);
            setBlood(user.bloodGroup);

            setAvatarPreview(user.avatar?.url);
        }

        if (error) {
            toast.error(error);
            dispatch(clearErrors());
        }

        if (isUpdated) {
            toast.success("User updated successfully");
            dispatch(loadUser());

            navigate("/profile/update");

            dispatch({
                type: UPDATE_PROFILE_RESET,
            });
        }
    }, [dispatch, user, navigate, error, isUpdated]);

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.set("firstName", firstName);
        formData.set("lastName", lastName);
        formData.set("phone", phone);
        formData.set("work", work);
        formData.set("bloodGroup", blood);
        formData.set("lastDonateDate", lastDonate);
        formData.set("gender", gender);
        formData.set("bio", bio);
        formData.set("bod", bod);
        // present
        formData.set("psRegion", psRegion);
        formData.set("psCity", psCity);
        formData.set("psArea", psArea);
        formData.set("psAddress", psAddress);
        // permanent
        formData.set("paRegion", paRegion);
        formData.set("paCity", paCity);
        formData.set("paArea", paArea);
        formData.set("paAddress", paAddress);
        formData.set("avatar", avatar);

        dispatch(updateProfile(formData));
    };

    const onChange = (e) => {
        const reader = new FileReader();

        reader.onload = () => {
            if (reader.readyState === 2) {
                setAvatarPreview(reader.result);
                setAvatar(reader.result);
            }
        };

        reader.readAsDataURL(e.target.files[0]);
    };

    const genders = ["Male", "Female", "Other"];
    const bloods = ["O+", "A+", "B+", "AB+", "O-", "A-", "B-", "AB-"];
    return (
        <div className="min-h-full flex">
            <div className="w-4/5 sm:w-full sm:p-2 mx-auto my-8">
                <div className="flex flex-row sm:flex-col gap-4">
                    <div>
                        <Sidebar />
                    </div>
                    <div className="w-full bg-white shadow rounded-xl border-2 border-white p-4">
                        <h3>Update Profile</h3>
                        <div className="p-4">
                            <form
                                onSubmit={submitHandler}
                                encType="multipart/form-data"
                            >
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
                                                <input
                                                    type="file"
                                                    name="avatar"
                                                    id="customFile"
                                                    accept="iamges/*"
                                                    onChange={onChange}
                                                />
                                                <AiOutlineCloudUpload
                                                    size={20}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 gap-4">
                                        <div className="grid grid-cols-2 sm:grid-cols-1 gap-4">
                                            {/* name section  */}
                                            <div className="">
                                                <label htmlFor="firstName_field">
                                                    First Name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="firstName"
                                                    value={firstName}
                                                    onChange={(e) =>
                                                        setFirstName(
                                                            e.target.value
                                                        )
                                                    }
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
                                                    name="lastName"
                                                    value={lastName}
                                                    onChange={(e) =>
                                                        setLastName(
                                                            e.target.value
                                                        )
                                                    }
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
                                                    name="phone"
                                                    value={phone}
                                                    onChange={(e) =>
                                                        setPhone(e.target.value)
                                                    }
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
                                                    name="work"
                                                    value={work}
                                                    onChange={(e) =>
                                                        setWork(e.target.value)
                                                    }
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
                                                    value={gender}
                                                    name="gender"
                                                    onChange={(e) =>
                                                        setGender(
                                                            e.target.value
                                                        )
                                                    }
                                                    className="w-full mt-3 h-8 border outline-none px-4 rounded-full"
                                                >
                                                    {genders.map((type) => (
                                                        <option
                                                            key={type}
                                                            value={type}
                                                        >
                                                            {type}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                            {/* blood group section  */}
                                            <div className="">
                                                <label htmlFor="blood_field">
                                                    Blood Group
                                                </label>
                                                <select
                                                    id="blood_field"
                                                    value={blood}
                                                    onChange={(e) =>
                                                        setBlood(e.target.value)
                                                    }
                                                    className="w-full mt-3 h-8 border outline-none px-4  rounded-full"
                                                >
                                                    {bloods.map((type) => (
                                                        <option
                                                            key={type}
                                                            value={type}
                                                        >
                                                            {type}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                            {/* bod section  */}
                                            <div className="">
                                                <label htmlFor="bod_field">
                                                    Birth of Date
                                                </label>
                                                <input
                                                    type="date"
                                                    // name="bod"
                                                    value={bod}
                                                    onChange={(e) =>
                                                        setBod(e.target.value)
                                                    }
                                                    className="w-full mt-3 h-8 border outline-none px-4 py-4 rounded-full"
                                                />
                                            </div>
                                            {/* last donate date section  */}
                                            <div className="">
                                                <label htmlFor="lbdd_field">
                                                    Last Blood Donate Date
                                                </label>
                                                <input
                                                    type="date"
                                                    name="lastDonate"
                                                    value={lastDonate}
                                                    onChange={(e) =>
                                                        setLastDonate(
                                                            e.target.value
                                                        )
                                                    }
                                                    className="w-full mt-3 h-8 border outline-none px-4 py-4 rounded-full"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold">
                                                Parmanent Address
                                            </h3>
                                            <hr className="my-2" />
                                            <div className="grid grid-cols-2 sm:grid-cols-1 gap-4">
                                                {/* region section  */}
                                                <div className="">
                                                    <label htmlFor="region_field">
                                                        Region
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="paRegion"
                                                        value={paRegion}
                                                        onChange={(e) =>
                                                            setPaRegion(
                                                                e.target.value
                                                            )
                                                        }
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
                                                        name="paCity"
                                                        value={paCity}
                                                        onChange={(e) =>
                                                            setPaCity(
                                                                e.target.value
                                                            )
                                                        }
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
                                                        name="paArea"
                                                        value={paArea}
                                                        onChange={(e) =>
                                                            setPaArea(
                                                                e.target.value
                                                            )
                                                        }
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
                                                        name="paAddress"
                                                        value={paAddress}
                                                        onChange={(e) =>
                                                            setPaAddress(
                                                                e.target.value
                                                            )
                                                        }
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
                                            <div className="grid grid-cols-2 sm:grid-cols-1 gap-4">
                                                {/* region section  */}
                                                <div className="">
                                                    <label htmlFor="region_field">
                                                        Region
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="psRegion"
                                                        value={psRegion}
                                                        onChange={(e) =>
                                                            setPsRegion(
                                                                e.target.value
                                                            )
                                                        }
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
                                                        name="psCity"
                                                        value={psCity}
                                                        onChange={(e) =>
                                                            setPsCity(
                                                                e.target.value
                                                            )
                                                        }
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
                                                        name="psArea"
                                                        value={psArea}
                                                        onChange={(e) =>
                                                            setPsArea(
                                                                e.target.value
                                                            )
                                                        }
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
                                                        name="psAddress"
                                                        value={psAddress}
                                                        onChange={(e) =>
                                                            setPsAddress(
                                                                e.target.value
                                                            )
                                                        }
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
                                                name="boi"
                                                value={bio}
                                                onChange={(e) =>
                                                    setBio(e.target.value)
                                                }
                                                id=""
                                            ></textarea>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 text-center">
                                    <button
                                        type="submit"
                                        className="bg-golden px-4 py-2 rounded-full w-2/5 sm:w-full hover:bg-opacity-90 text-center"
                                    >
                                        {loading ? (
                                            <ButtonLoader />
                                        ) : (
                                            "Update Profile"
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditProfile;
