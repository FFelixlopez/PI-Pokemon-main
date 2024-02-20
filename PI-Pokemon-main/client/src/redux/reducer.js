import { FILTER, ORDER_CARDS, SET_POKEMONS } from "./action";
const initialState ={
    pokemons:[],
    filterPokemons:[],
};

const rootReducer = (state= initialState, action)=>{
    switch(action.type){
        case FILTER :
            console.log("Action payload:", action.payload);
             const filteredPokemons = action.payload ? state.pokemons.filter(poke =>poke.type && poke.type.includes(action.payload)) :state.pokemons;
             console.log("Filtered games:", filteredPokemons  ); 
            return {
                ...state,
                filterPokemons: filteredPokemons,
        };
        case ORDER_CARDS:
            const orderedCards = [...state.filterPokemons].sort((a, b) => {
                if (action.payload === "A") return a.id - b.id;
                if (action.payload === "D") return b.id - a.id;
                return 0;
            })
            return {
                ...state,
                filterPokemons: orderedCards,
            }
        case SET_POKEMONS: // Define una nueva acción para establecer todos los pokemones
            return {
                ...state,
                pokemons: action.payload,// Establece todos los pokemones recibidos desde la URL
                filterPokemons:action.payload,
            };
        default:
            return state;
    }
};
export default rootReducer;