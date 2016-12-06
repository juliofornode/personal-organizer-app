import React, {Component} from 'react';

class MyComponent extends Component {
  state = {
    number: 0
  }

  handleClick() {
    this.setState({ number: this.state.number + 1 });
  }

  render() {
    return (
      <div className="my-component">
        <h4>This is a component to play with testing.</h4>
        <button onClick={this.handleClick.bind(this)}>Click to Increase Value</button>
        <h2>{this.state.number}</h2>

      </div>
    );
  }
}

export default MyComponent;
