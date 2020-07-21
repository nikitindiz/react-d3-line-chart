import React from 'react';
import PropTypes from 'prop-types';
import logoSvg from './logo.svg';

const PageHeader = (props) => {
    const { title } = props;

    return (
        <div className="header">
            <img src={logoSvg} alt="" />

            {title && (
                <div className="header-title">
                    {title}
                </div>
            )}
        </div>
    );
};

PageHeader.propTypes = {
    title: PropTypes.string
};

export default PageHeader;
