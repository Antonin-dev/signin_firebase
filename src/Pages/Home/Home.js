import React from 'react';
import "./Home.css";
import Navbar from "../../Components/Navbar/Navbar";
import SignUp from "../../Components/AuthForm/SignUp";
import SignIn from "../../Components/AuthForm/SignIn";

function Home() {
    return (
        <div className="global-container">
            <Navbar/>
            <div className="content-container">
                <h1>Bienvenue sur le site.</h1>
                <p>Authentifiez-vous pour acceder au fonctionalités.</p>
            </div>
            <SignUp/>
            <SignIn/>
        </div>
    );
}

export default Home;
