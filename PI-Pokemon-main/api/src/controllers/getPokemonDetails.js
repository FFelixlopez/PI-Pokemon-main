const axios = require("axios");
require('dotenv').config();
const {Pokemons, Type} = require("../db");


const getPokemonDetails = async (req, res) => {
    try {
        const pokemonFromDB = await Pokemons.findAll({
            include: { model: Type, attributes: ['name'] }
        });


        const url = "https://pokeapi.co/api/v2/pokemon";
        const response = await axios.get(url);
        
        if (!response.data.results || !Array.isArray(response.data.results)) {
          throw new Error("La API no devolvió resultados válidos");
      }

      // Obtener detalles específicos de cada Pokémon
      const pokemonPromises = response.data.results.map(async (pokemon) => {
        const detailsResponse = await axios(pokemon.url); // hace una solicitud  as u Url individual para octener informacion
        const details = detailsResponse.data;
        const {types } =details
        const typeNames = types.map(typ => typ.type.name);

        return {
            id: details.id,
            name: details.name,
            life: details.stats[0].base_stat,
            image: details.sprites.front_default,
            attack: details.stats[1].base_stat,
            defence: details.stats[2].base_stat,
            type: typeNames
        };
    });

    // Esperar a que todas las solicitudes asíncronas se completen
    const pokemons = await Promise.all(pokemonPromises); //asegura que los detalles de cada poquemon se obtengan antes de continuar
    

      // Esperar a que se completen todas las solicitudes
      return res.json(pokemonFromDB.concat(pokemons));
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).send({ error: 'Internal Server Error' });
    }
};


module.exports = getPokemonDetails ;
  



