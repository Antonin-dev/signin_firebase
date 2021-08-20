import firebase from "firebase";
import 'firebase/auth';

const app = firebase.initializeApp({
    apiKey: "AIzaSyB5lSmUyiRTq6OmvhkFx1AeFhVzrVo6xy8",
    authDomain: "auth-react-3c4eb.firebaseapp.com",
    projectId: "auth-react-3c4eb",
    storageBucket: "auth-react-3c4eb.appspot.com",
    messagingSenderId: "458689410259",
    appId: "1:458689410259:web:df03379e6a405cb5b2d026"
})

export const auth = app.auth();
export default app;
