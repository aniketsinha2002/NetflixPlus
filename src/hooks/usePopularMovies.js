import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addPopularMovies } from '../utils/movieSlice';
import { TMDB_OPTIONS } from '../utils/constants';

const usePopularMovies = () => {
 const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?page=2', TMDB_OPTIONS)
    .then(response => response.json())
    .then(response => dispatch(addPopularMovies(response.results)))
  },[])
  
}

export default usePopularMovies;