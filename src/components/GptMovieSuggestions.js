import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);

  // If movieNames or movieResults are not available, show loading
  if (!movieNames || !movieResults) {
    return (
      <div className="mt-12 text-white px-4 py-2 bg-gray-950">
        <div className="text-lg text-center">
          Hold tight! Our crazy list of movie recommendations will appear here
          soon...
        </div>
      </div>
    );
  }

  return (
    <div className="mt-12 text-white px-4 py-2 bg-gray-950">
      <div>
        {movieNames.map((movieName, index) => (
          <MovieList
            key={movieName + index}
            title={movieName}
            movies={movieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
