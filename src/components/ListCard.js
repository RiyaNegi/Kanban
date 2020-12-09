import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Dropdown } from "react-bootstrap";
import { connect } from "react-redux";
import { editCard, deleteCard } from "../actions";
import InputForm from "./InputForm";
import TextArea from "react-textarea-autosize";



const CardContainer = styled.div`
padding:4px;
white-space: pre-line;
font-family: 'Rubik', sans-serif;
`
const ListCard = ({ text, listId, id, index, dispatch }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [cardText, setText] = useState(text);

    const closeForm = e => {
        setIsEditing(false);
    };

    const handleChange = e => {
        setText(e.target.value);
    };

    const saveCard = e => {
        e.preventDefault();
        dispatch(editCard(id, listId, cardText));
        setIsEditing(false);
    };

    const handleDeleteCard = e => {
        dispatch(deleteCard(id, listId));
    };

    const renderEditForm = () => {
        return (
            <div className="p-1">
                <Card
                    style={{ minHeight: 80, minWidth: 270 }}
                >
                    <TextArea
                        placeholder="Enter text here"
                        autoFocus
                        value={cardText}
                        onChange={e => handleChange(e)}
                        onBlur={closeForm}
                        style={{ resize: "none", width: "100%", outline: "none", border: "none ", borderRadius: "6px" }}
                    />
                </Card>
                <div className="mt-2 mb-2">
                    <Button variant="success" onMouseDown={saveCard}>Save</Button>
                    <Button className="close-button" onMouseDown={closeForm}>X</Button>
                </div>
            </div>
        );
    };

    const renderCard = () => {
        return (
            <Draggable draggableId={String(id)} index={index}>
                {provided => (
                    <CardContainer ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                        <Card
                            key={id}
                            listId={listId}
                            className=" card-style card-wrap"
                        >
                            <Card.Body className="d-flex justify-content-between">
                                <div className="d-flex align-items-center p-3 col-md-10">{text}</div>
                                <div className="mr-3 dp-class">
                                    <Dropdown>
                                        <Dropdown.Toggle className="dropdown">
                                            <FontAwesomeIcon
                                                icon={faEllipsisV}
                                                size="1x"
                                                color="gray"
                                            />
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item onClick={() => setIsEditing(true)}>Edit</Dropdown.Item>
                                            <Dropdown.Item onClick={handleDeleteCard}>Delete</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </Card.Body>
                        </Card>
                    </CardContainer>)}
            </Draggable>
        )

    }

    return isEditing ? renderEditForm() : renderCard();

}

export default connect()(ListCard)