//CONSTANT FILE FOR HARD CODED STRING VALUES TO BE KEPT HERE

export const GEMINI_KEY = process.env.REACT_APP_GEMINI_KEY

export const LOGO = "https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"

export const BG_IMG = "https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_large.jpg"

export const TMDB_MOVIE = "https://api.themoviedb.org/3/movie/"
export const MOVIE_DATA_API = "https://api.themoviedb.org/3/search/movie?query="
export const MOVIE_DATA_API_OPTIONS = "&include_adult=false&language=en-US&page=1"

export const GPT_PROMPT1 = "Act as a movie recommendation system and suggest movies for the query : "
export const GPT_PROMPT2 = ". Only give me names for 10 movies, comma separated like the example result given ahead. Example Result: Sholay, Andaz Apna Apna, Hera Pheri, Padosan, Chupke and many more"

export const MOVIE_TRAILER = "https://www.youtube.com/embed/"

export  const IMG_CDN = "https://image.tmdb.org/t/p/w200/"; 

export const TMDB_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_KEY
  }
};