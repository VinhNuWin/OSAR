import { configureStore } from '@reduxjs/toolkit';
import {
    indexReducer,
    changeIndex,
    backIndex,
    addAnswer,
} from './slices/indexSlice';
import {
    formReducer,
    nextQuestion,
    previousQuestion,
    changeFName,
    changeLName,
} from './slices/formSlice';

const store = configureStore({
    reducer: {
        index: indexReducer,
        form: formReducer, 
    }
});


export {
    store, 
    indexReducer,
    changeIndex,
    backIndex,
    addAnswer,
    formReducer,
    nextQuestion,
    previousQuestion,
    changeFName,
    changeLName,
 };


