
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { NavBar } from './components/NavBar';
import TiendaApi from './components/tienda/TiendaApi';

function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path={'/tienda'} element={<TiendaApi/>}/>
      </Routes>
    </BrowserRouter>
    <h1>Hola Mundo!</h1>
    </>
  );
}

export default App;
