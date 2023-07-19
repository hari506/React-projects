import './App.css';
import LoginForm from './Component/LoginForm';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import NotFound from './Component/NotFound';
import Signup from './Component/Signup';

function App() {
  return (
    <Routes>
      <Route path='/login' element={localStorage.getItem("username") ? <Navigate to="/" replace/> : <LoginForm />} />
      <Route path='/signup' element={localStorage.getItem("username") ? <Navigate to="/" replace/> : <Signup />} />
      <Route path='/' element={<Home />} />
      <Route path="/404" element={<NotFound />} />
      <Route path='*' to="/404" />
    </Routes>
  );
}

export default App;
