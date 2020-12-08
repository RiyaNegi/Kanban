import React, { Component } from 'react';

class TodoItem extends Component {

    onDeleteItem = (event) => {
        this.props.deleteItem(this.props.id, this.props.listId)
    }

    render() {
        return (
            <div>
                <div className="item">
                    <span> {this.props.text} </span>
                    <button style={{ float: 'right', marginTop: "-4px" }} type="button" className="btn btn-danger btn-sm" onClick={this.onDeleteItem}>x</button>
                </div>
            </div>
        );
    }
}

export default TodoItem;