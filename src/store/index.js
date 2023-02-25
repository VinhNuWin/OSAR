import { configureStore } from '@reduxjs/toolkit';
import {
    changeIndex,
    indexReducer,
    backIndex,
} from './slices/indexSlice';

const store = configureStore({
    reducer: {
        index: indexReducer,
        // form: formReducer, 
    }
});


export { store, changeIndex, indexReducer, backIndex };


