import React, { useRef, useState } from 'react'
import Header from './Header'
import Validate from '../utils/Validate';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/Firebase'

import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_IMG } from '../utils/constants';

const Login = () => {

  const [isSignInForm, setisSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState();

  const name = useRef(null)
  const email = useRef(null)
  const password = useRef(null)

  const dispatch = useDispatch();

  const validateUser = () => {
    const message = Validate(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return; //If not valid program stops

    //If validation check passes -> Sign In / Sign Up USER
    if (!isSignInForm) {
      //Sign Up Logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        // user error -> Success
        // console.log(user)
        //update user profile
        updateProfile(auth.currentUser, {
        displayName: name.current.value, photoURL: ""
        }).then(() => {
          // Profile updated!
            const {uid, email, displayName, photoURL} = auth.currentUser;
            //update my store
            dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL:photoURL }))
          }).catch((error) => {
          // An error occurred
          setErrorMessage(error.message)
        });
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage( errorCode);
        //console.log(errorCode)
        // error
      });
    }
    else {
      //Sign In
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode);
        });
    }
  }

  const handleSignin = () => {
    setisSignInForm(!isSignInForm);
  }

  return (
    <div>
      <Header />
      <div className='absolute'>
        <img
          src={BG_IMG}
          alt="bgImage"
          className="h-screen object-cover md:w-screen md:h-screen"
        />
      </div>
      {/*normal - mobile, sm - tab , md - desktop*/}
    <form onSubmit={e => e.preventDefault()} className='w-8/12 sm:w-4/12 md:w-5/12 p-4 md:p-10 bg-opacity-85 absolute text-white my-20 mx-auto right-0 left-0 bg-black rounded-lg'>

        <h1 className='font-bold text-4xl py-6'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>

        {!isSignInForm && <input className='p-3 my-2 w-full bg-gray-700 rounded-md border-solid border-white border-2 placeholder:text-white' type="text" placeholder='Name' ref={name} />}

        <input className='p-3 my-2 w-full bg-gray-700 rounded-md border-solid border-white border-2 placeholder:text-white' type="text" placeholder='Email' ref={email} />

        <input className='p-3 my-2 w-full bg-gray-700 rounded-md border-solid border-white border-2 placeholder:text-white' type="password" placeholder='Password' ref={password} />

        <p className='text-[#E50914] py-2 px-2'>{errorMessage}</p>

        <button className='p-3 my-3 bg-[#E50914] w-full rounded-md font-bold' type="button" onClick={validateUser}>{isSignInForm ? "Sign In" : "Sign Up"}</button>

        <p onClick={handleSignin} className='py-4 cursor-pointer'>{isSignInForm ? "New to Netflix? Signup Now" : "Already an user? Signin Now"}</p>
    </form>


    </div>
  )
}

export default Login