
const { Pokemons, Type } = require("../db");
const axios = require("axios");
require('dotenv').config();
const { Op } = require("sequelize");

const getPokemonDetailsByName = async (req, res) => {
    try {
        const { name } = req.query;

        // Buscar en la base de datos utilizando findAll
        const pokemonsFromDatabase = await Pokemons.findAll({
            where: {
                name: {
                    [Op.iLike]: `%${name}`
                }
            },
            include: [{ model: Type, through: 'Type_Pokemon' }]
        });
        console.log(pokemonsFromDatabase.toString())
        if (pokemonsFromDatabase.length > 0) {
           // Utiliza los registros encontrados, por ejemplo, puedes devolver un array con todos los resultados
            const pokemonDetailsArray = pokemonsFromDatabase.map(pokemon => {
                const { id, name, image, life, attack, defence, Types } = pokemon;
                const typeNames = Types.map(typ => typ.name);

                return {
                    id,
                    name,
                    life,
                    image,
                    attack,
                    defence,
                    type: typeNames
                };
            });

            return res.json(pokemonDetailsArray);
        }

        // Si no se encuentra en la base de datos, buscar en la API
        const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
        const response = await axios.get(url);

        if (response.data) {
            const { id, name,  sprites, stats, types } = response.data;
            const typeNames = types.map(typ => typ.type.name);

            const pokemonFromAPI = {
                id,
                name,
                life : stats.find(stat => stat.stat.name === 'hp').base_stat,
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


module.exports = getPokemonDetailsByName;