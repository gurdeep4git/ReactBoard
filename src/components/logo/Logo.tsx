import React from 'react';
import "./Logo.scss";

const Logo = (props: { icon: string, brand: string }) => {
    const { icon, brand } = props;
    return (
        <div className="logo">
            {icon ?
                <i className={"mr-2 " + icon} aria-hidden="true"></i> : null
            }
            {brand}
        </div>
    )
}

export default Logo;
