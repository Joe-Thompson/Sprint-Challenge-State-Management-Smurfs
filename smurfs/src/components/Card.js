import React from 'react';

const Card = (props) => {
    return (
    <div>
        <p>{props.smurf.name}</p>
        <p>{props.smurf.height}</p>
        <p>{props.smurf.age}</p>
    </div>
)};

export default Card;