export const SAVE_MENU = "SAVE_MENU";
export const SAVE_CURRENT_MENU = "SAVE_CURRENT_MENU";
export const SAVE_FORM = "SAVE_FORM";
export const DELETE_REMINDER = "DELETE_REMINDER";
export const DELETE_MENU = "DELETE_MENU";

/**
 * @function saveTheMenu
 * @param {*} menuItem 
 */
export const saveTheMenu = (menuItem) => ({
    type:SAVE_MENU,
    menuItem
});

/**
 * @function saveTheCurrentMenu
 * @param {*} currentMenuItem 
 */
export const saveTheCurrentMenu = (currentMenuItem) => ({
    type:SAVE_CURRENT_MENU,
    currentMenuItem
});

/**
 * @function saveTheForm
 * @param {*} data 
 */
export const saveTheForm = (data) => ({
    type:SAVE_FORM,
    data
});

/**
 * @function deleteTheReminder
 * @param {*} itemId 
 */
export const deleteTheReminder  = (itemId) => ({
    type:DELETE_REMINDER,
    itemId
});

/**
 * @function deleteTheMenu
 * @param {*} menuId 
 */
export const  deleteTheMenu = (menuId) => ({
    type:DELETE_MENU,
    menuId
});


