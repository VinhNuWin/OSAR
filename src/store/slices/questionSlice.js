import { createSlice } from '@reduxjs/toolkit';

const questionSlice = createSlice ({
    name: 'question',
    initialState: {
        question: [],
        component: []
    },
    reducers: {
        forwards(state, action) {
            state.question = action.payload;
        },
        backwards(state, action) {
            state.component = action.payload;
        }
    }
})

export const { forwards, backwards } = questionSlice.actions;
export const questionsReducer = questionSlice.reducer;