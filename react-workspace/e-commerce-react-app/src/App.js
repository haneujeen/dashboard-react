import React from 'react';
import './App.css';
import Product from './Product';
import { Paper, List } from '@mui/material';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [
                {
                    id: 0,
                    title: "Product 1",
                    material: "Wood",
                    price: 1000.0,
                    checked: true
                },
                {
                    id: 1,
                    title: "Product 2",
                    material: "Metal",
                    price: 2000.0,
                    checked: false
                }
            ]
        }
    }
    
    render() {
        var products = this.state.products.length > 0 && (
            <Paper style={{margin: 16}}>
                <List>
                    {this.state.products.map(product => (
                        <Product product={product} checked={product.checked}/>
                    ))}
                </List>
            </Paper>
        )

        return (
            <div className="App">
                {products}
            </div>
        );
    }
}

export default App;
