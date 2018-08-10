import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  //Event handler for deleting a counter, this event is called when the counter component
  //raises the event onDelete

  //To update the state we need to add a parameter counterId so we know which counter we need
  //to remove from the list

  /**
   * To get the id we need to go to the counter component and pass an arrow function with the parameter
   * in the onClick method onClick={ () => this.props.onDelete(this.props.id)}
  */
  handleDelete = (counterId) => {

    console.log('Event handler called. The counter id is:', counterId);
    const counters = this.state.counters.filter(counter => counter.id !== counterId);
    //Override the array counters with the new counters
    //this.setState({ counters: counters })
    this.setState({ counters })
  }

  render() {
    return (
      <div>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            counter={counter} />
        ))}
      </div>
    );
  }
}

export default Counters;