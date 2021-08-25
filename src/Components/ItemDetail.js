import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import ItemCount from './ItemCount';
import { CartContext } from './../Context/CartContext';

const ItemDetail = ({ item }) => {

    const { pictureUrlDetail, title, price, description } = item;

    const { onAddItem, showAddOn, quantity } = useContext(CartContext);

    const history = useHistory();

    const goToCart = () => history.push(`../Carrito/${quantity}`);

    return (
        <>
            <div className="card text-center m-auto">
                <img className="card-img-top" src={ pictureUrlDetail } alt="Card image cap"></img>
                <div className="card-body">
                    <h5 className="card-title">{ title }</h5>
                    <p className="card-text"> DESCRIPCION: { description }</p>
                    <p className="card-text">PRECIO: { price }</p>
                </div>
                { showAddOn && <ItemCount item={ item } onAdd={ onAddItem }/> }

                { !showAddOn && <h5>Ha agregado { quantity } productos.</h5> }

                { !showAddOn && <button className="btn btn-dark" onClick={goToCart} >Finalizar Compra</button> }
            </div>
        </>
    );
}

export default ItemDetail;