import stylesCars from "./Catalog.module.css"
import CatalogItem from "../CatalogItem/CatalogItem";
import { useContext } from "react";

import { CarContext } from "../../contexts/CarContext";

const Catalog = () => {

    const { cars } = useContext(CarContext); 

    return (
        <>
            <div className={stylesCars.content}>
                <img src="../../images/headerRed.jpg" alt="" className={stylesCars.headerImg} />
                <div className={stylesCars.mainImg} />
                <div className={stylesCars.cars}>

                    {cars?.map(car => <CatalogItem key={car._id} car={car} />)}

                </div>
            </div>
        </>
    );
}

export default Catalog;