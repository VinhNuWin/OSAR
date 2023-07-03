import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
  name: 'form',
  initialState: {
    sexualAssaultForm: [
      '',
      'Can you please provide your full name?', //1
      'When did the incident occur?', //2
      'Do you remember where the incident occurred?', //3
      'Was Alcohol Involved', //4
      'Were Drugs Involved', //5
      'Was Survivor Asleep at time of Incident', //6
      'Were there verbal threats to the survivor', //7
      'Was resistance offered by survivor', //8
      'Details of the assault', //9
      'Areas assaulted', //10
      'Do you have any evidence of the abuse (like photographs of injuries, written communication, etc)?', //11
      'Use of weapons', //12
      'Use of Restraints', //13
      'Assailants Gender', //14 assailant
      'Assailants Race/Ethnicity', //15
      'Do you know the assailants name?', //16
      'Name of Survivor', //17
      'Survivor Gender', //18
      'Your registry has been reported, a timestamped copy will be sent to the the email provided'
    ],
  generalForm: [
    '',
    'Are you in immediate danger?',
    'When did the incident happen?',
    'Where did the incident occur?',
    'Can you provide a detailed account of the incident(s)? What happened?',
    'Name of person responsible for incident?',
    'Are there any witnesses who saw the incident?',
    'Is there any additional information or comments you would like to add?',
    'Your registry has been reported, a timestamped copy will be sent to the the email provided'
  ],
  childrensForm: [
    '',
    'Are you in immediate danger?',
    'How old are you',
    'Do you require medical assistance?',
    'Can you tell us what happened?',
    'Where did it happen?',
    'Who is the person responsible for the abuse?',
    'Were there any  specific threats made?, if yes, what were they?',
    'Are there any witnesses who saw the incident?',
    'Has this occured before? If so, have you reported it in the past?',
    'Do you have any visible bruises and/or marks',
    'Are there any children or other dependents in the household? Are they in immediate danger?',
    'Are there any weapons in the house?',
    'Do you have a safe place to stay after reporting this incident?',
    'Would you like to be referred to local support services for victims of domestic abuse?',
    'Your registry has been reported, a timestamped copy will be sent to the the email provided'
  ],
  spouseForm: [
    '',
    'Are you in immediate danger? Do you require medical assistance?',
    'Who is the person responsible for the abuse?',
    'When did the incident happen?',
    'Where did the incident occur?',
    'Can you provide a detailed account of the incident(s)? What happened?',
    'If there were any specific threats made, what were they?',
    'Are there any witnesses who can corroborate the incident?',
    'Has this occured before? If so, have you reported it in the past?',
    'Do you have any physical, digital, or other types of evidence of the abuse (like photographs, emails, text messages, etc.)?',
    'Are there any children or other dependents in the household? Are they in immediate danger?',
    'Are there any weapons in the house?',
    'Do you have a safe place to stay after reporting this incident?',
    'Would you like to be referred to local support services for victims of domestic abuse?',
    'Your registry has been reported, a timestamped copy will be sent to the the email provided',
  ],
  elderlyForm: [
    '',
    'Are you in immediate danger or in need of medical attention?',
    'Can you please tell me your full name?',
    'When did the incident occur?',
    'Where did the incident occur?',
    'Can you describe what happened in detail?',
    'Who is the person involved in the abusive behavior? ',
    'Is this person your caregiver, family member, or someone else? What is their relationship to you?',
    'Were there any specific threats or actions that were particularly concerning?',
    'Have there been other instances of this abuse?',
    'Were there any witnesses to the incident or previous incidents',
    'Do you have any evidence of the abuse (like photographs of injuries, written communication, etc)?',
    'Are there any other people living with you or who could be at risk because of this person?',
    'Do you feel safe in your current living situation?',
    'Would you like information or support services available to you, such as senior services, legal advice, or counseling?',  
    'Your registry has been reported, a timestamped copy will be sent to the the email provided'  
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
    'Your registry has been reported, a timestamped copy will be sent to the the email provided'
  ],
  },
});

export const { addUserId } = formSlice.actions;
export const formReducer = formSlice.reducer;
