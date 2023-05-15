import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
    indexReducer,
    changeIndex,
    backIndex,
    addAnswers,
    addEmail,
    changeDate,
} from './slices/indexSlice';
import {
    formReducer,
    addUserId
} from './slices/formSlice';
import {
    addAnswer, 
    removeAnswer,
    registryReducer,
} from './slices/registrySlice';
import { setupListeners } from '@reduxjs/toolkit/query';
import { reportApi }  from './apis/reportApi';
import { usersApi } from './apis/userApi';

const store = configureStore({
    reducer: {
        index: indexReducer,
        form: formReducer,
        registry: registryReducer, 
        [reportApi.reducerPath]: reportApi.reducer,
        [usersApi.reducerPath]: usersApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            serializableCheck: false,
        })
            .concat(reportApi.middleware)
            .concat(usersApi.middleware);
    }
});

window.store = store;

setupListeners(store.dispatch);

export {
    store, 
    indexReducer,
    changeIndex,
    backIndex,
    addAnswer,
    formReducer,
    addEmail,
    addAnswers,
    removeAnswer,
    registryReducer,
    changeDate,
    addUserId,
 };

export { useFetchReportQuery } from './apis/reportApi';
export { useCreateUserMutation, useGetUserQuery } from './apis/userApi';
