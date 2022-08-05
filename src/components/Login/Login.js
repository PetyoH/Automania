import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../services/authService";
import stylesLogin from "./Login.module.css"

const Login = () => {


   


    const [storage, setStorage] = useState(sessionStorage.getItem('email'));
    console.log(storage);
    
    const navigate = useNavigate();
    
    const onSubmit = (e) => {

        
        e.preventDefault();
        
        const formData = new FormData(e.target);
        
        const { username, password } = Object.fromEntries(formData);

        
        login(username, password);


        setStorage(sessionStorage.getItem('email'));

        console.log(storage);
        
        navigate('/catalog');
        

    }

    return (
        <div className={stylesLogin.wrapper}>
            <form onSubmit={onSubmit} className={stylesLogin.loginForm}>
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