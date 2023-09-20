const express = require('express')
const router = express.Router()


// Create routes for employees
// 1. Get all employees
router.get('/api/employees', (req, res) => {
    res.send('Hello World')
})
// 2. Get one employee
router.get('/api/employees/id', (req, res) => {
})
// 3. Create one employee
router.post('/api/employees', (req, res) => {
})
// 4. Update one employee
router.patch('/api/employees/id', (req, res) => {
})
// 5. Delete one employee
router.delete('/api/employees/id', (req, res) => {
})

// Export router
module.exports = router