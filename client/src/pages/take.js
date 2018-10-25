import React, { Component } from 'react';
import { connect } from 'react-redux'
import TakeSurvey from '../components/TakeSurvey';
import HeadLine from '../components/form/HeadLine'
import SurveyInfo from '../components/SurveyInfo';
import { clearResponses, fetchSurvey } from '../actions/takeSurveyActions';

class Take extends Component {
    componentDidMount() {
        const { match: { params } } = this.props;
        !!params.surveyId ? this.props.fetchSurvey(params.surveyId) : goHome();
    }

    componentWillUnmount() {
        this.props.clearResponses()
    }

    render() {
        const { takeSurvey: { name, description, author, startDate, endDate } } = this.props;
        return (
            <section className="container section">
                <HeadLine heading={name} subheading={description} />
                <SurveyInfo author={author} startDate={startDate} endDate={endDate} />
                <TakeSurvey />
            </section>
        )
    }
}
const goHome = () => window.location.replace('/');
const mapStateToProps = state => ({ takeSurvey: state.takeSurvey })
const mapDispatchToProps = dispatch => ({
    clearResponses: () => dispatch(clearResponses()),
    fetchSurvey: (id) => dispatch(fetchSurvey(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Take);