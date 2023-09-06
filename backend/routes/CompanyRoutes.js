const express =require('express')
const router = express.Router()

const companyController = require('../controller/CompanyController')

router.post('/add',companyController.addCompany)
router.get('/all',companyController.getAllCompanies)

module.exports=router