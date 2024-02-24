import MovieTrailer from "./MovieTrailer";
import MovieDetails from "./MovieDetails";

const MoviePage = () => {  
  return (
    <div className="flex flex-col gap-4 md:gap-0 md:flex-row bg-black overflow-x-hidden h-screen">
     
          <div className="flex-1 h-1/2 md:h-full">
            <MovieTrailer />
          </div>

          <div className="flex-1 h-1/2 md:h-full">
            <MovieDetails />
          </div>
    </div>
  );
};

export default MoviePage;