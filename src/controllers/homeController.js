const handleGetHomePage = (req, res) => {
    // process data
    // call model
    res.send('BackEndHoidanIt')
}
const getKwd = (req,res) => {
    res.send('KWD')
}
module.exports = {
    handleGetHomePage,
    getKwd
}