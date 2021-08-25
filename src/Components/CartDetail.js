import React, { useContext } from 'react';
import { CartContext } from './../Context/CartContext';

const CartDetail = ({ item, qty, pos }) => {

    const { removeItem } = useContext(CartContext);

    return (
        <>
            <div className="card text-center m-auto w-50" key={ item.id }>
                <div className="row">
                    <img className="card-img-top col-md-6" src={ item.pictureUrlDetail } alt="Card image cap"></img>
                    <div className="card-body col-md-6 d-flex flex-column align-items-center justify-content-center">
                        <h5 className="card-title">{ item.title }</h5>
                        <p className="card-text">${ item.price }</p>
                        <p className="card-text">Cantindad: {qty}</p>
                        <i className="far fa-trash-alt btn" onClick={ () => removeItem(pos) }></i>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CartDetail;