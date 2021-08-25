import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import products from './../Apis/products';
import ItemDetail from './ItemDetail';

const getItems = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products);
        }, 500)
    });
}

const ItemDetailContainer = () => {

    const [ item, setItem ] = useState([]);
    const { idItem } = useParams();

    useEffect(() => {
        getItems()
            .then(data => setItem(data[Number(idItem) - 1]));
    }, [idItem]);

    const Render = () => {
        return (
            <div className="row mt-5">
                <div className="col-md-4"></div>
                <div className="col-md-4 text-center">
                    <h3>Detalle de Item</h3>
                    <ItemDetail item={item} />
                </div>
                <div className="col-md-4"></div>
            </div>
        );
    }

    return (
        <>
            { Render() }
        </>
    );
}

export default ItemDetailContainer;