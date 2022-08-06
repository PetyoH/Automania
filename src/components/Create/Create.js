import { Link } from "react-router-dom";
import stylesCreate from "./Create.module.css";
import * as carService from "../../services/carService"
import { useContext, useState } from "react";
import { CarContext } from "../../contexts/CarContext";

const Create = () => {


    const { carCreate } = useContext(CarContext);

    const [errors, setErrors] = useState({});

    const [values, setValues] = useState({
        brand: '',
        model: '',
        description: '',
        prize: '',
        imageUrl: '',
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

    const minPrize = (e, boundary) => {
        setErrors(state => ({
            ...state,
            [e.target.name]: Number(values[e.target.name]) <= boundary
        }))
    }

    const addRedInput = (con, text) => {
        if (con) {
            return text + ` ${stylesCreate.redInput}`;
        } else {
            return text;
        }
    }

    const isFormValid = !Object.values(errors).some(x => x);


    const onSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const data = Object.fromEntries(formData);

        const errorCount = Object.values(errors).length

        if (isFormValid && errorCount == 5) {
            carService.createCar(data)
                .then(result => {
                    carCreate(result);
                });
        } else {

            let neededKeys = Object.keys(values);

            for (const key in errors) {

                neededKeys = neededKeys.filter(x => x !== key);

            }
            const obj = {}

            for (let i = 0; i < neededKeys.length; i++) {
                obj[neededKeys[i]] = true;
            }

            setErrors(state => ({
                ...state,
                ...obj
            }))

        }

    }

    return (
        <div className={stylesCreate.wrapper}>
            <form onSubmit={onSubmit} className={stylesCreate.form}>
                <Link to="/" className="close"><i className="fa-solid fa-house"></i></Link>
                <h2 className={stylesCreate.title} >Create</h2>

                <label htmlFor="brand" className={stylesCreate.labelBrand}>Brand:</label>
                <input type="text" id="brand" name="brand" className={addRedInput(errors.brand, `${stylesCreate.brand} ${stylesCreate.input}`)}
                    value={values.brand} onChange={changeHandler} onBlur={(e) => minLenght(e, 2)} />
                {errors.brand && <p className={stylesCreate.brandError}>Brand should have at least 2 characters</p>}

                <label htmlFor="model" className={stylesCreate.labelModel}>Model:</label>
                <input type="text" id="model" name="model" className={addRedInput(errors.model, `${stylesCreate.model} ${stylesCreate.input}`)}
                    value={values.model} onChange={changeHandler} onBlur={(e) => minLenght(e, 2)} />
                {errors.model && <p className={stylesCreate.modelError}>Model should have at least 2 characters</p>}

                <label htmlFor="prize" className={stylesCreate.labelPrize}>Prize:</label>
                <input type="number" id="prize" name="prize" className={addRedInput(errors.prize, `${stylesCreate.prize} ${stylesCreate.input}`)}
                    value={values.prize} onChange={changeHandler} onBlur={(e) => minPrize(e, 0)} />
                {errors.prize && <p className={stylesCreate.prizeError}>Prize should be positive number</p>}

                <label htmlFor="imageUrl" className={stylesCreate.labelImage}>ImageUrl:</label>
                <input type="text" id="imageUrl" name="imageUrl" className={addRedInput(errors.imageUrl, `${stylesCreate.imageUrl} ${stylesCreate.input}`)}
                    value={values.imageUrl} onChange={changeHandler} onBlur={(e) => minLenght(e, 6)} />
                {errors.imageUrl && <p className={stylesCreate.imageError}>ImageUrl should have at least 6 characters</p>}

                <label htmlFor="description" className={stylesCreate.labelDescription}>Description:</label>
                <textarea id="description" name="description" rows="6" cols="50"
                    className={addRedInput(errors.description, `${stylesCreate.description} ${stylesCreate.textarea}`)}
                    value={values.description} onChange={changeHandler} onBlur={(e) => minLenght(e, 10)} />
                {errors.description && <p className={stylesCreate.descriptionError}>Description should have at least 10 characters</p>}



                <button className={stylesCreate.create} type="submit">Create</button>
            </form>
        </div>
    );
}

export default Create;