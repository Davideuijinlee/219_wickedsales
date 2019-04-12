import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min'
import '../assets/css/app.scss';
import React, {Component} from 'react';
import ProductRoutes from './products'; //will automatically look for an index file aka index.js inside products folder
import {Route, Switch} from 'react-router-dom';
import axios from 'axios';
import Home from './home';
import Nav from './nav';
import NotFound from './404';
import Cart from './cart';
import AccountRoutes from './account';


class App extends Component {
    constructor(props){
        super(props);

        this.state ={
            cartItems: 0
        }

        this.updateCartItems = this.updateCartItems.bind(this);
    }

    componentDidMount(){
        this.getCartItemsCount();
    }

    async getCartItemsCount(){
        const resp = await axios.get('/api/getcartitemcount.php');
        console.log('item count resp:', resp);
        this.updateCartItems(resp.data.itemCount);
    }

    updateCartItems(count){
        console.log('update cart items called:', count);
        this.setState({
            cartItems: count
        });
    }

    render(){
        return(
            <div>
                <Nav cartItems={this.state.cartItems}/>
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/products" render={(routingProps) => {
                            return <ProductRoutes {...routingProps} updateCart={this.updateCartItems} />
                        }} />
                        <Route path="/cart" component={Cart} />
                        <Route path="/account" component={AccountRoutes}/>
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </div>
        );
    }
}
      
export default App;