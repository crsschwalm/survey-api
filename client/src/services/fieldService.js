import React from 'react';
import CheckAll from '../components/fields/CheckAll';
import TextInput from '../components/fields/TextInput';
import SelectFrom from '../components/fields/SelectFrom';

export function determineField(field = { fieldType: undefined }, key) {
    let component;
    switch (field.fieldType) {
        case 'selectFrom':
            component = <SelectFrom key={key} {...field} />;
            break;
        case 'textInput':
            component = <TextInput key={key} {...field} />;
            break;
        case 'checkAll':
            component = <CheckAll key={key} {...field} />;
            break;

        default:
            component = () => { };
            break;
    }
    return component;
}
