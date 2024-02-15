import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    selectedMovie: null,
};

export const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        selectMovie: (state, action) => {
            state.selectedMovie = action.payload;
        },
        clearSelectedMovie: (state) => {
            state.selectedMovie = null;
        },
    },
});

export const { selectMovie, clearSelectedMovie } = movieSlice.actions;

export default movieSlice.reducer;
