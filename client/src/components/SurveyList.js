import React from 'react';
import SurveyCard from './SurveyCard';

const SurveyList = ({ surveys }) => (surveys.map((survey, index) => (
    <SurveyCard survey={survey} key={index} />
)))

export default SurveyList