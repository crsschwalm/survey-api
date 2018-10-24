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
* Authentication via bcrypt hashing

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
`POST /api/user/create`

required body:
```
{
    email,
    username,
    password,
    passwordConf
}
```
`POST /api/user/authenticate`

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
id
author
name
description
startDate
endDate
fields: Array of json objects. `fieldType` determines the schema to use.
    Also useful in determining the presentational component based on this fieldType
```

* __CheckAll__
```options```
* __SelectFrom__
```options```
* __TextInput__
```expectedResponse```

### Routes
`GET /survey/all` - response: all surveys

`GET /survey/:id` - response: survey with given id

`GET /survey/author/:author` - response: all surveys by author

`GET /survey/to-take/:id` - response: survey with expected responses hidden for given id

`PUT /survey/update/:id` - update Survey based on request body (JSON) and given id

`POST /survey/delete/:id` - delete the survey for given id

`POST /survey/create` - create Survey based on request body (JSON)

## Response
### Schema
```
id
surveyRef
responses
```