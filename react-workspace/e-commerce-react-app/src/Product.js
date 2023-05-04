import React from "react"
import {ListItem, ListItemText, InputBase, Checkbox} from '@mui/material'

class Product extends React.Component {
    constructor(props) {
        super(props)
        this.state = {product: props.product}
    }

    render() {
        const product = this.state.product 
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
            </ListItem>
        )
    }
}

export default Product