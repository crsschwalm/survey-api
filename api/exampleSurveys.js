const survey = {
    "authorRef": "5bdb8e95e6182500166e9e95",
    "name": "Example Survey",
    "description": "This too is an example of what a survey could look like",
    "fields": [
        {
            "fieldType": "TextInput",
            "question": "Tell me something",
            "expectedResponse": "Say something"
        },
        {

            "fieldType": "SelectFrom",
            "question": "Select the one that applies",
            "expectedResponse": ["second option"],
            "options": [
                "first option",
                "second option",
                "third option"
            ]
        },
        {
            "fieldType": "TextInput",
            "question": "Tell me something",
            "expectedResponse": "second option 4"
        },
        {
            "fieldType": "CheckAll",
            "question": "Check all That apply",
            "expectedResponse": ["first check", "third check"],
            "options": [
                "first check",
                "second check",
                "third check"
            ]
        },
        {
            "fieldType": "TextInput",
            "question": "Tell me something",
            "expectedResponse": "NEVER"
        }
    ],
    "startDate": "April 5, 2018",
    "endDate": "December 25, 2018"
}


const response = {
    "userRef": "5bdb8e95e6182500166e9e95",
    "surveyRef": "5bdb900be6182500166e9e96",
    "fieldResponses": [
        {
            "fieldRef": "5bdb900be6182500166e9e9b",
            "response": ["Hiya"]
        },
        {
            "fieldRef": "5bdb900be6182500166e9e9a",
            "response": ["third option"]
        },
        {
            "fieldRef": "5bdb900be6182500166e9e99",
            "response": ["oopsies"]
        },
        {
            "fieldRef": "5bdb900be6182500166e9e98",
            "response": ["first check", "second check"]
        },
        {
            "fieldRef": "5bdb900be6182500166e9e97",
            "response": ["NEVER"]
        }
    ]
}
