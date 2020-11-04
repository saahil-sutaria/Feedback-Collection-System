import React from 'react';
import {fetchSurveys} from '../../actions';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class SurveyList extends React.Component {

    componentDidMount(){
        this.props.fetchSurveys();
    }

    renderSurveys(){
        console.log(this.props.surveys.length)
        if (this.props.surveys.length > 0){
            return this.props.surveys.reverse().map(survey =>{
                return (
                    <div key={survey._id} className="card blue-grey darken-1">
                        <div className="card-content white-text">
                            <span className="card-title">{survey.title}</span>
                            <p>
                                {survey.body}
                            </p>
                            <p className="right">
                                Sent On: {new Date(survey.dateSent).toLocaleDateString()}
                            </p>
                        </div>
                        <div className="card-action">
                                <a> Yes: {survey.yes}</a>
                                <a> No: {survey.no}</a>
                                
                        </div>
                    </div>
                )
            })
        }
        else{
            return <h4>Press (+) to create new campaign</h4>
        }

    }
    render(){
        return(
            <div >
                {this.renderSurveys()}
                <div className="right">
                <Link to = "/surveys/new" className="btn-floating btn-large teal">
                    <i className="material-icons">add</i>
                </Link>

            </div>
            </div>
        );
    }
}
function mapStateToProps({surveys}){
    return {surveys}
}
export default connect(mapStateToProps, {fetchSurveys})(SurveyList);