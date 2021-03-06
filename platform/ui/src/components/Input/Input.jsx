import React from 'react';
import PropTypes from 'prop-types';
import Label from '../Label';
import classnames from 'classnames';

const baseInputClasses =
  'shadow transition duration-300 appearance-none border border-primary-main hover:border-gray-500 focus:border-gray-500 focus:outline-none rounded w-full py-2 px-3 mt-2 text-sm text-white leading-tight focus:outline-none';

const transparentClasses = {
  true: 'bg-transparent',
  false: 'bg-black',
};

const Input = ({
  label,
  containerClassName = '',
  labelClassName = '',
  className = '',
  transparent = false,
  type = 'text',
  value,
  onChange,
  onFocus,
  autoFocus,
  onKeyPress,
  ...otherProps
}) => {
  return (
    <div className={classnames('flex flex-col flex-1', containerClassName)}>
      <Label className={labelClassName} text={label}></Label>
      <input
        className={classnames(
          className,
          baseInputClasses,
          transparentClasses[transparent]
        )}
        autoFocus
        type={type}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onKeyPress={onKeyPress}
        {...otherProps}
      />
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  containerClassName: PropTypes.string,
  labelClassName: PropTypes.string,
  className: PropTypes.string,
  transparent: PropTypes.bool,
  type: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  autoFocus: PropTypes.bool,
  onKeyPress: PropTypes.func,
};

export default Input;
