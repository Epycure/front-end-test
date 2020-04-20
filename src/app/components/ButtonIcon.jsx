import cx from 'classnames';
import React from 'react';

import Icon from './Icon';

const ButtonIcon = (props) => {
  return (
    <button
      {...props}
      title={props.title}
      className={cx(props.className, 'w-10 h-10 text-center rounded text-sm', {
        'bg-yellow-400 text-gray-900': props.variant === 'primary',
        'bg-red-600 text-white': props.variant === 'danger',
        'bg-gray-200 text-gray-900': !props.variant || props.variant === 'secondary',
      })}
    >
      <Icon name={props.icon} />
    </button>
  );
};

export default ButtonIcon;