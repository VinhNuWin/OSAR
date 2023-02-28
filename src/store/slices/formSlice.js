import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
  name: 'form',
  initialState: {
    question: [
        'Assailants Name',
        'Aliases(Instagram, Tinder, etc.)',
        'Race/Ethnicity',
        'Sex',
        'Address',
        'Work',
        'Cell',
        'Email',
        'Assailants Defining Characteristics (i.e. tattoos, scrars, physical disabilities, etc.',
        'Location of Assault',
        'Date and Time of Incident',
        'Was Alcohol Involved',
        'Were Drugs Involved',
        'Was Survivor Asleep at time of Incident',
        'Were there verbal threats to the survivor',
        'Was resistance offered by survivor',
        'Details of the assault',
        'Areas of sexual contact',
        'Did the survivor receive a Sexual Assault Evidence Kit(i.e Rape Kit)',
        'Use of weapons',
        'Use of Restraints',
        'Name of Survivor',
        'Email'
    ],
    fName: (''),
    lName: (''),
    name: '',
    cost: 0
  },
  reducers: {
    nextQuestion(state, action) {
      state.question = action.payload;
    },
    previousQuestion(state, action) {
      state.question = action.payload;
    },
    changeFName(state, action) {
      state.fName = action.payload;
    },
    changeLName(state, action){
      state.lName = action.payload;
    },
    changeName(state, action){
      state.name = action.payload;
    }
  },
});

export const { nextQuestion, previousQuestion, changeFName, changeLName, changeName, changeCost } = formSlice.actions;
export const formReducer = formSlice.reducer;
