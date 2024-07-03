import { getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';
import {app} from './firebase';
import SignupPage from './pages/Signup';
import SigninPage from './pages/Signin';
import './App.css';

const auth = getAuth(app);

function App() {

  const [user,setUser]=useState(null);
  useEffect(() =>{onAuthStateChanged(auth,user=>{
    if (user){
      //yes you are logged in 
      console.log("User",user);
      setUser(user);
    }else{
      //user is not logged out
      console.log("User is not logged out");
      setUser(null);
    }
  })},[]);

  if(user==null){
    return(
      <div className='App'>
        <SignupPage/>
        <SigninPage/>
      </div>
    )
  }
  const signupUser = () =>{
    createUserWithEmailAndPassword(auth,
      'dineshyadav74950@gmail.com',
      'dinesh@123').then((value)=>console.log(value));
  }
  return (
    <div className='App'>
       <h1>Hello {user.email}</h1>
       <button onClick={()=>signOut(auth)}>Logout</button>
    </div>
  );
}

export default App;
