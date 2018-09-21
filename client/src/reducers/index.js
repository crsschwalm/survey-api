import { combineReducers } from 'redux';
import manageSurveyReducer from './manageSurveyReducer';
import takeSurveyReducer from './takeSurveyReducer';
import authReducer from './authReducer';

const Reducers = combineReducers({ manageSurvey: manageSurveyReducer, takeSurvey: takeSurveyReducer, auth: authReducer })

export default Reducers;