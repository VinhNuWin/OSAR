import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
  name: 'form',
  initialState: {
    sexualAssaultForm: [
      '',
      '',
      'Can you please provide your full name?',
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
      'Survivor Gender' //16
    ],
  generalForm: [
    '',
    '',
    'Use of weapons', //10
    'Use of Restraints', //11
    'Assailants Gender', //12 assailant
    'Assailants Race/Ethnicity', //13
    'Do you know the assailants name?', //14
    'Name of Survivor', //15
    'Survivor Gender' //16
  ],
  childrensForm: [
    '',
    '',
    'Are you in immediate danger?',
    'Do you require medical assistance?',
    'Can you provide a detailed account of the incident(s)?',
    'What happened, when and where did it happen?',
    'Who is the person responsible for the abuse?',
    'Can you provide details?',
    'Were there any  specific threats made?, if yes, what were they?',
    'Are there any witnesses who saw or corraborate the incident?',
    'Has this occured before? If so, have you reported it in the past?',
    'Do you have any physical, digital, or other types of evidence of the abuse( like photographs, enails, text messages, etc.)?',
    'Are there any children or other dependents in the household? Are they in immediate danger?',
    'Are there any weapons in the house?',
    'Do you have a safe place to stay after reporting this incident?',
    'Would you like to be referred to local support services for victims of domestic abuse?',
  ],
  spouseForm: [
    '',
    '',
    'Can you provide your full name and address?',
    'Are you in immediate danger? Do you require medical assistance?',
    'Can you provide a detailed account of the incident(s)? What happened, when and where did it hgappen?',
    'Who is the person responsible for the abuse? Can you provide their details?',
    'Were there any specific threats made? If yes, what were they?',
    'Are there any witnesses who can corroborate the incident?',
    'Has this occured before? If so, have you reported it in the past?',
    'Do you have any physical, digital, or other types of evidence of the abuse (like photographs, emails, text messages, etc.)?',
    'Are there any children or other dependents in the household? Are they in immediate danger?',
    'Are there any weapons in the house?',
    'Do you have a safe place to stay after reporting this incident?',
    'Would you like to be referred to local support services for victims of domestic abuse?',
  ],
  elderlyForm: [
    '',
    '',
    'Can you please tell me your full name and address?',
    'Are you in immediate danger or in eed of medical attention?',
    'Cab you describe what happened in detail? When and where did the incident occur?',
    'Who is the person involved in the abusive behavior? Can you provide any details about them?',
    'Is this person your caregiver, family member, or someone else? What is their relationship to you?',
    'Were there any specific threats or actios that were particularly concerning?',
    'Have there been other instances of this abuse?',
    'Were there any witnesses to the incident or previous incidents',
    'Do you have any evidence of the abuse (like photographs of injuries, written communication, etc)?',
    'Are there any other people living with you or who could be at risk because of this person?',
    'Do you feel safe in your current living situation?',
    'Would you like information or support services available to you, such as senior services, legal advice, or counseling?',    
  ],
  employeeForm: [
    '',
    'Can you provide your full name and your job title?',
    'What is the date and approximate time of the incident?',
    'Where did the incident take place?',
    'Who were the people involved in the incident?',
    'Can you describe the incident in as much detail as possible?',
    'Were there any witnesses to the incident? If yes, who were they?',
    'What was the immediate outcome of the incident?',
    'Did the incident affect your ability to perform your job? If so, how?',
    'Did you seek medical attention as a result of the incident?',
    'Have you reported the incident to your direct supervisor or manager?',
    'Has any action been taken since the incident?',
    'How has the incident impacted you personally?',
    'Is there any additional information or comments you would like to add?',
    
  ],
    user: {
      incident: {},
      assailant: {},
    },
  },
});

export const { addUserId } = formSlice.actions;
export const formReducer = formSlice.reducer;
