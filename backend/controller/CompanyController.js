const companySchema = require('../models/Company_MakeSchema')

exports.addCompany = async (req, res) => {
    try {
        const company = await companySchema.create(req.body);
        res.status(200).json({
            message: "Company added successfully.",
            data: company
        })
    } catch (err) {
        response.status(500).json({
            message: "Error in adding Company",
            data: err
        })
    }
}

exports.getAllCompanies = async (req, res) => {
    try {
        const companies = await companySchema.find();
        res.status(200).json({
            message:"Companies Fetched Successfully",
            data:companies
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error fetching companies',
            err:error 
        });
    }
}