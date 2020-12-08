import React from "react";
import "./App.css"
import ListCard from "./ListCard"
import ActionButton from "./ActionButton"
import { Droppable } from "react-beautiful-dnd"
import styled from "styled-components";


const ListContainer = styled.div`
background-color: rgb(221, 221, 221);
border-radius: 3px;
width: 300px;
padding: 10px;
cursor: pointer;
`

const List = ({ title, cards, listId }) => {
    return (
        <Droppable droppableId={String(listId)}>
            {provided => (
                <ListContainer {...provided.droppableProps} ref={provided.innerRef}>
                    <h3>{title}</h3>
                    {cards.map((i, index) => (
                        <ListCard listId={listId} index={index} key={i.id} text={i.text} id={i.id} />
                    ))}
                    <ActionButton listId={listId} />
                    {provided.placeholder}
                </ListContainer>)}
        </Droppable>
    )
}

export default List;