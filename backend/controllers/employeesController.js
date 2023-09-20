const getEmployees = (req, res) => {
    res.status(200).json({ message: 'Get employees...' })
}

module.exports = {
    getEmployees,
}