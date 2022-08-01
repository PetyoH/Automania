// import { Link } from "react-router-dom";
import stylesCars from "./Catalog.module.css"

const Catalog = ({
    cars
}) => {
    return (
        <div className={stylesCars.content}>
            <img src="../../images/headerRed.jpg" alt="" className={stylesCars.headerImg} />
            <div className={stylesCars.mainImg}></div>
            <div className={stylesCars.cars}>
                <section className={stylesCars.card}>
                    <img src="../../images/blackCar.jpg" alt="" className={stylesCars.img} />
                    <h3 className={stylesCars.model}>Model</h3>
                    <div className={stylesCars.text}>
                        <p>Details</p>
                        <p>Comments</p>
                        <p>Likes</p>
                    </div>
                    <div className={stylesCars.icons}>
                        <i className="fa-solid fa-info"></i>
                        <p>16</p>
                        <p>30</p>

                    </div>

                </section>
                <section className={stylesCars.card}>
                    <img src="../../images/blackCar.jpg" alt="" className={stylesCars.img} />
                    <h3 className={stylesCars.model}>Model</h3>

                    <div className={stylesCars.text}>
                        <p>Details</p>
                        <p>Comment</p>
                        <p>Like</p>
                    </div>
                    <div className={stylesCars.icons}>
                        <i className="fa-solid fa-info"></i>
                        <i className="fa-solid fa-comment"></i>
                        <i className="fa-solid fa-thumbs-up"></i>

                    </div>

                </section>
                <section className={stylesCars.card}>
                    <img src="../../images/blackCar.jpg" alt="" className={stylesCars.img} />
                    <h3 className={stylesCars.model}>Model</h3>


                </section>
                <section className={stylesCars.card}>
                    <img src="../../images/blackCar.jpg" alt="" className={stylesCars.img} />
                    <h3 className={stylesCars.model}>Model</h3>


                </section>
                <section className={stylesCars.card}>
                    <img src="../../images/blackCar.jpg" alt="" className={stylesCars.img} />
                    <h3 className={stylesCars.model}>Model</h3>


                </section>
                <section className={stylesCars.card}>
                    <img src="../../images/blackCar.jpg" alt="" className={stylesCars.img} />
                    <h3 className={stylesCars.model}>Model</h3>
                    <div className={stylesCars.text}>
                        <p>Details</p>
                        <p>Comments</p>
                        <p>Likes</p>
                    </div>
                    <div className={stylesCars.icons}>
                        <i className="fa-solid fa-info"></i>
                        <p>16</p>
                        <p>30</p>

                    </div>

                </section>
                <section className={stylesCars.card}>
                    <img src="../../images/blackCar.jpg" alt="" className={stylesCars.img} />
                    <h3 className={stylesCars.model}>Model</h3>
                    <div className={stylesCars.text}>
                        <p>Details</p>
                        <p>Comments</p>
                        <p>Likes</p>
                    </div>
                    <div className={stylesCars.icons}>
                        <i className="fa-solid fa-info"></i>
                        <p>16</p>
                        <p>30</p>

                    </div>

                </section>
                <section className={stylesCars.card}>
                    <img src="../../images/blackCar.jpg" alt="" className={stylesCars.img} />
                    <h3 className={stylesCars.model}>Model</h3>

                    <div className={stylesCars.text}>
                        <p>Details</p>
                        <p>Comment</p>
                        <p>Like</p>
                    </div>
                    <div className={stylesCars.icons}>
                        <i className="fa-solid fa-info"></i>
                        <i className="fa-solid fa-comment"></i>
                        <i className="fa-solid fa-thumbs-up"></i>

                    </div>

                </section>
                <section className={stylesCars.card}>
                    <img src="../../images/blackCar.jpg" alt="" className={stylesCars.img} />
                    <h3 className={stylesCars.model}>Model</h3>

                    <div className={stylesCars.text}>
                        <p>Details</p>
                        <p>Comment</p>
                        <p>Like</p>
                    </div>
                    <div className={stylesCars.icons}>
                        <i className="fa-solid fa-info"></i>
                        <i className="fa-solid fa-comment"></i>
                        <i className="fa-solid fa-thumbs-up"></i>

                    </div>

                </section>
                
            </div>

        </div>
    );
}

export default Catalog;