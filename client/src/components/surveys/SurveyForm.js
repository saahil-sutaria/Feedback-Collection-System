import React from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import {Link} from 'react-router-dom';
import validateEmails from '../../utils/validateEmails';
import FIELDS from './formFields';

console.log(FIELDS);

class SurveyForm extends React.Component{


    renderFields(){
        return(
            <div>
                {FIELDS.map(obj => {
                    return <Field key= {obj.name} label={obj.label} type="text" name={obj.name} component={SurveyField}/>
                })}
            </div>
        )
    }
    render(){
        
        return (        
            <div>
                <br></br>
                <form onSubmit={this.props.handleSubmit(() => this.props.onSurveySubmit())}>
                    {this.renderFields()}
                    <button type="submit" className="teal btn-flat right white-text"> 
                        Next 
                        <i className="material-icons right">done</i>
                    </button>
                    <Link to="/surveys">
                    <button type="submit" className="red btn-flat left white-text"> 
                         Cancel 
                        <i className="material-icons right">cancel</i>
                    </button>
                    </Link>
                </form>
            </div>
        );
    }
}
function validate(values){
    const errors = {};
    if (!values.title){errors.title = 'You must provide a title'}
    if (!values.subject){errors.subject = 'You must provide a Subject'}
    if (!values.body){errors.body = 'You must provide a body'}
    if (values.emails){
        errors.emails = validateEmails(values.recipients) || '';
    }
    
    return errors
}

export default reduxForm({
    validate: validate,
    form: 'surveyForm',
    destroyOnUnmount: false
})(SurveyForm);