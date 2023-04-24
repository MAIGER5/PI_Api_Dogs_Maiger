
import './App.css';
import { Nav, Cards, Favorites, FormCreateDog, FormContact, FormLogin, Abaut, Detail, Home} from './components/index';
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
        <Route path='/favorites' element={<Favorites/>} />
        <Route path='/createDog' element={<FormCreateDog/>} />
        <Route path='/contact' element={<FormContact/>} />
        <Route path='/login' element={<FormLogin/>} />
        <Route path='/detail/:id' element={<Detail/>} />

      </Routes>
    </div>
  );
}

export default App;
