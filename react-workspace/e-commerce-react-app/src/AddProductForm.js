import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const AddProductForm = ({ add }) => {
    const [title, setTitle] = useState('');
    const [material, setMaterial] = useState('');
    const [price, setPrice] = useState('');
    const [userId, setUserId] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const newProduct = {
        title: title,
        material: material,
        price: price,
        userId: userId
        };
        add(newProduct);
        setTitle('');
        setMaterial('');
        setPrice('');
        setUserId('');
    };

    return (
        <form onSubmit={handleSubmit}>
        <TextField
            required
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
            required
            label="Material"
            value={material}
            onChange={(e) => setMaterial(e.target.value)}
        />
        <TextField
            required
            label="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
        />
        <TextField
            required
            label="User ID"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
        />
        <Button variant="contained" color="primary" type="submit">
            Add Product
        </Button>
        </form>
    );
};

export default AddProductForm;
