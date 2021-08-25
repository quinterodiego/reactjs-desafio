import React from 'react';
import ItemCount from './ItemCount';
import { useHistory } from 'react-router-dom';

const divStyle = {
    width: 300
}

const Item = ({ item }) => {

    const history = useHistory();

    const goToItem = () => history.push(`/Detalle/${item.id}`);

    return (
        <>
            <div className="card text-center m-auto" style={divStyle}>
                <img className="card-img-top" src={ item.pictureUrl } alt="Card image cap"></img>
                <div className="card-body">
                    <h5 className="card-title">{ item.title }</h5>
                    <p className="card-text"> DESCRIPCION: { item.description }</p>
                    <p className="card-text">PRECIO: { item.price }</p>
                    <button className="btn btn-dark" onClick={ goToItem }>Ver detalle</button>
                    <br/>
                    <ItemCount item={ item } />
                </div>
            </div>
        </>
    )
}

export default Item;