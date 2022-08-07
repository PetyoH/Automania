import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CarContext } from "../../contexts/CarContext";
import stylesCars from "./HomeItem.module.css"

const HomeItem = ({
    car
}) => {

    const { carSelect } = useContext(CarContext);
    const currentCar = carSelect(car._id);

    const navigate = useNavigate();
    const onActionClick = () => {
        navigate(`/details/${car._id}`);
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
                <p>16</p>
                <p>{currentCar.likes.length}</p>

            </div>

        </section>
    );
}

export default HomeItem;