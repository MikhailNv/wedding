import Auth from './auth/Auth';
import Landing from './landing/Landing';
import React from "react";
import { HashRouter, Routes, Route, useNavigate } from "react-router-dom";


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
            <Route path="*" element={<WeddingRouter navigate={navigate}/>} />
            <Route path="/wedding/*" element={<WeddingRouter navigate={navigate}/>} />
        </Routes>
    );
};

const Main = () => {
    return (
        <HashRouter>
            <Root />
        </HashRouter>
    )
}

export default Main;