import { Link } from "react-router-dom";
import styles from "./Header.module.css"

const Header = () => {
    return (
        <header>
            
                <Link className={styles.titleContainer} to="/">
                    <img className={styles.logoImg} src="../../images/blackCar.jpg" alt="" />
                    <h1 className={styles.title}>Automania</h1>
                </Link>
            <nav className={styles.navigation}>
                <ul>
                    <li><Link className={styles.link} to="/">Home</Link></li>
                    <li><Link className={styles.link} to="/catalog">Cars</Link></li>
                    <li><Link className={styles.link} to="/login">Login</Link></li>
                    <li><Link className={styles.link} to="/register">Register</Link></li>
                    <li><Link className={styles.link} to="/create">Create</Link></li>
                    <li><Link className={styles.link} to="/logout">Logout</Link></li>
                </ul>
            </nav>
            <span className={styles.email}>peter@abv.bg</span>
        </header>
    );
}

export default Header;