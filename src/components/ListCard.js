import React from "react";
import { Card } from "react-bootstrap";
import { Draggable } from "react-beautiful-dnd";

const ListCard = ({ text, key, listId, id, index }) => {
    return (
        <Draggable draggableId={String(id)} index={index}>
            {provided => (
                <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                    <Card
                        key={key}
                        listId={listId}
                        className="mb-2"
                    >
                        <Card.Header>Header</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                {text}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>)}
        </Draggable>
    )
}

export default ListCard