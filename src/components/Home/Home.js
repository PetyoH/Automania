import stylesMain from './Home.module.css'
import HomeItem from '../HomeItem/HomeItem';
import * as carService from '../../services/carService'
import { useContext, useEffect, useState } from 'react';
import { CarContext } from '../../contexts/CarContext';

const Home = () => {

    const [latestCars, setLatestCars] = useState([]);


    useEffect(() => {
        carService.getLatestCars()
            .then(result => setLatestCars(result));
    }, []);

    

    return (
        <main className={stylesMain.main}>
            <h1 className={stylesMain.title}>Learn everything about cars</h1>
            <h2 className={stylesMain.h2}>Latest cars:</h2>
            <div className={stylesMain.latest}>

                {latestCars.map(car => <HomeItem key={car._id} car={car} />)} 
                {latestCars.length < 0 ? <h1 className={stylesMain.noCars}>No cars yet</h1> : null}
               
            </div>
        </main>
    );
}

export default Home;

