import PropTypes from 'prop-types'; // Cambia la importación - quita las llaves

const Layout = ({ children }) => {
  return <div className="flex flex-col items-center mt-20">{children}</div>;
};

Layout.propTypes = { // Cambia 'prototype' a 'propTypes'
  children: PropTypes.node.isRequired,
};

export default Layout;