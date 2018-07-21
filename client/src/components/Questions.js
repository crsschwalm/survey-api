import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setResponse } from '../actions/takeSurveyActions';
import CheckAll from './form/CheckAll';
import TextArea from './form/TextArea';
import SelectFrom from './form/SelectFrom';

class Questions extends Component {
    createQuestion = (field, index) => {
        const Component = determineQuestion(field, index);
        const handleChange = response => this.props.setResponse(field._id, response);
        return <Component.type {...Component.props} key={index} index={index} onChange={handleChange} />
    }

    render() {
        return this.props.takeSurvey.fields.map(this.createQuestion);
    }
}

const mapStateToProps = state => ({ takeSurvey: state.takeSurvey })

const mapDispatchToProps = dispatch => ({
    setResponse: (index, response) => dispatch(setResponse(index, response)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Questions);


function determineQuestion({ fieldType, question, options }) {
    let component;

    switch (fieldType) {
        case 'SelectFrom':
            component = <SelectFrom label={question} options={options} />;
            break;
        case 'TextInput':
            component = <TextArea label={question} />;
            break;
        case 'CheckAll':
            component = <CheckAll label={question} options={options} />;
            break;

        default:
            component = () => { };
            break;
    }
    return component;
}
