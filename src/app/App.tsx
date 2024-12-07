import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CashRegister from '../pages/CashRegister';
import './App.css'

const App = () => {
  return (
      <Router>
          <Routes>
              {/* <Route path="/" element={<div>Home Page</div>} /> */}
              <Route path="/" element={<CashRegister />} />
              <Route path="/login" element={ <h1>Login</h1> }/>
          </Routes>
      </Router>
  );
};

export default App
