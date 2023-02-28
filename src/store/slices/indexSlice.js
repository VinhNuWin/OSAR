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
        addAnswer(state, action) {
            //action.payload === { name:'ab', cost : 140 }
            state.data.push({
                fName: action.payload.fName,
                lName: action.payload.lName,
                id: nanoid(),
            });
        },
    }
    });

export const { changeIndex, backIndex, addAnswer } = indexSlice.actions;
export const indexReducer = indexSlice.reducer;
