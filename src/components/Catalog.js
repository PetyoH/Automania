import stylesCars from "./Catalog.module.css"
import CatalogItem from "./CatalogItem";
import { useState, useEffect } from "react";
import * as carService from "../services/carService"
import Details from "./Details";

const Catalog = () => {

    const [cars, setCars] = useState([]);


    useEffect(() => {
        carService.getAllCars().then(x => setCars(x))
    }, []);

    const [carAction, setCarAction] = useState({ car: null, action: null });


    const carActionClickHandler = (carId, actionType) => {
        carService.getOneCar(carId)
            .then(car => setCarAction({ car, action: actionType }))
    }

    const onClose = () => {
        setCarAction({ car: null, action: null });
    }

    return (
        <>
            {carAction.action === 'details' && <Details car={carAction.car} onClose={onClose} />}

            <div className={stylesCars.content}>
                <img src="../../images/headerRed.jpg" alt="" className={stylesCars.headerImg} />
                <div className={stylesCars.mainImg}></div>
                <div className={stylesCars.cars}>

                    {cars.map(car => <CatalogItem key={car._id} car={car} onActionClick={carActionClickHandler} />)}

                </div>

            </div>

        </>

    );
}

export default Catalog;