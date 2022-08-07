import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as carService from '../services/carService';


export const CarContext = createContext();

export const CarProvider = ({
    children
}) => {

    const navigate = useNavigate();
    const [cars, setCars] = useState([]);
    // const [latestCars, setLatestCars] = useState([]);

    useEffect(() => {
        carService.getAllCars()
            .then(result => setCars(result.slice()));

            // carService.getLatestCars()
            // .then(result => setLatestCars(result));
    }, []);

    
    useEffect(() => {
        // carService.getLatestCars()
        //     .then(result => setLatestCars(result));
    }, []);



    // fix
    const carCreate = (carData) => {
        // setLatestCars([carData, ...latestCars.slice(latestCars.length - 1)]);
        setCars([carData, ...cars]);
        navigate('/catalog');
    }

    const carDelete = (carId) => {
        // setLatestCars((cars.filter(x => x._id !== carId)));
        return setCars((cars.filter(x => x._id !== carId)));
    }

    const carSelect = (carId) => {
        return cars.find(x => x._id === carId) || {};
    };

    const carDetails = (carId, data) => {
        return cars.map(x => x._id === carId ? data : x);
    }

    const carEdit = (carId, carData) => {
        // setLatestCars(cars.map(x => x._id === carId ? carData : x));
        console.log(carData);
        return setCars(cars.map(x => x._id === carId ? carData : x));
    }

    return (
        <CarContext.Provider value={{
            cars,
            carCreate,
            carDelete,
            carSelect,
            carDetails,
            carEdit,
        }}>
            {children}
        </CarContext.Provider>
    );

}