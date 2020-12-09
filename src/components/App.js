import React, { PureComponent } from 'react'
import { connect } from "react-redux";
import { Button } from "react-bootstrap"
import BoardView from "./BoardView"
import ListView from "./ListView"
import Pic from "./pic1.png"
import { faTable, faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'bootstrap/dist/css/bootstrap.css';


class App extends PureComponent {
  state = {
    boardView: false
  }
  render() {
    return (
      <div className="m-4">
        <span className="text-heading">Task Management Tool</span>
        {
          this.state.boardView ?
            (<div className="list-view m-4">
              <div>
                < Button className="list-view-btn common-btn-style py-2 px-4" onClick={() => this.setState({ boardView: false })}>
                  <FontAwesomeIcon
                    className="mr-2"
                    icon={faList}
                    size="1x"
                    color="white"
                  />List View
                </Button>
              </div>

              <BoardView />
            </div>)
            :
            (
              <div className="flex-column mt-2">
                <div className="board-view">
                  < Button className="common-btn-style py-2 px-4" onClick={() => this.setState({ boardView: true })}>
                    <FontAwesomeIcon
                      className="mr-2"
                      icon={faTable}
                      size="1x"
                      color="white"
                    />Board View</Button>
                </div>
                <div><ListView /></div>
              </div>
            )
        }
        {/* <div className="image-style">
          <img className="img-child" src={Pic} style={{ height: 250, width: 550 }} />
        </div> */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  lists: state.lists
})

export default connect(mapStateToProps)(App);
