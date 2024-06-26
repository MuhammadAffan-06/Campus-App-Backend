const express = require('express');
const { createAdmin, approveAdmin, getCompaniesData, getStudentsData, getJobsPostedData } = require('../../Controllers/adminController');
const { verifyToken } = require('../../middlewares/middleware');
const adminRouter = express.Router()

adminRouter
    .post('/createAdmin', createAdmin)
    .use(verifyToken)
    .put('/admin/approve', verifyToken, approveAdmin)
    .get('/admin/companies', verifyToken, getCompaniesData)
    .get('/admin/students', verifyToken, getStudentsData)
    .get('/admin/jobsposted', verifyToken, getJobsPostedData);

module.exports = adminRouter;