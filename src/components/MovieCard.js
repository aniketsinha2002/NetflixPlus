import React from 'react'
import { Link } from 'react-router-dom';

const MovieCard = ({posterPath,id}) => {
  const IMG_CDN = "https://image.tmdb.org/t/p/w500/";
  console.log(IMG_CDN+posterPath)
  return (
    posterPath && (
      <div className="w-40 md:w-56 cursor-pointer px-0">
        <Link to={`/browse/${id}`}>
          <img alt="Movie Card" src={IMG_CDN+posterPath} />
        </Link>
      </div>
    )
  )
}

export default MovieCard