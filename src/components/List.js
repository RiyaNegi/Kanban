import "./App.css"
import ListCard from "./ListCard"
import React, { useState } from "react";
import ActionButton from "./ActionButton"
import { Droppable, Draggable } from "react-beautiful-dnd"
import styled from "styled-components";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { editTitle, deleteList } from "../actions";
import { Button, Dropdown } from "react-bootstrap";
import { connect } from "react-redux";
import TextArea from "react-textarea-autosize";



const ListContainer = styled.div`
background-color: rgb(221, 221, 221);
border-radius: 3px;
width: 300px;
padding: 10px;
cursor: pointer;
`

const List = ({ title, cards, listId, index, dispatch }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [listTitle, setListTitle] = useState(title);

    const handleFocus = e => {
        e.target.select();
    };

    const handleChange = e => {
        e.preventDefault();
        setListTitle(e.target.value);
    };

    const handleFinishEditing = e => {
        setIsEditing(false);
        console.log("here in list listId:", listId)
        dispatch(editTitle(listId, listTitle));
    };

    const handleDeleteList = () => {
        dispatch(deleteList(listId));
    };


    const renderEditInput = () => {
        console.log("render input was called")
        return (
            <div>
                <span>helsifhoisf</span>
                <form onSubmit={handleFinishEditing}>
                    <TextArea
                        placeholder="ENter title"
                        onFocus={handleFocus}
                        value={listTitle}
                        onChange={handleChange}
                        style={{ resize: "none", width: "100%", outline: "none", border: "none " }}
                    />
                </form>
                <div className="mt-2">
                    <Button variant="success" onMouseDown={handleFinishEditing}>Update</Button>
                    <Button className="close-button" onClick={() => setIsEditing(false)}>X</Button>
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
                                <div >
                                    {isEditing ? renderEditInput() : (
                                        <div className="d-flex justify-content-between"> <h3>{listTitle}</h3>
                                            <Dropdown>
                                                <Dropdown.Toggle className="dropdown">
                                                    <FontAwesomeIcon
                                                        icon={faEllipsisH}
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