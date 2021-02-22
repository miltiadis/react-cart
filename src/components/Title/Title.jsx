import React from 'react';

import './title.scss';
import Text from "../Text/Text";
import Spacing from "../Spacing/Spacing";

const Title = ({
                 data,
                 children,
               }) => {
  return (
    <Spacing size="3" direction="all" propertyName="margin">
      <div className="c-title__item">
        <Spacing size="3" direction="vertical" propertyName="padding">
          <Text align="left" block tag="h3" weight="bold" color="black" inline="block">
            {data?.length} {children}
          </Text>
        </Spacing>
      </div>
    </Spacing>
  );
};

export default Title;
