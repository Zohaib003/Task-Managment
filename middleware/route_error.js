const handleError = (req,res)=>res.status(400).send("Route dont found")

module.exports = handleError