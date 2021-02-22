import React from 'react';

import './header.scss';

const Header = ({children}) => {
    return (
        <header className="c-header">
            <nav className="navigation">
                {children}
            </nav>
        </header>
    );
};

export default Header;
