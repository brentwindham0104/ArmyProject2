const AdminBro = require('admin-bro');
const AdminBroMongoose = require('admin-bro-mongoose');
const { Company } = require('./companies/company.entity');
const mongoose = require('mongoose');


AdminBro.registerAdapter(AdminBroMongoose);
// /** @type {AdminBro.AdminBroOptions} */
// const options = (
//     new mongoose.Schema({
//         companyName: {
//             type: String,
//             required: true
//         },
    
//         email: {
//             type: String,
//             required: true
//         },
//         address: {
//             type: String
//         }
    
//     })
// );


/** @type {import('admin-bro').AdminBroOptions} */
const options = {
    resources: [Company],
  };
    



module.exports = options;

