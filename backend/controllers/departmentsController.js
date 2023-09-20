const getDepartments = (req, res) => {
    res.status(200).json({ message: 'Get departments...' })
}


module.exports = {
    getDepartments,
}
