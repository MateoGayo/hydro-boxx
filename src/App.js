
import './App.css';
import CartWidget from './components/CartWidget';

function App() {
  return (
    <>
    <header>
    <li><a href="../index.html"><img src= "../recursos/Captura de pantalla 2022-08-08 185612.jpg" alt="logo de la empresa"/></a></li>
    <li><a href="../index.html">Inicio</a></li>
    <li><a href="contacto.html">Contacto</a></li>
    <li><a href="tienda.html">Tienda</a></li>
    <li><a href="log-in.html">Iniciar Sesión</a></li>
    <li><a href="registrarse.html">Registrarse</a></li>
    <CartWidget></CartWidget>
    </header>
    <h1>Hola Mundo!</h1>
    </>
  );
}

export default App;
