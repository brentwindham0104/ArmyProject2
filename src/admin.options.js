const AdminBro = require('admin-bro');
const AdminBroMongoose = require('admin-bro-mongoose');
const { company } = require('./companies/company.entity');

AdminBro.registerAdapter(AdminBroMongoose);
/** @type {AdminBro.AdminBroOptions} */
const options = {
    resources: [company]
};

module.exports = options;