import './App.css';
import { Routes, Route } from "react-router-dom";
import Footer from './components/public/Footer';
import Navbar from './components/public/Navbar';
import { Main } from './components/public/Main';
import Detail from './components/public/Detail';
import UserForm from './components/public/UserForm';

function App() {
  return (
    <div>

      <Navbar/>
      
      <Routes>
        <Route exact path={"/"} element={<Main/>} />
        <Route path={"/details/:id"} element={<Detail/>} />
        <Route path={"/user-form"} element={<UserForm />} />
      </Routes>

      <Footer/>

    </div>
  );
}

export default App;

