import { useState } from "react";
import axios from "axios";
import {Link} from"react-router-dom";
import styles from"./Form.module.css"

const Form =() =>{
    const [formData, setFormData] = useState({
        id:"",
        name:"",
        image:"",
        life:"",
        attack:"",
        defence:"",
        type:"",

    });
    const handleChange = (event) => {
        const { name, type } = event.target;
        if (type === "checkbox") {
            const value = parseInt(event.target.value);
            setFormData(prevState => ({
                ...prevState,
                type: event.target.checked ? [...prevState.type, value] : prevState.type.filter(typ => typ !== value)
            }));
        } else if (name === "type") {
            const selectype = Array.from(event.target.selectedOptions, option => parseInt(option.value));
            setFormData({
                ...formData,
                [name]: selectype
            });
        } else {
            setFormData({
                ...formData,
                [name]: event.target.value
            });
        }
    };
    const handleSubmit = async () => {
      
        try {
            const response = await axios.post("http://localhost:3001/pokemons", formData);
            console.log('New pokemons created:', response.data);
        } catch (error) {
            console.error('Error creating pokemons:', error);
        }
    };


    const types = [
        { id: 1, name: "normal" },
        { id: 2, name: "fighting"},
        { id: 3, name: "flying" },
        { id: 4, name: "poison" },
        { id: 5, name: "ground" },
        { id: 6, name: "rock" },
        { id: 7, name: "bug" },
        { id: 8, name: "ghost"},
        { id: 9, name: "steel" },
        { id: 10, name: "fire" },
        { id: 11, name: "water" },
        { id: 12, name: "grass" },
        { id: 13, name: "electric" },
        { id: 14, name: "psychic" },
        { id: 15, name: "ice" },
        { id: 16, name: "dragon" },
        { id: 17, name: "dark" },
        { id: 18, name: "fairy" },
        { id: 19, name: "unknown" },
        { id: 20, name: "shadow" }
    ];
    return (
        <div className={styles.divForm}>
            <div >
            <div><Link to="/home"><button className={styles.button}   >Home</button></Link></div>
            
            </div>
                     
            <h1 className={styles.title}>FORM PAGE</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.inputGroup}>
                    <label className={styles.label}>Nombre:</label>
                    <input  className={styles.input} type="text" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className={styles.inputGroup}>
                    <label className={styles.label}>Imagen:</label>
                    <input className={styles.input} type="text" name="image" value={formData.image} onChange={handleChange} required />
                </div>
                <div className={styles.inputGroup}>
                    <label className={styles.label}>Life:</label>
                    <textarea  className={styles.input} name="life" value={formData.life} onChange={handleChange} required />
                </div>
                <div className={styles.inputGroup}>
                    <label className={styles.label}>Attack:</label>
                    <input className={styles.input} type="text" name="attack" value={formData.attack} onChange={handleChange} required />
                </div>
                <div className={styles.inputGroup}>
                    <label className={styles.label}>Defence:</label>
                    <input className={styles.input} type="text" name="defence" value={formData.defence} onChange={handleChange} required />
                </div>
                <div className={styles.divTypes}>
                    <label className={styles.labeltypes}>Types:</label>
                    <div  className={styles.divT}>
                    {types.map((type) => (
                        <div key={type.id} className={styles.typeItem}>
                            <input  className={styles.inputTypes} type="checkbox" name="type" value={type.id} onChange={handleChange} />
                            <label className={styles.labelg}>{type.name}</label>
                        </div>
                    ))}
                    </div>
                </div>
                <button className={styles.button} type="submit">Crear Pokemons</button>
            </form>
            </div>       
    );


};

export default Form;