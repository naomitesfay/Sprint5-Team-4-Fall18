import React from "react"

class Product extends React.Component {

  render() {
    return (
      <div className="productContainer">
        <img className="productImage" src={this.props.image} alt="" />
        <h2>{this.props.title}</h2>
        <p>Price {this.props.price} kr</p>
        <p>Rating {this.props.rating}</p>
        <button>Buy</button>
      </div>
    )
  }

}

export default Product
