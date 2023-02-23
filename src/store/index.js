import { configureStore } from '@reduxjs/toolkit';
import { 
    questionsReducer, 
    forwards, 
    backwards 
} from './slices/questionSlice';
import {
    answersReducer,
    submit,
    back
} from './slices/answerSlice';

const store = configureStore({
    reducer: {
        questions: questionsReducer,
        answers: answersReducer 
    }
});

export { store, forwards, backwards, back, submit };


