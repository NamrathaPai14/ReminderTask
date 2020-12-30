import React, { Component } from 'react';
import { connect } from "react-redux";
import { show } from 'js-snackbar';
import 'js-snackbar/snackbar.css';

import { menuDispatcher } from "../../store/Menu";
export const mapStateToProps = state => ({
    reminderlist: state.menuReducer.reminderlist,
    currentMenu: state.menuReducer.currentMenu
});

export const mapDispatchToProps = dispatch => ({
    deleteList: itemId => menuDispatcher.deleteList(dispatch, itemId)
});
/**
 * @class ReminderCard
 */
export class ReminderCard extends Component {

    state = {
        remainingTime : (this.props.targetTime.getTime())
    }

    /**
     * @function deleteReminder
     * @param {*} itemId 
     */
    deleteReminder = (itemId) => {
        const {
            deleteList
        } = this.props

        deleteList(itemId);
        show({
            text: "Reminder deleted successfully",
            pos: "bottom-left",
            textColor: "#03dac0",
            backgroundColor: "#000000",
            width: "200px",
            duration: 5000
        });
    }

    componentDidMount = () => {
       let {
           remainingTime
       } = this.state

       this.interval = setInterval (() => {
           if( remainingTime >=1) {
             this.setState ({
                 remainingTime:  (remainingTime - new Date().getTime())
             })
           }
           else {
               clearInterval(this.interval)
           }
            
       },1000)
    }

    /**
     * @function displayReminderCard
     * @return {<DOM>} 
     */
    displayReminderCard = () => {
        const {
            id,
            image,
            name,
            description
        } = this.props
        return (
            <div 
                key={ id }
                className="reminder-details"
            >
                <div 
                    className="reminder-image"
                >
                    <span 
                        className = "reminder-delete" 
                        onClick = { () => { this.deleteReminder(id)}}
                    >&times;</span>
                    <img src={ image } alt={ name }/>
                </div>
                <p 
                    className="reminder-name"
                >{ name }</p>
                <p 
                    className="reminder-description"
                >{ description }</p>
                <p 
                    className="reminder-time"
                >Time remaining:      
                { Math.floor((this.state.remainingTime / 1000 / 3600 ))}:
                { Math.floor((this.state.remainingTime / 1000 / 60) % 60)}:
                { Math.floor((this.state.remainingTime / 1000) % 60) }
                </p>
            </div>
        )
    }
    
    render() {
        return (
            <div>
               { this.displayReminderCard() } 
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReminderCard);