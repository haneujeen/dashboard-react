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

class Product extends React.Component {
    constructor(props) {
        super(props)
        const { product } = props
        this.state = { product }
    }

    handleRemove = () => {
        const { product, remove } = this.props
        remove(product.id)
    }

    render() {
        const { product } = this.props
        return(
            <ListItem>
                <Checkbox checked={product.checked}/>
                <ListItemText>
                    <InputBase inputProps={{"aria-label": "naked"}}
                        type="text"
                        id={product.id}
                        name = {product.id}
                        value = {product.title}
                    />
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

export default Product