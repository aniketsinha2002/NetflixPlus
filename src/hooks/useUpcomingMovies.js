import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addUpcomingMovies } from '../utils/movieSlice';
import { TMDB_MOVIE, TMDB_OPTIONS } from '../utils/constants';

const useUpcomingMovies = () => {
 const dispatch = useDispatch();

  useEffect(() => {
    fetch(TMDB_MOVIE + 'upcoming?page=2', TMDB_OPTIONS)
    .then(response => response.json())
    .then(response => dispatch(addUpcomingMovies(response.results)))
  },[])
  
}

export default useUpcomingMovies;