const mongoose = require('mongoose') // Import mongoose

const departmentsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    numberOfEmployees: {
        type: Number,
        required: true
    },
    employees: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Employees'
    }
})


