import React, { Component } from 'react';
import { connect } from "react-redux";
import { show } from 'js-snackbar';
import 'js-snackbar/snackbar.css';

import "./AddReminder.scss";
import AddReminder, {NAME,TIME,DESCRIPTION,IMAGE} from './AddReminder.component';
import { menuDispatcher } from "../../store/Menu";

export const mapStateToProps = state => ({
    reminderlist: state.menuReducer.reminderlist,
    currentMenu: state.menuReducer.currentMenu
});

export const mapDispatchToProps = dispatch => ({
    saveForm: data => menuDispatcher.saveForm(dispatch, data),
    deleteList: itemId => menuDispatcher.deleteList(dispatch, itemId)
});

/**
 * @class AddReminderContainer 
 */
export class AddReminderContainer extends Component {

    containerFunctions = {
        saveFormValue: () => this.saveFormValue(),
        getImage: () => this.getImage()
    }  
    
    /**
     * @function getImage
     */
    getImage = () => {
        const image = document.getElementById(IMAGE).files;
        if (image.length > 0) {
            let fileToLoad = image[0];
            let fileReader = new FileReader();
            fileReader.onload = function(fileLoadedEvent) {
                var srcData = fileLoadedEvent.target.result;
                localStorage.setItem("image",srcData);
            }
            fileReader.readAsDataURL(fileToLoad);
        } 
    }

    /**
     * @function saveFormValue
     */
    saveFormValue = () => {
        const {
            saveForm,
            reminderlist,
            deleteList,
            currentMenu
        } = this.props

        const created_at = new Date();
        const name = document.getElementById(NAME).value;
        const time = document.getElementById(TIME).value;
        const description = document.getElementById(DESCRIPTION).value;
        const category = currentMenu;
        const imgData = localStorage.getItem("image");
        const targetTime = new Date();
        targetTime.setHours(targetTime.getHours() + parseInt(time));
        
        const data = {
            id:reminderlist?  reminderlist.length+1 : 1,
            name,
            created_at,
            targetTime,
            time,
            description,
            imgData,
            category    
        }
        if(name.length>=1 && time.length>=1 && description.length>=1)
        {   
            if(time.match(/^[0-9]+$/g))
            {
                saveForm(data);
                show({
                    text: "Reminder added successfully",
                    pos: "bottom-left",
                    textColor: "#03dac0",
                    backgroundColor: "#000000",
                    width: "200px",
                    duration: 5000
                });
                const timeout=parseInt(time)*3600000;
                setTimeout(() => deleteList(data.id) ,timeout);
                localStorage.removeItem("image");
            }
            else {
                show({
                    text: "Please enter a number",
                    pos: "bottom-left",
                    textColor: "#03dac0",
                    backgroundColor: "#000000",
                    width: "200px",
                    duration: 5000
                });
            }
            
        }
        else {
            show({
                text: "Please fill all the fields",
                pos: "bottom-left",
                textColor: "#03dac0",
                backgroundColor: "#000000",
                width: "200px",
                duration: 5000
            });
        }        
    }

    render() {
        return (
            <div>
                <AddReminder 
                    { ...this.props }
                    { ...this.containerFunctions }
                />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddReminderContainer);