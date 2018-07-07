import React, { Component } from 'react';
import CheckAll from './CheckAll';
import TextInput from './TextInput';
import SelectFrom from './SelectFrom';

export default class FieldList extends Component {
    state = {
        response: { fields: [] }
    };

    componentDidMount() {
        this.callApi(this.props.surveyId)
            .then(res => this.setState({ response: res.survey }))
            .catch(err => console.log(err));
    }

    callApi = async (surveyId) => {
        const response = await fetch(`/api/getExampleSurvey/${surveyId}`);
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        return body;
    };

    createField = (field, key) => {
        const fieldComponent = determineField(field, key);
        const fieldComponentWithProps = React.cloneElement(
            fieldComponent,
            { onChange: this.props.onFieldChange }
        )
        return fieldComponentWithProps;
    }

    render() {
        return this.state.response.fields.map(this.createField);
    }
}


export function determineField(field = { fieldType: undefined }, key) {
    let component;
    switch (field.fieldType) {
        case 'SelectFrom':
            component = <SelectFrom key={key} {...field} />;
            break;
        case 'TextInput':
            component = <TextInput key={key} {...field} />;
            break;
        case 'CheckAll':
            component = <CheckAll key={key} {...field} />;
            break;

        default:
            component = () => { };
            break;
    }
    return component;
}
