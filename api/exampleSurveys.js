const surveys = [{
    id: '123',
    author: 'cschwalm',
    name: 'Example Survey',
    description: 'This is an example of what a survey could look like',
    fields: [
        {
            fieldType: 'checkAll',
            fieldTitle: 'Check all That apply',
            options: [
                { id: '1234', label: 'first check' },
                { id: '12345', label: 'second check' },
                { id: '123456', label: 'third check' }
            ]
        },
        {
            fieldType: 'selectFrom',
            fieldTitle: 'Select the one that applies',
            options: [
                { id: '1234', label: 'first option' },
                { id: '12345', label: 'second option' },
                { id: '123456', label: 'third option' }
            ]
        },
        {
            fieldType: 'textInput',
            fieldTitle: 'Tell me something'
        }
    ],
    startDate: new Date('April 1, 2018'),
    endDate: new Date('December 17, 2018')
},
{
    id: '1234',
    author: 'bBob',
    name: 'Example Survey 2',
    description: 'This too is an example of what a survey could look like',
    fields: [
        {
            fieldType: 'textInput',
            fieldTitle: 'Tell me something'
        },
        {
            fieldType: 'selectFrom',
            fieldTitle: 'Select the one that applies',
            options: [
                { id: '1234', label: 'first option' },
                { id: '12345', label: 'second option' },
                { id: '123456', label: 'third option' }
            ]
        },
        {
            fieldType: 'textInput',
            fieldTitle: 'Tell me something'
        },
        {
            fieldType: 'checkAll',
            fieldTitle: 'Check all That apply',
            options: [
                { id: '1234', label: 'first check' },
                { id: '12345', label: 'second check' },
                { id: '123456', label: 'third check' }
            ]
        },
        {
            fieldType: 'textInput',
            fieldTitle: 'Tell me something'
        }
    ],
    startDate: new Date('April 5, 2018'),
    endDate: new Date('December 25, 2018')
},
{
    id: '12345',
    author: 'tBilly',
    name: 'Example Survey 3',
    description: 'This also an example of what a survey could look like. May I ask you a question?',
    fields: [
        {
            fieldType: 'checkAll',
            fieldTitle: 'Check all That apply',
            options: [
                { id: '1234', label: 'first check' },
                { id: '12345', label: 'second check' },
                { id: '123456', label: 'third check' }
            ]
        },
        {
            fieldType: 'checkAll',
            fieldTitle: 'Check all That apply',
            options: [
                { id: '1234', label: 'first check' },
                { id: '12345', label: 'second check' },
                { id: '123456', label: 'third check' }
            ]
        },
        {
            fieldType: 'checkAll',
            fieldTitle: 'Check all That apply',
            options: [
                { id: '1234', label: 'first check' },
                { id: '12345', label: 'second check' },
                { id: '123456', label: 'third check' }
            ]
        },
        {
            fieldType: 'selectFrom',
            fieldTitle: 'Select the one that applies',
            options: [
                { id: '1234', label: 'first option' },
                { id: '12345', label: 'second option' },
                { id: '123456', label: 'third option' }
            ]
        },
        {
            fieldType: 'selectFrom',
            fieldTitle: 'Select the one that applies',
            options: [
                { id: '1234', label: 'first option' },
                { id: '12345', label: 'second option' },
                { id: '123456', label: 'third option' }
            ]
        },
        {
            fieldType: 'textInput',
            fieldTitle: 'Tell me something'
        },
        {
            fieldType: 'textInput',
            fieldTitle: 'Tell me something'
        }
    ],
    startDate: new Date('May 2, 2018'),
    endDate: new Date('November 17, 2018')
}];

module.exports = surveys;
