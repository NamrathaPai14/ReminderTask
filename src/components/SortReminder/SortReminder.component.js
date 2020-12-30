import React, { Component } from 'react';

import ReminderCard from '../ReminderCard/ReminderCard.component';
import "./SortReminder.scss"
/**
 * @class SortReminder 
 */
export class SortReminder extends Component {

    /**
     * @function displayReminder
     * @return {<DOM>}
     */
    displayReminder = () => {
        const {
            sortTheReminder
        } = this.props

        const reminderlistMenu= sortTheReminder()
    
        return (
            <div
            className="reminder"
            >
                {reminderlistMenu.map(reminder => 
                    <div key= { reminder.id }>
                        <ReminderCard  
                                id = {reminder.id}
                                image = { reminder.imgData} 
                                name = {reminder.name}
                                description = {reminder.description}
                                targetTime = { reminder.targetTime}
                            />
                    </div>    
                    )
                }
            </div> 
        ) 
    }
      
    /**
     * @function sortButton
     * @return {<DOM>}
     */
    sortButton = () => {
        const {
            handleSort
        } = this.props
        return (
            <div className = "sort-section">
                <select onChange={(event) =>  handleSort(event) } id="sort1">
                    <option value="A_Z">Sort by A-Z</option>
                    <option value="Z_A">Sort by Z-A</option>
                    <option value="Time_Desc">Sort by time descending</option>
                    <option value="Time_Asc">Sort by time ascending</option>
                </select>
            </div>
        )
    }
    
    render() {
        return (
            <div className = "reminder-section">
                { this.sortButton() }
                { this.displayReminder() }
            </div>
        );
    }
}

export default SortReminder;