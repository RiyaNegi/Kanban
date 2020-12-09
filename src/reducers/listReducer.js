import uuid from 'react-uuid'
import { CONSTANTS } from "../actions"

const InitialState = [
    {
        title: "To-do",
        id: uuid(),
        cards: [
            {
                id: uuid(),
                text: "Bring milk and fruits from grocery store"
            },
            {
                id: uuid(),
                text: "Review final year project thesis"
            },
            {
                id: uuid(),
                text: "Push all codes from latest project to Git and write a Read-me for it"
            }
        ]
    }
]

const listReducer = (state = InitialState, action) => {
    switch (action.type) {
        case CONSTANTS.ADD_LIST:
            const newList = {
                title: action.payload,
                id: uuid(),
                cards: []
            }
            return [...state, newList]
        case CONSTANTS.ADD_CARD:
            {
                const newCard = {
                    text: action.payload.text,
                    id: uuid()
                }
                const newState = JSON.parse(JSON.stringify(state)).map(i => {
                    if (i.id === action.payload.listId) {
                        return {
                            ...i,
                            cards: [...i.cards, newCard]
                        };
                    }
                    else {
                        return i
                    }
                })
                return newState
            }
        case CONSTANTS.DRAG_HAPPENED:
            {
                const { droppableIdStart,
                    droppableIdEnd,
                    droppableIndexStart,
                    droppableIndexEnd,
                    draggableId,
                    type
                } = action.payload;

                const newDragState = [...state];
                if (type === "list") {
                    const list = newDragState.splice(droppableIndexStart, 1);
                    newDragState.splice(droppableIndexEnd, 0, ...list);
                    return newDragState
                }

                if (droppableIdStart === droppableIdEnd) {
                    const list = state.find(list => droppableIdStart === list.id)
                    const card = list.cards.splice(droppableIndexStart, 1)
                    list.cards.splice(droppableIndexEnd, 0, ...card)
                }
                if (droppableIdStart !== droppableIdEnd) {
                    const listStart = state.find(list => droppableIdStart === list.id);
                    const card = listStart.cards.splice(droppableIndexStart, 1);
                    const listEnd = state.find(list => droppableIdEnd === list.id)
                    listEnd.cards.splice(droppableIndexEnd, 0, ...card);
                }
                return newDragState
            }
        case CONSTANTS.EDIT_LIST_TITLE: {
            const { listId, newTitle } = action.payload;
            let elementPos = state.map(function (x) { return x.id; }).indexOf(listId);
            const list = state[elementPos];
            list.title = newTitle;
            const newListState = state.map(i => i)
            return newListState;
        }
        case CONSTANTS.DELETE_LIST: {
            const { listId } = action.payload;
            const newDelState = JSON.parse(JSON.stringify(state));
            let elementPos = state.map(function (x) { return x.id; }).indexOf(listId);
            newDelState.splice(elementPos, 1)
            return newDelState;
        }
        case CONSTANTS.EDIT_CARD: {
            const { id, newText, listId } = action.payload;
            const newCardState = JSON.parse(JSON.stringify(state));
            let elementPos = newCardState.map(function (x) {
                return x.id;
            }).indexOf(listId);
            let cardPos = newCardState[elementPos].cards.map(function (x) { return x.id; }).indexOf(id);
            const card = newCardState[elementPos].cards[cardPos];
            card.text = newText;
            return newCardState
        }
        case CONSTANTS.DELETE_CARD: {
            const { listId, id } = action.payload;
            const newCardDelState = JSON.parse(JSON.stringify(state));
            let elementPos = newCardDelState.map(function (x) {
                return x.id;
            }).indexOf(listId);
            let cardPos = newCardDelState[elementPos].cards.map(function (x) { return x.id; }).indexOf(id);
            newCardDelState[elementPos].cards.splice(cardPos, 1)

            return newCardDelState;
        }
        default:
            return state;
    }
}

export default listReducer;