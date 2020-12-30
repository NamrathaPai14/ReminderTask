import React, { Component } from 'react';
import { connect } from "react-redux";
import { show } from 'js-snackbar';
import 'js-snackbar/snackbar.css';

import AddMenu, { MENU } from './AddMenu.component';
import { menuDispatcher } from "../../store/Menu";

export const mapStateToProps = state => ({
    menu: state.menuReducer.menu
});

export const mapDispatchToProps = dispatch => ({
    saveMenu: menuItem => menuDispatcher.saveMenu(dispatch, menuItem)
});

/**
 * @class AddMenuContainer
 */
export class AddMenuContainer extends Component {

    containerFunctions= {
        saveMenuItem:() => this.saveMenuItem()
    }

    /**
     * @function saveMenuItem
     */
    saveMenuItem = () => {
        const{
            saveMenu,
            menu
        } =this.props
       
        const menuItem = document.getElementById(MENU);
        const data = {
            id: menu.length+1,
            menuItem:menuItem.value
        }

        if(menuItem.value.length>=1)
        {
            saveMenu(data);
            menuItem.value=" ";
            show({
                text: "Menu added successfully",
                pos: "bottom-left",
                textColor: "#03dac0",
                backgroundColor: "#000000",
                width: "200px",
                duration: 5000
            });
        } 
        else {
            show({
                text: "Please enter the menu name",
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
                <AddMenu
                    { ...this.containerFunctions }
                />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddMenuContainer);