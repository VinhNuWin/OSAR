import { createSlice } from '@reduxjs/toolkit';

const indexSlice = createSlice({
    name: 'indexes',
    initialState: {
        index: 1,
        registry: {
            email: 'Vinhn333@yahoo.com',
            _id: '64a99be4c71d88e9d794ce4f',
            registryId: '',
            registryType: '',
            registryReport: {
                registryId: '',
                immediateDangerOrMedicalAttention: false,
                fullName: '',
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
                relationshipToReporter: '',
                witnesses: '',
                additionalIncidentsOfAbuse: '',
                concerningThreatsOrActions: '',
                evidence: '',
                otherPeopleAtRisk: '',
                incidentOutcome: '',
                abilitiesAffected: '',
                currentLivingSituationSafe: '',
                seekedMedicalAttention: 'false',
                reportedToHigherPersonel: '',
                personalAffect: '',
                actionsTakenSinceIncident: '',
                additionalComments: '',
                additionalSupportNeeded: '',
                alcoholInvolved:'',
                drugsInvolved: '',
                wasSurvivorAsleep: '',
                verbalThreats: '',
                resistanceOffered: '',
                useOfWeapons: '',
                useOfRestraints: '',
                assailantGender: '',
                raceEthnicity: '',
                assailantsFullName: '',
                survivorsFullName: '',
                survivorGender: '',
            },
        }
    },
    reducers: {
        changeIndex(state, action) {
            state.index = action.payload;
        },
        backIndex(state, action) {
            state.index = action.payload;
        },
        addEmail(state, action){
            state.registry.email = action.payload;
        },
        add_Id(state, action) {
            state.registry._id = action.payload;
            state.registry.registryId = action.payload;
            state.registry.registryReport.registryId = action.payload;
        },
        updateRegistry(state, action) {
            state.registry.registryReport = action.payload;
            state.index = state.index + 1;
        },
        updateAddress(state, action) {
            state.registry.registryReport.address = action.payload;
        },
        addEmployeeId(state, action){
            state.registry.employeeRegistry.registryId = action.payload;
        },
        addElderlyId(state, action){
            state.registry.elderlyRegistry.elderlyId = action.payload;
        },
        registrySelect(state, action){
            state.registry.registryType = action.payload;
            state.registry.registryReport.registryType = action.payload;
        },
    }
    });

export const { 
    changeIndex, 
    backIndex,
    updateRegistry,
    addEmail, 
    add_Id,
    addEmployeeId,
    registrySelect,
    updateAddress,

} = indexSlice.actions;
export const indexReducer = indexSlice.reducer;
