# DMI Survey
### An app built with create-react-app

## How to use
Install it and run:

```
yarn
cd client
yarn
yarn dev
```

## Idea behind the example
DMI Survey application for understanding the basic concepts of JavaScript development.
* Utilizes AWS - Heroku application Pipeline and MongoDB
* Utilizes Node Express for server-side functionality
* Utilizes React for front-end development
* Authentication via bcrypt hashing on express routes

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
`POST /api/user/create`: Register new user. Hashes Password before inserting into DB

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
`POST /logout`: Kills session with userId auth

`GET /find/:id`: Returns User object includeing hashed Password.

## Survey
### Schema
```
authorRef<User _id>
name<String>
description<String>
fields<Array of Fields>
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
`GET /survey/all`: return all surveys

`GET /survey/find/:id`: return survey for given id

`GET /survey/author/:id`: return all surveys by userId

`GET /survey/to-take/:id`: return survey with expected responses hidden for given id

`PUT /survey/update/:id`: update Survey based on request body

`POST /survey/delete/:id`: delete the survey for given id

`POST /survey/create`: create Survey with body content.

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
fieldResponses<Array of FieldResponse>
timeStamp<Date (defaults to now)>
```
```
FieldResponse
-------------
    fieldRef<Field _id>
    response<[String]>
```