import React from 'react';
import PropTypes from 'prop-types';

import { DateRange, InputLabelWrapper } from '@ohif/ui';

const InputDateRange = ({
  label,
  isSortable,
  sortDirection,
  onLabelClick,
  value,
  onChange,
}) => {
  const { startDate, endDate } = value;
  return (
    <InputLabelWrapper
      label={label}
      isSortable={isSortable}
      sortDirection={sortDirection}
      onLabelClick={onLabelClick}
    >
      <div className="relative">
        <DateRange
          startDate={startDate}
          endDate={endDate}
          onChange={onChange}
        />
      </div>
    </InputLabelWrapper>
  );
};

InputDateRange.defaultProps = {
  value: {},
};

InputDateRange.propTypes = {
  label: PropTypes.string.isRequired,
  isSortable: PropTypes.bool.isRequired,
  sortDirection: PropTypes.oneOf(['ascending', 'descending', 'none'])
    .isRequired,
  onLabelClick: PropTypes.func.isRequired,
  value: PropTypes.shape({
    /** YYYYMMDD (19921022) */
    startDate: PropTypes.string,
    /** YYYYMMDD (19921022) */
    endDate: PropTypes.string,
  }),
  onChange: PropTypes.func.isRequired,
};

export default InputDateRange;
