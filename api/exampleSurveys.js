const survey = {
    "authorRef": "5bcfbd9ef00511ae3c513622",
    "name": "Example Survey",
    "description": "This too is an example of what a survey could look like",
    "fields": [
        {
            "fieldType": "TextInput",
            "question": "Tell me something",
            "response": "Say something"
        },
        {

            "fieldType": "SelectFrom",
            "question": "Select the one that applies",
            "response": ["second option"],
            "options": [
                "first option",
                "second option",
                "third option"
            ]
        },
        {
            "fieldType": "TextInput",
            "question": "Tell me something",
            "response": "second option 4"
        },
        {
            "fieldType": "CheckAll",
            "question": "Check all That apply",
            "response": ["first check", "third check"],
            "options": [
                "first check",
                "second check",
                "third check"
            ]
        },
        {
            "fieldType": "TextInput",
            "question": "Tell me something",
            "response": "NEVER"
        }
    ],
    "startDate": "April 5, 2018",
    "endDate": "December 25, 2018"
}


const response = {
    "userRef": "5bcfbd9ef00511ae3c513622",
    "surveyRef": "5bcfbd9ef00511ae3c513622",
    "fieldResponses": [
        {
            "fieldRef": "5bd0fbdc5a0358581b20b520",
            "response": ["Hiya"]
        },
        {
            "fieldRef": "5bd0fbdc5a0358581b20b51f",
            "response": ["third option"]
        },
        {
            "fieldRef": "5bd0fbdc5a0358581b20b51e",
            "response": ["oopsies"]
        },
        {
            "fieldRef": "5bd0fbdc5a0358581b20b51d",
            "response": ["first check", "second check"]
        },
        {
            "fieldRef": "5bd0fbdc5a0358581b20b51c",
            "response": ["NEVER"]
        }
    ]
}
