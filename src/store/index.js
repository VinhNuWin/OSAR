import { configureStore } from '@reduxjs/toolkit';
import {
    indexReducer,
    changeIndex,
    backIndex,
    // addAnswer,
    addAnswers
} from './slices/indexSlice';
import {
    formReducer,
    changeValue,
    changeValue2,
} from './slices/formSlice';
import {
    addAnswer, 
    removeAnswer,
    registryReducer,
} from './slices/registrySlice';

const store = configureStore({
    reducer: {
        index: indexReducer,
        form: formReducer,
        registry: registryReducer, 

    }
});

// const startingState = store.getState();
// console.log(JSON.stringify(startingState));

// store.dispatch({
//   type: "registry/addAnswer",
//   payload: "NewSong!!!"
// });

// const finalState = store.getState().registry;
// console.log(JSON.stringify(finalState));

export {
    store, 
    indexReducer,
    changeIndex,
    backIndex,
    addAnswer,
    formReducer,
    changeValue,
    changeValue2,
    addAnswers,
    removeAnswer,
    registryReducer
 };


