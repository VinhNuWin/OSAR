import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
  name: 'form',
  initialState: {
    question: [
        'Assailants Name',
        'Race/Ethnicity',
        'Gender',
        'Assailants Address',
        'Assailants place of work',
        'Phone Number',
        'Assailants Email',
        'Assailants Defining Characteristics (i.e. tattoos, scars, physical disabilities, etc.',
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
        'Email of Survivor'
    ],
    first: '',
    last: '',
    race: '',
    assailant: {
      gender: '',
      name: {
        first: '',
        last: '',
        social: '',
      },
      location: {
        street: '',
        city: '',
        state: '',
        postcode: '',
      },
      email: '',
      phoneNumber: '',
      workAddress: {
        street2: '',
        city2: '',
        state2: '',
        postcode2: '',
      },
      definingCharacteristics: [],
    },
    incidentDetails: {
      date: '',
      time: '',
      location: {
        street3: '',
        city3: '',
        state3: '',
        postcode3: '',
      },
      alcohol: '',
      drugs: '',
      asleep: '',
      threats: '',
      resistance: '',
      assaultDescription: '',
      areasOfSexualContact: '',
      weapons: '',
      restraints: '',
    },
    nameOfSurvivor: '',
    emailRegistry: '',
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

export const { addAnswers, nextQuestion, previousQuestion, changeFName, changeLName, changeValue, changeValue2 } = formSlice.actions;
export const formReducer = formSlice.reducer;
