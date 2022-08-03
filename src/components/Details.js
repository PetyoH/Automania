import styles from "./Details.module.css"

const Details = ({
    car,
    onClose
}) => {

    return (
        <div className={styles.container}>
            <div className={styles.back} onClick={onClose} />
            <div className={styles.infoContainer}>
                <div className={styles.info}>
                    <h2 className={styles.title}>Details</h2>

                    <img src={car.imageUrl} alt="" className={styles.img} />

                    <p className={styles.p}>Brand: {car.brand}</p>
                    <p className={styles.p}>Model: {car.model}</p>
                    <p className={styles.p}>Prize: {car.prize}$</p>
                    <p className={styles.p}>Description: {car.description}</p>


                    <div className={styles.buttons}>
                        <button className={styles.edit}>Edit</button>   
                        <button className={styles.like}>Like</button>                           
                        <button className={styles.delete}>Delete</button>                           
                    </div> 


                    <h3 className={styles.h3}>Comments:</h3>
                    <textarea name="description" rows="6" cols="50" className={styles.textarea} />
                    <button className={styles.comment}>Comment</button>


                    

                </div>
            </div>
        </div>
    );
}

export default Details;