import React from 'react';


const SurveyField = ({input, label, meta: {error, touched}}) => {
   
    return(
        <div style={{textAlign:"start"}}>
            
            <label>{label}</label>
            <input {...input}  />
            <div className="red-text" style={{marginBottom: '50px'}}>
                {touched && error}
            </div>
           
        </div>
    )
}
export default SurveyField;