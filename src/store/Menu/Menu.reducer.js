import { SAVE_MENU,SAVE_CURRENT_MENU,SAVE_FORM,DELETE_REMINDER,DELETE_MENU } from "./Menu.action";

export const initialState = {
    menu: [],
    currentMenu: [],
    reminderlist: []
}

const menuReducer = (state = initialState, action) => {

    const { 
        menuItem,
        currentMenuItem,
        itemId,
        data,
        menuId,
        type
    } = action;

    switch (type) {
        case SAVE_MENU:
            return {
                ...state,
                menu: [...state.menu,menuItem]
            }
        case SAVE_CURRENT_MENU:
            return {
                ...state,
                currentMenu: [...state.currentMenu,currentMenuItem]
            }
        case SAVE_FORM :
            return {
                ...state,
                reminderlist: [...state.reminderlist,data]
            }
        case DELETE_REMINDER:
            return {
                ...state,
                reminderlist:[...state.reminderlist.filter(item => item.id !== itemId)] 
            }
        case DELETE_MENU:
            return {
                ...state,
                menu:[...state.menu.filter(item => item.id !== menuId)] 
            }
            default:
                return state;
    }
};
    
export default menuReducer;