import React from "react";
import "./App.css"
import ListCard from "./ListCard"

const List = ({ title, cards }) => {
    return (
        <div className="list-container">
            <h3>{title}</h3>
            {cards.map(i => (
                <ListCard text={i.text} />
            ))}
        </div>
    )
}

export default List;