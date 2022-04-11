
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

module.exports =  {
    store,
    all,
};