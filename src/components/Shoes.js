import React from 'react';
import PropTypes from 'prop-types';
import { Link } from './Router';
import './Shoes.css';

const Shoes = ({ item, callback }) => {
  console.log(item);
  return (
    <div className="animated fadeIn delay-1s" onClick={callback.bind(this, item)}>
      <Link to="product">
        <img src={item.imgUrl} alt="shoes model" width={300} />
      </Link>
      <h4>{item.model}</h4>
      <h6>{item.price}</h6>
    </div>
  );
};

Shoes.data = {
  data: PropTypes.shape({
    imgUrl: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired
  }).isRequired
};

export default Shoes;
