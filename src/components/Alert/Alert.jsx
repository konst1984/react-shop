import React, { useEffect } from 'react';

import PropTypes from 'prop-types';

const Alert = ({ name, closeAlert }) => {
  useEffect(() => {
    const timerId = setTimeout(closeAlert, 2000);
    return () => clearTimeout(timerId);
  }, [name]);

  return (
    <div id="toast-container">
      <div className="toast">{name} added to cart</div>
    </div>
  );
};

Alert.propTypes = {
  name: PropTypes.string,
  closeAlert: PropTypes.func,
};

Alert.defaultProps = {
  closeAlert: () => {},
};

export default Alert;
