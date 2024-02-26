import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth, unsubscribe } from '../utils/Firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { toggleGPTSearchView } from '../utils/gptSlice';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { changeLanguage } from '../utils/configSlice';
import { Link } from 'react-router-dom';

const Header = () => {

  const GptSearch = useSelector(store => store.gpt.showGptSearch)

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user);

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value))
  }

  const handleSignout = () => {
    signOut(auth).then(() => {
     // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
  }

  //Update Redux Store on Sign In / Sign Up / Sign Out
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid, email, displayName, photoURL} = user;
        //update my store
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))
        navigate("/browse")
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/")
      }
      });
     // unsubscribes when my header component unmount 
     return () => unsubscribe();
  }, [])

  const handleGptSearchClick = () => {
    //toggle my gpt search
    dispatch(toggleGPTSearchView())
  }
  
  return (
    <div className='flex justify-between px-6 md:px-20 w-screen py-2 absolute bg-gradient-to-b from-black z-10'>
      <div>
        <Link to="/browse">
          <img className='w-24 sm:w-44 md:w-44  mx-auto m-2 cursor-pointer'  
          src={LOGO} alt="" />
        </Link>
      </div>      
      {user && 
        <div className='flex-col md:flex-row items-center'>
          <p className='text-xs md:text-lg md:px-2 md:py-4 font-bold text-green-400'>Hello {user.displayName}!</p>

          <button className=' bg-purple-600 text-white text-sm md:text-xl p-[4px] md:p-2 md:m-2 rounded-md' onClick={handleGptSearchClick}>{
            GptSearch ? "Home" : "Search"
          }</button>

          {/* multi lingual */}
          {
            GptSearch ?  
            <><select className='bg-purple-600 text-white text-sm md:text-xl p-[4px] m-[4px] md:p-2 md:m-2 rounded-md' onChange={handleLanguageChange}>
                {SUPPORTED_LANGUAGES.map(language => <option value={language.identifier}>{language.name}</option>)}
            </select></> : null
          }

          <button className='bg-red-700 text-white text-sm md:text-xl p-[4px] md:p-2 md:m-2 rounded-md hover:bg-red-800' type="button" onClick={handleSignout}>Signout</button>
        </div>
      }
    </div>
  )
}

export default Header