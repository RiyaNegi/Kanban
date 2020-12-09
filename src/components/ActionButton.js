import React, { PureComponent } from "react";
import TextArea from "react-textarea-autosize";
import { Button, Card } from "react-bootstrap";
import { connect } from "react-redux";
import { addList, addCard } from "../actions";
import InputForm from "./InputForm"
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

    handleInputChange = e => {
        this.setState({
            text: e.target.value
        });
    };

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
            <div onClick={this.setOpen} className={list ? "list-text  p-3 " : "card-txt mt-1 px-2 py-2 pb-2 mx-2"}>
                <div>+ {buttonText}</div>
            </div>
        );
    };

    renderForm = () => {
        const { list } = this.props
        const placeholder = list ? "Enter List title" : "Write down your next task";
        const buttonTitle = list ? "Add List" : "Add Card";


        return (
            list ? (<div className="action-list">
                <InputForm placeholder={placeholder}
                    buttonTitle={buttonTitle} handleAddList={this.handleAddList}
                    text={this.state.text}
                    onChange={this.handleInputChange}
                    closeForm={this.closeForm}
                    handleAddCard={this.handleAddCard}
                    list={list ? list : ""}
                /> </div>)
                :
                <div className="mt-2">
                    <InputForm placeholder={placeholder}
                        buttonTitle={buttonTitle} handleAddList={this.handleAddList}
                        text={this.state.text}
                        onChange={this.handleInputChange}
                        closeForm={this.closeForm}
                        handleAddCard={this.handleAddCard}
                        list={list ? list : ""}
                    />
                </div>

        )
    }

    render() {
        return this.state.formOpen ? this.renderForm() : this.renderAddButton();
    }
}

export default connect()(ActionButton);