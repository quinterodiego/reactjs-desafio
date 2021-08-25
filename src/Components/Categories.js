import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import categories from '../Apis/categories';

const getItems = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(categories);
        }, 500)
    });
}

const Categories = () => {

    const [ category, setCategory ] = useState([]);
    const { idCategory } = useParams();

    useEffect(() => {
        getItems()
            .then(data => setCategory(data[Number(idCategory) - 1]));
    }, [idCategory]);

    const Render = () => {
        return (
            <div className="row mt-5">
                <div className="col-md-5"></div>
                <div className="col-md-2 text-center">
                    <h3>{category.name}</h3>
                </div>
                <div className="col-md-5"></div>
            </div>
        );
    }

    return (
        <>
            { Render() }
        </>
    );
}

export default Categories;