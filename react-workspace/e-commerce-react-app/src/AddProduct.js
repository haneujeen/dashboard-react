import React from 'react';
import { Paper, Grid, Textfield, Button } from '@mui/material';

class AddProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = { product: { title: '' } };
    }

    render() {
        return (
        <Paper style={{ margin: 16, padding: 16 }}>
            <Grid container>
                <Grid xs={11} md={11} item style={{ paddingRight: 16 }}>
                    <Textfield placeholder="Add Product" fullWidth/>
                    <Grid xs={1} md={1} item>
                        <Button fullWidth color='secondary' variant='outlined'>
                            +
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
        );
    }
}

export default AddProduct;