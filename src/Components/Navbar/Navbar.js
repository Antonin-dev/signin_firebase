import React from 'react';
import './Navbar.css';
import {useDispatch, useSelector} from "react-redux";

function Navbar() {

    const dispatch = useDispatch();

    const toggleSignIn = () => {

        dispatch({
            type: "TOGGLEIN"
        })
    }
    const toggleSignUp = () => {
        dispatch({
            type: "TOGGLEUP"
        })
    }

    return (
        <nav className="navbar">
            <button onClick={toggleSignIn}>Connexion</button>
            <button onClick={toggleSignUp}>Inscription</button>
        </nav>
    );
}

export default Navbar;
