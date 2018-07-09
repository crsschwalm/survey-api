import React, { Component } from 'react';
import ManageField from '../components/fields/ManageField'
import EditableField from '../components/fields/EditableField'
import { connect } from 'react-redux'
import { addField, submit } from '../actions/newSurveyActions'

const flexyStyle = { display: 'flex', justifyContent: 'space-around' }

class NewSurvey extends Component {
    addField = (fieldType) =>
        this.props.dispatch(addField(fieldType))
    handleSubmit = () =>
        this.props.dispatch(submit())
    handleCancel = () =>
        alert('boohoo canceled!');


    render() {
        const { fields } = this.props.newSurvey;
        return (
            <section className="container section">
                <h1 className="title">Create Survey</h1>
                <h2 className="subtitle">{`${fields.length} - fields`}</h2>
                <div className="columns is-left-aligned">
                    <div className="column is-narrow">
                        <ul>
                            {fields.map((field, index) => (
                                <li key={index} style={flexyStyle}>
                                    <EditableField index={index} />
                                </li>
                            ))}
                        </ul>
                        <NewFieldButtons addField={this.addField} />
                        <SubmitSurvey onSubmit={this.handleSubmit} onCancel={this.handleCancel} />
                    </div>
                </div>
            </section>
        );
    }
}

const SubmitSurvey = ({ onSubmit, onCancel }) => (
    <form className="media-content" style={flexyStyle} onSubmit={onSubmit}>
        <input
            type="button"
            onClick={onCancel}
            className="button is-medium level-item"
            value="Cancel"
        />
        <input
            type="submit"
            className="button is-medium level-item"
            //disabled={isValid ? false : true}
            value="Submit"
        />
    </form>
)

const NewFieldButtons = ({ addField }) => (
    <div className="media-content" style={flexyStyle}>
        <span
            onClick={() => addField('TextInput')}
            className="button is-medium level-item"
        >
            Add Text Input
            </span>
        <span
            onClick={() => addField('CheckAll')}
            className="button is-medium level-item"
        >
            Add Check All Field
            </span>
        <span
            onClick={() => addField('SelectFrom')}
            className="button is-medium level-item"
        >
            Add Select From Field
            </span>
    </div>
)

const mapStateToProps = (state) => {
    return { newSurvey: state.newSurvey };
};

export default connect(mapStateToProps)(NewSurvey);

