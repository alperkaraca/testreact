import React from 'react';
import PropTypes from 'prop-types';

function Navbar(props) {
  return (
    <div>
      <h3>{props.title}</h3>
    </div>
  )
}
Navbar.defaultProps = {
  title : "Default App"
}
Navbar.propTypes = {
  title : PropTypes.string.isRequired
}
export default Navbar;