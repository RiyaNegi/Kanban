import React, { PureComponent } from 'react'
import List from "./List"
import { connect } from "react-redux";
import ActionButton from "./ActionButton"
import { DragDropContext } from "react-beautiful-dnd"

class App extends PureComponent {


    onDragEnd = () => {

    }

    render() {
        const lists = this.props.lists;
        console.log("list: ", lists)
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                <div className="m-4">
                    <h2>Kanaban board</h2>
                    <div className="d-flex">
                        {lists.map(i => (
                            <div className="mr-3">
                                <List listId={i.id} key={i.id} title={i.title} cards={i.cards} />
                            </div>
                        )
                        )}
                        <ActionButton list />
                    </div>
                </div>
            </DragDropContext>
        );
    }
}

const mapStateToProps = state => ({
    lists: state.lists
})

export default connect(mapStateToProps)(App);
