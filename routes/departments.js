const express = require('express')
const router = express.Router()


// Create routes for departments
// 1. Get all departments
router.get('/', (req, res) => {
    res.send('Hello World')
})
// 2. Get one department
router.get('/:id', (req, res) => {
})
// 3. Create one department
router.post('/', (req, res) => {
})
// 4. Update one department
router.patch('/:id', (req, res) => {
})
// 5. Delete one department 
router.delete('/id', (req, res) => {
})

// Export router
module.exports = router