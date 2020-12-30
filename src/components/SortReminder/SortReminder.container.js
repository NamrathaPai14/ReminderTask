import React, { Component } from 'react';
import { connect } from "react-redux";

import SortReminder from './SortReminder.component';

export const mapStateToProps = state => ({
    reminderlist: state.menuReducer.reminderlist,
    currentMenu: state.menuReducer.currentMenu
});

/**
 * @class SortReminderContainer 
 */
export class SortReminderContainer extends Component {

    constructor () {
        super()

        this.state = {
            sortType : "Time_Desc"
        }
    }

    containerFunctions = {
        sortTheReminder: () => this.sortTheReminder(),
        handleSort: (e) => this.handleSort(e)
    }

    /**
     * @function sortThereminder
     * @return reminderlistMenu 
     */
    sortTheReminder = () => {
        const { sortType } = this.state;
        
        const {
            reminderlist,
            currentMenu
        } = this.props

        const reminderlistMenu= reminderlist.filter(item => item.category === currentMenu)

        if( sortType === "A_Z")
        {
            reminderlistMenu.sort((a, b) => {
                var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
                if (nameA < nameB) 
                    return -1 
                if (nameA > nameB)
                    return 1
                return 0 
            })
        }
        else if( sortType === "Z_A")
        {
            reminderlistMenu.sort((a, b) => {
                var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
                if (nameA > nameB) 
                    return -1 
                if (nameA < nameB)
                    return 1
                return 0 
            })
        }
        else if(sortType === "Time_Desc")
        {
            reminderlistMenu.sort((a, b) => b.time.localeCompare(a.time));
        }
        else
        {
            reminderlistMenu.sort((a, b) => a.time.localeCompare(b.time));
        }
        return reminderlistMenu
    }

    /**
     * @function handleSort
     * @param {*} event 
     */
    handleSort = (event) => {
        this.setState({
            ...this.state,
                sortType:event.target.value
            })
    }

    render() {
        return (
            <div>
               <SortReminder
                    { ...this.props }
                    { ...this.containerFunctions }
                />
            </div>
        );
    }
}

export default connect(mapStateToProps)(SortReminderContainer);