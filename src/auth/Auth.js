import './Auth.css';
import ACCOUNTS from '../accounts';
import Builder from '../builder';
import logo from "./images/wedding-rings-with-a-heart-svgrepo-com.svg";
import Cookies from 'universal-cookie';
import { sha256 } from 'js-sha256';
import React, {useState, useEffect} from "react";


const Auth = ({ navigate }) => {
    const [login, setLogin] = useState("");
    const [psw, setPsw] = useState("");
    const cookies = new Cookies(null, { path: '/' });

    useEffect(() => {
        const cookie_user = cookies.get("user");
        const cookie_hash = cookies.get("hash");
        if (cookie_user && cookie_hash) {
            const access = sha256(Builder(cookie_user)) === cookie_hash ? true : false;
            if (access) {
                navigate('/wedding/invitation');
            }
        }
    }, []);

    const checkAccess = (login, psw) => {
        var check_access = false;
        const login_hash = sha256(login);
        if (login_hash in ACCOUNTS) {
            if (Builder(login_hash) === psw) { check_access = true; }
            else { check_access = false; }
        }
        else { check_access = false; };
        return check_access;
    }

    const handleApply = () => {
        const access = checkAccess(login, psw);
        if (access) {
            const login_hash = sha256(login);
            let expires = new Date()
            expires.setTime(expires.getTime() + 86400000)
            cookies.set("user", login_hash, { path: "/", expires: expires })
            cookies.set("hash", sha256(Builder(login_hash)), { path: "/", expires: expires })
            navigate('/wedding/invitation');
        }
        else {
            var login_inp = document.getElementById('login');
            var psw_inp = document.getElementById('psw');
            if (
                (login.length !== 0 && psw.length !== 0) || (login.length === 0 && psw.length === 0)
            ) {
                login_inp.classList.add('shake');
                psw_inp.classList.add('shake');

                setTimeout(function() {
                    login_inp.classList.remove('shake');
                }, 600);
                setTimeout(function() {
                    psw_inp.classList.remove('shake');
                }, 600);
            }
            else if (login.length === 0 && psw.length !== 0) {
                login_inp.classList.add('shake');

                setTimeout(function() {
                    login_inp.classList.remove('shake');
                }, 600);
            }
            else {
                psw_inp.classList.add('shake');

                setTimeout(function() {
                    psw_inp.classList.remove('shake');
                }, 600);
            }
        };
    }

    return (
        <div className="auth-container">
            <div className="login-form-container">
                <div className="wedding-img">
                    <img src={logo} alt="wedding-logo"></img>
                </div>
                <div className="login-form">
                    <input 
                    id="login"
                    className="login"
                    placeholder="Логин"
                    autoComplete="off"
                    onChange={e => setLogin(e.target.value)}
                    />
                    <input
                    id="psw"
                    className="psw"
                    placeholder="Пароль"
                    type="password"
                    autoComplete="off"
                    onChange={e => setPsw(e.target.value)}
                    />
                    <button className="apply" onClick={handleApply}>Войти</button>
                </div>
            </div>
        </div>
    );
};

export default Auth;