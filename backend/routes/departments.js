const express = require('express')
const router = express.Router()


// Create routes for departments
// 1. Get all departments
router.get('/api/departments', (req, res) => {
    res.send('Hello World')
})
// 2. Get one department
router.get('/api/departments/id', (req, res) => {
})
// 3. Create one department
router.post('/api/departments', (req, res) => {
})
// 4. Update one department
router.patch('/api/departments/id', (req, res) => {
})
// 5. Delete one department 
router.delete('/api/departments/id', (req, res) => {

})

// Export router
module.exports = router