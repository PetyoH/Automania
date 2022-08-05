import { Link, useNavigate, useParams } from "react-router-dom";
import styles from "./Edit.module.css";
import * as carService from "../../services/carService";
import { useContext, useEffect, useState } from "react";
import { CarContext } from "../../contexts/CarContext";

const Edit = () => {

    const {carId} = useParams();
    const navigate = useNavigate();

    const { carEdit, carSelect } = useContext(CarContext);

    const currentCar = carSelect(carId);
    
    useEffect(() => {
        carService.getOneCar(carId)
            .then(result => carEdit(carId, result));
    }, []);

    const onSubmit = (e) => {
        e.preventDefault();

        const data = Object.fromEntries(new FormData(e.target));

        carService.editCar(carId, data, currentCar.createdAt)
            .then(result => {
                carEdit(carId, result);
            });

        navigate(`/details/${carId}`);
    }


    return (
        <div className={styles.wrapper}>
            <form onSubmit={onSubmit} className={styles.form}>
                <Link to={`/details/${carId}`} className="close"><i className="fa-solid fa-arrow-left"></i></Link>
                <h2 className={styles.title}>Edit</h2>
                <label htmlFor="brand"  className={styles.labelBrand}>Brand:</label>
                <input type="text" id="brand" name="brand" defaultValue={currentCar.brand} className={`${styles.brand} ${styles.input}`} />

                <label htmlFor="model" className={styles.labelModel}>Model:</label>
                <input type="text" id="model" name="model" defaultValue={currentCar.model} className={`${styles.model} ${styles.input}`} />

                <label htmlFor="prize" className={styles.labelPrize}>Prize:</label>
                <input type="number" id="prize" name="prize" defaultValue={currentCar.prize} className={`${styles.prize} ${styles.input}`} />

                <label htmlFor="imageUrl" className={styles.labelImage}>ImageUrl:</label>
                <input type="text" id="imageUrl" name="imageUrl" defaultValue={currentCar.imageUrl} className={`${styles.imageUrl} ${styles.input}`} />

                <label htmlFor="description" className={styles.labelDescription}>Description:</label>
                <textarea id="description" name="description" rows="6" cols="50" defaultValue={currentCar.description} className={`${styles.description} ${styles.textarea}`}></textarea>

                <button className={styles.edit} type="submit">Edit</button>
            </form>
        </div>
    );
}

export default Edit;