import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import CashRegister from '../pages/CashRegister';
import './App.css'

const App = () => {
  return (
    <Provider store={store}>
      <Router>
          <Routes>
              {/* <Route path="/" element={<div>Home Page</div>} /> */}
              <Route path="/" element={<CashRegister />} />
              <Route path="/login" element={ <h1>Login</h1> }/>
          </Routes>
      </Router>
    </Provider>
  );
};

export default App
