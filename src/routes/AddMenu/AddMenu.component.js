import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import "./AddMenu.scss";
export const MENU="menu";
/**
 * @class AddMenu
 */
export class AddMenu extends Component {

    /**
     * @function backButton
     * @return {<DOM>}
     */
    backButton = () => {
        return (
            <div className="AddMenu-back">
                <Link to="/" className="back"
                >Back</Link> 
            </div>
        )
    }

    /**
     * @functon addNewMenu
     * @return {<DOM>}
     */
    addNewMenu = ()=> {
        const{
            saveMenuItem
        }=this.props
        return(
            <div 
                className="input-card"
            >
                <div 
                    className="card-title"
                >
                    <div className="title">Add New Menu </div>
                </div>
                <div 
                    className="input-name"
                >
                    <div 
                        className="card-content"
                    >
                        <label>Menu:</label>
                        <input type="text" id={ MENU } />
                        <button type="submit" 
                            onClick={ () => saveMenuItem() }
                        >AddNewMenu</button>
                        <button>
                            <Link to="/" className="back"
                            >Cancel</Link>
                        </button>
                    </div>    
                </div>
            </div>
        )
    }
    render() {
        return (
            <div 
                className="AddMenu-container"
            >
                <div>
                    { this.backButton() }
                </div>
                <div 
                    className="AddMenu-input"
                > 
                    { this.addNewMenu() }
                </div>
            </div>
        );
    }
}

export default AddMenu;
