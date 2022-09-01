import React, { useContext, useEffect } from 'react';

import PropTypes from 'prop-types';

import { ShopContext } from '../context/context';

const Alert = () => {
  const { alertName: name, closeAlert } = useContext(ShopContext);
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
