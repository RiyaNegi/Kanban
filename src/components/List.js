import React from "react";
import "./App.css"
import ListCard from "./ListCard"

const List = ({ title }) => {
    return (
        <div className="list-container">
            <h3>{title}</h3>
            <ListCard />
        </div>
    )
}

export default List;