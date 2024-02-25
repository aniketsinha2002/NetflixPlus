import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'

const GptSearch = () => {
  return (
    <div className='bg-gray-950'>
      <GptSearchBar />
      <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearch