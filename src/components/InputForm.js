import React, { PureComponent } from "react";
import TextArea from "react-textarea-autosize";
import { Button, Card } from "react-bootstrap";
import { connect } from "react-redux";
import { addList, addCard } from "../actions";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InputForm = React.memo(
    ({ list, text = "", onChange, closeForm, children, buttonTitle, placeholder, handleAddCard, handleAddList }) => {

        const handleClick = () => {
            list ? handleAddList() : handleAddCard()
        }

        return (<div>
            <Card
                style={{ minHeight: 40, minWidth: 280 }}
            >
                <TextArea
                    placeholder={placeholder}
                    autoFocus
                    value={text}
                    onChange={e => onChange(e)}
                    onBlur={closeForm}
                    style={{ resize: "none", width: "100%", outline: "none", border: "none " }}
                />
            </Card>
            <div className="mt-2 mb-2">
                <Button variant="success" onMouseDown={handleClick}>{buttonTitle}</Button>
                <Button className="close-button" ><FontAwesomeIcon
                    icon={faTimes}
                    color="white"
                /></Button>
            </div>
        </div>)
    }
)

export default InputForm