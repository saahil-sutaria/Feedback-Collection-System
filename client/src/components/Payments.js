 import React from 'react';
import {connect} from 'react-redux';
import {handleToken} from '../actions/index'

 import StripeCheckOut from 'react-stripe-checkout'


 class Payment extends React.Component {
     
    render(){
        console.log(this.props)
        return(
            <StripeCheckOut 
                name = 'Emaily'
                description = '$5 for 5 email credits'
                amount={500}
                token={token => this.props.handleToken(token)} 
                stripeKey = {process.env.REACT_APP_STRIPE_KEY}
            >
                <button className="btn">
                    Add Credits
                </button>    
            </StripeCheckOut>
          
        )
    }
 }

 export default connect(null, {handleToken})(Payment);