import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from '../utils/movieSlice';

const useNowPlayingMovies = () => {
 const dispatch = useDispatch();

  useEffect(() => {
    const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YTkxZjgwMzRlNzA2MDU5MmFjMjA5ZmZkNzI5ZGZlZCIsInN1YiI6IjY1ZDJlZWY2NTFjMDFmMDE3Y2MwYzQ5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZYMWZNb2f_NOUOOgviW72o0ggpB13WQbNJOfurbv6CI'
      }
    };

    fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', options)
    .then(response => response.json())
    .then(response => dispatch(addNowPlayingMovies(response.results)))
  },[])
  
}

export default useNowPlayingMovies;