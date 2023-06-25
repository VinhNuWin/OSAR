import { createSlice } from '@reduxjs/toolkit';

const indexSlice = createSlice({
    name: 'indexes',
    initialState: {
        index: 0,
        registry: {
            registryType: 'employee', //general, employee, sexual, children, spouse, elderly
            email: '',
            _id: '',
            userId: '',
            location: '',
            date: '',
            address: {
                streetAddress: '',
                city: '',
                state: '',
                zipcode: '',
            },
            fullName: 'Vinh',
            title: 'Owner',
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
            state.registry = action.payload;
        },
        addEmail(state, action){
            state.registry.email = action.payload;
        },
        addRegistryId(state, action) {
            state.registry._id = action.payload;
            state.registry.userId = action.payload;
        },
        addIncidentId(state, action) {
            state.registry.incident._id = action.payload;
        },
        addAssailantId(state, action) {
            state.registry.assailant._id = action.payload;
        },
        addAssaultTypeId(state, action) {
            state.registry.registryType._id = action.payload;
        },
        updateIncident(state, action){
            state.registry.incident = action.payload;
        },
        updateAssailant(state, action) {
            state.registry.assailant = action.payload;
        },
        registrySelect(state, action) {
            state.registry.registryType = action.payload;
        },
        updateAnswerInput(state, action) {
            state.registry.answerInputs = action.payload;
        }
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
    addAssaultTypeId,
    updateAssailant,
    registrySelect,
    updateAnswerInput
} = indexSlice.actions;
export const indexReducer = indexSlice.reducer;
