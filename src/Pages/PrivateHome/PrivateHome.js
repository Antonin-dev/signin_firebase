import React, {useContext} from 'react';
import '../Home/Home.css'
import Navbar from "../../Components/Navbar/Navbar";
import SignIn from "../../Components/AuthForm/SignIn";
import SignUp from "../../Components/AuthForm/SignUp";
import {AuthContext} from "../../context/AuthContext";

function PrivateHome() {

    const {logout} = useContext(AuthContext);

    return (
        <div className="global-container">
            <Navbar/>
            <SignIn/>
            <SignUp/>
            <div className="content-container">
                <h1>Votre compte privé</h1>
                <p>Enjoy your account</p>
                <button onClick={logout}>Se déconnecter</button>
            </div>
        </div>
    );
}

export default PrivateHome;
