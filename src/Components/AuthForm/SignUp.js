import React from 'react';
import './AuthForm.css'
import {useDispatch, useSelector} from "react-redux";

const SignUp = () => {

    const dispatch = useDispatch();
    const showModal = useSelector(state => state);

    const closeModal = () => {
        dispatch({
            type: "CLOSEMODAL"
        })
    }

    return (
        <div className={showModal.showSignUp ? "global-modal" : "hide-modal"}>
            <div
                onClick={closeModal}
                className="overlay">
            </div>
            <div className="container-modal">
                <from className="form-auth">
                    <h2>INSCRIPTION</h2>
                    <label htmlFor="mail">Votre mail</label>
                    <input type="email" id="mail" required/>
                    <label htmlFor="psw">Votre mot de passe</label>
                    <input type="password" id="psw" required/>
                    <label htmlFor="confirmpsw">Confirmez le mot de passe</label>
                    <input type="password" id="confirmpsw" required/>
                    <button className="btn-sign">S'inscrire'</button>
                </from>
                <button className="btn-close">X</button>
                <p
                    onClick={closeModal}
                    className="bottom-help-txt">
                    Besoin de créer un compte ?
                </p>
            </div>

        </div>
    );
};

export default SignUp;
