import { Routes, Route, useLocation } from 'react-router-dom';
import Catalog from './components/Catalog';
import Create from './components/Create';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';



function App() {





   


    const location = useLocation();

    return (
        <div className={location.pathname === '/' ? 'container backImg' : 'container'}>

            {location.pathname === '/' || location.pathname === '/catalog' ? <Header /> : null}

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/create" element={<Create />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/catalog/:carId" element={<h1>CarDetails</h1>} />
                <Route path="/logout" element={<h1>Logout</h1>} />
            </Routes>


            {location.pathname === '/' || location.pathname === '/catalog' ? <Footer /> : null}



        </div>
    );
}

export default App;


// import { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom"


// const useBackground = () => {
//     const { pathname } = useLocation()
//     const [backImg, setBackImg] = useState();

//     useEffect(() => {
//         switch (pathname) {
//             case '/': setBackImg('/');
//                 break;
//             case '/catalog': setBackImg('/catalog');
//                 break;
//             default:
//                 setBackImg('nothing')
//                 break;
//         }
//     }, [])


//     return [backImg];
// }

// export default useBackground;