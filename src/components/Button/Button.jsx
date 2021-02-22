import React from 'react';
import classnames from 'classnames/bind';

import styles from './button.scss';

const cx = classnames.bind(styles);

const Button = ({
                    size,
                    variant,
                    onClick,
                    full,
                    children,
                }) => {

    return <button onClick={onClick} type="button"
                   className={cx('m-button', {
                       [`m-button--size-${size}`]: size,
                       [`m-button--type-${variant}`]: variant,
                       'm-button--full': full,
                   })}>
        {children}
    </button>;
};

export default Button;
