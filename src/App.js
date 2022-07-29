import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';


function App() {
  return (
    <div className="container">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<h1>Login</h1>} />
            <Route path="/register" element={<h1>Register</h1>} />
            <Route path="/create" element={<h1>Create</h1>} />
            <Route path="/catalog" element={<h1>Catalog</h1>} />
            <Route path="/catalog/:carId" element={<h1>CarDetails</h1>} />
        </Routes>
    </div>
  );
}

export default App;
