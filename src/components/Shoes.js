import React from 'react';
import PropTypes from 'prop-types';
import './Shoes.css';

const Shoes = ({ data }) => {
  return (
    <React.Fragment>
      <img src={data.imgUrl} alt="shoes model" width={300} />
      <h3>{data.model}</h3>
      {/* <p>Size {data.size}</p> */}
    </React.Fragment>
  );
};

Shoes.data = {
  data: PropTypes.shape({
    imgUrl: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired
    // size: PropTypes.string.isRequired
  }).isRequired
};

export default Shoes;
