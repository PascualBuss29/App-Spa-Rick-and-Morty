
import './App.css';
import Detail from './components/public/Detail';
import Footer from './components/public/Footer';
import Main from './components/public/Main';
import Navbar from './components/public/Navbar';
import UserForm from './components/public/UserForm';
import LoginForm from './components/public/LoginForm';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path={"/"} element={<Main/>} />
        <Route path={"/detail/:id"} element={<Detail/>} />
        <Route path={"/user-form"} element={<UserForm/>} />
        <Route path={"/login-form"} element={<LoginForm/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
