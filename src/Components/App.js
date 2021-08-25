import React from 'react';
import Router from './../Router/Router';
import './../Assets/index.css';
import { CartProvider } from './../Context/CartContext';

const App = () => {
    return (
        <>
            <CartProvider>
                <Router />
            </CartProvider>
        </>
    );
}

export default App;