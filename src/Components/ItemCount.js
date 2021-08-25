import React, { useState, useEffect } from 'react';

const ItemCount = ({ item, onAdd }) => {
    const [ stock, setStock] = useState(0);
    const [ initial, setInitial] = useState(0);

    useEffect(() => {
        setStock(item.stock);
        setInitial(item.initial);
    }, [item.stock, item.initial]);

    const onIncrease = () => {
        console.log(item.initial, item.stock);
        if(initial < stock) {
            setInitial( initial + 1 );
        }
    }

    const onDecrease = () => {
        if(initial > 1) {
            setInitial( initial - 1 );
        }
    }

    return (
        <>
            <button className="btn btn-dark m-2" onClick={ onDecrease }>-</button>
            <span>{initial}</span>
            <button className="btn btn-dark m-2" onClick={ onIncrease }>+</button>
            <br/>
            <button className="btn btn-dark" onClick={ () => onAdd(item, initial) }>Agregar al carrito</button>
            <h4 className="alert alert-light" role="alert">
                Stock: {stock}
            </h4>
        </>
    );
}

export default ItemCount;