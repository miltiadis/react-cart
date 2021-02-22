import React from 'react';
import classnames from 'classnames/bind';

import styles from './row.scss';

const cx = classnames.bind(styles);

const Row = ({
               children,
               justifyContent,
               alignItems,
               spacing,
               nowrap,
               direction,
             }) => (
  <div
    className={cx('row', {
      [`row--justify-content-${justifyContent}`]: justifyContent,
      [`row--align-items-${alignItems}`]: alignItems,
      [`row--spacing-${spacing}`]: spacing,
      'row--no-wrap': nowrap,
      [`row--direction-${direction}`]: direction,
    })}
  >
    {/*<div className={styles['row__items']}>*/}
    {/*  {React.Children.map(children, (childrenItem) => (*/}
    {/*    childrenItem && React.cloneElement(childrenItem, { spacing })*/}
    {/*  ))}*/}
    {/*</div>*/}
    {children}
  </div>
);


export default Row;
