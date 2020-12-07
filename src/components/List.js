import React from "react";
import "./App.css"
import ListCard from "./ListCard"
import ActionButton from "./ActionButton"

const List = ({ title, cards }) => {
    return (
        <div className="list-container">
            <h3>{title}</h3>
            {cards.map(i => (
                <ListCard key={i.id} text={i.text} />
            ))}
            <ActionButton />
        </div>
    )
}

export default List;