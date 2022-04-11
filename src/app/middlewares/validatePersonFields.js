const validatePresencePersonFields = (req, res, next) => {
    if(req.method === 'POST'){
        const {name, salary, approved} = req.body;
        if(!name || !salary || !approved){
            return res.status(400).json({ 
                error: "Campos name, salary e approved não pode ser vazio!"
            })
        }
    }
    
    return next();
}

module.exports = validatePresencePersonFields;