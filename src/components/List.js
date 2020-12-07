import React from "react";
import "./App.css"
import ListCard from "./ListCard"
import ActionButton from "./ActionButton"

const List = ({ title, cards, listId }) => {
    console.log("here list id is ", listId)
    return (
        <div className="list-container">
            <h3>{title}</h3>
            {cards.map(i => (
                <ListCard listId={listId} key={i.id} text={i.text} />
            ))}
            <ActionButton listId={listId} />
        </div>
    )
}

export default List;