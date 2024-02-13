import Card from "../Card/Card";
import styles from"./Cards.module.css"  
import { Link } from 'react-router-dom';


export default function Cards({ pokemons }) {
    return (
      <div className={styles.divCards}>
        {pokemons && pokemons.map((pokemon) =>{
            return (
            <Link to={`/detail/${pokemon.id}`} key={pokemon.id} className={styles.cardLink}>
            <Card
              ID={pokemon.id}
              name={pokemon.name}
              image={pokemon.image}
              life={pokemon.life}
              attack={pokemon.attack}
              defence={pokemon.defence}
              type={pokemon.type}
            />
         </Link>
        )})}
      </div>
    );
  }