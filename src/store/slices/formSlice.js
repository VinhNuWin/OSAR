import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
  name: 'form',
  initialState: {
    question: [
      '',
      'When did the incident occur?', //1
      'Do you remember where the incident occurred?', //2
      'Was Alcohol Involved', //3
      'Were Drugs Involved', //4
      'Was Survivor Asleep at time of Incident', //5
      'Were there verbal threats to the survivor', //6
      'Was resistance offered by survivor', //7
      'Details of the assault', //8
      'Areas assaulted ', //9
      'Use of weapons', //10
      'Use of Restraints', //11
      'Assailants Gender', //12 assailant
      'Assailants Race/Ethnicity', //13
      'Do you know the assailants name?', //14
      'Name of Survivor', //15
      'Registry Complete', //16
    ],
    user: {
      incident: {},
      assailant: {},
    },
  },
});

export const { addUserId } = formSlice.actions;
export const formReducer = formSlice.reducer;
