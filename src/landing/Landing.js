import './Landing.css';
import DressCode from '../dress_code/DressCode';
import Nav from '../nav/Nav';
import WeddingInvite from '../invitation/Invitation';
import Place from '../place/Place';
import Program from '../program/Program';
import Organization from '../organization/Organization';
import Timer from '../timer/Timer';
import Builder from '../builder';
import Cookies from 'universal-cookie';
import React, {useEffect, useState} from "react";

const Landing = ({ navigate }) => {
    const [user, setUser] = useState("");

    useEffect(() => {
        const cookies = new Cookies(null, { path: '/' });
        const cookie_user = cookies.get("user");
        const cookie_hash = cookies.get("hash");
        if (cookie_user && cookie_hash) {
            const access = Builder(cookie_user) === cookie_hash ? true : false;
            if (!access) {
                navigate('/');
            }
            else {
                setUser(cookie_user);
            }
        }
        else {
            navigate('/');
        }
    }, []);
    return (
        <div className="landing-container">
            <Nav navigate={navigate}/>
            <WeddingInvite user={user}/>
            <Place />
            <DressCode />
            <Program />
            <Organization />
            <Timer />
        </div>
    );
};

export default Landing;