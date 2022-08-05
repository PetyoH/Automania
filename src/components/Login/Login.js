import { Link, useNavigate } from "react-router-dom";
import stylesLogin from "./Login.module.css"
import * as userService from "../../services/authService"
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const Login = () => {
    
    const navigate = useNavigate();

    const {user} = useContext(AuthContext);
    
    const onSubmit = async (e) => {

        
        e.preventDefault();
        
        const formData = new FormData(e.target);
        
        const { email, password } = Object.fromEntries(formData);

        try {
            if (!user) {
                await userService.login(email, password);
                navigate('/');
            }
        } catch (error) {
            alert(error.message);
        }

        

    }

    return (
        <div className={stylesLogin.wrapper}>
            <form onSubmit={onSubmit} className={stylesLogin.loginForm}>
                <Link to="/" className="close"><i className='fa-solid fa-house'></i></Link>

                <h2 className={stylesLogin.title} >Login</h2>

                <label htmlFor="email" className={stylesLogin.emailLabel}>Email:</label>
                <input type="email" id="email" name="email" className={stylesLogin.email} />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" className={stylesLogin.password} />

                <button className={stylesLogin.login} type="submit">Login</button>

                <p>Not registered? <Link to='/register' className={stylesLogin.redirect}>Create an account</Link></p>
            </form>
        </div>
    );
}

export default Login;