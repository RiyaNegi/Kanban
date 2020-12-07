import React, { PureComponent } from 'react'
import { connect } from "react-redux";
import { Button } from "react-bootstrap"
import BoardView from "./BoardView"


class App extends PureComponent {
  state = {
    boardView: false
  }
  render() {
    return (
      <div className="m-4">
        <h2>Task Management</h2>
        {
          this.state.boardView ?
            (<div><Button onClick={() => this.setState({ boardView: false })} >List View </Button> <BoardView /> </div>)
            :
            <Button onClick={() => this.setState({ boardView: true })}>Kanaban Board View</Button>
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  lists: state.lists
})

export default connect(mapStateToProps)(App);
