import React from 'react';
import './App.css';
import Product from './Product';
import { Paper, List, Container } from '@mui/material';
import AddProduct from './AddProduct';

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

    add = (product) => {
        const {products} = this.state

        product.id = products.length
        product.material = ""
        product.price = 0
        product.checked = false

        products.push(product)

        this.setState({ products })
        console.log(products) // log the updated products array
    }

    remove = (id) => {
        const { products } = this.state;
        const updatedProducts = products.filter(product => product.id !== id);
        this.setState({ products: updatedProducts });
        console.log(updatedProducts); // log the updated products array
    }
    
    render() {
        var products = this.state.products.length > 0 && (
            <Paper style={{margin: 16}}>
                <List>
                    {this.state.products.map(product => (
                        <Product product={product} 
                            checked={product.checked}
                            remove={this.remove}/>
                    ))}
                </List>
            </Paper>
        )

        return (
            <div className="App">
                <Container maxWidth='md'>
                    <AddProduct add={this.add}/>
                    <div>
                        {products}
                    </div>   
                </Container>
            </div>
        );
    }
}

export default App;
