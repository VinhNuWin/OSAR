import { createSlice } from '@reduxjs/toolkit';

const indexSlice = createSlice({
    name: 'indexes',
    initialState: {
        index: 1,
        email: '',
        registry: {
            survivor: '',
            genderSurvivor:'',
            email: 'Vinhn333',
            _id: '123',
            incident: {
                _id: '0',
                userId: '1',
                location: '2',
                date: 'March, 6 1984',
                streetAddress: 'streetaddress',
                city: '5',
                state: '6',
                postal: 7,
                wasAlcoholInvolved: 'alcohol', //false
                wereDrugsInvolved: 'drugs', //false
                wasSurvivorAsleepTimeOfIncident: 'asleep', //false
                verbalThreatsToSurvivor: 'threats', //false
                resistanceOfferedBySurvivor: 'resistance', //false
                detailsOfTheAssault: '234', //false
                areasAssaulted: '9ihu',
                useOfWeaponsFromAssailant: 'weapons', //false
                useOfRestraintFromAssailant: 'restraint', //false
            },
            assailant: {
                _id: '',
                userId: '',
                gender: 'male',
                raceEthnicity: 'asian',
                firstName: 'Vinh',
                lastName:'Nguyen',
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
