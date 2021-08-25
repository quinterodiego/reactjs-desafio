import React from 'react';
import ItemList from './ItemList';

const ItemListContainer = () => {
    return (
        <>
            <h2 className="text-center p-5">Lista de Items</h2>
            <div className="row">
                <ItemList />
            </div>
        </>
    );
}

export default ItemListContainer;