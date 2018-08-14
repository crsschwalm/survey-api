import React, { Component } from 'react';
import HeadLine from '../components/form/HeadLine'
import { connect } from 'react-redux'
import { clearSurvey, createSurvey } from '../actions/manageSurveyActions';
import ManageSurvey from '../components/manageSurvey';


class Create extends Component {
    componentWillUnmount() {
        this.props.clearSurvey()
    }
    render() {
        const { createSurvey, manageSurvey: { fields } } = this.props;
        return (
            <section className="container section">
                <HeadLine heading='Create New Survey' subheading={`Field count: ${fields.length}`} />
                <ManageSurvey onSubmit={createSurvey} />
            </section>
        );
    }
}

const mapStateToProps = state => ({ manageSurvey: state.manageSurvey })

const mapDispatchToProps = dispatch => ({
    clearSurvey: () => dispatch(clearSurvey()),
    createSurvey: () => dispatch(createSurvey()) && goHome()
})

const goHome = () => window.location.replace('/');

export default connect(mapStateToProps, mapDispatchToProps)(Create);