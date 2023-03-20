import { createSlice } from '@reduxjs/toolkit';

const registrySlice = createSlice({
    name: 'registries',
    initialState: [],
    reducers: {
        addAnswer(state, action) {
            state.push(action.payload);
        },
        removeAnswer(state, action) {
            state.pop(action.payload);
        },
    }
});

export const { addAnswer, removeAnswer } = registrySlice.actions;
export const registryReducer = registrySlice.reducer;