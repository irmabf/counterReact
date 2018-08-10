import React, { Component } from 'react';

class Counter extends Component {
  /**
   * This method is called after a component is updated, which means we have new state or new props, so we
   * can compare this state with the old or this props with the old ones  and is there is a change we can make
   * an ajax request to get new data from the server.
   */
  componentDidUpdate(prevProps, prevState) {
    console.log('prevProps', prevProps);
    console.log('prevState', prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      //Ajax call and get new data from the server
    }
  }
  /**
   * This method is called just before a component is removed from the dom
   */
  componentWillUnmount() {
    console.log('Counter - Unmounted');
  }
  render() {
    console.log('Counter - Rendered')
    return (
      <div>
        <h4>Counter {this.props.id}</h4>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? 'Zero' : value
  }
}

export default Counter
