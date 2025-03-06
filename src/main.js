import Auth from './auth/Auth';
import Landing from './landing/Landing';
import React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";


const Root = () => {
    const navigate = useNavigate();
    return (
        <Routes>
            <Route path="/" element={<Auth navigate={navigate}/>} />
            <Route path="/invitation" element={<Landing navigate={navigate}/>} />
        </Routes>
    );
};

const Main = () => {
    return (
        <BrowserRouter>
            <Root />
        </BrowserRouter>
    )
}

export default Main;