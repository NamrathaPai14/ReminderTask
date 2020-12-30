import React, { Component } from 'react';
import { connect } from "react-redux";
import { show } from 'js-snackbar';
import 'js-snackbar/snackbar.css';

import Menu from './Menu.component';
import { menuDispatcher } from "../../store/Menu";

export const mapStateToProps = state => ({
    menu: state.menuReducer.menu,
    currentMenu:state.menuReducer.currentMenu
});

export const mapDispatchToProps = dispatch => ({
    saveMenu: menuItem => menuDispatcher.saveMenu(dispatch, menuItem),
    saveCurrentMenu: currentMenu => menuDispatcher.saveCurrentMenu(dispatch, currentMenu ),
    deleteMenuItem: menuId => menuDispatcher.deleteMenuItem(dispatch, menuId )
})

/**
 * @class MenuContainer
 */
export class MenuContainer extends Component {

    containerFunctions = {
        saveCurrentMenuItem: (currentMenu) => this.saveCurrentMenuItem(currentMenu),
        deleteMenu: (menuId) => this.deleteMenu(menuId)
    }

    deleteMenu = (menuId) => {
        const {
            deleteMenuItem
        } = this.props

        deleteMenuItem(menuId)
        show({
            text: "Menu deleted successfully",
            pos: "bottom-left",
            textColor: "#03dac0",
            backgroundColor: "#000000",
            width: "200px",
            duration: 5000
        });
    }
    /**
     * @function saveCurrentMenuItem
     * @param {*} currentMenu 
     */
    saveCurrentMenuItem = (currentMenu) => {
        const {
            saveCurrentMenu
        }=this.props
        saveCurrentMenu(currentMenu);
    }

    render() {
        return (
            <div>
                <Menu 
                    { ...this.props }
                    { ...this.containerFunctions }
                />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuContainer);