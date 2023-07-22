import { createSlice } from "@reduxjs/toolkit";

const indexSlice = createSlice({
  name: "indexes",
  initialState: {
    index: 0,
    registry: {
      email: "",
      _id: "",
      registryId: "",
      registryType: "",
      anonymous: false,
      registryReport: {
        registryId: "",
        immediateDangerOrMedicalAttention: false,
        fullName: "anon",
        date: "",
        incidentAddress: {
          streetAddress: "",
          city: "",
          state: "",
          zipcode: "",
        },
        title: "",
        detailsOfIncident: "",
        peopleInvolved: "",
        assailantsFullName: "",
        relationshipToReporter: "",
        witnesses: "",
        additionalIncidentsOfAbuse: "",
        threatsOrActions: "",
        evidence: "",
        otherPeopleAtRisk: "",
        firstReport: true,
        incidentOutcome: "",
        abilitiesAffected: "",
        currentLivingSituationSafe: "",
        seekedMedicalAttention: "false",
        reportedToHigherPersonel: "",
        personalAffect: "",
        actionsTakenSinceIncident: "",
        additionalComments: "",
        additionalSupportNeeded: "",
        alcoholInvolved: "",
        drugsInvolved: "",
        wasSurvivorAsleep: "",
        verbalThreats: "",
        resistanceOffered: "",
        areasAssaulted: "",
        useOfWeapons: "",
        useOfRestraints: "",
        assailantGender: "",
        raceEthnicity: "",
        assailantsFullName: "",
        survivorsFullName: "",
        survivorGender: "",
      },
    },
    feedback: "",
    reportSummary: "",
  },
  reducers: {
    changeIndex(state, action) {
      state.index = action.payload;
    },
    backIndex(state, action) {
      state.index = action.payload;
    },
    addEmail(state, action) {
      state.registry.email = action.payload;
    },
    add_Id(state, action) {
      state.registry._id = action.payload;
      state.registry.registryId = action.payload;
      state.registry.registryReport.registryId = action.payload;
    },
    updateRegistry(state, action) {
      state.registry.registryReport = action.payload;
    },
    updateAddress(state, action) {
      state.registry.registryReport.address = action.payload;
    },
    updateBoolean(state, action) {
      state.registry.registryReport = action.payload;
      state.index = state.index + 1;
    },
    addEmployeeId(state, action) {
      state.registry.employeeRegistry.registryId = action.payload;
    },
    addElderlyId(state, action) {
      state.registry.elderlyRegistry.elderlyId = action.payload;
    },
    registrySelect(state, action) {
      state.registry.registryType = action.payload;
      state.registry.registryReport.registryType = action.payload;
    },
    addFeedBack(state, action) {
      state.feedback = action.payload;
    },
    setAnonymous(state, action) {
      state.anonymous = action.payload;
    },
  },
});

export const {
  changeIndex,
  backIndex,
  updateRegistry,
  updateBoolean,
  addEmail,
  add_Id,
  addEmployeeId,
  registrySelect,
  updateAddress,
  addFeedBack,
  setAnonymous,
} = indexSlice.actions;
export const indexReducer = indexSlice.reducer;
