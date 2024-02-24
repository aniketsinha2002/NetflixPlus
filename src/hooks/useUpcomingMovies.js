import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addUpcomingMovies } from '../utils/movieSlice';
import { TMDB_OPTIONS } from '../utils/constants';

const useUpcomingMovies = () => {
 const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/upcoming?page=2', TMDB_OPTIONS)
    .then(response => response.json())
    .then(response => dispatch(addUpcomingMovies(response.results)))
  },[])
  
}

export default useUpcomingMovies;