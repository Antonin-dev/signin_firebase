import React, {useContext, useRef, useState} from 'react';
import './AuthForm.css'
import {useDispatch, useSelector} from "react-redux";
import {AuthContext} from "../../context/AuthContext";
import {useHistory} from "react-router-dom";

const SignUp = () => {

    const dispatch = useDispatch();
    const showModal = useSelector(state => state);
    const [error, setError] = useState();
    const {signup} = useContext(AuthContext);
    const history = useHistory();
    const inputs = useRef([])

    // FUNCTION
    const closeModal = () => {
        dispatch({
            type: "CLOSEMODAL"
        })
    }

    const addInputs = el => {
        if (el && !inputs.current.includes(el)){
            inputs.current.push(el);
        }
    }

    async function handleSubmit(e){
        e.preventDefault();
        if (inputs.current[1].value !== inputs.current[2].value){
            setError("les mots de passe ne correspondent pas !");
            return;
        }
        await signup(inputs.current[0].value, inputs.current[1].value);
        dispatch({
            type:'CLOSEMODAL'
        });
        history.push('/loggedHome');
    }

    return (
        <div className={showModal.showSignUp ? "global-modal" : "hide-modal"}>
            <div
                onClick={closeModal}
                className="overlay">
            </div>
            <div className="container-modal">
                <form onSubmit={handleSubmit} className="form-auth" >
                    <h2>INSCRIPTION</h2>
                    <label htmlFor="mail">Votre mail</label>
                    <input ref={addInputs} type="email" id="mail" required/>
                    <label htmlFor="psw">Votre mot de passe</label>
                    <input ref={addInputs} type="password" id="psw" required/>
                    <label htmlFor="confirmpsw">Confirmez le mot de passe</label>
                    <input ref={addInputs} type="password" id="confirmpsw" required/>
                    {error}
                    <button className="btn-sign">S'inscrire'</button>
                </form>
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
