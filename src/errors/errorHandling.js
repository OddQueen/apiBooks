function errorHandling(err, req, res, next) 
{
    res.status(500).json({mesage:err.message})
}
module.exports = errorHandling