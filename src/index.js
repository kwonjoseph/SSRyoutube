import React from 'react';
import ReactDOM from 'react-dom';
import Search from './search.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    //api call to youtube
  }

  render () {
    return (
      <div id="interface">
        <Search/>
        <Player/>
        <List/>
        <Comments/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
