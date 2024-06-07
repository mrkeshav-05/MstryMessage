import Login from './pages/login/Login.jsx'
import Signup from './pages/signup/SignUp.jsx';
import Home from './pages/home/Home.jsx';
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { useAuthContext } from './context/AuthContext.jsx';
import 'react-toastify/dist/ReactToastify.css';
function App() {

  const { authUser } = useAuthContext();

  return (
    <div className='p-4 h-screen flex items-center justify-center' >
      <Routes>
        <Route path='/' element={authUser ? <Home /> : <Navigate to='/login' />} />
        <Route path='/login' element={authUser ? <Navigate to="/" /> : <Login />} />
        <Route path='/signup' element={authUser ? <Navigate to="/" /> : <Signup />} />
      </Routes>
      
      <ToastContainer/>


    </div>
  )
}

export default App
