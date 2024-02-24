import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth, unsubscribe } from '../utils/Firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { toggleGPTSearchView } from '../utils/gptSlice';

const Header = () => {

  const GptSearch = useSelector(store => store.gpt.showGptSearch)

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user);

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
        <img
      className='mx-auto m-2 w-44 cursor-pointer'  
        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="" />
      </div>
      
      
      {user && 
        <div className='flex items-center gap-4'>
          <p className='px-2 py-4 font-bold text-green-400 font-mono'>Hello {user.displayName} !</p>

          
          <button className='bg-purple-600 text-white p-3 m-2 rounded-md' onClick={handleGptSearchClick}>{
            GptSearch ? "Home" : "Search"
          }</button>

          <button className='bg-red-700 text-white p-3 m-2 rounded-md hover:bg-red-800' type="button" onClick={handleSignout}>Signout</button>
        </div>
      }
    </div>
  )
}

export default Header