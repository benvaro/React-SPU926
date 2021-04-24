import React from 'react'

import Info from '../Info'
import Header from '../Header'

import './card.css'

const Controls = () => {
  return (
    <>
      <button>Show more...</button>
      <button>Call</button>
    </>
  );
};

const Card = ({ price, name }) => {
  return (
    <div className="card col-4">
      <Header name={name} />
      <h2>Price: {price}</h2>
      <Info name={name} />
      <Controls />
    </div>
  );
};

export default Card
