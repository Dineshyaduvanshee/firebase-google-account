import React,{useState} from 'react';
import { getAuth,signInWithEmailAndPassword } from 'firebase/auth';
import {app} from '../firebase';

const auth = getAuth(app);

const SigninPage =()=>{
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const signinUser = () =>{
        signInWithEmailAndPassword(auth,email,password).then((value)=>console.log("signin successful"))
        .catch((error) =>console.log("signin failed"));
    }
    return(
        <div className='signin-page'>
            <h1>!!Signin Page!!</h1>
            <label> Email</label>
            <input onChange={e=>setEmail(e.target.value)} value={email} type={email} placeholder='Enter your email here' />

            <label> password</label>
            <input onChange={e=>setPassword(e.target.value)} value={password} type="password" placeholder='Enter your password here' />
            <button onClick={signinUser} >signin</button>

        </div>
    );
};
export default SigninPage;