import React from 'react';
import { Link } from 'react-router-dom';

const CartWidget = ({quantity}) => {
    return (
        <> 
            <li className="nav-item list-unstyled">
                <Link className="nav-link" to="/Carrito">
                    <i className="fas fa-shopping-cart text-white ml-2" style={{"fontSize": "20px"}}>{quantity}</i>
                </Link>
            </li>
        </>
    );
}

export default CartWidget;

