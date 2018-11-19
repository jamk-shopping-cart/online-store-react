import React from 'react';
import PropTypes from 'prop-types';
import { Link } from './Router';
import './Shoes.css';

const Shoes = ({ data }) => {
  console.log(data);
  return (
    <div className="animated fadeIn delay-1s">
      <Link to="product">
        <img src={data.imgUrl} alt="shoes model" width={300} />
      </Link>
      <h4>{data.model}</h4>
      <h6>{data.price}</h6>
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
