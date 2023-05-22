import { createSlice } from '@reduxjs/toolkit';

const indexSlice = createSlice({
    name: 'indexes',
    initialState: {
        index: 0,
        email: '',
        registry: {
            survivor: '',
            email: '',
            _id: '',
            incident: {
                _id: '',
                userId: '',
                date: '',
                location: '',
                streetAddress: '',
                city: '',
                state: '',
                postal: 0,
                wasAlcoholInvolved: false,
                wereDrugsInvolved: false,
                wasSurvivorAsleepTimeOfIncident: false,
                verbalThreatsToSurvivor: false,
                resistanceOfferedBySurvivor: false,
                detailsOfTheAssault: '',
                areasOfSexualContact: '',
                useOfWeaponsFromAssailant: false,
                useOfRestraintFromAssailant: false,
            },
            assailant: {
                _id: '',
                userId: '',
                gender: '',
                raceEthnicity: '',
                firstName: '',
                lastName:'',
                streetAddress: '',
                work: '',
                city: '',
                state: '',
                streetAddressWork: '',
                cityWork: '',
                stateWork: '',
                zipcodeWork: 0,
                phone: 0,
                email: '',
                definingCharacteristics: '',
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
    addEmail, 
    updateIncident, 
    addRegistryId, 
    addIncidentId, 
    addAssailantId,
    updateAssailant 
} = indexSlice.actions;
export const indexReducer = indexSlice.reducer;
