import React from 'react';
import classnames from 'classnames/bind';

import styles from './text.scss';

const cx = classnames.bind(styles);

const Text = ({
                  size,
                  weight,
                  tag,
                  color,
                  cases,
                  align,
                  inline,
                  display,
                  block,
                  underline,
                  children,
              }) => {

    const Comp = tag || 'span';
    const newDisplay = display || (inline && 'inline') || (block && 'block');

    return (
        <Comp
            className={cx('text', {
                [`text--size-${size}`]: size,
                [`text--cases-${cases}`]: cases,
                [`text--weight-${weight}`]: weight,
                [`text--color-${color}`]: color,
                [`text--align-${align}`]: align,
                [`text--display-${display}`]: newDisplay,
                'text--underline': underline,
            })}>
            {children}
        </Comp>
    );
};

Text.defaultProps = {
    weight: 'light',
    size: 2,
    display: 'block',
};

export default Text;
