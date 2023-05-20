import React from 'react';
import {
    Table, 
    Typography, 
    TableHead, 
    TableRow, 
    TableCell, 
    TableBody, 
    Button,
    createTheme, 
    ThemeProvider,
    Paper,
    Grid
} from '@mui/material';
import { red } from '@mui/material/colors';

const theme = createTheme({
    palette: {
        primary: red,
    },
});

const ProductTable = ({ products, remove }) => {
    const rows = products.map((product) => (
        <TableRow key={product.id}>
        <TableCell>{product.id}</TableCell>
        <TableCell>{product.title}</TableCell>
        <TableCell>{product.material}</TableCell>
        <TableCell>{product.price}</TableCell>
        <TableCell>
            <ThemeProvider theme={theme}>
            <Button
                variant="outlined"
                color="primary"
                size="small"
                onClick={() => remove(product)}
            >
                Delete
            </Button>
            </ThemeProvider>
        </TableCell>
        </TableRow>
    ));

    return (
        <Paper style={{ margin: 16, padding: 16 }}>
            <Typography variant="h6" gutterBottom>
                Product Table
            </Typography>
            <Grid container>
                <Table>
                    <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Title</TableCell>
                        <TableCell>Material</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>{rows}</TableBody>
                </Table>
            </Grid>
        </Paper>
    );
};

export default ProductTable;
