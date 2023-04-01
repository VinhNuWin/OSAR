const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OsarSchema = new Schema({
    date: {
        type: String,
        required: true
    },
    incidentLocation: {
        type: Boolean,
        default: false
    },
    alcoholInvolved: {
        type: Boolean,
        default: false
    },
    complete: {
        type: Boolean,
        default: false
    },
    timestamp: {
        type: String,
        default: Date.now()
    }
})

const Osar = mongoose.model("Osar", OsarSchema);

module.exports = Osar;