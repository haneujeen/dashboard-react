import React from 'react';
import { TableRow, TableCell, Button } from '@mui/material';

const ProductTable = ({ products, remove }) => {
    const rows = products.map((product) => (
        <TableRow key={product.id}>
        <TableCell>{product.id}</TableCell>
        <TableCell>{product.title}</TableCell>
        <TableCell>{product.material}</TableCell>
        <TableCell>{product.price}</TableCell>
        <TableCell>
            <Button variant="outlined" color="secondary" onClick={() => remove(product)}>
            Delete
            </Button>
        </TableCell>
        </TableRow>
    ));

    return (
        <div className="product-table">
        <table>
            <caption>Product List</caption>
            <thead>
            <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Material</th>
                <th>Price</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
        </div>
    );
};

export default ProductTable;
