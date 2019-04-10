import React, { Component } from 'react';
import axios from 'axios';
import ProductAdd from './product_add';
import ProductCarousel from './product_carousel';
import MiscDetails from './misc_details';
import { formatMoney } from '../../helpers';

class ProductDetails extends Component {
    state = {
        details: null
    }

    componentDidMount(){
        this.getDetails()
    }

    async getDetails(){
        const { params } = this.props.match;
        // Call server to get product details

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
        const {params} = this.props.match;

        const {details} = this.state;

        if(details === null){
            return <h1>Loading...</h1> //make some fancy loading animation
        } else if(!details){
            return <h1 className="center">No Product Found</h1>
        }

        const {description='No description available', name, images, price, miscDetails} = details;

        return(
            <div className="product-details">
                <h1 className="center">{name}</h1>
                <div className="row">
                    <ProductCarousel images={images}/>
                    <div className="col s12 m4">
                    <div className="right-align product-price">{formatMoney(price)}</div>
                    <ProductAdd productId={params.product_id}/>
                    <p>{description}</p>
                    <MiscDetails details={miscDetails}/>
                    </div>
                </div>
                
            </div>
        );
    }  
}

export default ProductDetails;
