export const ORDER_CARDS = "ORDER_CARDS"
export const SET_POKEMONS = "SET_POKEMONS"
export const FILTER ="FILTER"


export const filter =(type) =>{
    return {
        type : FILTER,
        payload : type,
    };    
}

export const orderCards = (order) =>{
    return{
        type :ORDER_CARDS,
        payload: order
    };
}
export const setPokemons = (pokemons) => ({
    type: SET_POKEMONS,
    payload: pokemons,
  });


