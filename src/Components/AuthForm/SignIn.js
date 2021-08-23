import React, {useContext, useRef, useState} from "react";
import "./AuthForm.css";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";

const SignIn = () => {
    const showModal = useSelector((state) => state);
    const dispatch = useDispatch();
    const inputs = useRef([]);
    const [error, setError] = useState('');
    const history = useHistory();
    const {login} = useContext(AuthContext);


    //Function

    const closeModal = () => {
        dispatch({
            type: "CLOSEMODAL",
        });
    };

    const addInputs = el => {
        if (el && !inputs.current.includes(el)) {
            inputs.current.push(el);
        }
    }

    const toggleSignUp = () => {
        dispatch({
            type: "TOGGLEUP"
        })
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            await login(inputs.current[0].value, inputs.current[1].value);
            closeModal();
            history.push("/loggedHome")

        } catch {
            setError('email ou mot de passe incorrect');
        }

    }

    return (
        <div className={showModal.showSignIn ? "global-modal" : "hide-modal"}>
            <div onClick={closeModal} className="overlay"></div>
            <div className="container-modal">
                <form className="form-auth" onSubmit={handleSubmit}>
                    <h2>CONNEXION</h2>
                    <label htmlFor="mail">Votre mail</label>
                    <input type="email" ref={addInputs} id="mail" required/>
                    <label htmlFor="psw">Votre mot de passe</label>
                    <input type="password" ref={addInputs} id="psw" required/>
                    {error}
                    <button className="btn-sign">Se connecter</button>
                </form>
                <button onClick={closeModal} className="btn-close">
                    X
                </button>
                <p onClick={toggleSignUp} className="bottom-help-txt">Besoin de créer un compte ?</p>
            </div>
        </div>
    );
};

export default SignIn;
