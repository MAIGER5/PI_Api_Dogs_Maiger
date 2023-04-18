
import './App.css';
import { Nav, Cards, Favorites, FormCreateDog, FormContact, FormLogin, Abaut} from './components/index';
import {Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      
      {/* <Titulo/> */}

      <Routes>

        <Route path='/' element={<Nav/>} />
        <Route path='/abaut' element={<Abaut/>} />
        <Route path='/home' element={<Cards/>} />
        <Route path='/favorites' element={<Favorites/>} />
        <Route path='/createDog' element={<FormCreateDog/>} />
        <Route path='/contact' element={<FormContact/>} />
        <Route path='/login' element={<FormLogin/>} />

      </Routes>
    </div>
  );
}

export default App;
