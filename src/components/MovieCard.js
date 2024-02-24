import React from 'react'
import { Link } from 'react-router-dom';

const MovieCard = ({posterPath,id}) => {
  const IMG_CDN = "https://image.tmdb.org/t/p/w200/";
  return (
    posterPath && (
      <div className="w-40 md:w-48 cursor-pointer">
        <Link to={`/browse/${id}`}>
          <img className='rounded-md' alt="Movie Card" src={IMG_CDN+posterPath} />
        </Link>
      </div>
    )
  )
}

export default MovieCard