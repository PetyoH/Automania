import stylesMain from './Home.module.css'

const Home = () => {
    return (
        <main className={stylesMain.main}>
            <h1 className={stylesMain.title}>Learn everything about cars</h1>
            <h2 className={stylesMain.h2}>Latest cars:</h2>
            <div className={stylesMain.latest}>
                <section className={stylesMain.card}>
                    <img src="../../images/blackCar.jpg" alt="" className={stylesMain.img} />
                    <h3 className={stylesMain.model}>Model</h3>
                    <div className={stylesMain.text}>
                        <p>Details</p>
                        <p>Comments</p>
                        <p>Likes</p>
                    </div>
                    <div className={stylesMain.icons}>
                        <i className="fa-solid fa-info"></i>
                        <p>16</p> 
                        <p>30</p>

                    </div>

                </section>
                <section className={stylesMain.card}>
                    <img src="../../images/blackCar.jpg" alt="" className={stylesMain.img} />
                    <h3 className={stylesMain.model}>Model</h3>

                    <div className={stylesMain.text}>
                        <p>Details</p>
                        <p>Comment</p>
                        <p>Like</p>
                    </div>
                    <div className={stylesMain.icons}>
                        <i className="fa-solid fa-info"></i>
                        <i className="fa-solid fa-comment"></i>
                        <i className="fa-solid fa-thumbs-up"></i>   

                    </div>

                </section>
                <section className={stylesMain.card}>
                    <img src="../../images/blackCar.jpg" alt="" className={stylesMain.img} />
                    <h3 className={stylesMain.model}>Model</h3>


                </section>
                <section className={stylesMain.card}>
                    <img src="../../images/blackCar.jpg" alt="" className={stylesMain.img} />
                    <h3 className={stylesMain.model}>Model</h3>


                </section>
                <section className={stylesMain.card}>
                    <img src="../../images/blackCar.jpg" alt="" className={stylesMain.img} />
                    <h3 className={stylesMain.model}>Model</h3>


                </section>
            </div>
        </main>
    );
}

export default Home;

