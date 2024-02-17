import React from "react";
import styles from "./Pagination.module.css"

const Pagination = ({pokemonsPerPage, totalPokemos, currentPage, paginate}) => {
    const pageNumbers= [];

    for(let i = 1; i <= Math.ceil(totalPokemos / pokemonsPerPage); i++){
        pageNumbers.push(i);
    }

    return (
        <div>
            <ul className={styles.pagination}>
                {pageNumbers.map(number => (
                    <li key={number} >
                        <button onClick={() => paginate(number)}
                         className={`${styles.pageLink} ${currentPage === number ? styles.active : ''}`}>
                            {number}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Pagination;
