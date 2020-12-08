import React, { PureComponent } from "react";
import TextArea from "react-textarea-autosize";
import { Button, Card } from "react-bootstrap";
import { connect } from "react-redux";
import { addList, addCard } from "../actions";

const InputForm = React.memo(
    ({ list, text = "", onChange, closeForm, children, buttonTitle, placeholder, handleAddCard, handleAddList }) => {

        const handleClick = () =>
            list ? handleAddList() : handleAddCard()

        return (<div>
            <Card
                style={{ minHeight: 80, minWidth: 270 }}
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
            <div className="mt-2">
                <Button variant="success" onMouseDown={handleClick}>{buttonTitle}</Button>
                <Button className="close-button" >X</Button>
            </div>
        </div>)
    }
)

export default InputForm