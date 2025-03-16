import Auth from './auth/Auth';
import Landing from './landing/Landing';
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";


const WeddingRouter = ({ navigate }) => {
    return (
        <Routes>
            <Route index element={<Auth navigate={navigate}/>}/>
            <Route path="/login" element={<Auth navigate={navigate}/>} />
            <Route path="/invitation" element={<Landing navigate={navigate}/>} />
        </Routes>
    );
};


const Root = () => {
    const navigate = useNavigate();
    return (
        <Routes>
            <Route path="/wedding/*" element={<WeddingRouter navigate={navigate}/>} />
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