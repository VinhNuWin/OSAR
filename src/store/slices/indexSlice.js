import { createSlice, nanoid } from '@reduxjs/toolkit';

const indexSlice = createSlice({
    name: 'indexes',
    initialState: {
        index: 0,
        data: []
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
                assailant: action.payload.assailant,
                address: action.payload.address,
            };
            state.data.push(newAnswer);
          },
    }
    });

export const { changeIndex, backIndex, addAnswer, addAnswers } = indexSlice.actions;
export const indexReducer = indexSlice.reducer;
