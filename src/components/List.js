import React from "react";
import "./App.css"
import ListCard from "./ListCard"
import ActionButton from "./ActionButton"
import { Droppable } from "react-beautiful-dnd"

const List = ({ title, cards, listId }) => {
    return (
        <Droppable droppableId={String(listId)}>
            {provided => (
                <div {...provided.droppableProps} ref={provided.innerRef} className="list-container">
                    <h3>{title}</h3>
                    {cards.map((i, index) => (
                        <ListCard listId={listId} index={index} key={i.id} text={i.text} id={i.id} />
                    ))}
                    <ActionButton listId={listId} />
                    {provided.placeholder}
                </div>)}

        </Droppable>
    )
}

export default List;