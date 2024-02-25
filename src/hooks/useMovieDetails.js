import { useEffect } from "react";
import { TMDB_MOVIE, TMDB_OPTIONS } from "../utils/constants";
import { addMovieDetails } from "../utils/movieSlice";
import { useDispatch } from "react-redux";

const useMovieDetails = (id) => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchMovieDetails();
  }, []);

  const fetchMovieDetails = async () => {
    const movieData = await fetch(TMDB_MOVIE + id, TMDB_OPTIONS);
    const json = await movieData.json();
      console.log(json)
    dispatch(addMovieDetails(json));
  };
};

export default useMovieDetails;