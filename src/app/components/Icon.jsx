import cx from 'classnames';
import React from 'react';
import * as Feather from 'react-feather';

const Icon = (props) => {
  const IconComponent = Feather[props.name];
  return (
    <i
      title={props.title}
      className={cx(props.className, 'icon')}
    >
      <IconComponent />
    </i>
  );
};

export default Icon;