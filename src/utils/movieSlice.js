import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        NowPlayingMovies: null,
        PopularMovies: null,
        TopRatedMovies: null,
        UpcomingMovies: null,
        movieDetails: null,
        trailerVideo: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.NowPlayingMovies = action.payload
        },

        addPopularMovies: (state, action) => {
            state.PopularMovies = action.payload
        },

        addTopRatedMovies: (state, action) => {
            state.TopRatedMovies = action.payload
        },

        addUpcomingMovies: (state, action) => {
            state.UpcomingMovies = action.payload
        },
        
        addMovieDetails: (state, action) => {
            state.movieDetails = action.payload;
        },

        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        },
        clearTrailerVideo: (state, action) => {
            state.trailerVideo = null;
        },

    }
})

export const { addNowPlayingMovies, addPopularMovies, addTopRatedMovies, addUpcomingMovies, addMovieDetails, addTrailerVideo, clearTrailerVideo } = movieSlice.actions;
export default movieSlice.reducer;