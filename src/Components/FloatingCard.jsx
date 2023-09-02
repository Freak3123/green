import React from 'react';

function FloatingCard(prop){
    return (<div className="feature-question">
    <p className="feature-question-para">{prop.text}</p>
  </div>);
}

export default FloatingCard;