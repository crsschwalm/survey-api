import React, { Fragment } from 'react';

const HeadLine = ({ heading, subheading, children }) => (
    <Fragment>
        <h1 className="title">{heading}</h1>
        <h2 className="subtitle">{subheading}</h2>
        {children}
    </Fragment>
)

export default HeadLine;