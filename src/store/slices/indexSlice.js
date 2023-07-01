import { createSlice } from '@reduxjs/toolkit';

const indexSlice = createSlice({
    name: 'indexes',
    initialState: {
        index: 0,
        employeeRegistry: {
            registryType: '',
            fullName: '',
            email: 'Vinhn333',
            _id: '6494ccd363e3e1106df02ff2',
            userId: '',
            location: '',
            date: '',
            address: {
                streetAddress: '',
                city: '',
                state: '',
                zipcode: '',
            },
            title: '',
            detailsOfIncident: '',
            peopleInvolved: '',
            witnesses: '',
            incidentOutcome: '',
            abilitiesAffected: '',
            seekedMedicalAttention: 'false',
            reportedToHigherPersonel: '',
            personalAffect: '',
            actionsTakenSinceIncident: '',
            additionalComments: '',
        },
        registry: {
            registryType: '',
            fullName: '',
            email: 'Vinhn3333@gmail.com',
            _id: '6494cc1637d1502267c0b187',
            userId: '',
            location: '',
            date: '',
            address: {
                streetAddress: '',
                city: '',
                state: '',
                zipcode: '',
            },
            title: '',
            wasAlcoholInvolved: 'false', //false
            wereDrugsInvolved: 'false', //false
            wasSurvivorAsleepTimeOfIncident: 'false', //false
            verbalThreatsToSurvivor: 'false', //false
            resistanceOfferedBySurvivor: 'false', //false
            detailsOfTheAssault: 'false', //false
            areasAssaulted: '',
            useOfWeaponsFromAssailant: 'false', //false
            useOfRestraintFromAssailant: 'false', //false
            detailsOfIncident: '',
            peopleInvolved: '',
            witnesses: '',
            incidentOutcome: '',
            abilitiesAffected: '',
            seekedMedicalAttention: 'false',
            reportedToHigherPersonel: '',
            personalAffect: '',
            actionsTakenSinceIncident: '',
            additionalComments: '',
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
            state.employeeRegistry = action.payload;
        },
        updateAddress(state, action) {
            state.employeeRegistry.address = action.payload;
        },
        addEmail(state, action){
            state.employeeRegistry.email = action.payload;
        },
        addRegistryId(state, action) {
            state.employeeRegistry._id = action.payload;
            state.employeeRegistry.userId = action.payload;
        },
        addAssaultTypeId(state, action) {
            state.registry.registryType._id = action.payload;
        },
        registrySelect(state, action) {
            state.employeeRegistry.registryType = action.payload;
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
    addRegistryId, 
    registrySelect,
    updateAnswerInput,
    updateAddress
} = indexSlice.actions;
export const indexReducer = indexSlice.reducer;
