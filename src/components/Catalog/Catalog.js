import stylesCars from "./Catalog.module.css"
import CatalogItem from "../CatalogItem/CatalogItem";
import { useContext } from "react";

import { CarContext } from "../../contexts/CarContext";

const Catalog = () => {

    const { cars } = useContext(CarContext); 

    console.log(cars);

    return (
        <>
            <div className={stylesCars.content}>
                <img src="../../images/headerRed.jpg" alt="" className={stylesCars.headerImg} />
                <div className={stylesCars.mainImg} />
                <div className={stylesCars.cars}>

                    {cars?.map(car => <CatalogItem key={car._id} car={car} />)}
                    {!cars ? <h1 className={stylesCars.noCars}>No cars yet</h1> : null}

                </div>
            </div>
        </>
    );
}

export default Catalog;