import { Link, NavLink } from 'react-router-dom';
import { ShoppingCartEmpty } from '../../assets/Icons/cart-empty';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import { ShoppingCartFull } from '../../assets/Icons/cart-full';

const NAVBAR_LEFT = [
  {
    text: 'Home',
    to: '/',
  },
  {
    text: 'Clothes',
    to: '/clothes',
  },
  {
    text: 'Electronics',
    to: '/electronics',
  },
  {
    text: 'Furniture',
    to: '/furniture',
  },
  {
    text: 'Toys',
    to: '/toys',
  },
  {
    text: 'Others',
    to: '/others',
  },
];

const NavbarLink = ({ to, text }) => {
  const linksStylesActive =
    'bg-[#F5DF91] px-2.5 py-2 rounded-2xl font-semibold border-none';
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) => (isActive ? linksStylesActive : undefined)}
      >
        {text}
      </NavLink>
    </li>
  );
};

const Navbar = () => {
  const { countCart } = useContext(ShoppingCartContext);

  const NAVBAR_RIGHT = [
    {
      text: 'Orders',
      to: '/orders',
    },
    {
      text: 'Sign In',
      to: '/sign-in',
    },
    {
      text: (
        <div className="flex items-center">
          {countCart > 0 ? (
            <ShoppingCartFull size="24px" className="mr-1" />
          ) : (
            <ShoppingCartEmpty size="24px" className="mr-1" />
          )}

          {countCart >= 0 && <span className="text-center">{countCart}</span>}
        </div>
      ),
      to: '/cart',
    },
  ];

  return (
    <nav className="flex justify-between items-center fixed z-5 px-8 py-4 w-full top-0 bg-white bg-opacity-50 backdrop-blur-lg backdrop-filter">
      <ul className="flex flex-row items-center gap-[22px]">
        <li>
          <Link to="/">
            <img
              className="w-[90px] object-cover"
              src="src\assets\shop-logo.png"
              alt="Shop logo"
            />
          </Link>
        </li>
        {NAVBAR_LEFT.map((link) => (
          <NavbarLink key={link.text} {...link} />
        ))}
      </ul>
      <ul className="flex flex-row items-center gap-[22px]">
        {NAVBAR_RIGHT.map((link) => (
          <NavbarLink key={link.text} {...link} />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
