import { Routes, Route, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';



function App() {

  const location = useLocation();


  return (
    <div className={location.pathname === "/" ? 'container backImg' : 'container'}> 

        {location.pathname === '/' || location.pathname === '/catalog' ? <Header /> : null}

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<h1>Register</h1>} />
            <Route path="/create" element={<h1>Create</h1>} />
            <Route path="/catalog" element={<h1>Catalog</h1>} />
            <Route path="/catalog/:carId" element={<h1>CarDetails</h1>} />
        </Routes>


        {location.pathname === '/' || location.pathname === '/catalog' ? <Footer /> : null}

        

    </div>
  );
}

export default App;
