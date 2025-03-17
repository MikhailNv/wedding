import Auth from './auth/Auth';
import Landing from './landing/Landing';
import React, { useEffect } from "react";
import { HashRouter, Routes, Route, useNavigate, useLocation } from "react-router-dom";


const Hash = () => {
    useEffect(() => {
        const location = useLocation();
        if (location.hash) {
            let elem = document.getElementById(location.hash.slice(1));
            if (elem) {
                elem.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, []);
}


const Root = () => {
    const navigate = useNavigate();
    return (
        <Routes>
            <Route path="/wedding">
                <Route index element={<Auth navigate={navigate}/>}/>
                <Route path="login" element={<Auth navigate={navigate}/>} />
                <Route path="invitation" element={<Landing navigate={navigate}/>} />
                <Route path="*" element={<Hash />}/>
            </Route>
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