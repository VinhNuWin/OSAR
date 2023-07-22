import { configureStore } from '@reduxjs/toolkit';
import {
    indexReducer,
    changeIndex,
    backIndex,
    updateRegistry,
    updateBoolean,
    addEmail,
    add_Id,
    addEmployeeId,
    registrySelect,
    updateAddress,
    addFeedBack,
    setAnonymous
} from './slices/indexSlice';
import {
    formReducer,
    addUserId
} from './slices/formSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
import { reportApi }  from './apis/reportApi';
import { usersApi } from './apis/userApi';

const store = configureStore({
    reducer: {
        index: indexReducer,
        form: formReducer,
        // registry: registryReducer, 
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
    updateRegistry,
    updateBoolean,
    formReducer,
    addEmail,
    addUserId,
    add_Id,
    addEmployeeId,
    registrySelect,
    updateAddress,
    addFeedBack,
    setAnonymous
 };

export { useFetchReportQuery } from './apis/reportApi';
export { useCreateUserMutation, useGetUserQuery } from './apis/userApi';
