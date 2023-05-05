import React from 'react';
import './App.css';
import Product from './Product';
import { Paper, List, Container } from '@mui/material';
import AddProduct from './AddProduct';
import { call } from './api/ApiService';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        call("/api/product", "GET", null).then((response) =>
            this.setState({ products: response.data })
        )
    }

    add = (product) => {
        call("/api/product", "POST", product).then((response) =>
            this.setState({ products: response.data })
        )
    }

    remove = (product) => {
        call("/api/product", "DELETE", product).then((response) =>
            this.setState({ products: response.data })
        )
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
