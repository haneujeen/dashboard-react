import React, { useState } from 'react';
import {
    TextField, Button, Grid, Paper, Typography, List,
} from '@mui/material';
import ProductEditor from './ProductEditor';

const EditProductForm = ({ search, filteredProducts, remove, update }) => {
    const [searchTitle, setSearchTitle] = useState('');
    const [searchMaterial, setSearchMaterial] = useState('');
    const [searchPrice, setSearchPrice] = useState('');
    const [searchUserId, setSearchUserId] = useState('');

    const handleRemove = (product) => {
        remove(product);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        search(searchTitle, searchMaterial, searchPrice, 'edit');
    };

    return (
        <Paper style={{ margin: 16, padding: 16 }}>
            <Typography variant="h6" gutterBottom>
                Edit Products
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Title"
                            value={searchTitle}
                            onChange={(event) => setSearchTitle(event.target.value)}
                            fullWidth
                            required
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Material"
                            value={searchMaterial}
                            onChange={(event) => setSearchMaterial(event.target.value)}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Price"
                            type="number"
                            value={searchPrice}
                            onChange={(event) => setSearchPrice(event.target.value)}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="User ID"
                            value={searchUserId}
                            onChange={(event) => setSearchUserId(event.target.value)}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button type="submit" variant="outlined" color="primary">
                            Search
                        </Button>
                    </Grid>
                </Grid>
            </form>
            <List>
                {filteredProducts.map((product) => (
                    <ProductEditor
                        key={product.id}
                        product={product}
                        update={update}
                        remove={handleRemove}
                    />
                ))}
            </List>
        </Paper>
    );
};

export default EditProductForm;
