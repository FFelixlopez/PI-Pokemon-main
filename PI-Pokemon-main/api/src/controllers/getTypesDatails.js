const axios = require("axios");
const {Type} = require("../db");


const getPokemonTypesFromAPI = async () => {
    try {
      const response = await axios.get("https://pokeapi.co/api/v2/type/");
      return response.data.results.map(type => ({
        name: type.name,
        
      }));
    } catch (error) {
      throw new Error('Error al obtener tipos de Pokémon desde la API');
    }
  };
  
  const getTypesDatails = async (req, res) => {
    try {
      let types = await Type.findAll();
  
      if (types.length === 0) {
        const typesFromAPI = await getPokemonTypesFromAPI();
  
        await Type.bulkCreate(typesFromAPI);
        types = typesFromAPI;
      }
  
      res.status(200).json(types);
    } catch (error) {
      console.error('Error:', error);
      return res.status(500).json({ error: 'Error interno del servidor' });
    }
  };
  
  module.exports = getTypesDatails;