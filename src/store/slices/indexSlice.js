import { createSlice } from '@reduxjs/toolkit';

const indexSlice = createSlice({
    name: 'indexes',
    initialState: {
        index: 1,
        // email: '',
        registry: {
            survivor: '',
            genderSurvivor:'',
            email: '',
            _id: '',
            incident: {
                _id: '',
                userId: '',
                location: '',
                date: '',
                streetAddress: '',
                city: '',
                state: '',
                postal: '',
                wasAlcoholInvolved: 'false', //false
                wereDrugsInvolved: 'false', //false
                wasSurvivorAsleepTimeOfIncident: 'false', //false
                verbalThreatsToSurvivor: 'false', //false
                resistanceOfferedBySurvivor: 'false', //false
                detailsOfTheAssault: 'false', //false
                areasAssaulted: '',
                useOfWeaponsFromAssailant: 'false', //false
                useOfRestraintFromAssailant: 'false', //false
            },
            assailant: {
                _id: '',
                userId: '',
                gender: '',
                raceEthnicity: '',
                firstName: '',
                lastName:'',
            }
        },
    },
    reducers: {
        changeIndex(state, action) {
            state.index = action.payload;
        },
        backIndex(state, action) {
            state.index = action.payload;
        },
        addSurvivor(state, action) {
            state.registry.survivor = action.payload;
        },
        updateRegistry(state, action) {
            state.registry = action.payload;
        },
        addEmail(state, action){
            state.registry.email = action.payload;
        },
        addRegistryId(state, action) {
            state.registry._id = action.payload;
            state.registry.incident.userId = action.payload;
            state.registry.assailant.userId = action.payload;
        },
        addIncidentId(state, action) {
            state.registry.incident._id = action.payload;
        },
        addAssailantId(state, action) {
            state.registry.assailant._id = action.payload;
        },
        updateIncident(state, action){
            state.registry.incident = action.payload;
        },
        updateAssailant(state, action) {
            state.registry.assailant = action.payload;
        },
    }
    });

export const { 
    changeDate, 
    changeIndex, 
    backIndex,
    addSurvivor,
    updateRegistry,
    addEmail, 
    updateIncident, 
    addRegistryId, 
    addIncidentId, 
    addAssailantId,
    updateAssailant 
} = indexSlice.actions;
export const indexReducer = indexSlice.reducer;
