import React, { PureComponent } from 'react'
import List from "./List"
import { connect } from "react-redux";
import ActionButton from "./ActionButton"


class App extends PureComponent {
  render() {

    const lists = this.props.lists;
    console.log("list: ", lists)
    return (
      <div className="m-4">
        <h2>Kanaban board</h2>
        <div className="d-flex">
          {lists.map(i => (
            <div className="mr-3">
              <List title={i.title} cards={i.cards} />
            </div>
          )
          )}
          <ActionButton list />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  lists: state.lists
})

export default connect(mapStateToProps)(App);
