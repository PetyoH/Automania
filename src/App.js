import { Routes, Route, useLocation } from 'react-router-dom';
import Catalog from './components/Catalog/Catalog';
import Create from './components/Create/Create';
import Details from './components/Details/Details';
import Edit from './components/Edit/Edit';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import { CarProvider } from './contexts/CarContext';
import checkPath from './Util/Util';

function App() {

    const location = useLocation();

    const check = checkPath(location.pathname);


    return (
        <div className={location.pathname === '/' ? 'container backImg' : 'container'}>

            {check ? <Header /> : null}

            <CarProvider>
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/create" element={<Create />} />
                        <Route path="/catalog" element={<Catalog />} />
                        <Route path="/details/:carId" element={<Details />} />
                        <Route path="/edit/:carId" element={<Edit />} />
                        <Route path="/logout" element={<h1>Logout</h1>} />
                    </Routes>
                </main>
            </CarProvider>


            {check ? <Footer /> : null}



        </div>
    );
}

export default App;


