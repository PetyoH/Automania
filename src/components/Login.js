import { Link } from "react-router-dom";
import stylesLogin from "./Login.module.css"

const Login = () => {
    return (
        <div className={stylesLogin.wrapper}>
            <form className={stylesLogin.loginForm}>
                <Link to="/" className="close"><i className='fa-solid fa-house'></i></Link>
                <h2 className={stylesLogin.title} >Login</h2>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" className={stylesLogin.username} />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" className={stylesLogin.password} />
                <button className={stylesLogin.login} type="submit">Login</button>
                <p>Not registered? <Link to='/register' className={stylesLogin.redirect}>Create an account</Link></p>
            </form>
        </div>
    );
}

export default Login;