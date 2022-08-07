import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import styles from "./Edit.module.css";
import * as carService from "../../services/carService";
import { useContext, useEffect, useState } from "react";
import { CarContext } from "../../contexts/CarContext";
import { AuthContext } from "../../contexts/AuthContext";

const Edit = () => {

    const { carId } = useParams();
    const navigate = useNavigate();
    const {user} = useContext(AuthContext); 

    const { carEdit, carSelect } = useContext(CarContext);

    const currentCar = carSelect(carId);

    useEffect(() => {
        carService.getOneCar(carId)
            .then(result => carEdit(carId, result));
    }, []);

    const { state } = useLocation();
    const { prevPath } = state;



    const [errors, setErrors] = useState({});

    const [values, setValues] = useState({
        brand: currentCar.brand,
        model: currentCar.model,
        prize: currentCar.prize,
        imageUrl: currentCar.imageUrl,
        description: currentCar.description,
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
            return text + ` ${styles.redInput}`;
        } else {
            return text;
        }
    }

    const isFormValid = !Object.values(errors).some(x => x);


    const onSubmit = (e) => {
        e.preventDefault();

        if (isFormValid) {
            const data = Object.fromEntries(new FormData(e.target));

            carService.editCar(carId, data, currentCar.createdAt, user.uid, currentCar.likes, currentCar.comments)
                .then(result => {
                    carEdit(carId, result);
                });

            navigate(`/details/${carId}`, {state: {prevPath}});
        } 
        
    }

    const onActionClick = () => {
        navigate(`/details/${carId}`, {state: {prevPath}});
    }


    return (
        <div className={styles.wrapper}>
            <form onSubmit={onSubmit} className={styles.form}>
                <i onClick={onActionClick} className="fa-solid fa-arrow-left"></i>
                <h2 className={styles.title}>Edit</h2>

                <label htmlFor="brand" className={styles.labelBrand}>Brand:</label>
                <input type="text" id="brand" name="brand"
                    className={addRedInput(errors.brand, `${styles.brand} ${styles.input}`)}
                    value={values.brand} onChange={changeHandler} onBlur={(e) => minLenght(e, 2)}
                />
                {errors.brand && <p className={styles.brandError}>Brand should have at least 2 characters</p>}


                <label htmlFor="model" className={styles.labelModel}>Model:</label>
                <input type="text" id="model" name="model"
                    className={addRedInput(errors.model, `${styles.model} ${styles.input}`)}
                    value={values.model} onChange={changeHandler} onBlur={(e) => minLenght(e, 2)}
                />
                {errors.model && <p className={styles.modelError}>Model should have at least 2 characters</p>}


                <label htmlFor="prize" className={styles.labelPrize}>Prize:</label>
                <input type="number" id="prize" name="prize"
                    className={addRedInput(errors.prize, `${styles.prize} ${styles.input}`)}
                    value={values.prize} onChange={changeHandler} onBlur={(e) => minPrize(e, 0)}
                />
                {errors.prize && <p className={styles.prizeError}>Prize should be positive number</p>}

                <label htmlFor="imageUrl" className={styles.labelImage}>ImageUrl:</label>
                <input type="text" id="imageUrl" name="imageUrl"
                    className={addRedInput(errors.imageUrl, `${styles.imageUrl} ${styles.input}`)}
                    value={values.imageUrl} onChange={changeHandler} onBlur={(e) => minLenght(e, 6)}
                />
                {errors.imageUrl && <p className={styles.imageError}>ImageUrl should have at least 6 characters</p>}

                <label htmlFor="description" className={styles.labelDescription}>Description:</label>
                <textarea id="description" name="description" rows="6" cols="50"
                    className={addRedInput(errors.description, `${styles.description} ${styles.textarea}`)}
                    value={values.description} onChange={changeHandler} onBlur={(e) => minLenght(e, 10)}
                />

                {errors.description && <p className={styles.descriptionError}>Description should have at least 10 characters</p>}

                <button className={styles.edit} type="submit">Edit</button>
            </form>
        </div>
    );
}

export default Edit;