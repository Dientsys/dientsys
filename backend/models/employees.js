const mongoose = require('mongoose') // Import mongoose

const employeesSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
    },
    department: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Departments'
    }
})
