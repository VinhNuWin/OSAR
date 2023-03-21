import { createSlice } from '@reduxjs/toolkit';

const indexSlice = createSlice({
    name: 'indexes',
    initialState: {
        index: 0,
        incident: [],
        assailant: [],
        survivor: [],
        // assailant: [],
        // survivor: [],
        // data: [
        //     {incident: []},
        //     {assailant: []},
        //     {address: []}
        // ]

    },
    reducers: {
        changeIndex(state, action) {
            state.index = action.payload;
        },
        backIndex(state, action) {
            state.index = action.payload;
        },
        addAnswers(state, action){
            const newAnswer = {
                id: state.index,
                incident: action.payload,
                // assailant: action.payload.assailant,
                // address: action.payload.address,
            };
            state.push(newAnswer);
          },
        removeSong(state, action) {
            state.pop(action.payload);
        }
    }
    });

export const { changeIndex, backIndex, addAnswer, addAnswers } = indexSlice.actions;
export const indexReducer = indexSlice.reducer;
