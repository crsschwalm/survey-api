module.exports = {
  validateSurveyRequest: request => {
    const { author, name, description, fields } = request;

    return new Promise((resolve, reject) => {
      isUndefined(author) && reject('Required Fields Missing: "author"');
      isUndefined(author.authorRef) &&
        reject('Required Fields Missing: "author.authorRef"');
      isUndefined(author.username) &&
        reject('Required Fields Missing: "author.username"');

      isUndefined(name) && reject('Required Fields Missing: "name"');
      isUndefined(description) &&
        reject('Required Fields Missing: "description"');
      isUndefined(fields) && reject('Required Fields Missing: "fields"');

      resolve(request);
    });
  },

  validateUserRequest: request => {
    const { email, username, password, passwordConf } = request;

    return new Promise((resolve, reject) => {
      isUndefined(email) && reject('Required Fields Missing: "email"');
      isUndefined(username) && reject('Required Fields Missing: "username"');
      isUndefined(password) && reject('Required Fields Missing: "password"');
      isUndefined(passwordConf) &&
        reject('Required Fields Missing: "passwordConf"');
      password !== passwordConf &&
        reject('Check Password and PasswordConf match');

      resolve(request);
    });
  },

  validateResponseRequest: request => {
    const { surveyRef, surveyTaker, fieldResponses } = request;
    return new Promise((resolve, reject) => {
      isUndefined(surveyRef) && reject('Required Fields Missing: "surveyRef"');
      isUndefined(surveyTaker) &&
        reject('Required Fields Missing: "surveyTaker"');
      isUndefined(fieldResponses) &&
        reject('Required Fields Missing: "fieldResponses"');

      resolve(request);
    });
  }
};

const isUndefined = element => element === undefined;
