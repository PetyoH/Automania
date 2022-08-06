import { Link, useNavigate } from "react-router-dom";
import stylesLogin from "./Login.module.css"
import * as userService from "../../services/authService"
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const Login = () => {

    const navigate = useNavigate();

    const [error, setError] = useState(false);

    const [values, setValues] = useState({
        email: '',
        password: ''
    });

    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    const { user } = useContext(AuthContext);

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
            console.log(error.message);
            setError(true);
        }



    }

    return (
        <div className={stylesLogin.wrapper}>
            <form onSubmit={onSubmit} className={stylesLogin.loginForm}>
                <Link to="/" className="close"><i className='fa-solid fa-house'></i></Link>

                <h2 className={stylesLogin.title} >Login</h2>

                <label htmlFor="email" className={stylesLogin.emailLabel}>Email:</label>
                <input type="email" id="email" name="email" className={stylesLogin.email} value={values.email} onChange={changeHandler} />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" className={stylesLogin.password} value={values.password} onChange={changeHandler} />


                {/* <p className={stylesLogin.error}>Password should be at least 6 characters</p> */}
                {error && <p className={stylesLogin.error}>Email or Password don't match</p>}
                <button className={stylesLogin.login} type="submit">Login</button>

                

                <p>Not registered? <Link to='/register' className={stylesLogin.redirect}>Create an account</Link></p>
            </form>
        </div>
    );
}

export default Login;