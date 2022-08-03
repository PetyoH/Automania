import stylesCars from "./CatalogItem.module.css"

const CatalogItem = ({
    car,
    onActionClick
}) => {

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
                <i className="fa-solid fa-info" onClick={() => onActionClick(car._id, 'details')}></i>
                <p>16</p>
                <p>30</p>

            </div>

        </section>
    );
}

export default CatalogItem;