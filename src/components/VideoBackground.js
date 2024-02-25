import React, { useEffect, useState } from 'react'
import { MOVIE_TRAILER, TMDB_MOVIE, TMDB_OPTIONS } from '../utils/constants';

const VideoBackground = ({ movieID }) => {
 
  const [trailerID, settrailerID] = useState(null);

  useEffect(() => {
   fetch( TMDB_MOVIE + movieID + `/videos?language=en-US`, TMDB_OPTIONS)
  .then(response => response.json())
  .then(data => {
    const filterData = data.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : data.results[0];
    settrailerID(trailer.key);
  })
  .catch(error => {
    console.error('Error fetching movie trailers:', error);
  });
  }, [])
  
  return (
    <div>
      <iframe  className="w-screen aspect-square md:aspect-video" src={MOVIE_TRAILER + trailerID + "?&autoplay=1&mute=1"} title="YouTube video player"></iframe>
    </div>
  )
}

export default VideoBackground