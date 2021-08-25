import React, { useState, useEffect } from 'react';
import Item from './Item';
import productsDB from './../Apis/products';

const getData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productsDB);
        }, 500);
    });
}

const ItemList = () => {

    const [ products, setProducts] = useState([]);

    useEffect(async () => {
        var productTemp = await(getData());
        setProducts(productTemp);
    }, [])

    const renderList = () => {
        return products.map(p => <Item key={p.id} item={p}/>);
    }

    return (
        <>
            { renderList() } 
        </>
    )
}

export default ItemList;