import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SortReminder from '../../components/SortReminder';

import "./Reminder.scss";
/**
 * @class Reminder
 */
export class Reminder extends Component {

    /**
     * @function backButton
     * @return {<DOM>}
     */
    backButton = () => {
        return (
                <Link to="/" className = "back-button"
                >Back</Link> 
            )
    }

    /**
     * @function addButton
     * @return {<DOM>}
     */
    addButton = ()=> {
        return(
               <Link 
                    to = "/addreminder" className = "add-button"
                >AddReminder</Link>
        )
    }

    render() {
        return (
            <div className = "reminder-container">
                <div className = "reminder-links">
                    { this.backButton() }
                    { this.addButton() }
                </div>
                <SortReminder />
            </div>
        );
    }
}

export default Reminder;