import React from "react";
import Card from "../Card/Card";
import styles from"./Cards.module.css"  
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";


export default function Cards({pokemons}) {
  
  pokemons = pokemons || [];
  

  return (
      <div className={styles.divCards}>
        {pokemons && pokemons.map((pokemon, index) => (
          <Link to={`/detail/${pokemon.id}`} key={index} className={styles.cardLink}>
            <Card
              // ID={pokemon.id}
              name={pokemon.name}
              image={pokemon.image}
              // life={pokemon.life}
              // attack={pokemon.attack}
              // defence={pokemon.defence}
              type={pokemon.type ? pokemon.type.join(", ") : ""}
            />
          </Link>
        ))}
      </div>
    );
  }