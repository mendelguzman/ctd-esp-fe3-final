import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextGlobal } from '../Components/utils/global.context';
import '../App.css'; 

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ContextGlobal); 

  return (
    <nav className={theme === 'dark' ? 'dark-theme' : 'light-theme'}>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/contact">Contacto</Link>
        </li>
        <li>
          <Link to="/favs">Favoritos</Link>
        </li>
        <li>
          <button onClick={toggleTheme}>
            {theme === 'light' ? 'Cambiar a oscuro' : 'Cambiar a claro'}
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;