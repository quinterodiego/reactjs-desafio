import React, { useContext } from 'react';
import { CartContext } from './../Context/CartContext';
import CartDetail from './CartDetail';

const Cart = () => {

    const { purchases, empty } = useContext(CartContext);
    return (
        <div className="text-center">
            <h1>Carrito de Compras</h1>
            { !empty && purchases.map((i, index) => <CartDetail key={index} item={i.item} qty={i.qty} pos={i.id}/>)
            }
            <br />
            <button className="btn btn-dark m-auto">Pagar</button>
        </div>
    );
}

export default Cart;