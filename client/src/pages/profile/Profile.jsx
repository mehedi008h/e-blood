import React from "react";
import { useSelector } from "react-redux";
import Loader from "../../components/loader/Loader";
import Sidebar from "../../components/sidebar/Sidebar";

const Profile = () => {
    const { loading } = useSelector((state) => state.auth);
    return (
        <div className="min-h-full">
            {loading ? (
                <Loader />
            ) : (
                <>
                    <div className="w-4/5 mx-auto my-8">
                        <div className="flex gap-4">
                            <div>
                                <Sidebar />
                            </div>
                            <div>2</div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Profile;
