import { saveTheMenu,saveTheCurrentMenu, saveTheForm, deleteTheReminder, deleteTheMenu} from "./Menu.action";

import React, { Component } from 'react';

/**
 * @class menuDispatcher
 */
export class menuDispatcher extends Component {

    /**
     * 
     * @param {*} dispatch 
     * @param {*} menuItem 
     */
    saveMenu = (dispatch,menuItem) => {
        return dispatch(saveTheMenu(menuItem));
    }

    /**
     * 
     * @param {*} dispatch 
     * @param {*} currentMenuItem 
     */
    saveCurrentMenu = (dispatch,currentMenuItem) => {
        return dispatch(saveTheCurrentMenu(currentMenuItem));
    }

    /**
     * 
     * @param {*} dispatch 
     * @param {*} data 
     */
    saveForm = (dispatch,data) => {
        return dispatch(saveTheForm(data));
    }

    /**
     * 
     * @param {*} dispatch 
     * @param {*} itemId 
     */
    deleteList = (dispatch,itemId) => {
        return dispatch(deleteTheReminder(itemId));
    }

    /**
     * 
     * @param {*} dispatch 
     * @param {*} menuId 
     */
    deleteMenuItem = (dispatch,menuId) => {
        return dispatch(deleteTheMenu(menuId));
    }
}

export default new menuDispatcher();

