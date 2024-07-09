import React, { useRef, useState, useEffect } from "react";
import genAI from "../utils/GeminiAPI";
import {
  GPT_PROMPT1,
  GPT_PROMPT2,
  MOVIE_DATA_API,
  MOVIE_DATA_API_OPTIONS,
  TMDB_OPTIONS,
} from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addGptMovieResult } from "../utils/gptSlice";
import lang from "../utils/languageConstants";

const GptSearchBar = () => {
  const userLangKey = useSelector((store) => store.config.lang);
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const dispatch = useDispatch();

  const getMovieSearchRecommendations = async (movieName) => {
    const movieData = await fetch(
      MOVIE_DATA_API + movieName + MOVIE_DATA_API_OPTIONS,
      TMDB_OPTIONS
    );
    const json = await movieData.json();
    return json.results;
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 2000);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  useEffect(() => {
    if (debouncedSearchTerm) {
      handleGptSearch(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  const handleGptSearch = async (movieName) => {
    // MAKING AN API CALL TO GPT API and GET MOVIE RESULTS
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const gptQuery = GPT_PROMPT1 + movieName + GPT_PROMPT2;

    const gptResults = await model.generateContent(gptQuery);
    const response = gptResults.response.text();
    const gptMovies = response.split(",");
    console.log(gptMovies);
    const movieData = gptMovies.map((movie) =>
      getMovieSearchRecommendations(movie)
    );

    const searchResults = await Promise.all(movieData);

    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: searchResults })
    );
  };

  return (
    <div className="pt-[25%] md:pt-[12%] flex justify-center">
      <form
        className="w-full m-2 md:w-1/2 grid grid-cols-12 rounded-lg shadow-md"
        action=""
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          className="py-3 px-4 m-2 border  rounded-lg col-span-12 focus:outline-none placeholder-gray-600 font-semibold"
          placeholder={lang[userLangKey].GptSearchPlaceHolder}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
    </div>
  );
};

export default GptSearchBar;
