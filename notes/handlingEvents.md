In order to delete a counter we need to delete from the array of counters in the state of the Counters component.

## The component that owns a piece of the state should be the one modifying it.

The piece of the state that we need to touch to delete a component, the counters array, is part of the Counters
component, so modifying the state should be done by the Counters component itself, adding a new counter to the counters
array or removing an existing one should be done inside of the Counters component.

## The state is something private or internal to the component, it is not visible to the outside.

So how can I modify the counters array from the Counters component from the delete button in the Counter component?

We raise an event from our counter component, we call that event onDelete

## Our components can raise events.

The counter raises the event onDelete and our the counters component handles the onDelete event with the handleDelete method


                           ________________
  handleDelete()           |               |
                           |  Counters     | event handler
                           |_______________|

               ⬆️⬆️⬆️

                            ______________
  onDelete()               |              |
                           | Counter      | event raiser
                           |_____________ |

We add the handleDelete method to our counters component and pass a reference to that method to the counter component.
We pass the reference in the Parent component, Counters, as props to the child component, Counter, as onDelete={ this.handledDelete }