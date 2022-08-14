import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        distiller: 'Distiller',
        age: 'Age',
        color: 'Color',
        percent: 'Percent',
    },
    reducers: {
        chooseDistiller: (state, action) => { state.distiller = action.payload},
        chooseAge: (state, action) => { state.age = action.payload},
        chooseColor: (state, action) => { state.color = action.payload},
        choosePercent: (state, action) => { state.percent = action.payload},
    }
})

// Export Reducer
export const reducer = rootSlice.reducer;
export const { chooseDistiller, chooseAge, chooseColor, choosePercent } = rootSlice.actions;