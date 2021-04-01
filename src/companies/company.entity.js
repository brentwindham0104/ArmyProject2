const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },
    address: {
        type: String
    }

})
const company = mongoose.model('Company', { name: String });

module.exports = { companySchema, company };

