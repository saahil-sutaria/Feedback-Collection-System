import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import Payments from './Payments';

class Header extends React.Component {
    displayPaymentOptions(){
        window.alert(`  The Payment is in Test Mode! 
            Card Nunber: 4242 4242 4242 4242   
            Expiration Date: Some Date in future (10/30)
            Security: 123
            You will be given 5 credits `)
    }
    renderContent(){
        switch (this.props.auth){
            case null:
                return;
            case false:
                return (<li><a href="/auth/google">Login With Google</a></li>)
            default:
                return [
                <li key = "1"><Payments/></li>,
                <li><a><i className="material-icons" onClick={() => this.displayPaymentOptions()}> &nbsp;info</i></a></li>,
                <li key = "3" style={{margin: '0 15px'}}> Credits: {this.props.auth.credits}</li>,
                <li key = "4"><a href="/api/logout">Logout</a></li>
            ]
        }
    }
    render(){
        return (
            <nav>
                <div className="nav-wrapper">
                <Link to = {this.props.auth ? "/surveys" : "/"} className="left brand-logo" style={{marginLeft: '20px'}}>Emaily</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    {this.renderContent()}
                </ul>
                </div>
            </nav>
        )}
}

function mapStateToProps(state){
    return {auth: state.auth}
}
export default connect(mapStateToProps)(Header);