const AdminBro = require('admin-bro');
const { buildRouter } = require('admin-bro-expressjs');
const express = require('express');

// /**
//  * 
//  * @param {AdminBro} admin 
//  * @returns {Express.Router} router
//  */
const buildAdminRouter = (admin) => {
    const router = buildRouter(admin);
    return router;
};

module.exports = buildAdminRouter;
