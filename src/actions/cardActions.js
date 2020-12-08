import { CONSTANTS } from "../actions"

export const addCard = (listId, text) => {
    return {
        type: CONSTANTS.ADD_CARD,
        payload: { text, listId }
    }
}

export const editCard = (id, listId, newText) => {
    return {
        type: CONSTANTS.EDIT_CARD,
        payload: { id, listId, newText }
    };
};