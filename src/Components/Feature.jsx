import React from 'react';

function Feature(prop){
    return (<div className="features col-md">
    {prop.icon}
    <h1 className="feature-heading">{prop.heading}</h1>
    <p className="feature-para">
      {prop.para}
    </p>
  </div>)
};

export default Feature;