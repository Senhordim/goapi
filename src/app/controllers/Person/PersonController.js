
const { PersonModel } = require('../../models');

const store = async (req, res) => {
    const {name, salary, approved} = req.body;
    const person = {
        name, 
        salary, 
        approved
    }
    try {
        await PersonModel.create(person);
        res.status(201).send();
    } catch (error) {
        res.status(500).json({error: error})
    }
}

const all = async (_, res) => {
    try {
        const people = await PersonModel.find();
        return res.json(people);
    } catch (error) {
        res.status(500).json({error: error})
    }
}

const show = async (req, res) => {
    const { id } = req.params;
    try {
        const person = await PersonModel.findOne({_id: id});
        if(!person){
            res.status(422).json({error: 'Usuário não enconstrado'});
            return;
        }
        res.json(person);
    } catch (error) {
        res.status(500).json({error: error})
    }
}

const update = async (req, res) => {
    const { id } = req.params;
    const {name, salary, approved} = req.body;

    const person = {
        name,
        salary, 
        approved
    }
    
    try {
        const updatePerson = await PersonModel.updateOne({ _id: id }, person);
        if(updatePerson.matchedCount === 0){
            res.status(422).json({error: { message: 'Usuário não foi encontrado' }});
            return;
        }
        res.json(person);
    } catch (error) {
        res.status(500).json({error: error});
    }
}

module.exports =  {
    store,
    all,
    show,
    update,
};