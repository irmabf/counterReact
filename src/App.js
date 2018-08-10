import React, { Component, Fragment } from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters';

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  constructor() {
    super();
    console.log('App - Constructor');
  }

  /**
   * This method is called after our component is rendered into the dom and is the perfect place to make
   * ajax calls to get data from the server
   */
  componentDidMount() {
    //Ajax call
    //Call setState with new data
    console.log('App - Mounted');
  }

  handleReset = () => {
    const counters = this.state.counters.map(counter => {
      counter.value = 0;
      return counter;
    });

    this.setState({ counters });

  }
  //Event handler for deleting a counter, this event is called when the counter component
  //raises the event onDelete

  //To update the state we need to add a parameter counterId so we know which counter we need
  //to remove from the list

  /**
   * To get the id we need to go to the counter component and pass an arrow function with the parameter
   * in the onClick method onClick={ () => this.props.onDelete(this.props.id)}
  */
  handleDelete = counterId => {

    //console.log('Event handler called. The counter id is:', counterId);
    const counters = this.state.counters.filter(counter => counter.id !== counterId);
    //Override the array counters with the new counters
    //this.setState({ counters: counters })
    this.setState({ counters })
  }

  /**
   * Event handler for increment the value of the counter.
   * This event is called when the counter component raises the event onIncrement when the
   * Increment button is clicked
   *
   *
   * The indexOf method returns the first index at which a given element
   * can be found in the array or -1 if it is not present.
  */
  handleIncrement = counter => {
    //console.log('Handle increment event handler called. The counter id is:', counter.id)

    /**
     * 1. Clone the array that we receive from the state to a new counters array
    */
    const counters = [...this.state.counters];
    /**
     * 2. Now we need to find in the new counters array the counter object that we
     * have just received as a paramenter.
     *
     * 2.1 First, we use the array.indexOf() method, which returns the index at which
     * the counter element passed in can be found in the array. We save the index in the
     * index const.
    */
    const index = counters.indexOf(counter)
    /**
     * 2.2 Now we use the spread operator to clone into the counters arrray only
     * the counter object that was passed in.
     * We set the counter object in the given index to a new object.
    we to this to avoid modifying the state directly
    */
    counters[index] = { ...counter };

    //Add one to the counter object
    counters[index].value++;
    //Update the state
    this.setState({ counters })
  }

  /**
   * When a component is rendered, of its children are also rendered recursively
   */
  render() {
    console.log('App - Rendered');
    return (
      <Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(counter => counter.value > 0).length} />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </Fragment>
    );
  }
}

export default App;