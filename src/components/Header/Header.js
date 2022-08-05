import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { logout } from "../../services/authService";
import styles from "./Header.module.css";

const Header = () => {

    const { user } = useContext(AuthContext);

    return (
        <header>

            <Link className={styles.titleContainer} to="/">
                <img className={styles.logoImg} src="../../images/blackCar.jpg" alt="" />
                <h1 className={styles.title}>Automania</h1>
            </Link>
            <nav className={styles.navigation}>
                <ul>

                    <li><Link className={`${styles.link} ${styles.wrap}`} to="/">Home</Link></li>
                    <li><Link className={`${styles.link} ${styles.wrap}`} to="/catalog">Cars</Link></li>
                    {!user
                        ?
                        <>
                            <li><Link className={`${styles.link} ${styles.wrap}`} to="/login">Login</Link></li>
                            <li><Link className={`${styles.link} ${styles.wrap}`} to="/register">Register</Link></li>
                        </>
                        :
                        <>
                            <li><Link className={`${styles.link} ${styles.wrap}`} to="/create">Create</Link></li>
                            <li><Link className={`${styles.link} ${styles.wrap}`} to="/logout">Logout</Link></li>
                        </>
                    }

                </ul>
            </nav>
            <span className={styles.email}>{user?.email}</span>
        </header>
    );
}

export default Header;