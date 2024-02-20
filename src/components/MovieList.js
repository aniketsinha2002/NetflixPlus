import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-4 mr-6"> {/* Added mx-auto and max-w-screen-lg for centering and limiting width */}
      <h1 className="text-xl md:text-3xl font-semibold py-6 text-white">
        {title}
      </h1>
      <div className="flex overflow-x-scroll overflow-hidden scroll-smooth">
        <div className="flex gap-4 pr-2 ">
          {movies &&
            movies.map((movie) => (
              <MovieCard
                key={movie?.id}
                posterPath={movie?.poster_path}
                id={movie?.id}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
