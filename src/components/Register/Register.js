import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import stylesRegister from "./Register.module.css";
import * as userService from "../../services/authService"

const Register = () => {

    const navigate = useNavigate();

    const { user } = useContext(AuthContext);


    const [errors, setErrors] = useState({});

    const [values, setValues] = useState({
        email: '',
        password: '',
        'confirm-password': '',
    });

    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    const minLenght = (e, boundary) => {
        setErrors(state => ({
            ...state,
            [e.target.name]: values[e.target.name].length < boundary
        }))
    }

    const onSubmit = async (e) => {


        e.preventDefault();

        const formData = new FormData(e.target);

        const { email, password, "confirm-password": confirm_password } = Object.fromEntries(formData);

        if (password === confirm_password) {
            if (!(errors.email && errors.password)) {
                try {
                    if (!user) {
                        await userService.register(email, password);
                        navigate('/');
                    }
                } catch (error) {
                    alert(error.message);
                }
            }
        } else {
            setErrors(state => ({
                ...state,
                match: true
            }));
        }




    }




    return (
        <div className={stylesRegister.wrapper}>
            <form onSubmit={onSubmit} className={stylesRegister.registerForm}>
                <Link to="/" className="close"><i className="fa-solid fa-house"></i></Link>
                <h2 className={stylesRegister.title}>Register</h2>

                <label htmlFor="email" className={stylesRegister.emailLabel}>Email:</label>
                <input type="email" id="email" name="email"
                    className={errors.email ? `${stylesRegister.borderRed} ${stylesRegister.email}` : stylesRegister.email}
                    value={values.email} onChange={changeHandler} onBlur={(e) => minLenght(e, 3)} />

                {errors.email && <p className={stylesRegister.emailError}>Email should be at least 3 characters</p>}

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password"
                    className={errors.password ? `${stylesRegister.password} ${stylesRegister.borderRed}` : stylesRegister.password}
                    value={values.password} onChange={changeHandler} onBlur={(e) => minLenght(e, 6)} />

                {errors.password && <p className={stylesRegister.pasError}>Password should be at least 6 characters</p>}


                <label htmlFor="confirm-password" className={stylesRegister.confirm}>Confirm password:</label>
                <input type="password" id="confirm-password" name="confirm-password"
                    className={stylesRegister['confirm-password']}
                    value={values['confirm-password']} onChange={changeHandler} />



                {errors.match && <p className={stylesRegister.match}>Passwords don't match</p>}

                <button className={stylesRegister.register} type="submit">Register</button>
                <p>Have already an account? <Link to='/login' className={stylesRegister.redirect}>Login here</Link></p>
            </form>
        </div>
    );
}

export default Register;