import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies)
  return (
    <div className='bg-black w-screen'>
      {
        /*
          Movie List - Popular
            Movie Cards * n
          Movie List - Now Playing
          Movie List - Trending
          Movie List - Horror
        */
      }
      <div className="mt-0 md:-mt-48 md:pl-12 relative z-20">
        <MovieList title={"Now Playing"} movies={movies.NowPlayingMovies} />
        <MovieList title={"Trending"} movies={movies.NowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies.NowPlayingMovies} />
        <MovieList title={"Horror Movies"} movies={movies.NowPlayingMovies} />
        <MovieList title={"Upcomming Movies"} movies={movies.NowPlayingMovies} />
      </div>     
    </div>
  )
}

export default SecondaryContainer