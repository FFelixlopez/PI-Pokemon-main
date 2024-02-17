import {Link} from"react-router-dom";
import styles from"./Landing.module.css"

const Landing = () => {
    return(
        <div className={styles.div}>
            
            <h1 className={styles.h1}>Welcome</h1>
            <Link to="/home"><button className={styles.button}>Home</button></Link>
            
        </div>
    )

}
export default Landing;