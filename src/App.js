import { Routes, Route, useLocation } from 'react-router-dom';
import Catalog from './components/Catalog/Catalog';
import Create from './components/Create/Create';
import Details from './components/Details/Details';
import Edit from './components/Edit/Edit';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import Register from './components/Register/Register';
import { AuthProvider } from './contexts/AuthContext';
import { CarProvider } from './contexts/CarContext';
import {checkPath} from './Util/Util';

function App() {

    const location = useLocation();

    const check = checkPath(location.pathname);


    return (
        <AuthProvider>
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
                            <Route path="/logout" element={<Logout />} />
                        </Routes>
                    </main>
                </CarProvider>


                {check ? <Footer /> : null}

            </div>
        </AuthProvider>
    );
}

export default App;


