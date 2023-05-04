import React from "react"

class Product extends React.Component {
    constructor(props) {
        super(props)
        this.state = {product: props.product}
    }

    render() {
        return(
            <div className="Product">
                <input type="checkbox"
                    id={this.state.product.id}
                    name={this.state.product.title}
                    checked="true"
                />
                <label id={this.state.product.id}>
                    {this.state.product.title}, 
                    {this.state.product.material}, 
                    {this.state.product.price}
                </label>
            </div>
        )
    }
}

export default Product