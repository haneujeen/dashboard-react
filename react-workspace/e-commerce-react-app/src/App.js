import React from 'react';
import './App.css';
import Product from './Product';
import { 
    AppBar,
    Toolbar,
    Grid,
    Typography,
    Button,
    Paper, 
    List, 
    Container
} from '@mui/material';
import AddProduct from './AddProduct';
import { call, signout } from './api/ApiService';
import ProductTable from './ProductTable';
import AddProductForm from './AddProductForm';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            products: []
        }
    }

    componentDidMount() {
        call("/api/product", "GET", null).then((response) =>
            this.setState({ products: response.data, isLoading: false })
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

    update = (product) => {
        call("/api/product", "PUT", product).then((response) =>
            this.setState({ products: response.data })
        )
    }

    handleSignOut = () => {
        signout();
    }
    
    render() {
        const navigationBar = (
            <AppBar position="static">
                <Toolbar>
                    <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item>
                        <Typography variant="h6">Home Essentials</Typography>
                    </Grid>
                    <Grid item>
                        <Button color="inherit" onClick={this.handleSignOut}>
                        Sign Out
                        </Button>
                    </Grid>
                    </Grid>
                </Toolbar>
                </AppBar>
        );

        var products = this.state.products.length > 0 && (
            <Paper style={{margin: 16}}>
                <List>
                    {this.state.products.map(product => (
                        <Product key={product.id} product={product} 
                            checked={product.checked}
                            remove={this.remove}
                            update={this.update}/>
                    ))}
                </List>
            </Paper>
        )

        const productPage = (
            <div>
                {navigationBar}
                <Container maxWidth='md'>
                    <AddProduct add={this.add}/>
                    <div>
                        {products}
                    </div>   
                    <ProductTable products={this.state.products} remove={this.remove}/>
                    <AddProductForm add={this.props.add} />
                </Container>
            </div>
        );
        
        const loadingPage = <h1>Loading...</h1>;

        return (
            <div className="App">
                {this.state.isLoading ? loadingPage : productPage}
            </div>
        );
    }
}

export default App;
