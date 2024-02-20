
const axios = require('axios');
require('dotenv').config();
const { Pokemons, Type } = require("../db");

const getPokemonDetailsById = async (req, res) => {
    try {
        const { idPokemon } = req.params;

        const pokemonFromDatabase = await Pokemons.findByPk(idPokemon, {
            include: { model: Type, attributes: ['name'] }
        });

        if (pokemonFromDatabase) {
            const { id, name, image, life, attack, defence,  Types } = pokemonFromDatabase;
            const typeNames = Types.map(typ => typ.name);

            const pokemonFromDB = {
                id,
                name: name,
                life: life,
                image: image,
                attack: attack,
                defence: defence,               
                type: typeNames
            };

            return res.json(pokemonFromDB);
        }

        const url = `https://pokeapi.co/api/v2/pokemon/${idPokemon}`;
        const response = await axios.get(url);

        if (response.data) {
            const { id, name, sprites, stats, types } = response.data;
            const typeNames = types.map(typ => typ.type.name);

            const pokemonFromAPI = {
                id,
                name,
                life: stats.find(stat => stat.stat.name === 'hp').base_stat, // find, se utiliza para buscar o recuperar un regitro que cumpla cierta condicion
                image: sprites.front_default,
                attack: stats.find(stat => stat.stat.name === 'attack').base_stat,
                defence: stats.find(stat => stat.stat.name === 'defense').base_stat,
                type: typeNames
            };

            return res.json(pokemonFromAPI);
        } else {
            return res.status(404).json({ message: 'Pokemon not found' });
        }
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};


module.exports = getPokemonDetailsById;


