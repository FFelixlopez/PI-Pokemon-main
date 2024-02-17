const { Pokemons, Type } = require('../db');

const postPokemonDatail = async (req, res) => {
    try {
        const { name, life, image, attack, defence, type } = req.body;

        if (!type || type.length === 0) {
            return res.status(400).json({ error: "Debe proporcionar al menos un typo." });
        }

        const newPokemon = await Pokemons.create({
            name,
            image,
            life,            
            attack,
            defence,            
        });

        await newPokemon.addTypes(type);
        return res.status(201).json(newPokemon);
    }catch (error){
        console.error("Error:", error);
        return res.status(500).json({error:"Error interno del sevidor"})
    }    
};

module.exports = postPokemonDatail;
