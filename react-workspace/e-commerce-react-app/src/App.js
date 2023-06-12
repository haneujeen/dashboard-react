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
import SearchProductForm from './SearchProductForm';
import EditProductForm from './EditProductForm';

function App() {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        call("/api/product", "GET", null).then((response) => {
            setProducts(response.data);
            setLoading(false);
        });
    }, []); // This runs only once after the initial render

    const add = (product) => {
        call("/api/product", "POST", product).then((response) =>
            setProducts(response.data)
        );
    };

    const update = (product) => {
            console.log("Updating product: ", product);
            call("/api/product", "PUT", product).then((response) =>
                setProducts(response.data)
            );
        };

    const remove = (product) => {
        call("/api/product", "DELETE", product).then((response) => {
            setProducts(response.data);
        );
    };

    // navbar stuff
    const [tab, setTab] = useState(0);

    // search something stuff
    const search = (title, material, price, company) => {
        return products.filter((product) => {
            return (
                (!title || product.title.toLowerCase().includes(title.toLowerCase())) &&
                (!material || product.material.toLowerCase().includes(material.toLowerCase())) &&
                (!price || product.price === price) &&
                (!company || product.company.toLowerCase().includes(company.toLowerCase()))
            );
        });
    };

    // only updates the UI and doesn't involve any server-side operations
    const onCheck = (id, checked) => {
        setProducts(products.map((product) => {
            if (product.id === id) {
                return { ...product, checked };
            }
            return product;
        }));
    };

    // render loading
    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <NavigationBar setTab={setTab} />
            {
                tab === 0 && <AddByTitle add={add} /> // Add with text field
            }
            {
                tab === 1 && <AddProduct add={add} /> // Add with a form
            }
            {
                tab === 2 &&
                <SearchProduct
                    search={search}
                    products={products}
                    onCheck={onCheck}
                    onRemove={remove}
                    onUpdate={update}
                />
            }
            {
                tab === 3 &&
                <SearchEditProduct
                    search={search}
                    products={products}
                    onCheck={onCheck}
                    onRemove={remove}
                    onUpdate={update}
                />
            }
            {
                tab === 4 &&
                <SearchDeleteProduct
                    search={search}
                        products={products}
                        onCheck={onCheck}
                        onRemove={remove}
                        onUpdate={update}
                />
            }
            <ProductList products={products} remove={remove} update={update} /> // This list will be default and be displayed under all components
        </div>
    )
}

export default App;
