import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth, unsubscribe } from '../utils/Firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

const Header = () => {

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
  
  return (
    <div className='flex absolute bg-gradient-to-b from-black z-10 w-screen justify-between'>
      <img
      className='w-36 m-2'  
        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="" />
      
      {user && 
        <div className='flex flex-row'>
          <p className='px-4 py-4 font-bold text-green-900'>Hello {user.displayName} !</p>

          <button className='bg-red-700 m-2 py-2 px-4 rounded-md text-white' type="button" onClick={handleSignout}>Signout</button>
        </div>
      }
    </div>
  )
}

export default Header