const surveys = [{
    id: '123',
    author: 'cschwalm',
    name: 'Example Survey',
    description: 'This is an example of what a survey could look like',
    fields: [
        {

            fieldType: 'CheckAll',
            question: 'Check all That apply',
            response: ['first check'],
            options: [
                { label: 'first check' },
                { label: 'second check' },
                { label: 'third check' }
            ]
        },
        {

            fieldType: 'SelectFrom',
            question: 'Select the one that applies',
            response: 'second option',
            options: [
                { label: 'first option' },
                { label: 'second option' },
                { label: 'third option' }
            ]
        },
        {

            fieldType: 'TextInput',
            question: 'Tell me something',
            response: 'aaa',
        }
    ],
    startDate: new Date('April 1, 2018'),
    endDate: new Date('December 17, 2018')
},
{

    author: 'bBob',
    name: 'Example Survey 2',
    description: 'This too is an example of what a survey could look like',
    fields: [
        {

            fieldType: 'TextInput',
            question: 'Tell me something',
            response: 'aaffa',
        },
        {

            fieldType: 'SelectFrom',
            question: 'Select the one that applies',
            response: 'third option',
            options: [
                { label: 'first option' },
                { label: 'second option' },
                { label: 'third option' }
            ]
        },
        {

            fieldType: 'TextInput',
            question: 'Tell me something',
            response: 'aaa',
        },
        {

            fieldType: 'CheckAll',
            question: 'Check all That apply',
            response: ['second check', 'first check'],
            options: [
                { label: 'first check' },
                { label: 'second check' },
                { label: 'third check' }
            ]
        },
        {

            fieldType: 'TextInput',
            question: 'Tell me something',
            response: 'aaa',
        }
    ],
    startDate: new Date('April 5, 2018'),
    endDate: new Date('December 25, 2018')
},
{

    author: 'tBilly',
    name: 'Example Survey 3',
    description: 'This also an example of what a survey could look like. May I ask you a question?',
    fields: [
        {

            fieldType: 'CheckAll',
            question: 'Check all That apply',
            response: ['third check'],
            options: [
                { label: 'first check' },
                { label: 'second check' },
                { label: 'third check' }
            ]
        },
        {

            fieldType: 'CheckAll',
            question: 'Check all That apply',
            response: ['first check'],
            options: [
                { label: 'first check' },
                { label: 'second check' },
                { label: 'third check' }
            ]
        },
        {

            fieldType: 'CheckAll',
            question: 'Check all That apply',
            response: ['second check'],
            expectedReponse: ['second check'],
            options: [
                { label: 'first check' },
                { label: 'second check' },
                { label: 'third check' }
            ]
        },
        {

            fieldType: 'SelectFrom',
            question: 'Select the one that applies',
            response: 'first option',
            options: [
                { label: 'first option' },
                { label: 'second option' },
                { label: 'third option' }
            ]
        },
        {

            fieldType: 'SelectFrom',
            question: 'Select the one that applies',
            response: 'second option',
            options: [
                { label: 'first option' },
                { label: 'second option' },
                { label: 'third option' }
            ]
        },
        {

            fieldType: 'TextInput',
            question: 'Tell me something',
            response: 'aaa',
        },
        {

            fieldType: 'TextInput',
            question: 'Tell me something',
            response: 'aaa',
        }
    ],
    startDate: new Date('May 2, 2018'),
    endDate: new Date('November 17, 2018')
}];

module.exports = surveys;
