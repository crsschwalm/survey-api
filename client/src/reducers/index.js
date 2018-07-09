import { combineReducers } from 'redux';
import newSurveyReducer from './newSurveyReducer';

const Reducers = combineReducers({ newSurvey: newSurveyReducer, })

export default Reducers;