const { Router } = require('express');
const getPokemonDetails = require('../controllers/getPokemonDetails');
const getPokemonDetailsById = require('../controllers/getPokemonDetailsById');
const getPokemonDetailsByName = require('../controllers/getPokemonDatailsByName');
const postPokemonDatail = require('../controllers/postPokemonDatail');
const getTypesDatails = require('../controllers/getTypesDatails');
// const axios = require("axios");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();
router.get('/pokemons', getPokemonDetails)
router.get('/pokemons/id/:idPokemon',getPokemonDetailsById)
router.get('/pokemons/name', getPokemonDetailsByName)
router.post('/pokemons',postPokemonDatail)
router.get("/types",getTypesDatails)



module.exports = router;

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);



