import React from 'react';
import './App.css';
import Product from './Product';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [
                {
                    id: 0,
                    title: "Product 1",
                    material: "Wood",
                    price: 1000.0
                },
                {
                    id: 1,
                    title: "Product 2",
                    material: "Metal",
                    price: 2000.0
                }
            ]
        }
    }
    
    render() {
        var products = this.state.products.map(product => (
            <Product product={product}/>
        ))

        return (
            <div className="App">
                {products}
            </div>
        );
    }
}

export default App;
