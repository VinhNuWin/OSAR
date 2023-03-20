import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
  name: 'form',
  initialState: {
    question: [
      'When did the incident occur?', //0
      'Where did the incident occur?', //1
      'Was Alcohol Involved', //3
      'Were Drugs Involved', //4
      'Was Survivor Asleep at time of Incident', //5
      'Were there verbal threats to the survivor', //6
      'Was resistance offered by survivor', //7
      'Details of the assault', //8
      'Areas of sexual contact', //9
      'Did the survivor receive a Sexual Assault Evidence Kit(i.e Rape Kit)', //10
      'Use of weapons', //11
      'Use of Restraints', //12
      'Assailants Gender', //13
      'Assailants Race/Ethnicity', //14
      'Do you know the assailants name?', //15
      'Do you know the assailants address?', //16
      'Do you know the assailants phone number?', //17
      'Do you know the assailants place of work?', //18
      'Do you know the assailants email?', //19
      'Assailants Defining Characteristics (i.e. tattoos, scars, physical disabilities, etc.)', //20
      'Name of Survivor', //21
      'Email of Survivor', //22
    ],
   
  reducers: {
    changeValue(state, action){
      state.first = action.payload;    
    },
    changeValue2(state, action){
      state.last = action.payload;
    },
  },
}

});

export const { changeValue, changeValue2 } = formSlice.actions;
export const formReducer = formSlice.reducer;
