import React, { Component } from 'react';
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class TodoItem extends Component {

    onDeleteItem = (event) => {
        this.props.deleteItem(this.props.id, this.props.listId)
    }

    render() {
        return (
            <div>
                <div className="item-box mt-3 p-3 d-flex justify-content-between">
                    <div className="d-flex col-md-11"> {this.props.text} </div>
                    <button style={{ float: 'right', marginTop: "-4px" }} type="button" className="delete-btn" onClick={this.onDeleteItem}><FontAwesomeIcon
                        className="mr-2"
                        icon={faTimes}
                        color="red"
                    /></button>
                </div>
            </div>
        );
    }
}

export default TodoItem;