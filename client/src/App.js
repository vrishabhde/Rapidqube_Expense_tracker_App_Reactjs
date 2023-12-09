
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import ExpenseTracker from './components/ExpenseTracker';
import Home from './components/Home';
import Navbar from './global/Navbar';
import Expenses from './components/Expenses';

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
        <Route exact path="/expe-tracker" element={<ExpenseTracker/>} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/expenses" element={<Expenses />} />
      </Routes>
    </>
  );
}

export default App;
