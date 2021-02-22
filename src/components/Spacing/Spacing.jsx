import React from 'react';
import classnames from 'classnames/bind';

import styles from './spacing.scss';

const cx = classnames.bind(styles);
const Spacing = ({
                   size,
                   propertyName,
                   direction,
                   display,
                   inline,
                   block,
                   tag,
                   children
                 }) => {
  const newDisplay = display || (inline && 'inline') || (block && 'block');
  const Comp = tag || 'div';

  return (
    <Comp
      className={cx({
        [`spacing--${propertyName}-${direction}-${size}`]: true,
        [`text--display-${display}`]: newDisplay,
      })}
    >
      {children}
    </Comp>
  );
};

export default Spacing;
