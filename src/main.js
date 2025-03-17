import Auth from './auth/Auth';
import Landing from './landing/Landing';
import React from "react";
import { HashRouter, Routes, Route, useNavigate } from "react-router-dom";


const NotFound = () => {
    return (
        <>Page not found</>
    )
}


const WeddingRouter = ({ navigate }) => {
    return (
        <Routes>
            <Route index element={<Auth navigate={navigate}/>}/>
            <Route path="/login" element={<Auth navigate={navigate}/>} />
            <Route path="/invitation" element={<Landing navigate={navigate}/>} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};


const Root = () => {
    const navigate = useNavigate();
    return (
        <Routes>
            <Route path="*" element={<NotFound/>} />
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