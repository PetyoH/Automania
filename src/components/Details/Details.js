import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import styles from "./Details.module.css"
import * as carService from "../../services/carService"
import { CarContext } from "../../contexts/CarContext";
import { AuthContext } from "../../contexts/AuthContext";

const Details = () => {
    const navigate = useNavigate();
    const { carId } = useParams();
    const { user } = useContext(AuthContext);
    const { carDelete, carSelect, carDetails, carEdit } = useContext(CarContext);
    const currentCar = carSelect(carId);
    const [isOwner, setIsOwner] = useState(false);
    const [hasLiked, setHasLiked] = useState(false);


    useEffect(() => {
        if (user) {
            setIsOwner(currentCar.ownerId === user.uid);
            if (currentCar.likes.includes(user.uid)) {
                setHasLiked(true);
            }
        }


        carService.getOneCar(carId)
            .then(car => {
                carDetails(carId, car);
            });
    }, []);


    const editHandler = () => {
        navigate(`/edit/${carId}`);
    }

    const deleteHandler = () => {

        carService.deleteCar(carId)
            .then(() => {
                carDelete(carId)
            })
        navigate('/catalog');
    }

  

    const likeHandler = () => {
        
        const currentLikes = [...currentCar.likes, user.uid];

        carService.likeCar(carId, currentLikes)
            .then(likes => carEdit(currentCar._id, {...currentCar, likes}));

        setHasLiked(true);
    }


    const unlikeHandler = () => {

        const currentLikes = currentCar.likes.filter(x => x !== user.uid);


        
        carService.likeCar(carId, currentLikes)
            .then(likes => carEdit(currentCar._id, {...currentCar, likes}));


        setHasLiked(false);
    }

    return (
        <div className={styles.container}>
            <div className={styles.back} />
            <div className={styles.infoContainer}>
                <div className={styles.info}>
                    <Link to='/catalog'><i className="fa-solid fa-xmark"></i></Link>
                    <h2 className={styles.title}>Details</h2>

                    <img src={currentCar.imageUrl} alt="" className={styles.img} />

                    <p className={styles.p}>Brand: {currentCar.brand}</p>
                    <p className={styles.p}>Model: {currentCar.model}</p>
                    <p className={styles.p}>Prize: {currentCar.prize}$</p>
                    <p className={styles.p}>Description: {currentCar.description}</p>


                    <div className={styles.buttons}>

                        {isOwner && <button className={styles.edit} onClick={editHandler}>Edit</button>}
                        {user && (!hasLiked 
                        ? <button className={styles.like} onClick={likeHandler}>Like</button> 
                        : <button className={styles.like} onClick={unlikeHandler}>Unlike</button>)}
                        
                        {isOwner && <button className={styles.delete} onClick={deleteHandler}>Delete</button>}
                    </div>

                    {user && <p className={styles.likes}>{currentCar.likes.length}</p>}

                    <h3 className={styles.h3}>Comments:</h3>
                    {user && <>
                        <textarea name="description" rows="6" cols="50" className={styles.textarea} />
                        <button className={styles.comment}>Comment</button>
                    </>}

                </div>
            </div>
        </div>
    );
}

export default Details;