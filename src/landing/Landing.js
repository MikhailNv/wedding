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
import { sha256 } from 'js-sha256';
import React, {useEffect, useState} from "react";

const Landing = ({ navigate }) => {
    const [id, setId] = useState("");
    const [user, setUser] = useState("");

    useEffect(() => {
        const cookies = new Cookies(null, { path: '/' });
        const cookie_user = cookies.get("user");
        const cookie_hash = cookies.get("hash");
        if (cookie_user && cookie_hash) {
            const build_id = Builder(cookie_user);
            const access = sha256(build_id) === cookie_hash ? true : false;
            if (!access) {
                navigate('/wedding/login');
            }
            else {
                setId(build_id);
                setUser(cookie_user);
            }
        }
        else {
            navigate('/wedding/login');
        }
    }, []);
    return (
        <div className="landing-container">
            <Nav />
            <WeddingInvite user={user} id={id}/>
            <Place />
            <DressCode user={user} id={id}/>
            <Program />
            <Organization />
            <Timer />
        </div>
    );
};

export default Landing;