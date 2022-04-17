import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-black py-4">
            <div className="flex flex-row justify-between items-center w-4/5 mx-auto py-1">
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
                    <ul className="flex flex-row justify-between items-center gap-5">
                        <li className="text-white">
                            <Link to="/login">Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
