import React from 'react';
import {connect} from 'react-redux';
import FIELDS from './formFields';
import * as actions from '../../actions/index';
import {withRouter} from 'react-router-dom';

const SurveyReview = (props) =>{
    const reviewFields = FIELDS.map((field, i) => {
        return (
                <div key= {i}>
                    <label>{field.label}</label>
                    <div>
                        {props.formValues[field.name]}
                    </div>
                </div>
                )})

    return(
        <div>
            <h5>Review Form!!!</h5>
            {reviewFields}
            <button className = "yellow darken-3 white-text btn-flat" 
            onClick= {()=> props.onCancel()}>Go Back</button>
            <button 
            type="submit" 
            className="btn-flat green right white-text"
            onClick={() => props.submitSurvey(props.formValues, props.history)}>
                Send Survey
                <i className="material-icons right">email</i>
            </button>
        </div>
    )
}
function mapStateToProps(state){
    return {formValues: state.form.surveyForm.values}
}

export default connect(mapStateToProps, actions)(withRouter(SurveyReview));
