import SearchBar from "../SearchBar/SearchBar";
import { useDispatch } from 'react-redux';
import { orderCards,filter } from "../../redux/action";
import { Link } from 'react-router-dom';
import styles from"./Navbar.module.css"



function Navbar({onSearch}){
    const dispatch = useDispatch();

    const handleSortAscending = () => {
        dispatch(orderCards("A")); // Dispatching action to order cards ascendingly
    };

    const handleSortDescending = () => {
        dispatch(orderCards("D")); // Dispatching action to order cards descendingly
    };

    const handleFilter= (event)=> {
        dispatch(filter(event.target.value));
    };
    const handleRefresh = () => {
        window.location.reload(); // Recarga la página
      };

    const types = [
        {
            title: "normal",
            value: "normal"
        },
        {
            title: "fighting",
            value: "fighting"
        },
        {
            title: "flying",
            value: "flying"
        },
        {
            title: "poison",
            value: "poison"
        },
        {
            title: "ground",
            value:"ground"
        },
        {
            title: "rock",
            value: "rock"
        },
        {
            title: "bug",
            value: "bug"
        },
        {
            title: "ghost",
            value: "ghost"
        },
        {
            title: "steel",
            value: "steel"
        },
        {
            title: "fire",
            value: "fire"
        },
        {
            title: "water",
            value: "water"
        },
        {
            title: "grass",
            value: "grass"
        },
        {
            title: "electric",
            value: "electric"
        },
        {
            title:"psychic",
            value: "psychic"
        },
        {
            title: "ice",
            value: "ice"
        },
        {
            title:"dragon",
            value: "dragon"
        },
        {
            title: "dark",
            value: "dark"
        },
        {
            title: "fairy",
            value:"fairy"
        },
        {
            title: "unknown",
            value: "unknown"
        },
        {
            title: "shadow",
            value:"shadow"
        }
    ];

    return (
        <div className={styles.divContainer}>
            <div className={styles.selectContainer}>
                <button  className={styles.button} onClick={handleSortAscending}>Ascending order</button>
                <button  className={styles.button} onClick={handleSortDescending}>Descending order</button>
            </div>
            <div className={styles.selectContainer}>
                <label> Filter by Types:</label>
                <select onChange={handleFilter}>
                <option value =""> All Types</option>
                {types.map((type, index)=>(
                    <option key={index} value={type.value}>
                        {type.title}
                    </option>
                ))}
                </select>
                {/* <Link><button>Home</button></Link> */}
        </div>
        <div >                    
            <Link to="/create"><button className={styles.button} >Create card</button></Link>
        </div >
        <div className={styles.searchBarContainer}>
            <SearchBar onSearch ={onSearch}/>
        </div>
        <div>
            <button className={styles.button} onClick={handleRefresh}>home</button>
        </div>         
        </div>
    )
};

export default Navbar;