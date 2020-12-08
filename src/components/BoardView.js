import React, { PureComponent } from 'react'
import List from "./List"
import { connect } from "react-redux";
import ActionButton from "./ActionButton"
import { DragDropContext } from "react-beautiful-dnd"
import { sort } from "../actions";
import styled from "styled-components";


const ListContainer = styled.div`
    display:flex;
`
class App extends PureComponent {
    onDragEnd = (result) => {
        const { destination, source, draggableId } = result;
        if (!destination) {
            return
        }
        this.props.dispatch(sort(
            source.droppableId,
            destination.droppableId,
            source.index,
            destination.index,
            draggableId
        ))
    }

    render() {
        const lists = this.props.lists;
        console.log("list: ", lists)
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                <div className="m-4">
                    <h2>Kanaban board</h2>
                    <ListContainer>
                        {lists.map(i => (
                            <div className="mr-3">
                                <List listId={i.id} key={i.id} title={i.title} cards={i.cards} />
                            </div>
                        )
                        )}
                        <ActionButton list />
                    </ListContainer>
                </div>
            </DragDropContext>
        );
    }
}

const mapStateToProps = state => ({
    lists: state.lists
})

export default connect(mapStateToProps)(App);
