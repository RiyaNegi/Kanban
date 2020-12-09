import "./App.css"
import ListCard from "./ListCard"
import React, { useState, useEffect } from "react";
import ActionButton from "./ActionButton"
import { Droppable, Draggable } from "react-beautiful-dnd"
import styled from "styled-components";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { editTitle, deleteList } from "../actions";
import { Button, Dropdown } from "react-bootstrap";
import { connect } from "react-redux";
import TextArea from "react-textarea-autosize";



const ListContainer = styled.div`
border-radius: 3px;
width: 300px;
padding: 10px;
cursor: pointer;
font-family: 'Rubik', sans-serif;
`

const List = ({ title, cards, listId, index, dispatch }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [listTitle, setListTitle] = useState(title);
    const [fixTitle, setFixTitle] = useState(title);


    const handleFocus = e => {
        e.target.select();
    };

    const handleChange = e => {
        e.preventDefault();
        setFixTitle(e.target.value);
    };

    const handleCancel = e => {
        setIsEditing(false);
        setFixTitle(listTitle);
    };

    const handleFinishEditing = e => {
        setIsEditing(false);
        setListTitle(fixTitle);
        dispatch(editTitle(listId, listTitle));
    };

    const handleDeleteList = () => {
        dispatch(deleteList(listId));
    };


    const renderEditInput = () => {
        return (
            <div>
                <form >
                    <TextArea
                        placeholder="Enter title"
                        onFocus={handleFocus}
                        value={fixTitle}
                        onChange={handleChange}
                        style={{ resize: "none", width: "100%", outline: "none", border: "none ", borderRadius: "6px" }}
                    />
                </form>
                <div className="mt-2">
                    <Button variant="success" onMouseDown={handleFinishEditing}>Update</Button>
                    <Button className="close-button" onClick={handleCancel}>X</Button>
                </div>
            </div >
        );
    };

    return (
        <Draggable draggableId={String(listId)} index={index}>
            {provided => (
                <ListContainer className="list-style" {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps}>
                    <Droppable droppableId={String(listId)} type="card">
                        {provided => (
                            <div {...provided.droppableProps} ref={provided.innerRef}>
                                <div className="p-2">
                                    {isEditing ? renderEditInput() : (
                                        <div className="d-flex justify-content-between mr-1"> <h3>{listTitle}</h3>
                                            <Dropdown>
                                                <Dropdown.Toggle id="dropdown-no-caret"
                                                    className="dropdown">
                                                    <FontAwesomeIcon
                                                        icon={faEdit}
                                                        size="1x"
                                                        color="gray"
                                                    />
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu>
                                                    <Dropdown.Item onClick={() => setIsEditing(true)}>Edit</Dropdown.Item>
                                                    <Dropdown.Item onClick={() => handleDeleteList()}>Delete</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>)}

                                </div>
                                {cards.map((i, index) => (
                                    <ListCard listId={listId} index={index} key={i.id} text={i.text} id={i.id} />
                                ))}
                                {provided.placeholder}
                                <ActionButton listId={listId} />
                            </div>
                        )}
                    </Droppable>
                </ListContainer>
            )}
        </Draggable >
    )
}

export default connect()(List);