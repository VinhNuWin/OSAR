const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const assailantSchema = new Schema(
    {
        userId: {
            type: String,
            required: true,
        },
        assailantsGender: {
            type: String,
            required: false,
        },
        assailantsRaceEthnicity: {
            type: String,
            required: false,
        },
        assailantsName: {
            type: String,
            required: false,
        },
        streetAddress: {
            type: String,
            required: false,
        },
        assailantsWork: {
            type: String,
            required: false,
        },
        city: {
            type: String,
            required: false,
        },
        state: {
            type: String,
            required: false,
        },
        zipcode: {
            type: String,
            required: false,
        },
        assailantPhone: {
            type: String,
            required: false,
        },
        assailantsEmail: {
            type: String,
            required: false,
        },
        assailantsDefiningCharacteristics: {
            type: String,
            required: false,
        }
    },
    { timestamps: true }
);

const Assailant = mongoose.model('AssailantReport', assailantSchema);
module.exports = Assailant;