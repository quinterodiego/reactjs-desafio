import React, { createContext, useState } from 'react';

export const CartContext = createContext({});

export const CartProvider = ({defaultValue = true, children }) => {

    const [ purchases, setPurchases ] = useState([])
    const [ showAddOn, setShowAddOn ] = useState(true);
    const [ quantity, setQuantity ] = useState(0);
    const [ empty, setEmpty ] = useState(true);

    const onAddItem = ( item, qty ) => { 
        setEmpty(false);
        setShowAddOn(false);
        setQuantity(qty);
        setPurchases([...purchases, { item, qty}]);
    }

    const removeItem = ( id ) => { 
        const newItems = purchases.filter(i => i.item.id !== id);
        setPurchases([newItems]);
        isEmpty();
    }

    const isEmpty = () => {
        if(purchases.length < 1) { 
            setEmpty(true);
        }
    }

    return (
        <CartContext.Provider value={ {onAddItem, showAddOn, quantity, purchases, empty, removeItem} }>
            {children}
        </CartContext.Provider>
    );
};