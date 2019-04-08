import React, {Component} from 'react';
import axios from'axios';

class ProductDetails extends Component{
    state ={
        details: null
    }

    async componentDidMount(){
            this.getDetails()
    }

    async getDetails(){
        const {params} = this.props.match;
        //Call server to get product details

        const resp = await axios.get(`/api/getproductdetails.php?productId=${params.product_id}`);

        if(resp.data.success){
            this.setState({
                details: resp.data.productInfo
            });
        } else {
            this.setState({
                details: false
            });
        }

        
    }

    render(){
        console.log('product details:', this.state.details);

        const {details} = this.state;

        if(details === null){
            return <h1>Loading...</h1> //make some fancy loading animation
        } else if(!details){
            return <h1 className="center">No Product Found</h1>
        }

        const {description='No description available', name, images, price} = details;

        return(
            <div className="product-details">
                <div className="itemContainer">
                    <div className="imageContainer">
                        <img className="itemImage" src={`../../dist/${images[0]}`}  alt=""/>
                    </div>
                <div className="descriptionContainer">
                    <h1 className="productTitle">{name}</h1>
                    <div className="productPrice">${(price/100).toFixed(2)}</div>
                    <div className="productDescription">{description}</div>
                    <div className="shipping">Free Shipping on orders over $50!</div>
                </div>
                </div>
            </div>
        );
    }
}

export default ProductDetails;