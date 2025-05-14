import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function ProductDetail() {
    const [state, setState] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setState(data);
            });
    }, [id]); // Added id as a dependency

    return (
        <div>
            <h1>Product Detail</h1>
            <h2>{state.title}</h2>
            <img src={state.image} alt={state.title} />
        </div>
    );
}
