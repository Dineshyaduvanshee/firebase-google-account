import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword,GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import { app } from "../firebase";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const SignupPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const createUser = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(value => alert("Success"))
            .catch(error => alert("Error: " + error.message));
    };

    const signupWithGoogle = () => {
        signInWithPopup(auth,googleProvider)
    };

    return (
        <div className="signup-page">
            <h1>!!Signup Page!!</h1>
            <label>Email</label>
            <input onChange={e => setEmail(e.target.value)} type="email" required placeholder="Enter your email here" />

            <label>Password</label>
            <input onChange={e => setPassword(e.target.value)} type="password" required placeholder="Enter your password here" />
            
            <button className="btn btn-primary" onClick={createUser}>Signup</button> |&nbsp;
            <button className="btn btn-primary" onClick={signupWithGoogle}>Signup with google</button>
        </div>
    );
};

export default SignupPage;
