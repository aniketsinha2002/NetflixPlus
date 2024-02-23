import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        NowPlayingMovies: null,
        PopularMovies: null,
        TopRatedMovies: null,
        UpcomingMovies: null,
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

    }
})

export const { addNowPlayingMovies,addPopularMovies, addTopRatedMovies, addUpcomingMovies } = movieSlice.actions;
export default movieSlice.reducer;