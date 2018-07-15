import React, { Fragment } from 'react';

const Header = ({ heading, subheading }) => (
    <Fragment>
        <h1 className="title">{heading}</h1>
        <h2 className="subtitle">{subheading}</h2>
    </Fragment>
)

export default Header;