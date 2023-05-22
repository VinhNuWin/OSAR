import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
    indexReducer,
    changeIndex,
    backIndex,
    addSurvivor,
    addEmail,
    changeDate,
    updateIncident,
    addRegistryId,
    addIncidentId,
    addAssailantId,
    updateAssailant
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
    addSurvivor,
    formReducer,
    addEmail,
    removeAnswer,
    registryReducer,
    changeDate,
    addUserId,
    updateIncident,
    addRegistryId,
    addIncidentId,
    addAssailantId,
    updateAssailant
 };

export { useFetchReportQuery } from './apis/reportApi';
export { useCreateUserMutation, useGetUserQuery } from './apis/userApi';
