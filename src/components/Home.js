import stylesMain from './Home.module.css'

const Home = () => {
    return (
            <main className={stylesMain.main}>
                    <h1 className={stylesMain.title}>Learn everything about cars</h1>
                    <h2 className={stylesMain.h2}>Latest cars:</h2>
                    <div className={stylesMain.latest}></div>
            </main>
    );
}

export default Home;