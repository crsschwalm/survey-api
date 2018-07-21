import React, { Component } from 'react';
import HeadLine from '../components/form/HeadLine'
import { connect } from 'react-redux'
import { clearSurvey, fetchSurvey, updateSurvey, deleteSurvey } from '../actions/manageSurveyActions';
import ManageSurvey from '../components/ManageSurvey';

class Manage extends Component {
    componentDidMount() {
        const { match: { params } } = this.props;
        !!params.surveyId ? this.props.fetchSurvey(params.surveyId) : this.props.clearSurvey();
    }

    componentWillUnmount() {
        this.props.clearSurvey()
    }

    render() {
        const { updateSurvey, deleteSurvey, manageSurvey: { fields } } = this.props;
        return (
            <section className="container section">
                <HeadLine heading='Manage Survey' subheading={`Field count: ${fields.length}`}>
                    <button
                        style={{ position: 'absolute', top: '3rem', right: '1.5rem' }}
                        onClick={deleteSurvey}
                        className="tag is-danger is-large">
                        Delete
                        <span className="delete"></span>
                    </button>
                </HeadLine>
                <ManageSurvey onSubmit={updateSurvey} />
            </section>
        );
    }
}

const mapStateToProps = state => ({ manageSurvey: state.manageSurvey })

const mapDispatchToProps = dispatch => ({
    clearSurvey: () => dispatch(clearSurvey()) && goHome(),
    fetchSurvey: (id) => dispatch(fetchSurvey(id)),
    updateSurvey: () => dispatch(updateSurvey()) && goHome(),
    deleteSurvey: () => getConfirmation()
        && dispatch(deleteSurvey())
        && goHome()
})

const goHome = () => window.location.replace('/');
const getConfirmation = () => window.confirm("You sure you wanna do that?");

export default connect(mapStateToProps, mapDispatchToProps)(Manage);