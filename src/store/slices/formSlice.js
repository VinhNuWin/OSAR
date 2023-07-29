import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    assaultForm: [
      "",
      "",
      "Please provide your full name?", //2
      "When did the incident occur?", //3
      "Do you remember where the incident occurred?", //4
      "Was Alcohol Involved", //5
      "Were Drugs Involved", //6
      "Was Survivor Asleep at time of Incident", //7
      "Were there verbal threats to the survivor", //8
      "Was resistance offered by survivor", //9
      "Details of the assault", //10
      "Areas assaulted", //11
      "Do you have any evidence of the abuse?", //12
      "Use of weapons", //13
      "Use of Restraints", //14
      "Assailants Gender", //15
      "Assailants Race/Ethnicity", //16
      "Do you know the assailants name?", //17
      "Submit Registry", //18
      <h4>Rainn - Call 800.656.4673</h4>, //19
      "",
    ],
    generalForm: [
      "",
      "",
      "Please provide your full name?", //2
      "When did the incident happen?", //3
      "Where did the incident occur?", //4
      "Can you provide a detailed account of the incident?", //5
      "Name of person responsible for incident?", //6
      "Are there any witnesses who saw the incident?", //7
      "Is there any additional information or comments you would like to add?", //8
      "Submit Registry", //9
      "", //10
      "",
      "",
    ],
    childrensForm: [
      "",
      "",
      "Can you tell us your name?", //2
      "Tell us what happened?", //5
      "Where did this happen?", //6
      "When did this happen?", //7
      "Whats the name of the person we're talking about?", //8
      "Do you have any visible bruises and/or marks", //9
      "Who is someone you feel safe with?", //10
      "Submit Registry", //11
      <h4>Childhelp - Call 800.422.4453</h4>, //12
    ],
    spouseForm: [
      "",
      "",
      "Please provide your full name?", //2
      "Please provide the name of the abusive person", //3
      "When did the incident happen?", //4
      "Where did the incident occur?", //5
      "Can you provide a detailed account of the incident? ", //6
      "If there were any specific threats made, what were they?", //7
      "Are there any witnesses who can corroborate the incident?", //8
      "Has this occured before? If so, have you reported it in the past?", //9
      "Do you have any physical, digital, or other types of evidence of the abuse?", //10
      "Submit Registry", //11
      <h4>National Domestic Violence Hotline - Call 800.799.7233</h4>, //12
      "",
    ],
    elderlyForm: [
      "",
      "",
      "Please provide your full name?", //2
      "When did the incident occur?", //3
      "Where did the incident occur?", //4
      "Can you describe what happened in detail?", //5
      "Who is the person involved in the abusive behavior? ", //6
      "What is this persons relation to you?", //7
      "Were there any specific threats or actions that were particularly concerning?", //8
      "Have there been other instances of this abuse?", //9
      "Were there any witnesses to the incident or previous incidents", //10
      "Do you have any evidence of the abuse?", //11
      "Are there any other people living with you or who could be at risk because of this person?", //12
      "Do you feel safe in your current living situation?", //13
      "Submit Registry", //14
      <h4>
        National Domestic Violence Hotline - Find help and the resources you
        need. Call 800.799.7233
      </h4>, //15
      "",
    ],
    employeeForm: [
      "",
      "",
      "Can you provide your full name and your job title?", //2
      "What is the date and approximate time of the incident?", //3
      "Where did the incident take place?", //4
      "Who were the people involved in the incident?", //5
      "Can you describe the incident in detail?", //6
      "Were there any witnesses to the incident? If yes, who were they?", //7
      "What was the immediate outcome of the incident?", //8
      "Did the incident affect your ability to perform your job? If so, how?", //9
      "Did you seek medical attention as a result of the incident?", //10
      "Have you reported the incident to your direct supervisor or manager?", //11
      "Has any action been taken since the incident?", //12
      "How has the incident impacted you personally?", //13
      "Is there any additional information or comments you would like to add?", //14
      "Submit Registry", //15
      <h4>OSHA - Find help and the resources you need. Call 800.321.6742</h4>, //16
      "",
    ],
  },
});

export const { addUserId } = formSlice.actions;
export const formReducer = formSlice.reducer;
