import React from 'react';
import './App.css';
import Product from './Product';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {
                id: 0,
                title: "Product 1",
                material: "Wood",
                price: 1000.0
            }
        }
    }
    
    render() {
        return (
            <div className="App">
                <Product product = {this.state.product}/>
            </div>
        );
    }
}

export default App;
