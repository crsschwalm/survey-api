import { combineReducers } from 'redux';
import manageSurveyReducer from './manageSurveyReducer';

const Reducers = combineReducers({ manageSurvey: manageSurveyReducer, })

export default Reducers;