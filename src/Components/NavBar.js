import React from 'react';
import { NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {

    return (
        <>
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand text-white" href="/">DO SAN</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <NavLink className="nav-link" activeClassName="activeRoute" to="/">Home <span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <NavLink className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" activeClassName="activeRoute" to="#">Categorías</NavLink>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <NavLink className="dropdown-item" to="/Categorias/1">Categoria 1</NavLink>
                                <NavLink className="dropdown-item" to="/Categorias/2">Categoria 2</NavLink>
                                <NavLink className="dropdown-item" to="/Categorias/3">Categoria 3</NavLink>
                                <NavLink className="dropdown-item" to="/Categorias/4">Categoria 4</NavLink>
                            </div>
                        </li>
                        <li className="nav-item">
                            <CartWidget />
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default NavBar;