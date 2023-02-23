import { createSlice, nanoid } from '@reduxjs/toolkit';
import { data } from 'autoprefixer';

const answerSlice = createSlice({
    name: 'answers',
    initialState: {
        answer: [],
        data: [],
    },
    reducers: {
        submit(state, action) {
            state.answer.push({
                answer: action.payload.answer,
                data: action.payload.data,
                id: nanoid()
            });
        },
        back(state, action){
            state.data = action.payload;
            const updated = state.answers.filter((answer) => {
                return answer.id !== action.payload
            });
            state.answers = updated;
        },
    },   
})

export const {
    submit,
    back
} = answerSlice.actions;
export const answersReducer = answerSlice.reducer;