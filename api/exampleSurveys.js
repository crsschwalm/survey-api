const surveys = [
    {
        "author": "bBob",
        "name": "Example Survey 2",
        "description": "This too is an example of what a survey could look like",
        "fields": [
            {
                "fieldType": "TextInput",
                "question": "Tell me something",
                "expectedResponse": ["Say something"]
            },
            {

                "fieldType": "SelectFrom",
                "question": "Select the one that applies",
                "expectedResponse": ["second option"],
                "options": [
                    { "label": "first option" },
                    { "label": "second option" },
                    { "label": "third option" }
                ]
            },
            {
                "fieldType": "TextInput",
                "question": "Tell me something",
                "expectedResponse": ["second option 4"]
            },
            {
                "fieldType": "CheckAll",
                "question": "Check all That apply",
                "expectedResponse": ["first check", "third check"],
                "options": [
                    { "label": "first check" },
                    { "label": "second check" },
                    { "label": "third check" }
                ]
            },
            {
                "fieldType": "TextInput",
                "question": "Tell me something",
                "expectedResponse": ["NEVER"]
            }
        ],
        "startDate": "April 5, 2018",
        "endDate": "December 25, 2018"
    },
    {
        "author": "cschwalm",
        "name": "Example Survey 1",
        "description": "This is an example of what a survey could look like",
        "fields": [
            {
                "fieldType": "TextInput",
                "question": "Tell me something",
                "expectedResponse": ["second option 4"]
            },
            {
                "fieldType": "CheckAll",
                "question": "Check all That apply",
                "expectedResponse": ["first check", "third check"],
                "options": [
                    { "label": "first check" },
                    { "label": "second check" },
                    { "label": "third check" }
                ]
            },
            {
                "fieldType": "TextInput",
                "question": "Tell me something",
                "expectedResponse": [""]
            },
            {

                "fieldType": "SelectFrom",
                "question": "Select the one that applies",
                "expectedResponse": ["second option"],
                "options": [
                    { "label": "first option" },
                    { "label": "second option" },
                    { "label": "third option" }
                ]
            },
            {
                "fieldType": "TextInput",
                "question": "Tell me something",
                "expectedResponse": ["NEVER"]
            }
        ],
        "startDate": "April 5, 2018",
        "endDate": "December 25, 2018"
    }]

module.exports = surveys;
