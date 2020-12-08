import uuid from 'react-uuid'
import { CONSTANTS } from "../actions"

const InitialState = [
    {
        title: "To-do",
        id: uuid(),
        cards: [
            {
                id: uuid(),
                text: "Bring milk from grocery store"
            },
            {
                id: uuid(),
                text: "Bring fruits from grocery store"
            }
        ]
    },
    {
        title: "Doing",
        id: uuid(),
        cards: [
            {
                id: uuid(),
                text: "Study for the mock unit test and practical exams coming this weekend before the deadline"
            }
        ]
    },
    {
        title: "Done",
        id: uuid(),
        cards: [
            {
                id: uuid(),
                text: "Review project thesis"
            },
            {
                id: uuid(),
                text: "Push all project codes on Git"
            },
            {
                id: uuid(),
                text: "Fix light bulb"
            },
            {
                id: uuid(),
                text: "Be awesome ;)"
            }
        ]
    }
]

const listReducer = (state = InitialState, action) => {
    switch (action.type) {
        case CONSTANTS.ADD_LIST:
            const newList = {
                title: action.payload,
                cards: [],
                id: uuid()
            }
            return [...state, newList]
        case CONSTANTS.ADD_CARD:
            {
                const newCard = {
                    text: action.payload.text,
                    id: uuid()
                }
                const newState = state.map(i => {
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
        default:
            return state;
    }
}

export default listReducer;