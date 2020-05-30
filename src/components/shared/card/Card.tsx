import React from 'react';
import "./Card.scss";

const Card = (props: any) => {
    return (
        <div className="card-custom">
            {props.children}
        </div>
    )
}

export default Card;
