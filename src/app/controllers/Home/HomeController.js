const index = (req, res) => {
    return res.json({
        message: 'hello node!'
    });
}

module.exports =  {
    index,
};