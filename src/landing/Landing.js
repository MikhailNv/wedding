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
import CryptoJS from 'crypto-js';
import { sha256 } from 'js-sha256';
import ACCOUNTS from '../accounts';
import React, {useEffect, useState} from "react";

const Landing = ({ navigate }) => {
    const DEFAULT_USER_INFO = {"displayName": "", "formDisplayName": "", "gender": ""};
    const [userInfo, setUserInfo] = useState(DEFAULT_USER_INFO)

    const getUserInfo = (user, id) => {
        if (user != "" ) {
            const bytes_user_info = CryptoJS.AES.decrypt(ACCOUNTS[user], id);
            const user_info = JSON.parse(bytes_user_info.toString(CryptoJS.enc.Utf8));
            return user_info;
        }
        else { return DEFAULT_USER_INFO; }
    }

    useEffect(() => {
        const cookies = new Cookies(null, { path: '/' });
        const cookie_user = cookies.get("user");
        const cookie_hash = cookies.get("hash");
        if (cookie_user && cookie_hash) {
            const build_id = Builder(cookie_user);
            const access = sha256(build_id) === cookie_hash ? true : false;
            if (!access) {
                navigate('/login');
            }
            else {
                setUserInfo(getUserInfo(cookie_user, build_id))
            }
        }
        else {
            navigate('/login');
        }
    }, []);
    return (
        <div className="landing-container">
            <Nav />
            <WeddingInvite userInfo={userInfo}/>
            <Place />
            <DressCode userInfo={userInfo}/>
            <Program />
            <Organization userInfo={userInfo}/>
            <Timer />
        </div>
    );
};

export default Landing;