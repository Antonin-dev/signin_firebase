import React from 'react';
import './AuthForm.css'
import {useDispatch, useSelector} from "react-redux";

const SignIn = () => {

    const showModal = useSelector(state => state);
    const dispatch = useDispatch();

    const closeModal = () => {
        dispatch({
            type: "CLOSEMODAL"
        })
    }

    return (
        <div className={showModal.showSignIn ? "global-modal" : "hide-modal"}>
            <div onClick={closeModal} className="overlay"></div>
            <div className="container-modal">
                <from className="form-auth">
                    <h2>CONNEXION</h2>
                    <label htmlFor="mail">Votre mail</label>
                    <input type="email" id="mail" required/>
                    <label htmlFor="psw">Votre mot de passe</label>
                    <input type="password" id="psw" required/>
                    <button className="btn-sign">Se connecter</button>
                </from>
                <button onClick={closeModal} className="btn-close">X</button>
                <p className="bottom-help-txt">Besoin de créer un compte ?</p>
            </div>

        </div>
    );
};

export default SignIn;
