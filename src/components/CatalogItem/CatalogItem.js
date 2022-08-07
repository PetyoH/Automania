import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { CarContext } from "../../contexts/CarContext";
import stylesCars from "./CatalogItem.module.css"

const CatalogItem = ({
    car
}) => {

    const { carSelect } = useContext(CarContext);
    const currentCar = carSelect(car._id);

    const navigate = useNavigate();
    const onActionClick = () => {
        //  <Navigate to={`/details/${car._id}`} prevPath='/catalog'/>
        navigate(`/details/${car._id}`, {state: {prevPath: '/catalog'}});
    }

    return (
        <section className={stylesCars.card}>
            <img src={car.imageUrl} alt="" className={stylesCars.img} />
            <h3 className={stylesCars.model}>{car.brand}</h3>
            <div className={stylesCars.text}>
                <p>Details</p>
                <p>Comments</p>
                <p>Likes</p>
            </div>
            <div className={stylesCars.icons}>
                <i className="fa-solid fa-info" onClick={onActionClick}></i>
                <p>{currentCar.comments.length}</p>
                <p>{currentCar.likes.length}</p>

            </div>

        </section>
    );
}

export default CatalogItem;