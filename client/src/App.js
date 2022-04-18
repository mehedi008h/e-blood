import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import About from "./pages/about/About";
import Login from "./pages/auth/login/Login";
import Register from "./pages/auth/register/Register";
import ActivationEmail from "./pages/auth/ActivationEmail";
import { useEffect } from "react";
import store from "./store";
import { loadUser } from "./actions/userActions";

function App() {
    useEffect(() => {
        store.dispatch(loadUser());
    }, []);
    return (
        <div className="app">
            <BrowserRouter>
                <Navbar />
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route
                        path="/activation/:token"
                        element={<ActivationEmail />}
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
