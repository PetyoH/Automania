import { Link } from "react-router-dom";
import stylesCreate from "./Create.module.css";
import * as carService from "../../services/carService"
import { useContext } from "react";
import { CarContext } from "../../contexts/CarContext";

const Create = () => {


    const { carCreate } = useContext(CarContext);
    


    const onSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const { ...data } = Object.fromEntries(formData);


        carService.createCar(data)
            .then(result => {
                carCreate(result);
            });
   

    }

    return (
        <div className={stylesCreate.wrapper}>
            <form onSubmit={onSubmit} className={stylesCreate.form}>
                <Link to="/" className="close"><i className="fa-solid fa-house"></i></Link>
                <h2 className={stylesCreate.title} >Create</h2>
                <label htmlFor="brand"  className={stylesCreate.labelBrand}>Brand:</label>
                <input type="text" id="brand" name="brand" className={`${stylesCreate.brand} ${stylesCreate.input}`} />

                <label htmlFor="model" className={stylesCreate.labelModel}>Model:</label>
                <input type="text" id="model" name="model" className={`${stylesCreate.model} ${stylesCreate.input}`} />

                <label htmlFor="prize" className={stylesCreate.labelPrize}>Prize:</label>
                <input type="number" id="prize" name="prize" className={`${stylesCreate.prize} ${stylesCreate.input}`} />

                <label htmlFor="imageUrl" className={stylesCreate.labelImage}>ImageUrl:</label>
                <input type="text" id="imageUrl" name="imageUrl" className={`${stylesCreate.imageUrl} ${stylesCreate.input}`} />

                <label htmlFor="description" className={stylesCreate.labelDescription}>Description:</label>
                <textarea id="description" name="description" rows="6" cols="50" className={`${stylesCreate.description} ${stylesCreate.textarea}`}></textarea>

                <button className={stylesCreate.create} type="submit">Create</button>
            </form>
        </div>
    );
}

export default Create;