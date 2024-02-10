import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

  const [isSignInForm,setisSignInForm] = useState(true);

  const handleSignin = () => {
    setisSignInForm(!isSignInForm);
  }

  return (
    <div>
      <Header />
      <div className='absolute'>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bgImage"
          className="h-screen object-cover md:w-screen md:h-screen"
        />
      </div>
      
      <form className='w-full md:w-3/12 p-4 md:p-10 bg-opacity-85 absolute text-white my-20 md:my-28 mx-auto right-0 left-0 bg-black rounded-lg' action="">
          <h1 className='font-bold text-4xl py-6'>{isSignInForm? "Sign In" : "Sign Up"}</h1>
          
          {!isSignInForm && <input className='p-3 my-2 w-full bg-gray-700 rounded-md border-solid border-white border-2 placeholder:text-white' type="text" placeholder='Name'/>}

          <input className='p-3 my-2 w-full bg-gray-700 rounded-md border-solid border-white border-2 placeholder:text-white' type="text" placeholder='Email or phone number'/>
          
          <input className='p-3 my-2 w-full bg-gray-700 rounded-md border-solid border-white border-2 placeholder:text-white' type="password" placeholder='Password'/>
          
          <button className='p-3 my-3 bg-[#E50914] w-full rounded-md font-bold' type="button">{isSignInForm? "Sign In" : "Sign Up"}</button>
          
          <p onClick={handleSignin} className='py-4 cursor-pointer'>{isSignInForm?"New to Netflix? Signup Now" : "Already an user? Signin Now"}</p>
      </form>

    </div>
  )
}

export default Login