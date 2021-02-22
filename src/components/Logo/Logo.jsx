import React from 'react';
import logo from './img/logo.svg'
import './logo.scss'

const Logo = () => {
    return (
        <img
            alt="React products app"
            className="logo"
            src={logo}
        />
    );
};

export default Logo;
