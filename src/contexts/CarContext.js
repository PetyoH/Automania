import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as carService from '../services/carService';


export const CarContext = createContext();

export const CarProvider = ({
    children
}) => {

    const navigate = useNavigate();
    const [cars, setCars] = useState([]);

    useEffect(() => {
        carService.getAllCars()
            .then(result => setCars(result.slice()))
    }, []);

    // const carLatest = () => {
    //     return 
    // }

    const carCreate = (carData) => {
        setCars([...cars, carData]);
        navigate('/catalog');
    }

    const carDelete = (carId) => {
        return setCars((cars.filter(x => x._id !== carId)));
    }

    const carSelect = (carId) => {
        return cars.find(x => x._id === carId) || {};
    };

    const carDetails = (carId, data) => {
        return cars.map(x => x._id === carId ? data : x);
    }

    const carEdit = (carId, carData) => {
        return setCars(cars.map(x => x._id === carId ? carData : x));
    }


    return (
        <CarContext.Provider value={{
            cars,
            carCreate,
            carDelete,
            carSelect,
            carDetails,
            carEdit
        }}>
            {children}
        </CarContext.Provider>
    );

}