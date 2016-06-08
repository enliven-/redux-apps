import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { value, onIncrement, onDecrement } = this.props;
    return (
      <p>
        Click count: {value} <br/>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
      </p>
    )
  }
}

export default Counter;