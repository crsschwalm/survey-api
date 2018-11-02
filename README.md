# DMI Survey

## How to use
1. setup a local version of mongoDB 
2. set .env to include MONGODB_URI
something like `mongodb://localhost:27017/surveys`
```
yarn
yarn dev (with nodemon watch)
yarn start (without)
```

# API Docs
Basic Express API connecting to a MongoDB instance.

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

`POST /api/user/logout`: Kills session with userId auth

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
authorRef<User _id>
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

fieldType: determines the schema to use.
Also useful in determining the presentational component based on this fieldType

* __CheckAll__
```
options<[String]>
expectedResponse<[String]>
```
* __SelectFrom__
```
options<String>
expectedResponse<String>
```
* __TextInput__
```
expectedResponse<String>
```

### Routes
`GET /api/survey`: return all surveys

`GET /api/survey/author/:id`: return all surveys by userId

`GET /api/survey/:id`: return survey for given id

`GET /api/survey/:id?show-answers=true`: return survey with expected responses

`PUT /api/survey/:id`: update Survey based on request body

`DELETE /api/survey/:id`: delete the survey for given id

`POST /api/survey`: create Survey with body content.

required body:
```
{
    authorRef
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
userRef<User _id>
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
`GET /api/response/`: Get All Survey Responses

`GET /api/response/user/:id`: Get All Survey Responses by User ID

`DELETE /api/response/:id`: Delete Survey Response for ID

`POST /api/response/`: Submit Survey Response

Required
required body:
```
{ 
    surveyRef, 
    userRef, 
    fieldResponses 
}
```
