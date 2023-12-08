
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import Navbar from './global/Navbar';


function App() {
  const location = useLocation();
  const hiddenRoutes = ["/register", "/login"];
  const conditionalRoutes = !hiddenRoutes.includes(location.pathname);
  return (
    <>
    {conditionalRoutes && <Navbar />}
      <Routes>
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/login' element={<Login />} />
      </Routes>

    </>
  );
}

export default App;
