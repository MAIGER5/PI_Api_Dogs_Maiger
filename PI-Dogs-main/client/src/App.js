
import './App.css';
import { FormCreateDog, FormContact, FormLogin, Abaut, Detail, Home} from './components/index';
import {Routes, Route, useLocation} from 'react-router-dom'



function App() {
   //HOOKS
  //  const {pathname} = useLocation();
  return (
    <div className="App">
      
      {/* {pathname === "/" && <Nav/>} */}

      <Routes>


        <Route path='/' element={<Abaut/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/createDog' element={<FormCreateDog/>} />
        <Route path='/contact' element={<FormContact/>} />
        <Route path='/detail/:id' element={<Detail/>} />

      </Routes>
    </div>
  );
}

export default App;
