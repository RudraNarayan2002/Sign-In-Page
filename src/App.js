import './App.css';
import Createsession from './components/Createsession';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route index element={ <Login />} />
        <Route path='/home' element={<Home />}/>
        <Route path='/create-session' element={<Createsession />}/>
        <Route path='/dashboard' element={<Dashboard />}/>
        <Route path='/sign-in' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
      </Routes>
      </BrowserRouter>
     {/* <Login /> */}
    </div>
  );
}

export default App;
