import React from "react";
import {
    ListItem, 
    ListItemText, 
    InputBase, 
    Checkbox,
    ListItemSecondaryAction,
    IconButton
} from '@mui/material';
import { DeleteOutlined } from '@mui/icons-material';

class ProductEditor extends React.Component {
    constructor(props) {
        super(props)
        const { product } = props
        this.state = { product, readOnly: true }
        this.update = props.update
    }
    
    handleRemove = () => {
        const { product, remove } = this.props
        remove(product)
    }

    handleClick = () => {
        this.setState({ readOnly: false }, () => {
            console.log('ListItemText clicked, readOnly set to', this.state.readOnly)
        })
    }

    handleEdit = (event) => {
        const { product } = this.state
        product.title = event.target.value
        console.log('Updated product:', product)
        this.setState({ product })
    }

    handleEditMaterial = (event) => {
        const { product } = this.state
        product.material = event.target.value
        console.log('Updated product:', product)
        this.setState({ product })
    }

    handleEditPrice = (event) => {
        const { product } = this.state
        product.price = event.target.value
        console.log('Updated product:', product)
        this.setState({ product })
    }

    handleSave = (event) => {
        if (event.key === 'Enter') {
            this.setState({ readOnly: true })
            // Call the 'update' method passed in props with the updated product object
            this.update(this.state.product)
        }
    }

    handleCheck = (event) => {
        const { product } = this.state
        product.checked = !product.checked
        this.setState({ product: product })

        // Call the 'update' method passed in props with the updated product object
        this.update(product)
    }

    render() {
        const { product } = this.state
        return(
            <ListItem>
                <Checkbox checked={product.checked}
                    onChange={this.handleCheck}
                />
                <ListItemText>
                    <InputBase inputProps={{"aria-label": "naked",
                        readOnly: this.state.readOnly
                    }}
                        type="text"
                        id={product.id}
                        name = {product.id}
                        value = {product.title}
                        onClick={this.handleClick}
                        onChange={this.handleEdit}
                        onKeyPress={this.handleSave}
                    />
                </ListItemText>
                <ListItemText>
                    <InputBase inputProps={{"aria-label": "naked",
                        readOnly: this.state.readOnly
                    }}
                        type="text"
                        id={product.id}
                        name = {product.id}
                        value = {product.material}
                        onClick={this.handleClick}
                        onChange={this.handleEditMaterial}
                        onKeyPress={this.handleSave}
                    />
                </ListItemText>
                <ListItemText>
                    <InputBase inputProps={{"aria-label": "naked",
                        readOnly: this.state.readOnly
                    }}
                        type="text"
                        id={product.id}
                        name = {product.id}
                        value = {product.price}
                        onClick={this.handleClick}
                        onChange={this.handleEditPrice}
                        onKeyPress={this.handleSave}
                    />
                </ListItemText>
                <ListItemText>
                    {product.userId ? product.userId : 'temporary user id'}
                </ListItemText>
                <ListItemSecondaryAction>
                    <IconButton 
                        edge="end" 
                        aria-label="delete"
                        onClick={this.handleRemove}>
                        <DeleteOutlined />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        )
    }
}

export default ProductEditor