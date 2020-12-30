import React, { Component } from "react";

import "./Header.scss";

/**
 * @class Header
 */
export class Header extends Component {

    render() {
        return (
        <div className="Header-block">
            <header>
                <div className="Header-title">Reminder App</div>
            </header>
        </div>    
        );
    }
}

export default Header;