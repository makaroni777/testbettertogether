const mongoose = require('mongoose');

const contractSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,

    },
    number: {
        type: String,
        required: true,

    },
    product: {
        type: String,
        required: true,


    },
    gtc: {
        type: String,
        required: true,

    },

}, { timestamps: true });


const Contract = mongoose.model('contract', contractSchema);

module.exports = Contract;