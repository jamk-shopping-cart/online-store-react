import React from 'react';
import PropTypes from 'prop-types';
import { Link } from './Router';

const Item = ({ item, callback }) => {
  // console.log(item);
  return (
    <div className="animated fadeIn delay-1s" onClick={callback.bind(this, item)}>
      <p className="h4">{item.model}</p>
      <Link to="iteminfo">
        <img src={item.imgUrl} alt="shoes model" width={300} />
      </Link>
      <p className="h5">{item.price}</p>
      <hr />
    </div>
  );
};

Item.data = {
  data: PropTypes.shape({
    imgUrl: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired
  }).isRequired
};

export default Item;
