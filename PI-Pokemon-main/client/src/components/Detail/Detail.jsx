import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css"
import {Link} from"react-router-dom";



// const Detail = () => {
//     const { id } = useParams();
//     const [pokemons, setPokemons] = useState({}); 

//     useEffect(() => {
//         const fetchData = async () => {
//           try {
//             const response = await axios.get(`http://localhost:3001/pokemons/id/${id}`);
//             console.log(response)
//             setPokemons(response.data);            
//           } catch (error) {
//             console.error('Error:', error);
//             window.alert('Ocurrió un error al obtener los datos del Pokémon');
//           }
//         };
    
//         return fetchData({});
//       }, [id]);
//     return (
//         <div className={styles.container}>          
//             <div  ><Link to="/home"><button className={styles.button}  >Home</button></Link></div>
//             <div className={styles.divCard}>
//                 <h2 className="cradInfo">ID:{pokemons.id && pokemons.id}</h2>
//                 <h2 className="cradInfo">Name : {pokemons.name && pokemons.name}</h2>
//                 <img src={pokemons.image && pokemons.image} alt={pokemons.name && pokemons.name}/>
//                 <h2 className="cradInfo">Life:{pokemons.life && pokemons.life}</h2>
//                 <h2 className="cradInfo">Attack : {pokemons.attack && pokemons.attack}</h2>
//                 <h2 className="cradInfo">Defence : {pokemons.defence && pokemons.defence}</h2>{/* condicional = (&&) se utiliza cuando react se pone pechicoso */}
//                 <h2 className="cradInfo">Type: {pokemons.type && pokemons.type ? pokemons.type.join(", ") : "" }</h2>{/* condicional chaime =(?) se utiliza cuando tien mas de una propiedad  */}             
                       
//             </div>
            
//         </div>

//     );
// }


const Detail = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState({}); 

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/pokemons/id/${id}`);
      console.log(response)
      setPokemon(response.data);            
    } catch (error) {
      console.error('Error:', error);
      window.alert('Ocurrió un error al obtener los datos del Pokémon');
    }
  };

  fetchData(); // Invoca la función de obtención de datos
}, [id]); // Asegúrate de que la solicitud se realice cuando el valor de 'id' cambie

return (
  <div className={styles.container}>          
      <div><Link to="/home"><button className={styles.button} >Home</button></Link></div>
      <div className={styles.divCard}>
          <h2 className="cradInfo">ID:{pokemon.id}</h2>
          <h2 className="cradInfo">Name: {pokemon.name}</h2>
          <img src={pokemon.image} alt={pokemon.name}/>
          <h2 className="cradInfo">Life:{pokemon.life}</h2>
          <h2 className="cradInfo">Attack: {pokemon.attack}</h2>
          <h2 className="cradInfo">Defence: {pokemon.defence}</h2>
          <h2 className="cradInfo">Type: {pokemon.type ? pokemon.type.join(", ") : ""}</h2>            
      </div>            
  </div>
);
}

export default Detail;

