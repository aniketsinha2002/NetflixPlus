import React, { useRef } from 'react'
import genAI from "../utils/GeminiAPI";
import { TMDB_OPTIONS } from '../utils/constants';
import { useDispatch } from "react-redux";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
    const searchText = useRef(null);
    const dispatch = useDispatch();
 
    const getMovieSearchRecommendations = async (movieName) => {
    const movieData = await fetch("https://api.themoviedb.org/3/search/movie?query="+movieName+"&include_adult=false&language=en-US&page=1",TMDB_OPTIONS);
    const json = await movieData.json();
    return json.results;
    };
    
    const handleGptSearchClick = async () => {
        // MAKE AN API CALL TO GPT API and GET MOVIE RESULTS
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const gptQuery =
        "Act as a movie recommendation system and suggest movies for the query : " +
        searchText.current.value +
        ". Only give me names for 5 movies, comma separated like the example result given ahead. Example Result: Sholay, Andaz Apna Apna, Hera Pheri, Padosan, Chupke";
        
        const gptResults = await model.generateContent(gptQuery);
        const response = gptResults.response.text();
        const gptMovies = response.split(",");
        console.log(gptMovies)
        const movieData = gptMovies.map((movie) =>getMovieSearchRecommendations(movie));
        
        const searchResults = await Promise.all(movieData);

         dispatch(addGptMovieResult({ movieNames: gptMovies, movieResults: searchResults })
      );
    };
    
  return (
    <div className='pt-[25%] md:pt-[5%] flex justify-center'>
       <form className="w-full m-2 md:w-1/2 grid grid-cols-12 rounded-lg shadow-md" action="" onSubmit={e=>e.preventDefault()}>
        <input ref={searchText} type="text" className='py-3 px-4 m-2 border border-gray-600 rounded-lg col-span-9 focus:outline-none focus:border-gray-400 font-semibold' placeholder='What would you like to watch today?'/>
        <button className='py-3 px-4 m-2 rounded-lg bg-red-600 hover:bg-red-700 text-white col-span-3 transition-colors duration-300 ease-in-out' onClick={handleGptSearchClick}>Search</button>
      </form>
    </div>
  )
}

export default GptSearchBar