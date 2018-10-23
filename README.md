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
* Authentication via Passport Admin account

## API Docs
Basic Express API connecting to a MongoDB instance.

### MongoDB Data Model
`/api/models`
__User__
  email
  username
  password
  passwordConf

__Survey__
    id
    author
    name
    description
    startDate
    endDate
    fields: Array of json objects. `fieldType` determines the schema to use.
        Also useful in determining the presentational component based on this fieldType
    __CheckAll__
        options
    __SelectFrom__
        options
    __TextInput__
        expectedResponse

__Response__
    id
    surveyRef
    responses