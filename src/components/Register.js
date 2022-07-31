import { Link } from "react-router-dom";
import stylesRegister from "./Register.module.css"

const Register = () => {
    return (
        <div className={stylesRegister.wrapper}>
            <form>
                <Link to="/" className="close"><i className="fa-solid fa-house"></i></Link>
                <h2 className={stylesRegister.title} >Register</h2>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" className={stylesRegister.username} />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" className={stylesRegister.password} />
                <label htmlFor="confirm-password" className={stylesRegister.confirm}>Confirm password:</label>
                <input type="password" id="confirm-password" name="confirm-password" className={stylesRegister['confirm-password']} />
                <button className={stylesRegister.register} type="submit">Register</button>
                <p>Have already an account? <Link to='/login' className={stylesRegister.redirect}>Login here</Link></p>
            </form>
        </div>
    );
}

export default Register;