import { useState, useContext } from 'react';
import { AddRounded } from '../../assets/Icons/add';
import { ShoppingCartEmpty } from '../../assets/Icons/cart-empty';
import { ShoppingCartContext } from '../../Context';
import PropTypes from 'prop-types';

const Card = ({
  category = '',
  title = '',
  price = 0,
  image = 'src/assets/teddy-fine.webp',
}) => {
  const [coverImageError, setCoverImageError] = useState(false);
  const { countCart, setCountCart } = useContext(ShoppingCartContext);

  const handleCoverImageError = () => {
    setCoverImageError(true);
  };

  return (
    <article className="flex flex-col justify-center items-center w-[250px] h-auto rounded-2xl bg-[#efefef] shadow-card p-2 overflow-wrap">
      <div className="flex flex-col items-center justify-between relative h-64 min-h-64">
        <span className="absolute left-0 bottom-5 text-xs  px-[14px] py-[2px] bg-[#DCF4F3] rounded-lg font-medium m-2">
          {category}
        </span>
        <img
          className="w-[234px] h-[237px] object-cover rounded-2xl"
          src={!coverImageError ? image : 'src/assets/teddy-fine.webp'}
          alt=""
          onError={handleCoverImageError}
        />
        <button
          className="absolute flex justify-center items-center top-0 right-0 size-7 bg-[#1CC4C4] rounded-lg m-2"
          aria-label="Add to wishlist"
          onClick={() => {
            setCountCart(countCart + 1);
          }}
        >
          <AddRounded color="#FFFF" size="24px" />
        </button>
      </div>
      <h2 className="font-medium text-base text-start text-wrap leading-normal mb-2 mt-2 w-full">
        {title}
      </h2>
      <div className="flex justify-between items-center w-[95%] relative mb-2 text-center">
        <span className="font-bold text-lg text-center">${price}</span>
        <button
          className="absolute right-0 bg-[#1CC4C4] p-[6px] rounded-lg"
          aria-label="Add to cart"
        >
          <ShoppingCartEmpty size="24px" color="#ffff" />
        </button>
      </div>
    </article>
  );
};

Card.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

export default Card;