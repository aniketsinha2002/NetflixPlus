import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addTopRatedMovies } from '../utils/movieSlice';
import { TMDB_MOVIE, TMDB_OPTIONS } from '../utils/constants';

const useTopRatedMovies = () => {
 const dispatch = useDispatch();

  useEffect(() => {
    fetch( TMDB_MOVIE + 'top_rated?page=2', TMDB_OPTIONS)
    .then(response => response.json())
    .then(response => dispatch(addTopRatedMovies(response.results)))
  },[])
  
}

export default useTopRatedMovies;