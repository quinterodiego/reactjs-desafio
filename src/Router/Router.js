import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from "./../Components/NavBar";
import ItemListContainer from './../Components/ItemListContainer';
import ItemDetailContainer from './../Components/ItemDetailContainer';
import Categories from '../Components/Categories';
import Cart from './../Components/Cart';
import NotFound from './../Components/NotFound';

const Router = () => {
    return (
        <>
            <BrowserRouter>
                <NavBar />
                <Switch>
                    <Route exact path='/' component={ItemListContainer} />
                    <Route path='/Categorias/:idCategory' component={Categories} />
                    <Route path='/Detalle/:idItem' component={ItemDetailContainer} />
                    <Route path='/Carrito/' component={Cart} />
                    <Route path='*' component={NotFound} />
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default Router;