
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import ExpenseTracker from './components/ExpenseTracker';

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/exp-traker' element={<ExpenseTracker/>} />
      </Routes>

    </>
  );
}

export default App;
