import React, { useState } from 'react';
import { TextField, Grid } from '@mui/material';

function Form() {
    return (
        <Grid item xs={12} sm={6}>
            <TextField
                label="Title"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                fullWidth
            />
        </Grid>
        <Grid item xs={12} sm={6}>
            <TextField
                label="Material"
                value={material}
                onChange={(event) => setMaterial(event.target.value)}
                fullWidth
            />
        </Grid>
        <Grid item xs={12} sm={6}>
            <TextField
                label="Price"
                type="number"
                value={price}
                onChange={(event) => setPrice(event.target.value)}
                fullWidth
            />
        </Grid>
        <Grid item xs={12} sm={6}>
            <TextField
                label="Company"
                value={company}
                onChange={(event) => setCompany(event.target.value)}
                fullWidth
            />
        </Grid>
    );
};

export default Form;
