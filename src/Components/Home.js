import React from 'react';
import { useHistory } from 'react-router-dom';

const id = 123;

const Home = () => {
    const history = useHistory();

    const goToCategory = () => history.push(`/categorias/${id}`);

    return (
        <>
            <h1>Home</h1>
            <button onClick={goToCategory}>Ir a Categorías</button>
        </>
    );
}

export default Home;