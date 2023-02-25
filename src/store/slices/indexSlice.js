import { createSlice } from '@reduxjs/toolkit';

const indexSlice = createSlice({
    name: 'indexes',
    initialState: {
        index: 0,
        data: []
    },
    reducers: {
        changeIndex(state, action) {
            state.index = action.payload;
        },
        backIndex(state, action) {
            state.index = action.payload;
        }
    },
});

export const { changeIndex, backIndex } = indexSlice.actions;
export const indexReducer = indexSlice.reducer;
