import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    selectedSerie: null,
};

export const serieSlice = createSlice({
    name: 'serie',
    initialState,
    reducers: {
        selectSerie: (state, action) => {
            state.selectedSerie = action.payload;
        },
        clearSelectedSerie: (state) => {
            state.selectedSerie = null;
        },
    },
});

export const { selectSerie, clearSelectedSerie } = serieSlice.actions;

export default serieSlice.reducer;
