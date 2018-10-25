import React from 'react';
import formatDate from '../services/formatDate';

const SurveyInfo = ({ author, startDate, endDate }) => (
    <div className="tags">
        <span className="tag">Created By: {author}</span>
        <span className="tag is-warning">Open From: {formatDate.forReadability(startDate)}</span>
        <span className="tag is-danger">Through: {formatDate.forReadability(endDate)}</span>
    </div>
)

export default SurveyInfo;