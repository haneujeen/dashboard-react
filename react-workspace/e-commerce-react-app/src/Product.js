import React from "react"

class Product extends React.Component {
    render() {
        return(
            <div className="Product">
                <input type="checkbox" id="product0" name="product0" value="product0"/>
                <label for="product0">Product 1</label>
            </div>
        )
    }
}

export default Product