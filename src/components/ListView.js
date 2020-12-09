import React, { PureComponent } from 'react'
import { connect } from "react-redux";
import uuid from 'react-uuid';
import TodoList from "./TodoList"
import { addCard, deleteCard } from "../actions";


class ListView extends PureComponent {

    state = {
        value: "",
        lists: this.props.lists,
        listId: this.props.lists[0].id
    }


    handleInput = (event) => {
        this.setState({
            value: event.target.value
        })
    }

    handleAddItem = (event) => {
        event.preventDefault();
        if (this.state.value === "")
            return;
        const newItem = {
            id: uuid(),
            text: this.state.value
        }
        const { dispatch } = this.props;
        const { value, listId } = this.state;
        if (this.state.value) {
            dispatch(addCard(listId, value))
            this.state.lists[0].cards.concat(newItem)
            this.setState({
                lists: this.state.lists,
                value: ""
            })
        }
    }


    handleDeleteItem = (cardId, listId) => {
        const updatedItems = this.state.lists.filter(i => {
            return i.id !== cardId
        })
        this.state.lists[0].cards.concat(updatedItems)
        this.setState({
            lists: this.state.lists
        })
        const { dispatch } = this.props;
        dispatch(deleteCard(cardId, listId));
    }
    render() {
        const lists = this.props.lists;
        console.log("list: ", lists)

        return (
            <div className="card-parent">
                <div className=" card-box col-md-4 mt-3 px-4 py-4">
                    <div className="p-3">
                        <div className="box-heading">My-todo List</div>
                        <hr style={{ backgroundColor: '#dadada' }} />
                        <div className="d-flex mb-3 mt-4">
                            <input className="input-style " placeHolder="Add New Todo" type="input" onChange={this.handleInput} value={this.state.value} />
                            <button className="common-btn-style btn-style px-4 py-2 ml-4" type="button" onClick={this.handleAddItem}>Add</button>
                        </div>
                        <TodoList lists={lists} deleteItem={this.handleDeleteItem} listId={this.state.listId} />
                    </div>
                </div>
            </div>

        );
    }
}

const mapStateToProps = state => ({
    lists: state.lists
})

export default connect(mapStateToProps)(ListView);
