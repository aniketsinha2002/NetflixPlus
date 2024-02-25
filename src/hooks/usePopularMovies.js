import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addPopularMovies } from '../utils/movieSlice';
import { TMDB_MOVIE, TMDB_OPTIONS } from '../utils/constants';

const usePopularMovies = () => {
 const dispatch = useDispatch();

  useEffect(() => {
    fetch(TMDB_MOVIE + 'popular?page=2', TMDB_OPTIONS)
    .then(response => response.json())
    .then(response => dispatch(addPopularMovies(response.results)))
  },[])
  
}

export default usePopularMovies;