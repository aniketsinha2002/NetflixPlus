import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="ml-5 md:ml-0 mr-4 md:mr-12">
      <h1 className="text-xl md:text-3xl font-semibold py-6 text-white">
        {title}
      </h1>
      <div className="py-3 flex overflow-x-scroll scrollbar-hidden">
        <div className="flex gap-4">
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
