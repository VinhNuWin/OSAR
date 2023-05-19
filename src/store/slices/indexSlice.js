import { createSlice } from '@reduxjs/toolkit';

const indexSlice = createSlice({
    name: 'indexes',
    initialState: {
        index: 0,
        email: '',
        registry: {
            email: '',
            _id: '',
            incident: {
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
        addAnswers(state, action){
            state.push(action.payload);
          },
        removeSong(state, action) {
            state.pop(action.payload);
        },
        addEmail(state, action){
            state.registry.email = action.payload;
        },
        addRegistryId(state, action) {
            state.registry._id = action.payload;
            state.registry.incident.userId = action.payload;
        },
        updateIncident(state, action){
            state.registry.incident = action.payload;
        },
    }
    });

export const { changeDate, changeIndex, backIndex, addAnswers, addEmail, updateIncident, addRegistryId } = indexSlice.actions;
export const indexReducer = indexSlice.reducer;
