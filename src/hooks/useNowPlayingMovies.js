import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from '../utils/movieSlice';
import { TMDB_OPTIONS } from '../utils/constants';

const useNowPlayingMovies = () => {
 const dispatch = useDispatch();

  useEffect(() => {
     fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', TMDB_OPTIONS)
    .then(response => response.json())
    .then(response => dispatch(addNowPlayingMovies(response.results)))
  },[])
  
}

export default useNowPlayingMovies;