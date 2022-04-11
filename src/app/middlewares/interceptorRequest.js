const interceptorRequest = (req, res, next) => {
    if(process.env.NODE_ENV !== 'production'){
        console.log(`
        ------------REQUEST--------------
        --> path ${req.path}
        ---------------------------------
        --> method ${req.method}
        ---------------------------------
        `)
    }

    next();
}

module.exports = interceptorRequest;