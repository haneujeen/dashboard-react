import React from 'react';
import { Paper, Grid, TextField, Button } from '@mui/material';

function AddByTitle({ add }) {
    const [product, setProduct] = useState({
        title: '',
        material: 'not added',
        company: 'not added',
        price: 0,
        username: ''
    });

    const handleChange = (event) => {
        const { value } = event.target;
        console.log("Input value:", value);
        setProduct(prevProduct => ({ ...prevProduct, title: value }));
    }

    const handleClick = () => {
        console.log("Adding product:", product);
        add(product);
        setProduct({
            title: '',
            material: 'not added',
            company: 'not added',
            price: 0,
            username: ''
        });
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleClick();
        }
    }

    return (
        <Paper style={{ margin: 16, padding: 16 }}>
            <Grid container>
                <Grid xs={11} md={11} item style={{ paddingRight: 16 }}>
                    <TextField
                        placeholder="Add product..."
                        fullWidth
                        onChange={handleChange}
                        value={product.title}
                        onKeyPress={handleKeyPress}
                    />
                </Grid>
                <Grid xs={1} md={1} item>
                    <Button
                        fullWidth
                        color='primary'
                        variant='contained'
                        onClick={handleClick}
                        style={{ height: '100%' }}>
                            +
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default AddByTitle;
