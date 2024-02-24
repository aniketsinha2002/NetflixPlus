import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import movieSlice from "./movieSlice";
import gptReducer from './gptSlice'


const appStore = configureStore(
    {
        reducer: {
            user: userSlice,
            movies: movieSlice,
            gpt: gptReducer,
        },
    })

export default appStore