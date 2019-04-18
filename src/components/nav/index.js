import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Sidenav from './sidenav';
import CartLink from './cart_link';
import './nav.scss';

class Nav extends Component {
    state = {
        authLinks: [
            {
                to: '/account/orders',
                text: 'My orders'
            },
            {
                to: '/account/profile',
                text: 'My Profile'
            },
            {
                to: '/account/sign-out',
                text: 'Sign Out'
            }
        ],
        guestLinks: [
            {
                to: '/account/sign-in',
                text: 'Sign In'
            },
            {
                to: '/account/sign-up',
                text: 'SignUp'
            }
        ]
    }

    render(){
        const links = this.renderLinks();
        return(
            <Fragment>
                <nav className="blue lighten-1">
                    <div className="nav-wrapper">
                        <Link className="brand-logo" to="/">Wicked Sales</Link>
                        <a href="#" data-target="sidenav" className="sidenav-trigger">
                            <i className="material-icons">menu</i>
                        </a>
    
                        <ul className="right hide-on-med-and-down">
                            {links}
                        </ul>
                    </div>
                </nav>
                <Sidenav links={links}/>
            </Fragment>       
            )
    }

    renderLinks(){
        const{userAuth} = this.props;
        const{authLinks, guestLinks} = this.state;
        let navLinks = null;
        if(userAuth){
            navLinks = authLinks.map(this.buildLink);
        } else{
            navLinks = guestLinks.map(this.buildLink);
        }
        return ( 
            <Fragment>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/products'>Products</Link>
                </li>
                {navLinks}
                <li>
                    <CartLink items={this.props.cartItems} />
                </li>
            </Fragment> 
        );
    }

    buildLink(link){
        return (
            <li key={link.to}>
                <Link to={link.to}>{link.text}</Link>
            </li>
        )
    }
}


function mapStateToProps(state){
    return {
        userAuth: state.user.auth
    }
}

export default connect(mapStateToProps)(Nav);