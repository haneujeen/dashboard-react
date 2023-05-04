import React from 'react';
import { Paper, Grid, TextField, Button } from '@mui/material';

class AddProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = { product: { title: '' } };
        this.add = props.add
    }

    onInputChange = (event) => {
        const {value} = event.target
        console.log("Input value:", value)
        this.setState({ product: { title: value } })
    }

    onButtonClick = () => {
        const { product } = this.state;
        console.log("Adding product:", product);
        this.add(product);
        this.setState({ product: { title: '' } });
    }

    enterKeyEventHandler = (event) => {
        if (event.key === 'Enter') {
            this.onButtonClick();
        }
    }

    render() {
        return (
        <Paper style={{ margin: 16, padding: 16 }}>
            <Grid container>
                <Grid xs={11} md={11} item style={{ paddingRight: 16 }}>
                    <TextField 
                        placeholder="Add Product" 
                        fullWidth
                        onChange={this.onInputChange}
                        value={this.state.product.title}
                        onKeyPress={this.enterKeyEventHandler}
                    />
                </Grid>
                <Grid xs={1} md={1} item>
                    <Button 
                        fullWidth 
                        color='secondary' 
                        variant='outlined'
                        onClick={this.onButtonClick}>
                            +
                    </Button>
                </Grid>
            </Grid>
        </Paper>
        );
    }
}

export default AddProduct;