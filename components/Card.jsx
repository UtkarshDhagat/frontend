import React from 'react';
import './Card.css'

const Card = ({ member }) => {
    return (
        <div className="card">
            <div className='Nameptag'><p>{member.name}</p></div>
            <div className='SexPtag'><p>{member.sex}</p></div>
            <div className='DOBPtag'><p>{member.dob}</p></div>
            <div className='InsuraceIdPtag'><p>{member.phone}</p></div>
        </div>
    );
};

export default Card;