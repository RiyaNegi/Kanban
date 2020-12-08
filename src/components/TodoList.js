import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {

    render() {
        console.log("props:", this.props)
        return (
            <div>
                {this.props.lists.map(i => i.cards.map(x =>
                    <TodoItem id={x.id} text={x.text} listId={i.id} deleteItem={this.props.deleteItem} />
                ))}
            </div>

        );
    }
}

export default TodoList;

