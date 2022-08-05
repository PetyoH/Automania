import { Link, useNavigate } from "react-router-dom";
import { register } from "../../services/authService";
import stylesRegister from "./Register.module.css"

const Register = () => {

    const navigate = useNavigate();


    const onSubmit = async (e) => {

        e.preventDefault();

        const formData = new FormData(e.target);

        const { username, password, "confirm-password": confirm_password } = Object.fromEntries(formData);

        if (password === confirm_password) {
            register(username, password);
            navigate('/');
        }

    }




    return (
        <div className={stylesRegister.wrapper}>
            <form onSubmit={onSubmit} className={stylesRegister.registerForm}>
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