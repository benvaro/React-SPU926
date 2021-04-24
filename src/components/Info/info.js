import React from 'react';
import './info.css'

const Info = ({name}) => {
let path = `https://robohash.org/${name}?set=set4`

  return (
    <>
      <div>Description of the ad</div>
      <img src={path} alt="" />
    </>
  );
};

export default Info;