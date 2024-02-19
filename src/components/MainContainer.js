import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'

const MainContainer = () => {
  const movies = useSelector(store => store.movies?.NowPlayingMovies)
  //console.log(movies)
  //if(movies === null) return;
  if (!movies) return;

  const mainMovie = movies[7];
  console.log(mainMovie)

  const { original_title, overview, id } = mainMovie;
  
  return (
    <div>
      <VideoTitle title={original_title} description={overview} id={id} />
      <VideoBackground movieID={id} />
    </div>
  )
}

export default MainContainer