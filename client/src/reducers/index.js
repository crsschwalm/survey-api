import { combineReducers } from 'redux';
import manageSurveyReducer from './manageSurveyReducer';
import takeSurveyReducer from './takeSurveyReducer';

const Reducers = combineReducers({ manageSurvey: manageSurveyReducer, takeSurvey: takeSurveyReducer })

export default Reducers;