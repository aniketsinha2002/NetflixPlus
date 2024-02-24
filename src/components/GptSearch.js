import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'

const GptSearch = () => {
  return (
    <div className='bg-gray-950'>
        {/* <div className='absolute -z-10'>
          <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_large.jpg"
            alt="bgImage"
            className="h-screen object-cover md:w-screen md:h-screen"
          />
        </div> */}
      <GptSearchBar />
      <GptMovieSuggestions/>
       {/*
        GptSearchBar
        GptMovieSuggestions
       */}
    </div>
  )
}

export default GptSearch