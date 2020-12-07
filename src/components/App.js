import React, { PureComponent } from 'react'
import List from "./List"

class App extends PureComponent {
  render() {
    return (
      <div className="App m-4">
        <h2>Kanaban board</h2>
        <List title="test" />
      </div>
    );
  }
}

export default App;
