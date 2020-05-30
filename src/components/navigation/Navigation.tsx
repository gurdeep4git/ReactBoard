import React from 'react'
import { Link } from "react-router-dom";

import "./Navigation.scss";

const Navigation = () => {
    return (
        <div className="navigation">
            <ul>
                <li>
                    <Link to="/">
                        <span></span>
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link to="/corona">
                        <span></span>
                        Corona report
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Navigation
