import React, { PureComponent } from 'react'
import List from "./List"
import { connect } from "react-redux";
import ActionButton from "./ActionButton"
import { DragDropContext, Droppable } from "react-beautiful-dnd"
import { sort } from "../actions";
import styled from "styled-components";


const ListContainer = styled.div`
    display:flex;
`
class App extends PureComponent {
    onDragEnd = (result) => {
        const { destination, source, draggableId, type } = result;
        if (!destination) {
            return
        }
        this.props.dispatch(sort(
            source.droppableId,
            destination.droppableId,
            source.index,
            destination.index,
            draggableId,
            type
        ))
    }

    render() {
        const lists = this.props.lists;
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                <div className="mt-4">
                    {/* <h2>Kanban board</h2> */}
                    <Droppable droppableId="all-lists" direction="horizontal" type="list">
                        {provided => (
                            <ListContainer {...provided.droppableProps} ref={provided.innerRef}>
                                {lists.map((i, index) => (
                                    <div className="mr-3">
                                        <List listId={i.id} key={i.id} title={i.title} cards={i.cards} index={index} />
                                    </div>
                                )
                                )}
                                {provided.placeholder}
                                <ActionButton list />
                            </ListContainer>)}
                    </Droppable>

                </div>
            </DragDropContext>
        );
    }
}

const mapStateToProps = state => ({
    lists: state.lists
})

export default connect(mapStateToProps)(App);
