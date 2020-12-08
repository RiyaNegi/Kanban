import React, { PureComponent } from 'react'
import { connect } from "react-redux";
import uuid from 'react-uuid';
import TodoList from "./TodoList"
import { addCard } from "../actions";

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


    handleDeleteItem = (cardId) => {

        const updatedItems = this.state.items.filter(i => {
            return i.id !== cardId
        })

        this.setState({
            lists: [].concat(updatedItems)
        })
    }
    render() {
        const lists = this.props.lists;
        console.log("list: ", lists)

        const btn_style = {
            marginLeft: "10px",
            marginBottom: "5px"
        }

        const input_style = {
            width: "250px",
            padding: "5px"
        }

        return (
            <div>
                <div className="row">
                    <div className="col-md-4">
                        <div >
                            <h2 className="heading">TODO List</h2>
                            <input style={input_style} placeHolder="Add New Todo" type="input" onChange={this.handleInput} value={this.state.value} />
                            <button style={btn_style} type="button" className="btn btn-primary btn-md" onClick={this.handleAddItem}>Add</button>
                            <TodoList lists={lists} deleteItem={this.handleDeleteItem} listId={this.state.listId} />
                        </div>
                    </div>
                    <div className="col-md-4"></div>

                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    lists: state.lists
})

export default connect(mapStateToProps)(ListView);
