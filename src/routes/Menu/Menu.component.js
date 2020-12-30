import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import "./Menu.scss";

/**
 * @class Menu
 */
export class Menu extends Component {

    /**
     * @function addButton
     * @return {<DOM>}
     */
    addButton = ()=> {
        return(
            <div className="display-button">
               <Link to="/addmenu" className="display-add"
               >Add Menu</Link>
            </div>
        )
    }

    /**
     * @function displayMenu
     * @return {<DOM>}
     */
    displayMenu = () => {
        const {
            menu,
            deleteMenu,
            saveCurrentMenuItem
        } = this.props

        return menu?.map(item => (
            <div className = "display-menu"
                key = { item.id }
            >
                <div className = "menu-item"
                >   
                    <Link to = "/reminder" className="menu-items"
                        onClick = { () => saveCurrentMenuItem( item.menuItem )} 
                    >{ item.menuItem }</Link>
                    <span 
                        className = "menu-delete" 
                        onClick = { () => { deleteMenu(item.id)}}
                    >&times;</span>
                </div>
            </div>

        ))
    }

    render() {
        return (
            <div className="menu">
                <div>
                    { this.addButton() }
                </div>
                <div className="menu-container">
                    { this.displayMenu()}
                </div>    
            </div>
        );
    }
}

export default Menu;