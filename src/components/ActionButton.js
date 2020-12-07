import React, { PureComponent } from "react";
import TextArea from "react-textarea-autosize";
import { Button, Card } from "react-bootstrap";
import { connect } from "react-redux";
import { addList, addCard } from "../actions";

class ActionButton extends PureComponent {
    state = {
        formOpen: false,
        text: ""
    }

    setOpen = () => {
        this.setState({
            formOpen: true
        }
        )
    }

    closeForm = () => {
        this.setState({
            formOpen: false
        }
        )
    }

    handleChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    handleAddList = () => {
        const { dispatch } = this.props;
        const { text } = this.state;
        if (text) {
            dispatch(addList(text))
            this.setState({
                text: ""
            })
        }
    }

    handleAddCard = () => {
        const { dispatch, listId } = this.props;
        const { text } = this.state;
        if (text) {
            dispatch(addCard(listId, text))
            this.setState({
                text: ""
            })
        }
    }


    renderAddButton = () => {

        const { list } = this.props;
        const buttonText = list ? "Add another list" : "Add another card"
        return (
            <div onClick={this.setOpen} className={list ? " d-flex list-text  p-3" : "d-flex card-txt"}>
                <p>+ {buttonText}</p>
            </div>
        );
    };

    renderForm = () => {
        const { list } = this.props
        const placeholder = list ? "Enter List tile" : "Enter Card title";
        const buttonTitle = list ? "Add List" : "Add Card";


        return (
            <div>
                <Card
                    style={{ minHeight: 80, minWidth: 270 }}
                >
                    <TextArea
                        placeholder={placeholder}
                        autoFocus
                        onBlur={this.closeForm}
                        value={this.state.text}
                        onChange={this.handleChange}
                        style={{ resize: "none", width: "100%", outline: "none", border: "none " }}
                    />
                </Card>
                <div className="mt-2">
                    <Button variant="success" onMouseDown={list ? this.handleAddList : this.handleAddCard}> {buttonTitle}</Button>
                    <Button className="close-button" >X</Button>
                </div>
            </div>
        )
    }

    render() {
        return this.state.formOpen ? this.renderForm() : this.renderAddButton();
    }
}

export default connect()(ActionButton);