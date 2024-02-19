import React, { useEffect, useState } from 'react'

const VideoBackground = ({ movieID }) => {
 
  const [trailerID, settrailerID] = useState(null);

  useEffect(() => {
    const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YTkxZjgwMzRlNzA2MDU5MmFjMjA5ZmZkNzI5ZGZlZCIsInN1YiI6IjY1ZDJlZWY2NTFjMDFmMDE3Y2MwYzQ5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZYMWZNb2f_NOUOOgviW72o0ggpB13WQbNJOfurbv6CI'
    }
  };

   fetch(`https://api.themoviedb.org/3/movie/${movieID}/videos?language=en-US`, options)
  .then(response => response.json())
  .then(data => {
    const filterData = data.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : data.results[0];
    settrailerID(trailer.key);
    // console.log(trailer.key);
  })
  .catch(error => {
    console.error('Error fetching movie trailers:', error);
  });
  }, [])
  
  return (
    <div>
      <iframe  className="w-screen aspect-square md:aspect-video" src={"https://www.youtube.com/embed/"+trailerID+"?&autoplay=1&mute=1"} title="YouTube video player"></iframe>
    </div>
  )
}

export default VideoBackground