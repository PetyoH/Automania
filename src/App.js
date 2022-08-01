import { Routes, Route, useLocation } from 'react-router-dom';
import Catalog from './components/Catalog';
import Create from './components/Create';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import { collection, doc, getDocs } from "firebase/firestore";
import db from "./firebase";
import { useEffect, useState } from 'react';


function App() {   

    const [cars, setCars] = useState([]);

    const location = useLocation();

    useEffect(() => {
        getAllCars().then(x => setCars[x])
    }, [])



    return (
        <div className={location.pathname === '/' ? 'container backImg' : 'container'}>

            {location.pathname === '/' || location.pathname === '/catalog' ? <Header /> : null}

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/create" element={<Create />} />
                <Route path="/catalog" element={<Catalog cars={cars} />} />
                <Route path="/catalog/:carId" element={<h1>CarDetails</h1>} />
                <Route path="/logout" element={<h1>Logout</h1>} />
            </Routes>


            {location.pathname === '/' || location.pathname === '/catalog' ? <Footer /> : null}



        </div>
    );
}

export default App;


const getAllCars = async () => {
    const querySnapshot = await getDocs(collection(db, "cars"));

    return querySnapshot.docs.map(doc => ({
        _id : doc.id,
        ...(doc.data())
    }));
}

