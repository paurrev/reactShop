import propTypes from 'prop-types';
import { useState } from 'react';
import { createContext } from 'react';

const ShoppingCartContext = createContext();

const ShoppingCartProvider = ({ children }) => {
  const [countCart, setCountCart] = useState(0);

  return (
    <ShoppingCartContext.Provider value={{ countCart, setCountCart }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

ShoppingCartProvider.propTypes = {
  children: propTypes.node.isRequired,
};

ShoppingCartProvider.defaultProps = {
  children: null,
};

export { ShoppingCartContext, ShoppingCartProvider };
