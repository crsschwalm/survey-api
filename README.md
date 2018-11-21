# DMI Survey

## How to use
1. Add MONGODB_URI to .env
2.
```
yarn
yarn dev (with watch)
yarn start
```

# API Docs
Basic Express API connecting to a MongoDB instance.

See list of all Rest endpoints by navigating to root of app (`HTTP GET "/"`)

**AUTHENTICATION**
All GET routes are open (get response is not open. post response is open) all post/put/delete & response get are behind basic auth. To access these, pass credentials from a User type

## User
### Schema
```
email: <String>
username: <String>
password: <String>
passwordConf: <String>
```

### Routes
`GET /api/user/:id`: Returns User object including hashed Password.

`POST /api/user`: Register new user. Hashes Password before inserting into DB

required body:
```
{
    email,
    username,
    password,
    passwordConf
}
```
`POST /api/user/authenticate`: Checks Username in DB. Checks password matches encrypted password.

required body:
```
{
    username,
    password
}
```

## Survey
### Schema
```
author: {
    authorRef<User _id>
    username>String>
}
name<String>
description<String>
fields<[Field]>
startDate<Date>(defaults to current time)
endDate<Date>
```
```
Field
-----
    question<String>
    fieldType<String>
```

fieldType: determines the schema to use. using the following keys "CheckAll" and "SelectFrom" will give the Field Schema an options array. Any text input is valid and can be helpful for front end enterpretation of field types (yes/no, text input, true/false, etc.)
Also useful in determining the presentational component based on this fieldType

* __CheckAll__
```
options<[String]>
```
* __SelectFrom__
```
options<[String]>
```

### Routes
`GET /api/survey`: return all surveys

`GET /api/survey/author/:id`: return all surveys by userId

`GET /api/survey/:id`: return survey for given id

`GET /api/survey/:id/response`: return Responses for given Survey id

`PUT /api/survey/:id`: update Survey based on request body

`DELETE /api/survey/:id`: delete the survey for given id

`POST /api/survey`: create Survey with body content. request body can be array of objects for batch post

required body:
```
{
    {
        authorRef,
        username
    }
    name
    description
    fields
    endDate
}
```

## Response
### Schema
```
surveyRef<Survey _id>
surveyTaker<String default 'Anonymous'>
fieldResponses<[FieldResponse]>
timeStamp<Date (defaults to now)>
```
```
FieldResponse
-------------
    fieldRef<Field _id>
    response<[String]>
```

### Routes
`GET /api/response/:id`: return Responses for given Survey id

`DELETE /api/response/:id`: Delete Survey Response for ID

`POST /api/response/`: Submit Survey Response

Required
required body:
```
{
    surveyRef,
    surveyTaker,
    fieldResponses
}
```
