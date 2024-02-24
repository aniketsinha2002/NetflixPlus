import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TMDB_OPTIONS } from "../utils/constants";
import { addTrailerVideo, clearTrailerVideo } from "../utils/movieSlice";

const useMovieTrailer = (id) => {
  const dispatch = useDispatch();

  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  // fetch the video trailer here
  useEffect(() => {
    if (trailerVideo) {
      dispatch(clearTrailerVideo());
    }

    fetchMovieTrailer();
    // eslint-disable-next-line
  }, []);

  const fetchMovieTrailer = async () => {
    try {
      const data = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos`, TMDB_OPTIONS);
      const json = await data.json();

      if (json.results && Array.isArray(json.results) && json.results.length > 0) {
        const filterData = json.results.filter((r) => r.type === "Trailer");
        const trailer = filterData.length ? filterData[0] : json.results[0];

        console.log(trailer);
        dispatch(addTrailerVideo(trailer));
      } else {
        console.error("No results found or results is not an array.");
      }
    } catch (error) {
      console.error("Error fetching movie trailer:", error);
    }
  };
}

export default useMovieTrailer;