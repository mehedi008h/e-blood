import React from "react";

const Home = () => {
    return (
        <div className="flex min-h-full">
            <div className="w-4/5 mx-auto my-4">
                <div className="grid grid-cols-4 gap-4">
                    <div className="col-span-1">1</div>
                    <div className="col-span-2">2</div>
                    <div className="col-span-1">3</div>
                </div>
            </div>
        </div>
    );
};

export default Home;
