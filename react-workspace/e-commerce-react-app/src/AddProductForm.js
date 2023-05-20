import React, { useState } from 'react';
import { TextField, Button, Grid, Paper, Typography } from '@mui/material';

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
        <Paper style={{ margin: 16, padding: 16 }}>
            <Typography variant="h6" gutterBottom>
                Add Product
            </Typography>
            <form onSubmit={handleSubmit}>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        label="Title"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        label="Material"
                        value={material}
                        onChange={(event) => setMaterial(event.target.value)}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        label="Price"
                        type="number"
                        value={price}
                        onChange={(event) => setPrice(event.target.value)}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        label="User ID"
                        value={userId}
                        onChange={(event) => setUserId(event.target.value)}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button type="submit" variant="outlined" color="primary">
                        Add Product
                    </Button>
                </Grid>
            </Grid>
            </form>
        </Paper>
    );
};

export default AddProductForm;
