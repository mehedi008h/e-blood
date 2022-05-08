import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { clearErrors, newPost } from "../../../actions/postActions";
import { NEW_POST_RESET } from "../../../constants/postConstants";

const NewPost = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [bloodGroup, setBloodGroup] = useState("");
    const [type, setType] = useState("");
    const [gender, setGender] = useState("");
    const [cases, setCases] = useState("");
    const [hospitalName, setHospitalName] = useState("");
    const [hospitalAddress, setHospitalAddress] = useState("");
    const [hospitalLocation, setHospitalLocation] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [relation, setRelation] = useState("");
    const [email, setEmail] = useState("");
    const [region, setRegion] = useState("");
    const [city, setCity] = useState("");
    const [area, setArea] = useState("");
    const [address, setAddress] = useState("");

    const dispatch = useDispatch();

    const { error, success } = useSelector((state) => state.newPost);

    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch(clearErrors());
        }

        if (success) {
            toast.success("Post created successfully");
            dispatch({ type: NEW_POST_RESET });
        }
    }, [dispatch, error, success]);

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.set("title", title);
        formData.set("description", description);
        formData.set("bloodGroup", bloodGroup);
        formData.set("type", type);
        formData.set("gender", gender);
        formData.set("cases", cases);
        formData.set("hospitalName", hospitalName);
        formData.set("hospitalAddress", hospitalAddress);
        formData.set("hospitalLocation", hospitalLocation);
        formData.set("name", name);
        formData.set("phone", phone);
        formData.set("relation", relation);
        formData.set("email", email);
        formData.set("region", region);
        formData.set("city", city);
        formData.set("area", area);
        formData.set("address", address);

        dispatch(newPost(formData));
    };

    const genders = ["Male", "Female", "Other"];
    const bloods = ["O+", "A+", "B+", "AB+", "O-", "A-", "B-", "AB-"];
    const types = ["Emergency", "Medium", "Normal"];
    const relations = [
        "Father",
        "Mother",
        "Brother",
        "Sister",
        "Husband",
        "Other",
    ];
    return (
        <div className="min-h-full flex">
            <div className="w-4/5 mx-auto my-4 sm:w-full sm:px-3">
                <div className="grid grid-cols-4 gap-4">
                    <div className="col-span-1 sm:col-span-4">1</div>
                    {/* post form  */}
                    <div className="col-span-2 sm:col-span-4">
                        <div className="bg-white p-4 shadow-md rounded-lg">
                            <form onSubmit={submitHandler}>
                                {/* title  */}
                                <div>
                                    <label htmlFor="title_field">
                                        Title
                                        <span className="text-grey">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="title"
                                        value={title}
                                        onChange={(e) =>
                                            setTitle(e.target.value)
                                        }
                                        className="w-full mt-1 h-8 border outline-none px-4 py-4 rounded-full"
                                        required
                                    />
                                </div>
                                {/* description  */}
                                <div className="mt-4">
                                    <label htmlFor="description_field">
                                        Description
                                    </label>
                                    <textarea
                                        name="description"
                                        id=""
                                        rows="3"
                                        value={description}
                                        onChange={(e) =>
                                            setDescription(e.target.value)
                                        }
                                        className="w-full mt-1 border outline-none px-4 py-4 rounded-md"
                                    />
                                </div>
                                {/* blood group & types  */}
                                <div className="flex gap-3 sm:gap-0 flex-row sm:flex-col">
                                    <div className="mt-4 w-full">
                                        <label htmlFor="blood_field">
                                            Blood Group
                                        </label>
                                        <select
                                            id="blood_field"
                                            value={bloodGroup}
                                            onChange={(e) =>
                                                setBloodGroup(e.target.value)
                                            }
                                            className="w-full mt-1 h-8 border outline-none px-4  rounded-full"
                                        >
                                            {bloods.map((type) => (
                                                <option key={type} value={type}>
                                                    {type}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="mt-4 w-full">
                                        <label htmlFor="types_field">
                                            Types
                                        </label>
                                        <select
                                            id="types_field"
                                            value={type}
                                            onChange={(e) =>
                                                setType(e.target.value)
                                            }
                                            className="w-full mt-1 h-8 border outline-none px-4  rounded-full"
                                        >
                                            {types.map((type) => (
                                                <option key={type} value={type}>
                                                    {type}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                {/* gender & case  */}
                                <div className="flex gap-3 sm:gap-0 flex-row sm:flex-col">
                                    <div className="mt-4 w-full">
                                        <label htmlFor="gender_field">
                                            Gender
                                        </label>
                                        <select
                                            id="gender_field"
                                            value={gender}
                                            onChange={(e) =>
                                                setGender(e.target.value)
                                            }
                                            className="w-full mt-1 h-8 border outline-none px-4  rounded-full"
                                        >
                                            {genders.map((type) => (
                                                <option key={type} value={type}>
                                                    {type}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="mt-4 w-full">
                                        <label htmlFor="types_field">
                                            Case
                                        </label>
                                        <input
                                            type="text"
                                            name="case"
                                            value={cases}
                                            onChange={(e) =>
                                                setCases(e.target.value)
                                            }
                                            className="w-full mt-1 h-8 border outline-none px-4 py-4 rounded-full"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* hospital information  */}
                                <p className="my-4 font-bold">
                                    Hospital Information
                                </p>
                                {/* hospital name  */}
                                <div>
                                    <label htmlFor="hospital_field">
                                        Hospital Name
                                        <span className="text-grey">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="hospitalName"
                                        value={hospitalName}
                                        onChange={(e) =>
                                            setHospitalName(e.target.value)
                                        }
                                        className="w-full mt-1 h-8 border outline-none px-4 py-4 rounded-full"
                                        required
                                    />
                                </div>
                                {/* hospital address  */}
                                <div className="mt-3">
                                    <label htmlFor="hospital_field">
                                        Hospital Address
                                        <span className="text-grey">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="hospitalAddress"
                                        value={hospitalAddress}
                                        onChange={(e) =>
                                            setHospitalAddress(e.target.value)
                                        }
                                        className="w-full mt-1 h-8 border outline-none px-4 py-4 rounded-full"
                                        required
                                    />
                                </div>
                                {/* hospital google map location  */}
                                <div className="mt-3">
                                    <label htmlFor="hospital_field">
                                        Hospital Google map location
                                        <span className="text-grey">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="hospitalLocation"
                                        value={hospitalLocation}
                                        onChange={(e) =>
                                            setHospitalLocation(e.target.value)
                                        }
                                        className="w-full mt-1 h-8 border outline-none px-4 py-4 rounded-full"
                                    />
                                </div>

                                {/* contact information  */}
                                <p className="my-4 font-bold">
                                    Contact Information
                                </p>
                                <div className="grid grid-cols-2 sm:grid-cols-1 gap-4">
                                    {/* name section  */}
                                    <div className="">
                                        <label htmlFor="phone_field">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={name}
                                            onChange={(e) =>
                                                setName(e.target.value)
                                            }
                                            className="w-full mt-3 h-8 border outline-none px-4 py-4 rounded-full"
                                        />
                                    </div>

                                    {/* email section  */}
                                    <div className="">
                                        <label htmlFor="email_field">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={email}
                                            onChange={(e) =>
                                                setEmail(e.target.value)
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

                                    <div className=" w-full">
                                        <label htmlFor="gender_field">
                                            Relation
                                        </label>
                                        <select
                                            id="gender_field"
                                            value={relations}
                                            onChange={(e) =>
                                                setRelation(e.target.value)
                                            }
                                            className="w-full mt-3 h-8 border outline-none px-4  rounded-full"
                                        >
                                            {relations.map((type) => (
                                                <option key={type} value={type}>
                                                    {type}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* region section  */}
                                    <div className="">
                                        <label htmlFor="region_field">
                                            Region
                                        </label>
                                        <input
                                            type="text"
                                            name="region"
                                            value={region}
                                            onChange={(e) =>
                                                setRegion(e.target.value)
                                            }
                                            className="w-full mt-3 h-8 border outline-none px-4 py-4 rounded-full"
                                        />
                                    </div>
                                    {/* city section  */}
                                    <div className="">
                                        <label htmlFor="city_field">City</label>
                                        <input
                                            type="text"
                                            name="city"
                                            value={city}
                                            onChange={(e) =>
                                                setCity(e.target.value)
                                            }
                                            className="w-full mt-3 h-8 border outline-none px-4 py-4 rounded-full"
                                        />
                                    </div>
                                    {/* area section  */}
                                    <div className="">
                                        <label htmlFor="area_field">Area</label>
                                        <input
                                            type="text"
                                            name="area"
                                            value={area}
                                            onChange={(e) =>
                                                setArea(e.target.value)
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
                                            name="address"
                                            value={address}
                                            onChange={(e) =>
                                                setAddress(e.target.value)
                                            }
                                            className="w-full mt-3 h-8 border outline-none px-4 py-4 rounded-full"
                                        />
                                    </div>
                                </div>
                                <div className="mt-6 text-center">
                                    <button
                                        type="submit"
                                        className="bg-golden py-2 px-4 rounded-lg"
                                    >
                                        Create Post
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-span-1 sm:col-span-4">3</div>
                </div>
            </div>
        </div>
    );
};

export default NewPost;
