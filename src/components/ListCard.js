import React from "react";
import { Card } from "react-bootstrap";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const CardContainer = styled.div`
padding:5px;
`
const ListCard = ({ text, listId, id, index }) => {
    return (
        <Draggable draggableId={String(id)} index={index}>
            {provided => (
                <CardContainer ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                    <Card
                        key={id}
                        listId={listId}
                        className=" card-style mb-2"
                    >
                        <Card.Body>
                            {text}
                        </Card.Body>
                    </Card>
                </CardContainer>)}
        </Draggable>
    )
}

export default ListCard