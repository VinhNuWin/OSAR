import { createSlice } from '@reduxjs/toolkit';

const indexSlice = createSlice({
    name: 'indexes',
    initialState: {
        index: 0,
        email: '',
    },
    reducers: {
        changeIndex(state, action) {
            state.index = action.payload;
        },
        backIndex(state, action) {
            state.index = action.payload;
        },
        addAnswers(state, action){
            state.push(action.payload);
          },
        removeSong(state, action) {
            state.pop(action.payload);
        },
        addEmail(state, action){
            state.email = action.payload;
        },
    }
    });

export const { changeDate, changeIndex, backIndex, addAnswers, addEmail } = indexSlice.actions;
export const indexReducer = indexSlice.reducer;
