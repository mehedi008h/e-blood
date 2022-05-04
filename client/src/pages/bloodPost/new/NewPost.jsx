import React from "react";

const NewPost = () => {
    const genders = ["Male", "Female", "Other"];
    const bloods = ["O+", "A+", "B+", "AB+", "O-", "A-", "B-", "AB-"];
    return (
        <div className="min-h-full flex">
            <div className="w-4/5 mx-auto my-4 sm:w-full sm:px-3">
                <div className="grid grid-cols-4 gap-4">
                    <div className="col-span-1 sm:col-span-4">1</div>
                    {/* post form  */}
                    <div className="col-span-2 sm:col-span-4">
                        <div className="bg-white p-4 shadow-md rounded-lg">
                            <form>
                                {/* title  */}
                                <div>
                                    <label htmlFor="title_field">
                                        Title
                                        <span className="text-grey">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="title"
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
                                            className="w-full mt-1 h-8 border outline-none px-4  rounded-full"
                                        >
                                            {bloods.map((type) => (
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
                                        className="w-full mt-1 h-8 border outline-none px-4 py-4 rounded-full"
                                    />
                                </div>

                                {/* contact information  */}
                                <p className="my-4 font-bold">
                                    Contact Information
                                </p>
                                <div className="grid grid-cols-2 sm:grid-cols-1 gap-4">
                                    {/* region section  */}
                                    <div className="">
                                        <label htmlFor="phone_field">
                                            Phone
                                        </label>
                                        <input
                                            type="text"
                                            name="phone"
                                            className="w-full mt-3 h-8 border outline-none px-4 py-4 rounded-full"
                                        />
                                    </div>
                                    {/* region section  */}
                                    <div className="">
                                        <label htmlFor="email_field">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            className="w-full mt-3 h-8 border outline-none px-4 py-4 rounded-full"
                                        />
                                    </div>
                                    {/* region section  */}
                                    <div className="">
                                        <label htmlFor="region_field">
                                            Region
                                        </label>
                                        <input
                                            type="text"
                                            name="paRegion"
                                            className="w-full mt-3 h-8 border outline-none px-4 py-4 rounded-full"
                                        />
                                    </div>
                                    {/* city section  */}
                                    <div className="">
                                        <label htmlFor="city_field">City</label>
                                        <input
                                            type="text"
                                            name="paCity"
                                            className="w-full mt-3 h-8 border outline-none px-4 py-4 rounded-full"
                                        />
                                    </div>
                                    {/* area section  */}
                                    <div className="">
                                        <label htmlFor="area_field">Area</label>
                                        <input
                                            type="text"
                                            name="paArea"
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
                                            className="w-full mt-3 h-8 border outline-none px-4 py-4 rounded-full"
                                        />
                                    </div>
                                </div>
                                <div className="mt-6 text-center">
                                    <button className="bg-golden py-2 px-4 rounded-lg">
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
