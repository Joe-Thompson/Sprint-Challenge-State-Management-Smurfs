import React from 'react';
import papa from '../images/papa.png';

const Card = (props) => {
    return (
    <div className='card'>
        <h5>Welcome to the Village</h5>
        <div className='greeting'>
            <img className='papa' src={papa} alt='missing'/>
        </div>
        <div>
            <p><b>Name</b> - {props.smurf.name}</p>
            <p><b>Height</b> - {props.smurf.height}</p>
            <p><b>Age</b> - {props.smurf.age}</p>
        </div>
    </div>
)};

export default Card;