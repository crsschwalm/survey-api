import React, { Component, Fragment } from 'react';
import FieldList from './fields/FieldList'
import HeadLine from './form/HeadLine'
import formatDate from '../services/formatDate';
export default class Survey extends Component {
    state = {
        response: { name: '', description: '', author: '', startDate: '', endDate: '', fields: [] }
    };

    componentDidMount() {
        this.callApi(this.props.surveyId)
            .then(res => this.setState({ response: res }))
            .catch(err => console.log(err));
    }

    callApi = async (surveyId) => {
        const response = await fetch(`/api/survey/${surveyId}`);
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        return body;
    };

    render() {
        const survey = this.state.response
        return (
            <Fragment>
                <HeadLine heading={survey.name} subheading={survey.description} />
                <SurveyInfo {...survey} />
                <FieldList fields={survey.fields} onFieldChange={this.props.onFieldChange} />
            </Fragment>
        )
    }
}

const SurveyInfo = ({ author, startDate, endDate }) => (
    <div className="tags">
        <span className="tag">Created By: {author}</span>
        <span className="tag is-warning">Open From: {formatDate.forReadability(startDate)}</span>
        <span className="tag is-danger">Through: {formatDate.forReadability(endDate)}</span>
    </div>
)