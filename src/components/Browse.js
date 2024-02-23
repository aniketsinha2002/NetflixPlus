import Header from './Header'
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"
import usePopularMovies from '../hooks/usePopularMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import useUpcomingMovies from '../hooks/useUpcomingMovies'
const Browse = () => { 
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <div className='flex flex-col'>
      <Header />
      {
        /*
          Main Container
            Video Background
            Video Title
          Secondary Container
            Movie List * n
            Cards * n
        */
      }
      <MainContainer />
      <SecondaryContainer/>
      </div>
  )
}

export default Browse