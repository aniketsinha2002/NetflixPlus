import Header from './Header'
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"
const Browse = () => { 
  useNowPlayingMovies();
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