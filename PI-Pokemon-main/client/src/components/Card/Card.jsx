import React from "react"
import styles from "./Card.module.css"



export default function Card({
    id,
    name,
    image,
    life,
    attack,
    defence,
    type
}) {
    return (
        <div className={styles.container}>
            <div className={styles.divCard}>            
                <h2 className="cradInfo">ID: {id}</h2> 
                <h2 className="cradInfo">Name: {name}</h2>                
                <img className={styles.img} src={image} alt={name} />
                <h2 className="cradInfo">Life: {life}</h2>            
                <h2 className="cradInfo">Attack: {attack}</h2>
                <h2 className="cradInfo">Defence: {defence}</h2>
                <h2 className="cradInfo">Type: {type}</h2>            
            </div>
        </div>
    );

}